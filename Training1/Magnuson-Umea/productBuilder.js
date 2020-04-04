
//Menu building variables
var canvas = document.getElementById('babylonCanvas');


////**************************************************************************
//********************* BABYLON ENGINE INITIALIZATION *****************
////**************************************************************************
var engine = new BABYLON.Engine(canvas, true, { premultipliedAlpha: false, preserveDrawingBuffer: true, stencil: true });
var scene = new BABYLON.Scene(engine);
var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
camera.setTarget(BABYLON.Vector3.Zero());
var baseUrl;
var model;
scene.clearColor = new BABYLON.Color3(0, 0, 0); //Background color


var createScene = function () {

    // Model loader
    BABYLON.GLTFFileLoader.IncrementalLoading = true;
    baseUrl = "/assets/models/";
    lowFile = "umea.glb";

    BABYLON.SceneLoader.ImportMesh("", baseUrl, lowFile, scene, function (meshes) {

        // Camera 
        scene.createDefaultCameraOrLight(true, true, true);
        scene.activeCamera.alpha = Math.PI / 3;
        scene.activeCamera.beta = 7 * Math.PI / 16;
        scene.activeCamera.radius = 5000;
        scene.activeCamera.panningSensibility = 5;

        //Lightning
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 2, 0), scene);
        light.intensity = 0.5;

        model = meshes;

        for (var i = 1; i < meshes.length; i++) {

            meshes[i].actionManager = new BABYLON.ActionManager(scene);
            meshes[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(ev) {
            }, false));

            meshes[i].isVisible = umeaInfo.defaultLayers.includes(meshes[i].name);
            
            //meshes[i]._material.albedoColor = new BABYLON.Color3.FromHexString("#FF4444");

            //console.log(meshes[i]);

          /*  if (meshes[i].name == "Single_SidePanel1") {
                meshes[i].position = new BABYLON.Vector3(0, 2, 0);
                meshes[i].rotation = new BABYLON.Vector3(Math.PI / 4, 0, 0);
            }*/

    }


        var hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("assets/environment/room.dds", scene);
        scene.environmentTexture = hdrTexture;

    });

    /*BABYLON.SceneLoader.ImportMesh("", baseUrl, "Roswell.glb", scene, function (meshesB) {

        for (var i = 1; i < meshesB.length; i++) {
            console.log(meshesB);
            meshesB[i]._position.x = 2;
        }
    });*/

    return scene;
}


// call the createScene function
var scene = createScene();


// run the render loop
engine.runRenderLoop(function () {
    window.addEventListener("resize", function () { engine.resize(); });

    scene.render();

});


//FEATURES


var $featuresList = $("<div>", { "class": "list-group", "id": "featuresList" });
$("#featureChoice").append($featuresList);

for (nFeatures = 0; nFeatures < umeaInfo.Features.length; nFeatures++) {
    var $feature = $("<a>", {
        "class": "list-group-item list-group-item-action",
        "id": "feature-" + umeaInfo.Features[nFeatures].Id,
        "text": umeaInfo.Features[nFeatures].Name,
        "onClick": "CreateOptions(\"" + umeaInfo.Features[nFeatures].Code + "\")"
    });
    $featuresList.append($feature)

}


//OPTIONS

function CreateOptions(inputFeaturesCode) {
    $("#geometryChoice").empty();
    $("#colorChoice").empty();
    for (nFeatures = 0; nFeatures < umeaInfo.Features.length; nFeatures++) {
        if (umeaInfo.Features[nFeatures].Code == inputFeaturesCode)
            if (umeaInfo.Features[nFeatures].Code) {                
                for (var nOptions = 0; nOptions < umeaInfo.Features[nFeatures].Options.length; nOptions++) {

                    var $colorOption = $("<div>", {
                        "class": "color-item",
                        "id": "color-" + umeaInfo.Features[nFeatures].Options[nOptions].Name,
                        "style": "background-color: " + umeaInfo.Features[nFeatures].Options[nOptions].HexaColor,
                        "onClick": "changeColor(\"" + umeaInfo.Features[nFeatures].Options[nOptions].HexaColor + "," +
                            inputFeaturesCode + "\")"
                    });
                    $("#colorChoice").append($colorOption);
                }

            }

    }
   
}

function changeColor(args) {

    var res = args.split(",");
    var hexaColor = res[0];
    var featureCode = res[1];
    var layers;

    //Layer selection
    for (nFeatures = 0; nFeatures < umeaInfo.Features.length; nFeatures++)
        if (umeaInfo.Features[nFeatures].Code == featureCode)
            layers = umeaInfo.Features[nFeatures].UsedLayers;


    //Color Appliction
    for (var meshes = 1; meshes < model.length; meshes++) {
        if (layers.includes(model[meshes].name)) {
            model[meshes]._material.albedoColor = new BABYLON.Color3.FromHexString(hexaColor);
        }
    }
}

