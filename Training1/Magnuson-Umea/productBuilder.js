
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
var asyncMesh;
var currentMesh;
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


        for (var i = 1; i < meshes.length; i++) {

            meshes[i].actionManager = new BABYLON.ActionManager(scene);
            meshes[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(ev) {
            }, false));

            meshes[i].isVisible = umeaInfo.defaultLayers.includes(meshes[i].name);

            meshes[i]._material.albedoColor.r = 0;
            meshes[i]._material.albedoColor.g = 0.3;
            meshes[i]._material.albedoColor.b = 0.9;
            //meshes[i]._material.albedoColor = new BABYLON.Color3.FromHexString("#FF4444");

            console.log(meshes[i]);

          /*  if (meshes[i].name == "Single_SidePanel1") {
                meshes[i].position = new BABYLON.Vector3(0, 2, 0);
                meshes[i].rotation = new BABYLON.Vector3(Math.PI / 4, 0, 0);
            }*/

    }


        var hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("assets/environment/room.dds", scene);
        scene.environmentTexture = hdrTexture;

    });


    return scene;
}


// call the createScene function
var scene = createScene();


// run the render loop
engine.runRenderLoop(function () {
    window.addEventListener("resize", function () { engine.resize(); });

    scene.render();

});

