// game session template
// {
//     "name": "play_session_1",
//     "elements": [{
//         "type": "game",
//         "name": "play_session_1_logs",
//         "title": "Play session 1",
//         "defaultValue": true
//     }],
//     "navigationButtonsVisibility": "hide"
// },

var surveyJSON = {
    title: "Affective Narratives for Engagement in Digital Games",
    pages: [{
            name: "introdution",
            elements: [{
                type: "html",
                name: "introduction",
                html: "<p>Hello! My name is Matilde and I'm  a college student, trying to obtain my master's degree in Informatics and Computer Engineering at Faculty of Engineering of Porto's University (FEUP). I would like to request your help for my dissertation project \"Affective Narratives for Engagement in Digital Games\". It consists on researching and creating a framework that helps build game narratives that take into account the player's feelings and emotions (in other words, \"affective profile\"). It's main objective is to help the creation of video game experiences that are more personal to the user and hopefully more enjoyable.</p><p>I apologize in advance to mobile users as <span style=\"font-weight:bold\">this experience is only available on PC.</span></p><p>You will start by answering two small questionnaires, which will acquire some personal details and your affective profile. Then, you will have two short play sessions of the game I developed, each followed by some questions about the game. In the end, there's a final questionnaire with some questions about the experience as a whole.</p><p>The whole experience should not take more than 30 mins. The questionnaires are completely anonymous and all the data gathered here will be exclusively used for academic purposes. </p><p>I really appreciate your help. Thank you!</p> "
            }],
            readOnly: true,
            navigationButtonsVisibility: "show"
        },
        {
            name: "personal_information",
            elements: [{
                    type: "radiogroup",
                    name: "age",
                    title: "Age",
                    isRequired: true,
                    choices: [{
                            value: "<18",
                            text: "< 18"
                        },
                        {
                            value: "18-30",
                            text: "18-30"
                        },
                        {
                            value: "31-50",
                            text: "31-50"
                        },
                        {
                            value: "51-65",
                            text: "51-65"
                        },
                        {
                            value: ">65",
                            text: "> 65"
                        }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "language",
                    title: "Is English your mother language?",
                    isRequired: true,
                    choices: [{
                            value: "english",
                            text: "Yes"
                        },
                        {
                            value: "not_english",
                            text: "No"
                        }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "play_games",
                    title: "Do you play video game regularly? (>= 6 hours a week)",
                    isRequired: true,
                    choices: [{
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "no",
                            text: "No"
                        }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "favorite_games",
                    visibleIf: "{play_games} = 'yes'",
                    title: "What is your favorite game genre?",
                    isRequired: true,
                    hasOther: true,
                    choices: [{
                            value: "action",
                            text: "Action games"
                        },
                        {
                            value: "shooter",
                            text: "Shooter games"
                        },
                        {
                            value: "sports",
                            text: "Sports games"
                        },
                        {
                            value: "action_adventure",
                            text: "Action Adventure games"
                        },
                        {
                            value: "rpg",
                            text: "Role Playing games"
                        },
                        {
                            value: "adventure",
                            text: "Adventure games"
                        },
                        {
                            value: "racing",
                            text: "Racing games"
                        },
                        {
                            value: "fighting",
                            text: "Fighting games"
                        },
                        {
                            value: "strategy",
                            text: "Strategy games"
                        },
                        {
                            value: "simulator",
                            text: "Simulator games"
                        }
                    ],
                    otherText: "Other"
                },
                {
                    type: "rating",
                    name: "important_narrative",
                    visibleIf: "{play_games} = 'yes'",
                    title: "How important is the narrative in a game to you?",
                    isRequired: true,
                    minRateDescription: "Not important at all",
                    maxRateDescription: "Extremely important"
                }
            ],
            title: "This module will gather some general information."
        },
        {
            name: "deq_page",
            elements: [{
                type: "matrix",
                name: "deq",
                title: "Discrete Emotions Questionnaire",
                description: "As of now, to what extent did you experience/are experiencing these emotions?",
                isRequired: true,
                columns: [{
                        value: "1",
                        text: "Not at all"
                    },
                    {
                        value: "2",
                        text: "Slightly"
                    },
                    {
                        value: "3",
                        text: "Somewhat"
                    },
                    {
                        value: "4",
                        text: "Moderately"
                    },
                    {
                        value: "5",
                        text: "Quite a bit"
                    },
                    {
                        value: "6",
                        text: "Very much"
                    },
                    {
                        value: "7",
                        text: "An extreme amount"
                    }
                ],
                rows: [{
                        value: "anger",
                        text: "Anger"
                    },
                    {
                        value: "wanting",
                        text: "Wanting"
                    },
                    {
                        value: "dread",
                        text: "Dread"
                    },
                    {
                        value: "sad",
                        text: "Sad"
                    },
                    {
                        value: "easygoing",
                        text: "Easygoing"
                    },
                    {
                        value: "grossed_out",
                        text: "Grossed Out"
                    },
                    {
                        value: "happy",
                        text: "Happy"
                    },
                    {
                        value: "terror",
                        text: "Terror"
                    },
                    {
                        value: "rage",
                        text: "Rage"
                    },
                    {
                        value: "grief",
                        text: "Grief"
                    },
                    {
                        value: "nausea",
                        text: "Nausea"
                    },
                    {
                        value: "anxiety",
                        text: "Anxiety"
                    },
                    {
                        value: "chilled_out",
                        text: "Chilled out"
                    },
                    {
                        value: "desire",
                        text: "Desire"
                    },
                    {
                        value: "nervous",
                        text: "Nervous"
                    },
                    {
                        value: "lonely",
                        text: "Lonely"
                    },
                    {
                        value: "scared",
                        text: "Scared"
                    },
                    {
                        value: "mad",
                        text: "Mad"
                    },
                    {
                        value: "satisfaction",
                        text: "Satisfaction"
                    },
                    {
                        value: "sickened",
                        text: "Sickened"
                    },
                    {
                        value: "empty",
                        text: "Empty"
                    },
                    {
                        value: "craving",
                        text: "Craving"
                    },
                    {
                        value: "panic",
                        text: "Panic"
                    },
                    {
                        value: "longing",
                        text: "Longing"
                    },
                    {
                        value: "calm",
                        text: "Calm"
                    },
                    {
                        value: "fear",
                        text: "Fear"
                    },
                    {
                        value: "relaxation",
                        text: "Relaxation"
                    },
                    {
                        value: "revulsion",
                        text: "Revulsion"
                    },
                    {
                        value: "worry",
                        text: "Worry"
                    },
                    {
                        value: "enjoyment",
                        text: "Enjoyment"
                    },
                    {
                        value: "pissed_of",
                        text: "Pissed off"
                    },
                    {
                        value: "liking",
                        text: "Liking"
                    }
                ],
                isAllRowRequired: true
            }],
            title: "The following questions aim at calculating your affective profile. Please answer as honestly as possible."
        },
        {
            name: "game_exp_1",
            elements: [{
                    type: "matrix",
                    name: "game_exp_core_module_1",
                    title: "Please indicate how you felt WHILE playing the game for each of these items",
                    isRequired: true,
                    columns: [{
                            value: "0",
                            text: "Not at all"
                        },
                        {
                            value: "1",
                            text: "Slightly"
                        },
                        {
                            value: "2",
                            text: "Moderately"
                        },
                        {
                            value: "3",
                            text: "Fairly  "
                        },
                        {
                            value: "4",
                            text: "Extremely"
                        }
                    ],
                    rows: [{
                            value: "1",
                            text: "I felt content"
                        },
                        {
                            value: "3",
                            text: "I was interested in the game's story"
                        },
                        {
                            value: "4",
                            text: "I thought it was fun"
                        },
                        {
                            value: "5",
                            text: "I was fully occupied with the game"
                        },
                        {
                            value: "6",
                            text: "I felt happy"
                        },
                        {
                            value: "7",
                            text: "It gave me a bad mood"
                        },
                        {
                            value: "8",
                            text: "I thought about other things"
                        },
                        {
                            value: "9",
                            text: "I found it tiresome"
                        },
                        {
                            value: "12",
                            text: "It was aesthetically pleasing"
                        },
                        {
                            value: "13",
                            text: "I forgot everything around me"
                        },
                        {
                            value: "14",
                            text: "I felt good"
                        },
                        {
                            value: "16",
                            text: "I felt bored"
                        },
                        {
                            value: "18",
                            text: "I felt imaginative"
                        },
                        {
                            value: "19",
                            text: "I felt that I could explore things"
                        },
                        {
                            value: "20",
                            text: "I enjoyed it"
                        },
                        {
                            value: "22",
                            text: "I felt annoyed"
                        },
                        {
                            value: "24",
                            text: "I felt irritable"
                        },
                        {
                            value: "25",
                            text: "I lost track of time"
                        },
                        {
                            value: "27",
                            text: "I found it impressive"
                        },
                        {
                            value: "28",
                            text: "I was deeply concentrated in the game"
                        },
                        {
                            value: "29",
                            text: "I felt frustrated"
                        },
                        {
                            value: "30",
                            text: "It felt like a rich experience"
                        },
                        {
                            value: "31",
                            text: "I lost connection with the outside world"
                        }
                    ],
                    isAllRowRequired: true
                },
                {
                    type: "matrix",
                    name: "game_exp_post_game_module_1",
                    title: "Please indicate how you felt AFTER you finished playing the game for each of these items",
                    isRequired: true,
                    columns: [{
                            value: "0",
                            text: "Not at all"
                        },
                        {
                            value: "1",
                            text: "Slightly"
                        },
                        {
                            value: "2",
                            text: "Moderately"
                        },
                        {
                            value: "3",
                            text: "Fairly  "
                        },
                        {
                            value: "4",
                            text: "Extremely"
                        }
                    ],
                    rows: [{
                            value: "1",
                            text: "I felt revived"
                        },
                        {
                            value: "2",
                            text: "I felt bad"
                        },
                        {
                            value: "4",
                            text: "I felt guilty"
                        },
                        {
                            value: "5",
                            text: "It felt like a victory"
                        },
                        {
                            value: "6",
                            text: "I found it a waste of time"
                        },
                        {
                            value: "7",
                            text: "I felt energised"
                        },
                        {
                            value: "8",
                            text: "I felt satisfied"
                        },
                        {
                            value: "10",
                            text: "I felt exhausted"
                        },
                        {
                            value: "11",
                            text: "I felt that I could have done more useful things"
                        },
                        {
                            value: "12",
                            text: "I felt powerful"
                        },
                        {
                            value: "13",
                            text: "I felt weary"
                        },
                        {
                            value: "14",
                            text: "I felt regret"
                        },
                        {
                            value: "15",
                            text: "I felt ashamed"
                        },
                        {
                            value: "16",
                            text: "I felt proud"
                        }
                    ],
                    isAllRowRequired: true
                },
                {
                    type: "comment",
                    name: "open_answer_game_exp_1",
                    title: "What do you think the game reflected about you?"
                },
                {
                    type: "comment",
                    name: "main_character_opinion_1",
                    title: "What did you think of the main character?"
                }
            ],
            title: "This module will ask you some questions about the game you just played."
        },
        {
            name: "game_exp_2",
            elements: [{
                    type: "matrix",
                    name: "game_exp_core_module_2",
                    title: "Please indicate how you felt WHILE playing the game for each of these items",
                    isRequired: true,
                    columns: [{
                            value: "0",
                            text: "Not at all"
                        },
                        {
                            value: "1",
                            text: "Slightly"
                        },
                        {
                            value: "2",
                            text: "Moderately"
                        },
                        {
                            value: "3",
                            text: "Fairly  "
                        },
                        {
                            value: "4",
                            text: "Extremely"
                        }
                    ],
                    rows: [{
                            value: "1",
                            text: "I felt content"
                        },
                        {
                            value: "3",
                            text: "I was interested in the game's story"
                        },
                        {
                            value: "4",
                            text: "I thought it was fun"
                        },
                        {
                            value: "5",
                            text: "I was fully occupied with the game"
                        },
                        {
                            value: "6",
                            text: "I felt happy"
                        },
                        {
                            value: "7",
                            text: "It gave me a bad mood"
                        },
                        {
                            value: "8",
                            text: "I thought about other things"
                        },
                        {
                            value: "9",
                            text: "I found it tiresome"
                        },
                        {
                            value: "12",
                            text: "It was aesthetically pleasing"
                        },
                        {
                            value: "13",
                            text: "I forgot everything around me"
                        },
                        {
                            value: "14",
                            text: "I felt good"
                        },
                        {
                            value: "16",
                            text: "I felt bored"
                        },
                        {
                            value: "18",
                            text: "I felt imaginative"
                        },
                        {
                            value: "19",
                            text: "I felt that I could explore things"
                        },
                        {
                            value: "20",
                            text: "I enjoyed it"
                        },
                        {
                            value: "22",
                            text: "I felt annoyed"
                        },
                        {
                            value: "24",
                            text: "I felt irritable"
                        },
                        {
                            value: "25",
                            text: "I lost track of time"
                        },
                        {
                            value: "27",
                            text: "I found it impressive"
                        },
                        {
                            value: "28",
                            text: "I was deeply concentrated in the game"
                        },
                        {
                            value: "29",
                            text: "I felt frustrated"
                        },
                        {
                            value: "30",
                            text: "It felt like a rich experience"
                        },
                        {
                            value: "31",
                            text: "I lost connection with the outside world"
                        }
                    ],
                    isAllRowRequired: true
                },
                {
                    type: "matrix",
                    name: "game_exp_post_game_module_2",
                    title: "Please indicate how you felt AFTER you finished playing the game for each of these items",
                    isRequired: true,
                    columns: [{
                            value: "0",
                            text: "Not at all"
                        },
                        {
                            value: "1",
                            text: "Slightly"
                        },
                        {
                            value: "2",
                            text: "Moderately"
                        },
                        {
                            value: "3",
                            text: "Fairly  "
                        },
                        {
                            value: "4",
                            text: "Extremely"
                        }
                    ],
                    rows: [{
                            value: "1",
                            text: "I felt revived"
                        },
                        {
                            value: "2",
                            text: "I felt bad"
                        },
                        {
                            value: "4",
                            text: "I felt guilty"
                        },
                        {
                            value: "5",
                            text: "It felt like a victory"
                        },
                        {
                            value: "6",
                            text: "I found it a waste of time"
                        },
                        {
                            value: "7",
                            text: "I felt energised"
                        },
                        {
                            value: "8",
                            text: "I felt satisfied"
                        },
                        {
                            value: "10",
                            text: "I felt exhausted"
                        },
                        {
                            value: "11",
                            text: "I felt that I could have done more useful things"
                        },
                        {
                            value: "12",
                            text: "I felt powerful"
                        },
                        {
                            value: "13",
                            text: "I felt weary"
                        },
                        {
                            value: "14",
                            text: "I felt regret"
                        },
                        {
                            value: "15",
                            text: "I felt ashamed"
                        },
                        {
                            value: "16",
                            text: "I felt proud"
                        }
                    ],
                    isAllRowRequired: true
                },
                {
                    type: "comment",
                    name: "open_answer_game_exp_2",
                    title: "What do you think the game reflected about you?"
                },
                {
                    type: "comment",
                    name: "main_character_opinion_2",
                    title: "What did you think of the main character?"
                }
            ],
            title: "This module will ask you some questions about the game you just played."
        },
        {
            name: "final_questions",
            elements: [{
                    type: "radiogroup",
                    name: "version_liked_most",
                    title: "Which version of the game did you like the most?",
                    isRequired: true,
                    choices: [{
                            value: "1",
                            text: "1st version"
                        },
                        {
                            value: "2",
                            text: "2nd version"
                        }
                    ]
                },
                {
                    type: "comment",
                    name: "open_answer_version_liked_most",
                    title: "Why?"
                },
                {
                    type: "radiogroup",
                    name: "version_reflected_most",
                    title: "Which version of the game did you think reflected you the most?",
                    isRequired: true,
                    choices: [{
                            value: "1",
                            text: "1st version"
                        },
                        {
                            value: "2",
                            text: "2nd version"
                        }
                    ]
                },
                {
                    type: "comment",
                    name: "open_answer_version_reflected_most",
                    title: "Why?"
                },
                {
                    type: "radiogroup",
                    name: "games_like_this_in_the_future",
                    title: "Would you like to play more games like this in the future?",
                    isRequired: true,
                    choices: [{
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "no",
                            text: "No"
                        }
                    ]
                },
                {
                    type: "comment",
                    name: "open_answer_games_like_this_in_the_future",
                    title: "Why?"
                }
            ],
            title: "This final module will ask some questions about the general experience."
        }
    ],
    showPrevButton: false,
    showQuestionNumbers: "off",
    requiredText: "(required)"
}