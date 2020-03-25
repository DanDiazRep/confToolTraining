
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
//scene.clearColor = new BABYLON.Color3(0.95, 0.95, 0.95); //Background color


var createScene = function () {


    // Model loader
    BABYLON.GLTFFileLoader.IncrementalLoading = true;
    baseUrl = "/assets/models/";
    lowFile = "umea.glb";
    BABYLON.SceneLoader.ImportMesh("", baseUrl, lowFile, scene, function (syncMesh) {

        // Camera 
        scene.createDefaultCameraOrLight(true, true, true);        
        scene.activeCamera.alpha = Math.PI / 3;
        scene.activeCamera.beta = 7 * Math.PI / 16;
        scene.activeCamera.radius = 5000;



        //Lightning
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 2, 0), scene);
        light.intensity = 0.8;


        //Env texture
        var hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("assets/environment/city.dds", scene);
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

