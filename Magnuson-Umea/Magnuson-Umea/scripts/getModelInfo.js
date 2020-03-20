

var getUmea =
{
    "code": "umea",
    "label": "Umea",
    "partNumber": "",
    "lowFile": "umea-low.glb",
    "medFile": null,
    "highFile": "umea-high.glb",
    "price": 0,
    "defaultLayers": [
        "Single_Door1",
        "Single_General1",
        "Single_Panel1",
        "Single_Label1",
        "Single_SidePanel1",
        "Single_Top1_1",
        "Single_Key",
        "Single_SidePanel1Back",
        "Single_Hood0"
    ],
}

var getUmeaFeatures =
    [
        {
            "code": "Body",
            "label": "Body",
            "allRelatedLayers": [
            ],
            "geometryChange": true,
            "colorChange": false,
            "materialChange": false,
            "ambientOcclusionChange": false,
            "options": [
                {
                    "code": "Single",
                    "label": "Single",
                    //geometry
                    "displayedLayers": [
                        "Single_Door1",
                        "Single_General1",
                        "Single_Label1",
                        "Single_SidePanel1",
                        "Single_Top1_1",
                        "Single_Key",
                        "Single_SidePanel1Back",
                        "Single_Hood0"

                    ],
                    "hiddenLayers": [],
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicateSize": []

                },
                {
                    "code": "Double",
                    "label": "Double",
                    //geometry
                    "displayedLayers": [
                        "Double_Door",
                        "Double_Top2_1",
                        "Double_General",
                        "Double_Top2_1",
                        "Double_General",
                        "Double_Top1_1",
                        "Double_SidePanel1",
                        "Double_Label1",
                        "Double_Label2",
                        "Double_Key",
                        "Double_SidePanel1Back",
                        "Double_Hood0"
                    ],
                    "hiddenLayers": [],
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicateSize": ["Left", "Right"]
                },
                {
                    "code": "Triple",
                    "label": "Triple",
                    //geometry
                    "displayedLayers": [
                        "Triple_General",
                        "Triple_Top1_1",
                        "Triple_Top2_2",
                        "Triple_Top3_3",
                        "Triple_SidePanel1",
                        "Triple_Label1",
                        "Triple_Label2",
                        "Triple_Label3",
                        "Triple_Key",
                        "Triple_SidePanel1Back",
                        "Triple_Hood0"

                    ],
                    "hiddenLayers": [],
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicateSize": ["Left", "Center", "Right"]
                }
            ]
        }, //BODY
        {
            "code": "Body",
            "label": "Body Colors",
            "allRelatedLayers": [
                "Single_Door1",
                "Single_General1",
                "Double_Door",
                "Double_General",
                "Triple_General",
                "Single_SidePanel1Back",
                "Double_SidePanel1Back",
                "Triple_SidePanel1Back",
                "Single_SidePanel2Back",
                "Double_SidePanel2Back",
                "Triple_SidePanel2Back",
                "Single_SidePanel3Back",
                "Double_SidePanel3Back",
                "Triple_SidePanel3Back",
                "Single_SidePanel4Back1",
                "Double_SidePanel4Back1",
                "Triple_SidePanel4Back1"
            ],
            "geometryChange": false,
            "colorChange": true,
            "materialChange": false,
            "ambientOcclusionChange": false,
            "options": [
                {
                    "code": "skyWhite",
                    "label": "Sky White",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#FFFFFF",
                    "colorLayer": [
                        "Single_Door1",
                        "Single_General1",
                        "Double_Door",
                        "Double_General",
                        "Triple_General",
                        "Single_SidePanel1Back",
                        "Double_SidePanel1Back",
                        "Triple_SidePanel1Back",
                        "Single_SidePanel2Back",
                        "Double_SidePanel2Back",
                        "Triple_SidePanel2Back",
                        "Single_SidePanel3Back",
                        "Double_SidePanel3Back",
                        "Triple_SidePanel3Back",
                        "Single_SidePanel4Back",
                        "Double_SidePanel4Back",
                        "Triple_SidePanel4Back"
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "brightbondSilver",
                    "label": "Brightbond Silver",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#838482",
                    "colorLayer": [
                        "Single_Door1",
                        "Single_General1",
                        "Double_Door",
                        "Double_General",
                        "Triple_General",
                        "Single_SidePanel1Back",
                        "Double_SidePanel1Back",
                        "Triple_SidePanel1Back",
                        "Single_SidePanel2Back",
                        "Double_SidePanel2Back",
                        "Triple_SidePanel2Back",
                        "Single_SidePanel3Back",
                        "Double_SidePanel3Back",
                        "Triple_SidePanel3Back",
                        "Single_SidePanel4Back",
                        "Double_SidePanel4Back",
                        "Triple_SidePanel4Back"
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "mineralBronze",
                    "label": "Mineral Bronze",
                    //geometry
                    "displayedLayers": [],
                    "hiddenLayers": [],
                    //Color 
                    "colorCode": "#3d372b",
                    "colorLayer": [
                        "Single_Door1",
                        "Single_General1",
                        "Double_Door",
                        "Double_General",
                        "Triple_General",
                        "Single_SidePanel1Back",
                        "Double_SidePanel1Back",
                        "Triple_SidePanel1Back",
                        "Single_SidePanel2Back",
                        "Double_SidePanel2Back",
                        "Triple_SidePanel2Back",
                        "Single_SidePanel3Back",
                        "Double_SidePanel3Back",
                        "Triple_SidePanel3Back"
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
            ]
        }, //BODY COLOR
        {
            "code": "Top",
            "label": "Top Opening",
            "allRelatedLayers": [
                "Single_Top1_1",
                "Single_Top1_2",
                "Single_Top1_3",
                "Double_Top1_1",
                "Double_Top1_2",
                "Double_Top1_3",
                "Double_Top2_1",
                "Double_Top2_2",
                "Double_Top2_3",

                "Triple_Top1_1",
                "Triple_Top1_2",
                "Triple_Top1_3",
                "Triple_Top2_1",
                "Triple_Top2_2",
                "Triple_Top2_3",
                "Triple_Top3_1",
                "Triple_Top3_2",
                "Triple_Top3_3"
            ],
            "geometryChange": true,
            "colorChange": false,
            "materialChange": false,
            "ambientOcclusionChange": false,
            "options": [
                {
                    "id": 1,
                    "code": "_1",
                    "label": "Waste Opening",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": true,
                },
                {
                    "id": 2,
                    "code": "_2",
                    "label": "Paper Opening",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": true
                },
                {
                    "id": 3,
                    "code": "_3",
                    "label": "Circle Opening",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": true
                }
            ]
        }, //TOP OPENINGS
        {
            "code": "Top",
            "label": "Top Color",
            "allRelatedLayers": [
                "Single_Top1_1",
                "Single_Top1_2",
                "Single_Top1_3",
                "Double_Top1_1",
                "Double_Top1_2",
                "Double_Top1_3",
                "Double_Top2_1",
                "Double_Top2_2",
                "Double_Top2_3",

                "Triple_Top1_1",
                "Triple_Top1_2",
                "Triple_Top1_3",
                "Triple_Top2_1",
                "Triple_Top2_2",
                "Triple_Top2_3",
                "Triple_Top3_1",
                "Triple_Top3_2",
                "Triple_Top3_3"
            ],
            "geometryChange": false,
            "colorChange": true,
            "materialChange": false,
            "ambientOcclusionChange": false,
            "options": [
                {
                    "code": "skyWhite",
                    "label": "Sky White",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#FFFFFF",
                    "colorLayer": [
                        "Single_Top1",                       
                        "Double_Top1",
                        "Double_Top2",
                        "Double_Top3",
                        "Triple_Top1",
                        "Triple_Top2",
                        "Triple_Top3"                        
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "seaGreen",
                    "label": "Sea Green",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#004c10",//"#0e793d",
                    "colorLayer": [
                        "Single_Top1",
                        "Double_Top1",
                        "Double_Top2",
                        "Double_Top3",
                        "Triple_Top1",
                        "Triple_Top2",
                        "Triple_Top3" 
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "brightbondSilver",
                    "label": "Brightbond Silver",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#838482",//"#b0b1af",
                    "colorLayer": [
                        "Single_Top1",
                        "Double_Top1",
                        "Double_Top2",
                        "Double_Top3",
                        "Triple_Top1",
                        "Triple_Top2",
                        "Triple_Top3" 
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "mineralBronze",
                    "label": "Mineral Bronze",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#332d21",//"#3d372b",
                    "colorLayer": [
                        "Single_Top1",
                        "Double_Top1",
                        "Double_Top2",
                        "Double_Top3",
                        "Triple_Top1",
                        "Triple_Top2",
                        "Triple_Top3" 
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "marigoldYellow",
                    "label": "Marigold Yellow",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#ceaa00",//"#fbd712",
                    "colorLayer": [
                        "Single_Top1",
                        "Double_Top1",
                        "Double_Top2",
                        "Double_Top3",
                        "Triple_Top1",
                        "Triple_Top2",
                        "Triple_Top3" 
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "marineBlue",
                    "label": "Marine Blue",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#000e43",//"#1c3b70",
                    "colorLayer": [
                        "Single_Top1",
                        "Double_Top1",
                        "Double_Top2",
                        "Double_Top3",
                        "Triple_Top1",
                        "Triple_Top2",
                        "Triple_Top3" 
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "clementineOrange",
                    "label": "Clemenetine Orange",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#b02702",//"#c43b0e",
                    "colorLayer": [
                        "Single_Top1",
                        "Double_Top1",
                        "Double_Top2",
                        "Double_Top3",
                        "Triple_Top1",
                        "Triple_Top2",
                        "Triple_Top3" 
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },

            ]
        }, //TOP OPENINGS COLORS
        {
            "code": "Hood",
            "label": "Hood",
            "allRelatedLayers": [
                "Single_Hood1",
                "Single_Hood2",
                "Double_Hood1",
                "Double_Hood2",
                "Triple_Hood1",
                "Triple_Hood2"
            ],
            "geometryChange": true,
            "colorChange": false,
            "materialChange": false,
            "ambientOcclusionChange": false,
            "options": [
                {
                    "id": 0,
                    "code": "Hood0",
                    "label": "None",
                    //geometry
                    "displayedLayers": [],
                    "hiddenLayers": [
                        "Single_Hood1",
                        "Single_Hood2",
                        "Double_Hood1",
                        "Double_Hood2",
                        "Triple_Hood1",
                        "Triple_Hood2"
                    ],
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "id": 1,
                    "code": "Hood1",
                    "label": "Flat Hood",
                    //geometry
                    "displayedLayers": [
                        "Single_Hood1",
                        "Double_Hood1",
                        "Triple_Hood1",
                    ],
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "id": 2,
                    "code": "Hood2",
                    "label": "Angled Hood",
                    //geometry
                    "displayedLayers": [
                        "Single_Hood2",
                        "Double_Hood2",
                        "Triple_Hood2"
                    ],
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                }
            ]
        }, //HOOD
        {
            "code": "Hood",
            "label": "Hood Color",
            "allRelatedLayers": [
                "Single_Hood1",
                "Single_Hood2",
                "Double_Hood1",
                "Double_Hood2",
                "Triple_Hood1",
                "Triple_Hood2",                
              //  "Single_SidePanel1",
              //  "Single_SidePanel2",
              //  "Single_SidePanel3",
              //  "Single_SidePanel4Bac",
              //  "Double_SidePanel1",
              //  "Double_SidePanel2",
              //  "Double_SidePanel3",
              //  "Double_SidePanel4Bac",
              //  "Triple_SidePanel1",
              //  "Triple_SidePanel2",
              //  "Triple_SidePanel3",
              //  "Triple_SidePanel4Bac"
            ],
            "geometryChange": false,
            "colorChange": true,
            "materialChange": false,
            "ambientOcclusionChange": false,
            "options": [
                {
                    "code": "skyWhite",
                    "label": "Sky White",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#FFFFFF",
                    "colorLayer": [
                        "Single_Hood1",
                        "Single_Hood2",
                        "Double_Hood1",
                        "Double_Hood2",
                        "Triple_Hood1",
                        "Triple_Hood2",
                        "Single_SidePanel4Back",
                        "Single_SidePanel1",
                        "Single_SidePanel2",
                        "Single_SidePanel3",
                        "Double_SidePanel4Back",
                        "Double_SidePanel1",
                        "Double_SidePanel2",
                        "Double_SidePanel3",
                        "Triple_SidePanel4Back",
                        "Triple_SidePanel1",
                        "Triple_SidePanel2",
                        "Triple_SidePanel3"

                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "seaGreen",
                    "label": "Sea Green",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#004c10",//"#0e793d",
                    "colorLayer": [
                        "Single_Hood1",
                        "Single_Hood2",
                        "Double_Hood1",
                        "Double_Hood2",
                        "Triple_Hood1",
                        "Triple_Hood2",
                        "Single_RightPanel",
                        "Single_SidePanel1",
                        "Single_SidePanel2",
                        "Single_SidePanel3",
                        "Double_RightPanel",
                        "Double_SidePanel1",
                        "Double_SidePanel2",
                        "Double_SidePanel3",
                        "Triple_RightPanel",
                        "Triple_SidePanel1",
                        "Triple_SidePanel2",
                        "Triple_SidePanel3"
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null
                },
                {
                    "code": "brightbondSilver",
                    "label": "Brightbond Silver",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#838482",//"#b0b1af",
                    "colorLayer": [
                        "Single_Hood1",
                        "Single_Hood2",
                        "Double_Hood1",
                        "Double_Hood2",
                        "Triple_Hood1",
                        "Triple_Hood2",
                        "Single_RightPanel",
                        "Single_SidePanel1",
                        "Single_SidePanel2",
                        "Single_SidePanel3",
                        "Double_RightPanel",
                        "Double_SidePanel1",
                        "Double_SidePanel2",
                        "Double_SidePanel3",
                        "Triple_RightPanel",
                        "Triple_SidePanel1",
                        "Triple_SidePanel2",
                        "Triple_SidePanel3"
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "mineralBronze",
                    "label": "Mineral Bronze",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#332d21",//"#3d372b",
                    "colorLayer": [
                        "Single_Hood1",
                        "Single_Hood2",
                        "Double_Hood1",
                        "Double_Hood2",
                        "Triple_Hood1",
                        "Triple_Hood2",
                        "Single_RightPanel",
                        "Single_SidePanel1",
                        "Single_SidePanel2",
                        "Single_SidePanel3",
                        "Double_RightPanel",
                        "Double_SidePanel1",
                        "Double_SidePanel2",
                        "Double_SidePanel3",
                        "Triple_RightPanel",
                        "Triple_SidePanel1",
                        "Triple_SidePanel2",
                        "Triple_SidePanel3"
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "marigoldYellow",
                    "label": "Marigold Yellow",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#ceaa00",//"#fbd712",
                    "colorLayer": [
                        "Single_Hood1",
                        "Single_Hood2",
                        "Double_Hood1",
                        "Double_Hood2",
                        "Triple_Hood1",
                        "Triple_Hood2",
                        "Single_RightPanel",
                        "Single_SidePanel1",
                        "Single_SidePanel2",
                        "Single_SidePanel3",
                        "Double_RightPanel",
                        "Double_SidePanel1",
                        "Double_SidePanel2",
                        "Double_SidePanel3",
                        "Triple_RightPanel",
                        "Triple_SidePanel1",
                        "Triple_SidePanel2",
                        "Triple_SidePanel3"
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "marineBlue",
                    "label": "Marine Blue",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#000e43",//"#1c3b70",
                    "colorLayer": [
                        "Single_Hood1",
                        "Single_Hood2",
                        "Double_Hood1",
                        "Double_Hood2",
                        "Triple_Hood1",
                        "Triple_Hood2",
                        "Single_RightPanel",
                        "Single_SidePanel1",
                        "Single_SidePanel2",
                        "Single_SidePanel3",
                        "Double_RightPanel",
                        "Double_SidePanel1",
                        "Double_SidePanel2",
                        "Double_SidePanel3",
                        "Triple_RightPanel",
                        "Triple_SidePanel1",
                        "Triple_SidePanel2",
                        "Triple_SidePanel3"
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "clementineOrange",
                    "label": "Clemenetine Orange",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#b02702",//"#c43b0e",
                    "colorLayer": [
                        "Single_Hood1",
                        "Single_Hood2",
                        "Double_Hood1",
                        "Double_Hood2",
                        "Triple_Hood1",
                        "Triple_Hood2",
                        "Single_RightPanel",
                        "Single_SidePanel1",
                        "Single_SidePanel2",
                        "Single_SidePanel3",
                        "Double_RightPanel",
                        "Double_SidePanel1",
                        "Double_SidePanel2",
                        "Double_SidePanel3",
                        "Triple_RightPanel",
                        "Triple_SidePanel1",
                        "Triple_SidePanel2",
                        "Triple_SidePanel3"
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },

            ]
        }, //HOOD COLOR
        {
            "code": "Label",
            "label": "Label",
            "allRelatedLayers": [
                "Single_Label1",
                "Double_Label1",
                "Double_Label2",
                "Triple_Label1",              
                "Triple_Label2",               
                "Triple_Label3",
               
            ],
            "geometryChange": false,
            "colorChange": false,
            "materialChange": true,
            "ambientOcclusionChange": false,
            "options": [
                {
                    "id": 1,
                    "code": "Waste",
                    "label": "Waste-Basura Label",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": true,
                },
                {
                    "id": 2,
                    "code": "RecyclingArrows",
                    "label": "RecyclingA-Reciclaje Label",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": true
                },
                {
                    "id": 3,
                    "code": "Paper",
                    "label": "Paper-Papel Label",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": true
                },
                {
                    "id": 4,
                    "code": "Cans",
                    "label": "Cans-Latas Label",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": true
                },
                {
                    "id": 5,
                    "code": "Landfill",
                    "label": "Landfill-Vertedero Label",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": true
                },
                {
                    "id": 6,
                    "code": "Plastic",
                    "label": "Plastic-Plastico Label",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": true
                },
                {
                    "id": 7,
                    "code": "Glass",
                    "label": "Glass-Vidrio Label",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": true
                },
                {
                    "id": 8,
                    "code": "Organics",
                    "label": "Organics-Organicos Label",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": true
                },
                {
                    "id": 9,
                    "code": "Recycling",
                    "label": "Recycling-Reciclaje Label",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": true
                },
                {
                    "id": 10,
                    "code": "Compost",
                    "label": "Compost-Compost Label",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": true
                }
            ]
        }, //LABELS
        {
            "code": "Label",
            "label": "Label Color",
            "allRelatedLayers": [
                "Single_Label1",
                "Double_Label1",
                "Double_Label2",
                "Triple_Label1",
                "Triple_Label2",
                "Triple_Label3"
            ],
            "geometryChange": false,
            "colorChange": true,
            "materialChange": false,
            "ambientOcclusionChange": false,
            "options": [
                {
                    "code": "whiteVinyl",
                    "label": "White Vinyl",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#FFFFFF",
                    "colorLayer": [
                        "Single_Label1",
                        "Double_Label1",
                        "Double_Label2",
                        "Triple_Label1",
                        "Triple_Label2",
                        "Triple_Label3",
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                }, //white
                {
                    "code": "darkGreyVinyl",
                    "label": "Dark Grey Vinyl",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#3c3c3c",//"#b0b1af",
                    "colorLayer": [
                        "Single_Label1",
                        "Double_Label1",
                        "Double_Label2",
                        "Triple_Label1",
                        "Triple_Label2",
                        "Triple_Label3",
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                }, //darkGrey
                {
                    "code": "seaGreen",
                    "label": "Cactus Green Vinyl",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#004c10",//"#0e793d",
                    "colorLayer": [
                        "Single_Label1",
                        "Double_Label1",
                        "Double_Label2",
                        "Triple_Label1",
                        "Triple_Label2",
                        "Triple_Label3",
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                }, //green
                {
                    "code": "marineBlue",
                    "label": "Vivid Blue Vinyl",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#000e43",//"#1c3b70",
                    "colorLayer": [
                        "Single_Label1",
                        "Double_Label1",
                        "Double_Label2",
                        "Triple_Label1",
                        "Triple_Label2",
                        "Triple_Label3",
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                }, //blue
                {
                    "code": "marigoldYellow",
                    "label": "Sunflower Vinyl",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#ceaa00",//"#fbd712",
                    "colorLayer": [
                        "Single_Label1",
                        "Double_Label1",
                        "Double_Label2",
                        "Triple_Label1",
                        "Triple_Label2",
                        "Triple_Label3",
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                }, //yellow
                {
                    "code": "clementineOrange",
                    "label": "Bright Orange Vinyl",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#b02702",//"#c43b0e",
                    "colorLayer": [
                        "Single_Label1",
                        "Double_Label1",
                        "Double_Label2",
                        "Triple_Label1",
                        "Triple_Label2",
                        "Triple_Label3",
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                }, //orange
                {
                    "code": "blackVinyl",
                    "label": "Black Vinyl",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#000000",//"#3d372b",
                    "colorLayer": [
                        "Single_Label1",
                        "Double_Label1",
                        "Double_Label2",
                        "Triple_Label1",
                        "Triple_Label2",
                        "Triple_Label3",
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                }, //black

            ]
        }, //LABELS COLORS
        {
            "code": "SidePanel",
            "label": "Side Panel Cutouts",
            "allRelatedLayers": [
                "Single_SidePanel1",
                "Single_SidePanel2",
                "Single_SidePanel3",
                "Single_SidePanel4",
                "Double_SidePanel1",
                "Double_SidePanel2",
                "Double_SidePanel3",
                "Double_SidePanel4",
                "Triple_SidePanel1",
                "Triple_SidePanel2",
                "Triple_SidePanel3",
                "Triple_SidePanel4",

            ],
            "geometryChange": true,
            "colorChange": false,
            "materialChange": false,
            "ambientOcclusionChange": false,
            "options": [
                {
                    "id": 1,
                    "code": "SidePanel1",
                    "label": "No cutout",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null                
                },
                {
                    "id": 2,
                    "code": "SidePanel2",
                    "label": "Waste Cutout",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "id": 3,
                    "code": "SidePanel3",
                    "label": "Recycling Cutout",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "id": 4,
                    "code": "SidePanel4",
                    "label": "Advertising Panel",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": null,
                    "colorLayer": null,
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                }
            ]
        }, //CUTOUTS
        {
            "code": "SidePanel",
            "label": "Side Panel Color",
            "allRelatedLayers": [
                  "Single_SidePanel1",
                  "Single_SidePanel2",
                  "Single_SidePanel3",
                  "Single_SidePanel4Back2",
                  "Double_SidePanel1",
                  "Double_SidePanel2",
                  "Double_SidePanel3",
                  "Double_SidePanel4Back2",
                  "Triple_SidePanel1",
                  "Triple_SidePanel2",
                  "Triple_SidePanel3",
                  "Triple_SidePanel4Back2",

            ],
            "geometryChange": false,
            "colorChange": true,
            "materialChange": false,
            "ambientOcclusionChange": false,
            "options": [
                {
                    "code": "skyWhite",
                    "label": "Sky White",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#FFFFFF",
                    "colorLayer": [
                        "Single_SidePanel4Back1",
                        "Single_SidePanel4Back2",
                        "Single_SidePanel1",
                        "Single_SidePanel2",
                        "Single_SidePanel3",
                        "Double_SidePanel4Back1",
                        "Double_SidePanel4Back2",
                        "Double_SidePanel1",
                        "Double_SidePanel2",
                        "Double_SidePanel3",
                        "Triple_SidePanel4Back1",
                        "Triple_SidePanel4Back2",
                        "Triple_SidePanel1",
                        "Triple_SidePanel2",
                        "Triple_SidePanel3"

                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "seaGreen",
                    "label": "Sea Green",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#004c10",//"#0e793d",
                    "colorLayer": [
                        "Single_SidePanel4Back2",
                        "Single_SidePanel1",
                        "Single_SidePanel2",
                        "Single_SidePanel3",
                        "Double_SidePanel4Back2",
                        "Double_SidePanel1",
                        "Double_SidePanel2",
                        "Double_SidePanel3",
                        "Triple_SidePanel4Back2",
                        "Triple_SidePanel1",
                        "Triple_SidePanel2",
                        "Triple_SidePanel3"

                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null
                },
                {
                    "code": "brightbondSilver",
                    "label": "Brightbond Silver",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#838482",//"#b0b1af",
                    "colorLayer": [
                        "Single_RightPanel",
                        "Single_SidePanel1",
                        "Single_SidePanel2",
                        "Single_SidePanel3",
                        "Double_RightPanel",
                        "Double_SidePanel1",
                        "Double_SidePanel2",
                        "Double_SidePanel3",
                        "Triple_RightPanel",
                        "Triple_SidePanel1",
                        "Triple_SidePanel2",
                        "Triple_SidePanel3"
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "mineralBronze",
                    "label": "Mineral Bronze",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#332d21",//"#3d372b",
                    "colorLayer": [

                        "Single_RightPanel",
                        "Single_SidePanel1",
                        "Single_SidePanel2",
                        "Single_SidePanel3",
                        "Double_RightPanel",
                        "Double_SidePanel1",
                        "Double_SidePanel2",
                        "Double_SidePanel3",
                        "Triple_RightPanel",
                        "Triple_SidePanel1",
                        "Triple_SidePanel2",
                        "Triple_SidePanel3"
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "marigoldYellow",
                    "label": "Marigold Yellow",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#ceaa00",//"#fbd712",
                    "colorLayer": [

                        "Single_RightPanel",
                        "Single_SidePanel1",
                        "Single_SidePanel2",
                        "Single_SidePanel3",
                        "Double_RightPanel",
                        "Double_SidePanel1",
                        "Double_SidePanel2",
                        "Double_SidePanel3",
                        "Triple_RightPanel",
                        "Triple_SidePanel1",
                        "Triple_SidePanel2",
                        "Triple_SidePanel3"
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "marineBlue",
                    "label": "Marine Blue",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#000e43",//"#1c3b70",
                    "colorLayer": [

                        "Single_RightPanel",
                        "Single_SidePanel1",
                        "Single_SidePanel2",
                        "Single_SidePanel3",
                        "Double_RightPanel",
                        "Double_SidePanel1",
                        "Double_SidePanel2",
                        "Double_SidePanel3",
                        "Triple_RightPanel",
                        "Triple_SidePanel1",
                        "Triple_SidePanel2",
                        "Triple_SidePanel3"
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },
                {
                    "code": "clementineOrange",
                    "label": "Clemenetine Orange",
                    //geometry
                    "displayedLayers": null,
                    "hiddenLayers": null,
                    //Color 
                    "colorCode": "#b02702",//"#c43b0e",
                    "colorLayer": [

                        "Single_RightPanel",
                        "Single_SidePanel1",
                        "Single_SidePanel2",
                        "Single_SidePanel3",
                        "Double_RightPanel",
                        "Double_SidePanel1",
                        "Double_SidePanel2",
                        "Double_SidePanel3",
                        "Triple_RightPanel",
                        "Triple_SidePanel1",
                        "Triple_SidePanel2",
                        "Triple_SidePanel3"
                    ],
                    //Material
                    "materialName": null,
                    "materialCode": null,
                    "materialLayers": null,
                    "replicate": null
                },

            ]
        }, //SIDEPANEL COLOR
    ];
