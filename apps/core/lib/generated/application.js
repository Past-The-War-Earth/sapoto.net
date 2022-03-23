/* eslint-disable */
export const APPLICATION = {
    "domain": "localhost:8100",
    "index": null,
    "name": "@sapoto/core",
    "sinceVersion": 1,
    "versions": [
        {
            "api": {
                "apiObjectMap": {
                    "IThemeApi": {
                        "operationMap": {
                            "getAllWithTopics": {
                                "isAsync": true,
                                "parameters": []
                            }
                        }
                    },
                    "ISituationApi": {
                        "operationMap": {
                            "save": {
                                "isAsync": true,
                                "parameters": []
                            },
                            "rateSituation": {
                                "isAsync": true,
                                "parameters": []
                            }
                        }
                    }
                }
            },
            "entities": [
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 2,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "REPOSITORY_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 1,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "ACTOR_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 2,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "ACTOR_RECORD_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "AGE_SUITABILITY",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "SYSTEM_WIDE_OPERATION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "ORIGINAL_ACTOR_RECORD_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 7
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 2,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "ORIGINAL_REPOSITORY_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 7,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 3,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 1,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "ORIGINAL_ACTOR_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 8,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "IMPORTANCE_RATING",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 8
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 9,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "URGENCY_RATING",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 9
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 10,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 4,
                                    "oneApplicationIndex": null,
                                    "oneTableIndex": 3,
                                    "oneRelationIndex": 5,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "SITUATIONS_RID_1",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 10
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 11,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 4,
                                    "oneApplicationIndex": null,
                                    "oneTableIndex": 3,
                                    "oneRelationIndex": 5,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "SITUATIONS_AID_1",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 10
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 12,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 4,
                                    "oneApplicationIndex": null,
                                    "oneTableIndex": 3,
                                    "oneRelationIndex": 5,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "SITUATIONS_ARID_1",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 10
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 0
                        },
                        {
                            "index": 1
                        },
                        {
                            "index": 2
                        }
                    ],
                    "index": 0,
                    "isLocal": false,
                    "isRepositoryEntity": true,
                    "name": "SituationRating",
                    "properties": [
                        {
                            "index": 0,
                            "isId": true,
                            "name": "repository",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": true,
                            "name": "actor",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": true,
                            "name": "actorRecordId",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "ageSuitability",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 4
                            },
                            "index": 4,
                            "isId": false,
                            "name": "systemWideOperationId",
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "originalRepository",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "originalActor",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 5
                            },
                            "index": 7,
                            "isId": false,
                            "name": "originalActorRecordId",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 8
                            },
                            "index": 8,
                            "isId": false,
                            "name": "importanceRating",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 9
                            },
                            "index": 9,
                            "isId": false,
                            "name": "urgencyRating",
                            "sinceVersion": 1
                        },
                        {
                            "index": 10,
                            "isId": false,
                            "name": "situation",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": true,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 0
                            },
                            "relationTableIndex": 2,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": true,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 1,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 2,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 1,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 10
                            },
                            "relationTableIndex": 3,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "SITUATION_RATINGS",
                        "columnIndexes": []
                    },
                    "operations": {}
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 2,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "REPOSITORY_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 1,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "ACTOR_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 2,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "ACTOR_RECORD_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "AGE_SUITABILITY",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "SYSTEM_WIDE_OPERATION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "ORIGINAL_ACTOR_RECORD_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 7
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 2,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "ORIGINAL_REPOSITORY_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 7,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 3,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 1,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "ORIGINAL_ACTOR_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 8,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "NAME",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 8
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "STRING"
                        },
                        {
                            "index": 9,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "IMAGENAME",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 9
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "STRING"
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 0
                        },
                        {
                            "index": 1
                        },
                        {
                            "index": 2
                        }
                    ],
                    "index": 1,
                    "isLocal": false,
                    "isRepositoryEntity": true,
                    "name": "Theme",
                    "properties": [
                        {
                            "index": 0,
                            "isId": true,
                            "name": "repository",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": true,
                            "name": "actor",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": true,
                            "name": "actorRecordId",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "ageSuitability",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 4
                            },
                            "index": 4,
                            "isId": false,
                            "name": "systemWideOperationId",
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "originalRepository",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "originalActor",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 5
                            },
                            "index": 7,
                            "isId": false,
                            "name": "originalActorRecordId",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 8
                            },
                            "index": 8,
                            "isId": false,
                            "name": "name",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 9
                            },
                            "index": 9,
                            "isId": false,
                            "name": "imageName",
                            "sinceVersion": 1
                        },
                        {
                            "index": 10,
                            "isId": false,
                            "name": "topics",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": true,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 0
                            },
                            "relationTableIndex": 2,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": true,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 1,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 2,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 1,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "oneToManyElems": {
                                "mappedBy": "theme"
                            },
                            "relationType": "ONE_TO_MANY",
                            "propertyRef": {
                                "index": 10
                            },
                            "relationTableIndex": 2,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "THEME",
                        "columnIndexes": []
                    },
                    "operations": {}
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 2,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "REPOSITORY_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 1,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "ACTOR_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 2,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "ACTOR_RECORD_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "AGE_SUITABILITY",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "SYSTEM_WIDE_OPERATION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "ORIGINAL_ACTOR_RECORD_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 7
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 2,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "ORIGINAL_REPOSITORY_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 7,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 3,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 1,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "ORIGINAL_ACTOR_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 8,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "NAME",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 8
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "STRING"
                        },
                        {
                            "index": 9,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "IMAGEPATH",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 9
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "STRING"
                        },
                        {
                            "index": 10,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 4,
                                    "oneApplicationIndex": null,
                                    "oneTableIndex": 1,
                                    "oneRelationIndex": 4,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "THEME_RID_1",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 10
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 11,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 4,
                                    "oneApplicationIndex": null,
                                    "oneTableIndex": 1,
                                    "oneRelationIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "THEME_AID_1",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 10
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 12,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 4,
                                    "oneApplicationIndex": null,
                                    "oneTableIndex": 1,
                                    "oneRelationIndex": 4,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "THEME_ARID_1",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 10
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 0
                        },
                        {
                            "index": 1
                        },
                        {
                            "index": 2
                        }
                    ],
                    "index": 2,
                    "isLocal": false,
                    "isRepositoryEntity": true,
                    "name": "Topic",
                    "properties": [
                        {
                            "index": 0,
                            "isId": true,
                            "name": "repository",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": true,
                            "name": "actor",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": true,
                            "name": "actorRecordId",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "ageSuitability",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 4
                            },
                            "index": 4,
                            "isId": false,
                            "name": "systemWideOperationId",
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "originalRepository",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "originalActor",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 5
                            },
                            "index": 7,
                            "isId": false,
                            "name": "originalActorRecordId",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 8
                            },
                            "index": 8,
                            "isId": false,
                            "name": "name",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 9
                            },
                            "index": 9,
                            "isId": false,
                            "name": "imagePath",
                            "sinceVersion": 1
                        },
                        {
                            "index": 10,
                            "isId": false,
                            "name": "theme",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 11,
                            "isId": false,
                            "name": "situations",
                            "relationRef": {
                                "index": 5
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": true,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 0
                            },
                            "relationTableIndex": 2,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": true,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 1,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 2,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 1,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 10
                            },
                            "relationTableIndex": 1,
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "oneToManyElems": {
                                "mappedBy": "topic"
                            },
                            "relationType": "ONE_TO_MANY",
                            "propertyRef": {
                                "index": 11
                            },
                            "relationTableIndex": 3,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "TOPIC",
                        "columnIndexes": []
                    },
                    "operations": {}
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 2,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "REPOSITORY_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 1,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "ACTOR_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 2,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "ACTOR_RECORD_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "AGE_SUITABILITY",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "SYSTEM_WIDE_OPERATION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "ORIGINAL_ACTOR_RECORD_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 7
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 2,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "ORIGINAL_REPOSITORY_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 7,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 3,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 1,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "ORIGINAL_ACTOR_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 8,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "TEXT",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 8
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "STRING"
                        },
                        {
                            "index": 9,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 4,
                                    "oneApplicationIndex": null,
                                    "oneTableIndex": 2,
                                    "oneRelationIndex": 5,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "TOPIC_RID_1",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 9
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 10,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 4,
                                    "oneApplicationIndex": null,
                                    "oneTableIndex": 2,
                                    "oneRelationIndex": 5,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "TOPIC_AID_1",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 9
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 11,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 4,
                                    "oneApplicationIndex": null,
                                    "oneTableIndex": 2,
                                    "oneRelationIndex": 5,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "TOPIC_ARID_1",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 9
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 0
                        },
                        {
                            "index": 1
                        },
                        {
                            "index": 2
                        }
                    ],
                    "index": 3,
                    "isLocal": false,
                    "isRepositoryEntity": true,
                    "name": "Situation",
                    "properties": [
                        {
                            "index": 0,
                            "isId": true,
                            "name": "repository",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": true,
                            "name": "actor",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": true,
                            "name": "actorRecordId",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "ageSuitability",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 4
                            },
                            "index": 4,
                            "isId": false,
                            "name": "systemWideOperationId",
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "originalRepository",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "originalActor",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 5
                            },
                            "index": 7,
                            "isId": false,
                            "name": "originalActorRecordId",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 8
                            },
                            "index": 8,
                            "isId": false,
                            "name": "text",
                            "sinceVersion": 1
                        },
                        {
                            "index": 9,
                            "isId": false,
                            "name": "topic",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 10,
                            "isId": false,
                            "name": "ratings",
                            "relationRef": {
                                "index": 5
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": true,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 0
                            },
                            "relationTableIndex": 2,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": true,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 1,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 2,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 1,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 9
                            },
                            "relationTableIndex": 2,
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "oneToManyElems": {
                                "mappedBy": "situation"
                            },
                            "relationType": "ONE_TO_MANY",
                            "propertyRef": {
                                "index": 10
                            },
                            "relationTableIndex": 0,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "SITUATIONS",
                        "columnIndexes": []
                    },
                    "operations": {}
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 2,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "REPOSITORY_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 1,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "ACTOR_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 2,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "ACTOR_RECORD_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "AGE_SUITABILITY",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "SYSTEM_WIDE_OPERATION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "ORIGINAL_ACTOR_RECORD_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 7
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 2,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "ORIGINAL_REPOSITORY_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 7,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 3,
                                    "oneApplicationIndex": 0,
                                    "oneTableIndex": 1,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "ORIGINAL_ACTOR_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 8,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "FAVORITE",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 8
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "BOOLEAN"
                        },
                        {
                            "index": 9,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 4,
                                    "oneApplicationIndex": null,
                                    "oneTableIndex": 2,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "TOPIC_RID_1",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 9
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 10,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 4,
                                    "oneApplicationIndex": null,
                                    "oneTableIndex": 2,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "TOPIC_AID_1",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 9
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        },
                        {
                            "index": 11,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 4,
                                    "oneApplicationIndex": null,
                                    "oneTableIndex": 2,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "TOPIC_ARID_1",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 9
                                }
                            ],
                            "sinceVersion": 1,
                            "type": "NUMBER"
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 0
                        },
                        {
                            "index": 1
                        },
                        {
                            "index": 2
                        }
                    ],
                    "index": 4,
                    "isLocal": false,
                    "isRepositoryEntity": true,
                    "name": "UserTopicFavorite",
                    "properties": [
                        {
                            "index": 0,
                            "isId": true,
                            "name": "repository",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": true,
                            "name": "actor",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": true,
                            "name": "actorRecordId",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "ageSuitability",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 4
                            },
                            "index": 4,
                            "isId": false,
                            "name": "systemWideOperationId",
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "originalRepository",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "originalActor",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 5
                            },
                            "index": 7,
                            "isId": false,
                            "name": "originalActorRecordId",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 8
                            },
                            "index": 8,
                            "isId": false,
                            "name": "favorite",
                            "sinceVersion": 1
                        },
                        {
                            "index": 9,
                            "isId": false,
                            "name": "topic",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": true,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 0
                            },
                            "relationTableIndex": 2,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": true,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 1,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 2,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 1,
                            "relationTableApplicationIndex": 0,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "relationType": "MANY_TO_ONE",
                            "propertyRef": {
                                "index": 9
                            },
                            "relationTableIndex": 2,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "USER_TOPIC_FAVORITES",
                        "columnIndexes": []
                    }
                }
            ],
            "integerVersion": 1,
            "referencedApplications": [
                {
                    "domain": "air",
                    "index": 0,
                    "name": "@airport/holding-pattern",
                    "sinceVersion": 1,
                    "versions": [
                        {
                            "entities": null,
                            "integerVersion": 1,
                            "referencedApplications": null,
                            "versionString": "1.0.0"
                        }
                    ]
                }
            ],
            "versionString": "1.0.0"
        }
    ]
};
//# sourceMappingURL=application.js.map