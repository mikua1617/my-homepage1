
      function addNewImage(captext, source){
        var newfig = document.createElement("figure");
        var newfigCap = document.createElement("figcaption");
        var captiontext = document.createTextNode(captext);
        newfigCap.appendChild(captiontext);

        var newimg = document.createElement("img");
        newimg.src = source;
        var ele = document.getElementById('gallery_top');
        newfig.appendChild(newimg);
        newfig.appendChild(newfigCap);
        ele.appendChild(newfig);
      }


if(localStorage.myJSONobj === undefined){



var imageJSON = [{"name": "Pic of Birthday", "imageurl": "./Images/JPEG_20180315_103249_file772084190.jpg"}, 
           {"name": "Sinhagadh fort top", "imageurl": "./Images/IMG_20180218_103646288_HDR.jpg"},
           {"name": "Right after getting a job", "imageurl": "./Images/JPEG_20180315_103332_file1139079576.jpg"},
           {"name": "Jaisalmer trip", "imageurl": "./Images/JPEG_20180315_103405_file46115999.jpg"} 
            ];

}



var x = JSON.stringify(imageJSON);

if(localStorage.getItem('myJSONobj') === undefined){

    localStorage.setItem('myJSONobj', x);
}

else{
    var allimages = JSON.parse(localStorage.getItem('myJSONobj'))
}



for (var i=0; i<allimages.length; i++){

    addNewImage(allimages[i].name, allimages[i].imageurl);
}


