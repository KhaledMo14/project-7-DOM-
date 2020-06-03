

var img = document.getElementsByClassName("imgitem") ;

var overlaycontainer = document.querySelector(".overlaycontainer") ;

var myclose = document.getElementById("close")

var overlaybox = document.querySelector(".overlaybox")

var prev = document.getElementById ("prev") 

var next = document.getElementById("next")

var imgArr = [] ;

var globalIndex ;


for (var i=0 ; i<img.length ; i++) 
{
    imgArr.push(img[i])

}

for(var i=0 ; i < imgArr.length ; i++)
{
    imgArr[i].addEventListener("click" , function(e)
    {
        
        var clickedImg = e.target ; 
        
        var index = imgArr.indexOf(clickedImg) ;

        globalIndex = index ;
        
        overlaycontainer.style.display = "block"

        
        var imgSrc = clickedImg.src ; 
       
        overlaybox.style.backgroundImage = "url("+imgSrc+")"
    })
}

myclose.onclick = function ()
{
    overlaycontainer.style.display = "none"
}

next.onclick = function () 
{
    globalIndex++ ; 

    if (globalIndex === imgArr.length)
    {
        globalIndex = 0
    }

    imgSrc = imgArr[globalIndex].src ; 

    overlaybox.style.backgroundImage = "url("+imgSrc+")"

}

prev.onclick = function () 
{
    globalIndex--; 
    
    if (globalIndex < 0)
    {
        globalIndex = imgArr.length - 1
    }

    imgSrc = imgArr[globalIndex].src ; 

    overlaybox.style.backgroundImage = "url("+imgSrc+")"
}