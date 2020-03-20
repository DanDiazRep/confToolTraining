
//GET DATA
var data = getUmea;

//Menu building variables
var canvas = document.getElementById('magnusonCanvas');
var container = document.getElementById('magnusonRowContainer');

var isStool = false;
var isArmless = false;
var feature = "";
var option = "";
var collection = "";
var materialSet = "";
var receptacleSelector = 1;
var size = "Single";

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
scene.clearColor = new BABYLON.Color3(0.95, 0.95, 0.95); //Background color


var createScene = function () {

   
    // Model loader
    BABYLON.GLTFFileLoader.IncrementalLoading = true;
    baseUrl = "/assets/models/";
    lowFile = data.lowFile;
    BABYLON.SceneLoader.ImportMesh("", baseUrl, lowFile, scene, function (syncMesh) {

        // Camera 
        scene.createDefaultCameraOrLight(true, true, true);
        scene.activeCamera.lowerRadiusLimit = 4000;
        scene.activeCamera.upperRadiusLimit = 9000;
        scene.activeCamera.panningSensibility = 10;
        scene.activeCamera.wheelPrecision = 0.25;
        scene.activeCamera.alpha = Math.PI / 3;
        scene.activeCamera.beta = 7 * Math.PI / 16;
        scene.activeCamera.radius = 5000;
 
               
 
        //Lightning
        scene.lights[0].dispose();
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 2, 0), scene);
        light.intensity = 0.8;

        for (var i = 1; i < syncMesh.length; i++) {
            syncMesh[i].actionManager = new BABYLON.ActionManager(scene); // Pointer behavior on model hover                       
            syncMesh[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function (ev) {
            }, false));

            //More & more bump
            if (syncMesh[i].material && syncMesh[i].material.bumpTexture) {
                syncMesh[i].material.bumpTexture.level = 1.5;
            }

            //Show me the default
            syncMesh[i].isVisible = data.defaultLayers.includes(syncMesh[i].name);

        }

        //Env texture
        var hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("assets/environment/tokyo.dds", scene);
        //var hdrTexture = new BABYLON.HDRCubeTexture("assets/environment/test-hdr.hdr", scene, 512);
        hdrTexture.gammaStapce = true;
        scene.environmentTexture = hdrTexture;


        //engine.hideLoadingUI();
        currentMesh = syncMesh;

               
            if (data.medFile) {
                asyncDownload(data.medFile);
            }
            if (data.highFile) {
                asyncDownload(data.highFile);
            }
        
    }, function (evt) {
        //On progress function

        if (evt.lengthComputable) {
            console.log("Loading, please wait..." + (evt.loaded * 100 / evt.total).toFixed() + "%");
        }
        else {

            dlCount = evt.loaded / (1024 * 1024);
            console.log("Loading, please wait..." + Math.floor(dlCount * 100.0) / 100.0 + " MB already loaded.");
        }


        }, function (error) {
            
        }
    );


    return scene;
}


// call the createScene function
var scene = createScene();


// run the render loop
engine.runRenderLoop(function () {
    window.addEventListener("resize", function () { engine.resize(); });

    scene.render();

});


//************************************************************
//******************** ASYNC DOWNLOAD **************************
//***********************************************************
function asyncDownload(lod) {
    Promise.all([

        BABYLON.SceneLoader.ImportMeshAsync(null, baseUrl, lod, scene).then(function (asyncResult) {

            asyncResult = asyncResult.meshes;
            asyncMesh = asyncResult;

            for (var i = 1; i < asyncResult.length; i++) {
                asyncResult[i].receiveShadows = true;

                asyncResult[i].actionManager = new BABYLON.ActionManager(scene);

                //ON MOUSE ENTER
                asyncResult[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function (ev) {

                }, false));

                //More & more bump
                if (asyncResult[i].material && asyncResult[i].material.bumpTexture) {
                    asyncResult[i].material.bumpTexture.level = 1.5;
                }
            }


        }),
        //select the options here
    ]).then(() => {
        for (var i = 1; i < currentMesh.length; i++) {
            asyncMesh[i]._material._albedoColor = currentMesh[i]._material._albedoColor;
            asyncMesh[i].isVisible = currentMesh[i].isVisible;
            asyncMesh[i].uniqueId = currentMesh[i].uniqueId;
            asyncMesh[i].position.y = currentMesh[i].position.y;
            currentMesh[i].dispose();
        }
        currentMesh = asyncMesh;
    });
}

function detectmob() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    }
    else {
        return false;
    }
}



var featuresData = getUmeaFeatures;

//Features list building
var $featuresList = $("<div>", { "class": "list-group", "id": "featuresList"});
$("#featuresChoice").append($featuresList);
var previousFeatureCode = "";
var buildIt = true;
for (nFeatures = 0; nFeatures < featuresData.length; nFeatures++) {
    if (nFeatures > 0) {
        if (previousFeatureCode == featuresData[nFeatures].code)
            buildIt = false;
    }
    if (buildIt) {
        var $feature = $("<a>", {
            "href": "#", "class": "list-group-list list-group-action active",
            "id": "feature-" + featuresData[nFeatures].code,
            "text": featuresData[nFeatures].label,
            "onClick": "optionsCreation(\"" + nFeatures + "," + featuresData[nFeatures].code + "\")"
        });
        $featuresList.append($feature);
    }
    previousFeatureCode = featuresData[nFeatures].code;
    buildIt = true;
}


function optionsCreation(args) {
    var res = args.split(",");
    var nFeatures = res[0];
    var selectedCode = res[1];
    var isReplicate = true;
    var sizeEnum = 0;
    switch (size) {
        case "Single": sizeEnum = 1; break;
        case "Double": sizeEnum = 2; break;
        case "Triple": sizeEnum = 3; break;
    }
    
    //Options building
    $("#geometryList").empty();
    $("#colorList").empty();
    $("#materialList").empty();
    for (nFeatures = 0; nFeatures < featuresData.length; nFeatures++) {

        if (featuresData[nFeatures].code == selectedCode) {
            
            for (var nOptions = 0; nOptions < featuresData[nFeatures].options.length; nOptions++) {

                //Append button when needed 
                if (featuresData[nFeatures].options[nOptions].replicate == true && isReplicate) {
                    receptacleSelector = 1;
                    $("#receptacleChoice").empty();
                    for (var nReps = 0; nReps < sizeEnum; nReps++) {
                        var $replicateCol = $("<div>", { "class": "col", "id": "replicateColDivider" });
                        $("#receptacleChoice").append($replicateCol);

                        var $replicateElement = $("<div>", {
                            "href": "#", "class": "receptacleSelector",
                            "id": "replicatedOption" + featuresData[0].options[nReps].replicateSize[nReps],
                            "text": featuresData[0].options[sizeEnum-1].replicateSize[nReps],
                            "onClick": "receptacleSelectorFunction(\"" + (nReps+1) + "\")"
                        });
                        $replicateCol.append($replicateElement);
                    }
                    isReplicate = false;
                }
                //Append to the geometry list
                if (featuresData[nFeatures].geometryChange) {
                    if (!featuresData[nFeatures].options[nOptions].replicate) { $("#receptacleChoice").empty(); }
                    var $featureOptions = $("<a>", {
                        "href": "#", "class": "list-group-list list-group-item-action",
                        "id": "featureOption-" + featuresData[nFeatures].options[nOptions].code,
                        "text": featuresData[nFeatures].options[nOptions].label
                    });
                   
                    $featureOptions.attr("onClick", "geometryChange(\"" + featuresData[nFeatures].options[nOptions].label + "\")");
                    $("#geometryList").append($featureOptions);
                }

                //Append to the color list
                if (featuresData[nFeatures].colorChange) {
                    var $featureOptions = $("<div>", {
                        "class": "color-item",
                        "id": "featureOption-" + featuresData[nFeatures].options[nOptions].code,                        
                        //"text": featuresData[nFeatures].options[nOptions].label,

                    });
                    $featureOptions.css({ "padding": "4px 4px 4px 4px"})
                    $featureOptions.attr("onClick", "colorChange(\"" + nFeatures + "," + featuresData[nFeatures].options[nOptions].label + "\")");

                    var $materialImage = $("<img>", {
                        "src": "assets/layout/" + featuresData[nFeatures].options[nOptions].code + ".png"
                    });
                    $featureOptions.append($materialImage);

                    //description
                    var $materialDescription = $("<p>", {
                        "text": featuresData[nFeatures].options[nOptions].label,
                        "class": "descriptionText"
                    });
                    $featureOptions.append($materialDescription);

                    $("#colorList").append($featureOptions);
                    $("#colorList").pagify(7, ".color-item");
                    $("#colorList").css({"margin": "5% auto 5% 7%"})
                }

                //Append to material list
                if (featuresData[nFeatures].materialChange) {
                    if (!featuresData[nFeatures].options[nOptions].replicate) { $("#receptacleChoice").empty(); }
                    var $featureOptions = $("<div>", {
                        "class": "material-item",
                        "id": "featureOption-" + featuresData[nFeatures].options[nOptions].code                        
                    });
                    $featureOptions.attr("onClick", "materialChange(\"" + nFeatures + "," + featuresData[nFeatures].options[nOptions].label + "\")");

                    var $materialImage = $("<img>", {
                        "src": "assets/materials/labels/" + featuresData[nFeatures].options[nOptions].code + ".png"
                    });
                    $featureOptions.append($materialImage);
                    $featureOptions.css({ "padding": "4px 4px 4px 4px" })
                    $("#materialList").append($featureOptions);
                    $("#materialList").pagify(10, ".material-item");
                }
            }
        }
    }


}


function geometryChange(selectedOption) {
    var nFeature = 0;
    var nOptions = 0;

    for (var i = 0; i < featuresData.length; i++)
        for (var j = 0; j < featuresData[i].options.length; j++) {
            if (featuresData[i].options[j].label == selectedOption) {
                nFeature = i;
                nOptions = j;
            }
        }
    
    if (featuresData[nFeature].code == "Body") {       

        for (var i = 1; i < currentMesh.length; i++) {
            //Show me the default
            currentMesh[i].isVisible = featuresData[nFeature].options[nOptions].displayedLayers.includes(currentMesh[i].name);

        }
        size = featuresData[nFeature].options[nOptions].code;       
    }

    if (featuresData[nFeature].code == "Top" || featuresData[nFeature].code == "Label") {

        function selectionAdder(sizeString) {
            if (featuresData[0].options[i].code == sizeString)
                for (var nLayers = 0; nLayers < featuresData[0].options[i].displayedLayers.length; nLayers++) {
                    
                    if (featuresData[0].options[i].displayedLayers[nLayers].includes(featuresData[nFeature].code + receptacleSelector )) {

                        featuresData[0].options[i].displayedLayers[nLayers] = featuresData[0].options[i].displayedLayers[nLayers].substring(0, featuresData[0].options[i].displayedLayers[nLayers].length - 3);
                        featuresData[0].options[i].displayedLayers[nLayers] += receptacleSelector + "_" + featuresData[nFeature].options[nOptions].id;
                    }
                }
           
        }
        for (var i = 0; i < featuresData[0].options.length; i++) {
            selectionAdder("Single"); 
            selectionAdder("Double");
            selectionAdder("Triple");
        }

        for (var nMeshes = 1; nMeshes < currentMesh.length; nMeshes++) {
            var wildcard = currentMesh[nMeshes].name.substring(0, currentMesh[nMeshes].name.length - 1);
            if (wildcard == size + "_" + featuresData[nFeature].code + receptacleSelector + "_")
                currentMesh[nMeshes].isVisible = false;

            if ((currentMesh[nMeshes].name) == size + "_" + featuresData[nFeature].code + receptacleSelector + featuresData[nFeature].options[nOptions].code)
                currentMesh[nMeshes].isVisible = true;
        }



    }

    else {
         

        //Add selection to the default layers
        function selectionAdder(sizeString) {
            if (featuresData[0].options[i].code == sizeString)                
                for (var nLayers = 0; nLayers < featuresData[0].options[i].displayedLayers.length; nLayers++) {

                    if (featuresData[0].options[i].displayedLayers[nLayers].includes(featuresData[nFeature].code)) {
                        if (featuresData[0].options[i].displayedLayers[nLayers].indexOf("Back") >= 0) {      
                           
                           featuresData[0].options[i].displayedLayers[nLayers] = sizeString + "_" + featuresData[nFeature].code + featuresData[nFeature].options[nOptions].id + "Back";
                            
                        }
                        else {
                            featuresData[0].options[i].displayedLayers[nLayers] = featuresData[0].options[i].displayedLayers[nLayers].substring(0, featuresData[0].options[i].displayedLayers[nLayers].length - 1);
                            featuresData[0].options[i].displayedLayers[nLayers] += featuresData[nFeature].options[nOptions].id;
                        }
                    }
                }
            
        } 
        
        for (var i = 0; i < featuresData[0].options.length; i++) {
            selectionAdder("Single");
            selectionAdder("Double");
            selectionAdder("Triple");
        }
        for (var nMeshes = 1; nMeshes < currentMesh.length; nMeshes++) {
            if (featuresData[nFeature].allRelatedLayers.includes(currentMesh[nMeshes].name)) 
                currentMesh[nMeshes].isVisible = false;             
                        
            if ((currentMesh[nMeshes].name) == size + "_" + featuresData[nFeature].options[nOptions].code) {
                currentMesh[nMeshes].isVisible = true;                                
            }

            //BACK CUSTOM RULE
           /* if ((currentMesh[nMeshes]._material.name == size + "_" + featuresData[nFeature].options[nOptions].code + "Back1")
                || currentMesh[nMeshes]._material.name == size + "_" + featuresData[nFeature].options[nOptions].code + "Back2") {
                currentMesh[nMeshes].isVisible = true;
                console.log(currentMesh[nMeshes].name);
            }*/

        }



    }
    /*
    // Advertising DLC
    $("#DLC").remove();
    if (selectedOption == "Advertising Panel") {
        $("#geometryList").append($("<a>", {            
            "id": "DLC", "text": "+",
            "onchange":"addAdvertising()"
           // "onClick": "addAdvertising()"
        }));

        $("#DLC").append($("<input>", { "type": "file", "id": "inputContainer" }));

    }

    */


}
/*
function addAdvertising() {
  
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();
console.log(file)
    if (file) {
        reader.readAsDataURL(file);
    }

    reader.addEventListener("load", function () {

        for (var i = 1; i < currentMesh.length; i++) {

            if (currentMesh[i]._material.name == "Single_SidePanel4") {
                var adTexture = new BABYLON.Texture.CreateFromBase64String(reader.result,scene);
                currentMesh[i]._material._albedoTexture = null;
                currentMesh[i]._material._albedoTexture = adTexture;
                currentMesh[i]._material._albedoTexture.vAng = -Math.PI;
                currentMesh[i]._material._albedoTexture.wAng = -Math.PI;
                console.log(adTexture + " " + i);
            }
        }
    }, false);


    
 
}*/


function colorChange(args) {
    var res = args.split(",");
    var nFeature = res[0];
    var selectedOption = res[1];
    var nOptions = 0;

   
    for (var j = 0; j < featuresData[nFeature].options.length; j++) {
            if (featuresData[nFeature].options[j].label == selectedOption) {
                nOptions = j;
            }
        }
    
    var colorCode = featuresData[nFeature].options[nOptions].colorCode;
    for (var i = 1; i < currentMesh.length; i++) {
        if (featuresData[nFeature].allRelatedLayers.includes(currentMesh[i]._material.name) && featuresData[nFeature].code != "Top" && featuresData[nFeature].code != "Label")
        currentMesh[i]._material._albedoColor = new BABYLON.Color3.FromHexString(colorCode);

        if (featuresData[nFeature].code == "Top" || featuresData[nFeature].code == "Label") {
            var wildcard = size + "_" + featuresData[nFeature].code + receptacleSelector;
            if (currentMesh[i]._material.name.substring(0, currentMesh[i]._material.name.length -2) == (wildcard)) {
                currentMesh[i]._material._albedoColor = new BABYLON.Color3.FromHexString(colorCode);


            }
        }

        if (featuresData[nFeature].code == "Label") {
            var wildcard = size + "_" + featuresData[nFeature].code + receptacleSelector;
            if (currentMesh[i]._material.name == (wildcard)) {
                currentMesh[i]._material._albedoColor = new BABYLON.Color3.FromHexString(colorCode);


            }
        }
    }

}

function materialChange(args) {
    var args = args.split(",");
    var nFeature = args[0];
    var selectedOption = args[1];
    var nOptions = 0;

    for (var j = 0; j < featuresData[nFeature].options.length; j++) {
        if (featuresData[nFeature].options[j].label == selectedOption) {
            nOptions = j;

        }
    }
    var path = "assets/materials/labels/";
    for (var i = 1; i < currentMesh.length; i++) {
        if (featuresData[nFeature].code == "Label") {
            var wildcard = size + "_" + featuresData[nFeature].code + receptacleSelector;
            if (currentMesh[i].name == wildcard) {
                currentMesh[i]._material._albedoTexture = new BABYLON.Texture(path + featuresData[nFeature].options[nOptions].code + ".png", scene);
                currentMesh[i]._material._opacityTexture = new BABYLON.Texture(path + featuresData[nFeature].options[nOptions].code + ".png", scene);
                currentMesh[i]._material._albedoTexture.vAng = -Math.PI;
                currentMesh[i]._material._albedoTexture.wAng = -Math.PI;
                currentMesh[i]._material._opacityTexture.vAng = -Math.PI;
                currentMesh[i]._material._opacityTexture.wAng = -Math.PI;
            }
        }
    }

}



function receptacleSelectorFunction(selection) {
    receptacleSelector = parseInt(selection);
}



(function ($) {
    var pagify = {
        items: {},
        container: null,
        totalPages: 1,
        perPage: 3,
        currentPage: 0,
        createNavigation: function () {
            this.totalPages = Math.ceil(this.items.length / this.perPage);

            $('.pagination', this.container.parent()).remove();
            var pagination = $('<div class="pagination"></div>').append('<a class="nav prev disabled" data-next="false"><</a>');

            for (var i = 0; i < this.totalPages; i++) {
                var pageElClass = "page";
                if (!i)
                    pageElClass = "page current";
                var pageEl = '<a class="' + pageElClass + '" data-page="' + (
                    i + 1) + '">' + (
                        i + 1) + "</a>";
                pagination.append(pageEl);
            }
            pagination.append('<a class="nav next" data-next="true">></a>');

            this.container.after(pagination);

            var that = this;
            $("body").off("click", ".nav");
            this.navigator = $("body").on("click", ".nav", function () {
                var el = $(this);
                that.navigate(el.data("next"));
            });

            $("body").off("click", ".page");
            this.pageNavigator = $("body").on("click", ".page", function () {
                var el = $(this);
                that.goToPage(el.data("page"));
            });
        },
        navigate: function (next) {
            // default perPage to 5
            if (isNaN(next) || next === undefined) {
                next = true;
            }
            $(".pagination .nav").removeClass("disabled");
            if (next) {
                this.currentPage++;
                if (this.currentPage > (this.totalPages - 1))
                    this.currentPage = (this.totalPages - 1);
                if (this.currentPage == (this.totalPages - 1))
                    $(".pagination .nav.next").addClass("disabled");
            }
            else {
                this.currentPage--;
                if (this.currentPage < 0)
                    this.currentPage = 0;
                if (this.currentPage == 0)
                    $(".pagination .nav.prev").addClass("disabled");
            }

            this.showItems();
        },
        updateNavigation: function () {

            var pages = $(".pagination .page");
            pages.removeClass("current");
            $('.pagination .page[data-page="' + (
                this.currentPage + 1) + '"]').addClass("current");
        },
        goToPage: function (page) {

            this.currentPage = page - 1;

            $(".pagination .nav").removeClass("disabled");
            if (this.currentPage == (this.totalPages - 1))
                $(".pagination .nav.next").addClass("disabled");

            if (this.currentPage == 0)
                $(".pagination .nav.prev").addClass("disabled");
            this.showItems();
        },
        showItems: function () {
            this.items.hide();
            var base = this.perPage * this.currentPage;
            this.items.slice(base, base + this.perPage).show();

            this.updateNavigation();
        },
        init: function (container, items, perPage) {
            this.container = container;
            this.currentPage = 0;
            this.totalPages = 1;
            this.perPage = perPage;
            this.items = items;
            this.createNavigation();
            this.showItems();
        }
    };

    // stuff it all into a jQuery method!
    $.fn.pagify = function (perPage, itemSelector) {
        var el = $(this);
        var items = $(itemSelector, el);

        // default perPage to 5
        if (isNaN(perPage) || perPage === undefined) {
            perPage = 3;
        }

        // don't fire if fewer items than perPage
        if (items.length <= perPage) {
            return true;
        }

        pagify.init(el, items, perPage);
    };
})(jQuery);

optionsCreation("0,Body");
