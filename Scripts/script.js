
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



var imageJSON = [{"name": "Pic of Birthday", "imageurl": "./Images/JPEG_20180315_103249_file772084190.jpg", "date": "15/06/2017"},
           {"name": "Sinhagadh fort top", "imageurl": "./Images/IMG_20180218_103646288_HDR.jpg", "date": "14/03/2018"},
           {"name": "Right after getting a job", "imageurl": "./Images/JPEG_20180315_103332_file1139079576.jpg", "date": "05/09/2017"},
           {"name": "Jaisalmer trip", "imageurl": "./Images/JPEG_20180315_103405_file46115999.jpg", "date": "12/12/2017"}
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
