function openImg(img){
    //Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    //Use the same src in the expanded as the image being clicked on from the grid 
    expandImg.src = img.src;
    //show the container element (hidden with css)
    expandImg.parentElement.style.display = "block";
}
