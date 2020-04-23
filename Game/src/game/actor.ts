import * as Phaser from 'phaser';
import { IBodySpecs, ICoordinates } from '../utils/interfaces';
import { isArcadeBody } from '../utils/type-predicates';
import { toMapCoordinates } from '../utils/coordinates';
import { GameScene } from './game-scene';

export class Actor {

    public sprite: Phaser.GameObjects.Sprite;

    constructor(scene: GameScene, x: integer, y: integer, tilesetKey: string, frame: integer, bodySpecs: IBodySpecs) {

        let mapCoords: ICoordinates = toMapCoordinates(x, y, scene.map);
        this.sprite = scene.physics.add.sprite(mapCoords.x, mapCoords.y, tilesetKey, frame).setOrigin(0.5, 1);
        this.initBody(bodySpecs);
        //TODO this.createAnimations();
    }

    private initBody(bodySpecs: IBodySpecs) {
        if (isArcadeBody(this.sprite.body)) {
            let oldWidth: number = this.sprite.body.width;
            let oldHeight: number = this.sprite.body.height;

            let newWidth: number = this.sprite.body.width * bodySpecs.width * 0.01;
            let newHeight: number = this.sprite.body.height * bodySpecs.height * 0.01;

            let xOffsetSpec: string = bodySpecs.anchor.split('-')[0];
            let yOffsetSpec: string = bodySpecs.anchor.split('-')[1];
            let xOffset: number = 0.0;
            let yOffset: number = 0.0;

            switch (xOffsetSpec) {
                case "center":
                    xOffset = (oldWidth - newWidth) / 2.0;
                    break;
                case "left":
                    xOffset = 0;
                    break;
                case "right":
                    xOffset = oldWidth - newWidth;
                    break;
            }

            switch (yOffsetSpec) {
                case "center":
                    yOffset = (oldHeight - newHeight) / 2.0;
                    break;
                case "bottom":
                    yOffset = oldHeight - newHeight;
                    break;
                case "top":
                    yOffset = 0;
                    break;
            }

            this.sprite.body.setSize(newWidth, newHeight);
            this.sprite.body.setOffset(xOffset, yOffset);
        }
    }

    private correctOrigin(map: Phaser.Tilemaps.Tilemap) {

        let originX = (this.sprite.width - map.tileWidth) / 2.0 / this.sprite.width;
        let originY = (this.sprite.height - map.tileHeight) / this.sprite.height;

        this.sprite.setOrigin(originX, originY);
    }
}