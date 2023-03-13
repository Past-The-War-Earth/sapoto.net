/* eslint-disable */
export const APPLICATION = {
	"domain": "localhost:8100",
	"index": null,
	"name": "@sapoto/core",
	"publicSigningKey": null,
	"sinceVersion": 1,
	"versions": [
		{
			"api": {
				"apiObjectMap": {
					"SituationApi": {
						"operationMap": {
							"findById": {
								"isAsync": true,
								"parameters": [
									{
										"isRest": false,
										"text": "situation: Situation | string"
									}
								]
							},
							"save": {
								"isAsync": true,
								"parameters": [
									{
										"isRest": false,
										"text": "situation: Situation"
									}
								]
							},
							"rateSituation": {
								"isAsync": true,
								"parameters": [
									{
										"isRest": false,
										"text": "situation: Situation"
									},
									{
										"isRest": false,
										"text": "situationRating: SituationRating"
									}
								]
							},
							"getNewSituation": {
								"isAsync": true,
								"parameters": []
							}
						}
					},
					"ThemeApi": {
						"operationMap": {
							"getAllWithTopics": {
								"isAsync": true,
								"parameters": []
							}
						}
					},
					"TopicApi": {
						"operationMap": {
							"findAll": {
								"isAsync": true,
								"parameters": []
							},
							"findOne": {
								"isAsync": true,
								"parameters": [
									{
										"isRest": false,
										"text": "topicId: string | Topic"
									}
								]
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
									"manyRelationIndex": 1,
									"oneDbApplication_Index": 0,
									"oneTableIndex": 10,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
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
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneDbApplication_Index": 0,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
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
									"index": 0
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
							"name": "CREATED_AT",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "IMPORTANCE_RATING",
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
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "URGENCY_RATING",
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
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneDbApplication_Index": null,
									"oneTableIndex": 3,
									"oneRelationIndex": 3,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "SITUATIONS_RID_1",
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneDbApplication_Index": null,
									"oneTableIndex": 3,
									"oneRelationIndex": 3,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "SITUATIONS_AID_1",
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
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneDbApplication_Index": null,
									"oneTableIndex": 3,
									"oneRelationIndex": 3,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "SITUATIONS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
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
					"isAirEntity": true,
					"name": "SituationRating",
					"properties": [
						{
							"columnRef": {
								"index": 2
							},
							"index": 0,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 1
							},
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
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 6,
							"isId": false,
							"name": "importanceRating",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 7
							},
							"index": 7,
							"isId": false,
							"name": "urgencyRating",
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"name": "situation",
							"relationRef": {
								"index": 2
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
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableDbApplication_Index": 0,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 10,
							"relationTableDbApplication_Index": 0,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 8
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
									"manyRelationIndex": 1,
									"oneDbApplication_Index": 0,
									"oneTableIndex": 10,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
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
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneDbApplication_Index": 0,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
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
									"index": 0
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
							"name": "CREATED_AT",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NAME",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "IMAGENAME",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
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
					"isAirEntity": true,
					"name": "Theme",
					"properties": [
						{
							"columnRef": {
								"index": 2
							},
							"index": 0,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 1
							},
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
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 6,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 7
							},
							"index": 7,
							"isId": false,
							"name": "imageName",
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"name": "topics",
							"relationRef": {
								"index": 2
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
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableDbApplication_Index": 0,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 10,
							"relationTableDbApplication_Index": 0,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "theme"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 8
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
									"manyRelationIndex": 1,
									"oneDbApplication_Index": 0,
									"oneTableIndex": 10,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
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
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneDbApplication_Index": 0,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
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
									"index": 0
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
							"name": "CREATED_AT",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NAME",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "IMAGEPATH",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneDbApplication_Index": null,
									"oneTableIndex": 1,
									"oneRelationIndex": 2,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "THEME_RID_1",
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneDbApplication_Index": null,
									"oneTableIndex": 1,
									"oneRelationIndex": 2,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "THEME_AID_1",
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
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneDbApplication_Index": null,
									"oneTableIndex": 1,
									"oneRelationIndex": 2,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "THEME_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
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
					"isAirEntity": true,
					"name": "Topic",
					"properties": [
						{
							"columnRef": {
								"index": 2
							},
							"index": 0,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 1
							},
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
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 6,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 7
							},
							"index": 7,
							"isId": false,
							"name": "imagePath",
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"name": "theme",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "situations",
							"relationRef": {
								"index": 3
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
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableDbApplication_Index": 0,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 10,
							"relationTableDbApplication_Index": 0,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 8
							},
							"relationTableIndex": 1,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "topic"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 9
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
									"manyRelationIndex": 1,
									"oneDbApplication_Index": 0,
									"oneTableIndex": 10,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
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
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneDbApplication_Index": 0,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
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
									"index": 0
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
							"name": "CREATED_AT",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "TEXT",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "URGENCY_TOTAL",
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
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NUMBER_OF_URGENCY_RATINGS",
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
							"name": "IMPORTANCE_TOTAL",
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
							"manyRelationColumnRefs": [],
							"name": "NUMBER_OF_IMPORTANCE_RATINGS",
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
									"manyRelationIndex": 2,
									"oneDbApplication_Index": null,
									"oneTableIndex": 2,
									"oneRelationIndex": 3,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "TOPIC_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 11
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
									"manyRelationIndex": 2,
									"oneDbApplication_Index": null,
									"oneTableIndex": 2,
									"oneRelationIndex": 3,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "TOPIC_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 11
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 13,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneDbApplication_Index": null,
									"oneTableIndex": 2,
									"oneRelationIndex": 3,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "TOPIC_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 11
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
					"isAirEntity": true,
					"name": "Situation",
					"properties": [
						{
							"columnRef": {
								"index": 2
							},
							"index": 0,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 1
							},
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
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 6,
							"isId": false,
							"name": "text",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 7
							},
							"index": 7,
							"isId": false,
							"name": "urgencyTotal",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 8
							},
							"index": 8,
							"isId": false,
							"name": "numberOfUrgencyRatings",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 9
							},
							"index": 9,
							"isId": false,
							"name": "importanceTotal",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 10
							},
							"index": 10,
							"isId": false,
							"name": "numberOfImportanceRatings",
							"sinceVersion": 1
						},
						{
							"index": 11,
							"isId": false,
							"name": "topic",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 12,
							"isId": false,
							"name": "ratings",
							"relationRef": {
								"index": 3
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
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableDbApplication_Index": 0,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 10,
							"relationTableDbApplication_Index": 0,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 11
							},
							"relationTableIndex": 2,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "situation"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 12
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
									"manyRelationIndex": 1,
									"oneDbApplication_Index": 0,
									"oneTableIndex": 10,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
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
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneDbApplication_Index": 0,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
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
									"index": 0
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
							"name": "CREATED_AT",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "FAVORITE",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "BOOLEAN"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneDbApplication_Index": null,
									"oneTableIndex": 2,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "TOPIC_RID_1",
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
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneDbApplication_Index": null,
									"oneTableIndex": 2,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "TOPIC_AID_1",
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
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneDbApplication_Index": null,
									"oneTableIndex": 2,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "TOPIC_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
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
					"isAirEntity": true,
					"name": "UserTopicFavorite",
					"properties": [
						{
							"columnRef": {
								"index": 2
							},
							"index": 0,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 1
							},
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
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 6,
							"isId": false,
							"name": "favorite",
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "topic",
							"relationRef": {
								"index": 2
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
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableDbApplication_Index": 0,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 10,
							"relationTableDbApplication_Index": 0,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
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
					"domain": "airport",
					"index": 0,
					"name": "@airport/holding-pattern",
					"publicSigningKey": null,
					"sinceVersion": 1,
					"versions": [
						{
							"entities": null,
							"integerVersion": 1,
							"referencedApplications": null,
							"signature": "FIXME: sign application versions",
							"versionString": "1.0.0"
						}
					]
				}
			],
			"signature": "FIXME: sign application versions",
			"versionString": "1.0.0"
		}
	]
};