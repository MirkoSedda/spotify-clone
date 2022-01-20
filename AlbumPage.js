const mouseoverSong = function(){
    songNode= document.getElementsByClassName("song")
    numNode = document.getElementsByClassName("listNumber")
    heartNode = document.getElementsByClassName("heartSong")
    threeDotsNode = document.getElementsByClassName("threeDotsSong")
    for(let i =0;i<songNode.length;i++){
        songNode[i].addEventListener("mouseover",function(e){
            songNode[i].classList.add("highLighting")
            numNode[i].innerText = " "
            numNode[i].classList.add("listPlay")
            heartNode[i].classList.toggle("hidden")
            threeDotsNode[i].classList.toggle("hidden")
        })
    }
    
    for(let i =0;i<songNode.length;i++){
        songNode[i].addEventListener("mouseleave",function(e){
            songNode[i].classList.toggle("highLighting")
            numNode[i].innerText = i+1
            numNode[i].classList.toggle("listPlay")
            heartNode[i].classList.toggle("hidden")
            threeDotsNode[i].classList.toggle("hidden")
        })

    }
    
}   

 mouseoverSong()

// onmouseover , , add like heart icon with margin right, add three dots icon with margin left

// remove pr-5 , add px-2 .. maybe createElement(2) cause i dont know how to put the 3 dots after time