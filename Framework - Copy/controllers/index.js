let express = require('express');
let router = express.Router();
let path = require('path');
let fs = require('fs');

let validateJson = require('../helpers/validateJson.js');
let createGraph = require('../helpers/createGraph.js');
let buildStory = require('../helpers/storyBuilder.js');

let Player = require('../models/player');

router.get('/', function(req, res) {
    try {
        if (fs.existsSync(path.join(__dirname + '/../public/dist'))) {
            res.sendFile(path.join(__dirname + '/../views/game.html'))
        } else {
            res.sendFile(path.join(__dirname + '/../views/index.html'));
        }
    } catch (err) {
        console.error(err)
    }
})

router.post('/', async function(req, res) {
    let playerType = req.body.playerType;
    let data = req.body.data;

    let schema;
    try {
        const schemaString = await fs.promises.readFile(path.join(__dirname + '/../json/schema/overall_narrative_schema.json'), 'utf-8');
        schema = JSON.parse(schemaString);
    } catch (err) {
        let error = {
            error: "Schema file not found."
        };
        res.send(error);
        return;
    }

    let result = validateJson(data, schema);

    if (result === "valid") {
        let graph = createGraph(data);

        if (graph.errors.length != 0) {
            let error = {
                error: graph.errors
            }
            res.send(error);
            return;
        }

        let story = buildStory(playerType, graph.graph);

        if (story.scenes.length == 0) {
            let error = {
                error: "Story has no scenes."
            }
            res.send(error);
            return;
        }

        let errors = [];
        for (scene of story.scenes) {
            if (scene.events.length == 0) {
                errors.push("Scene " + scene.name + " has no events.");
            }
        }

        if (errors.length != 0) {
            let error = {
                error: errors
            }
            res.send(error);
            return;
        }

        // try {
        //     await Player.create(playerType);
        // } catch (err) {
        //     let error = {
        //         error: err.message
        //     }
        //     res.send(error);
        //     return;
        // }

        res.send({
            graph: graph,
            story: story
        });

    } else {
        let error = {
            error: result
        };
        res.json(error);
    }
})

module.exports = router