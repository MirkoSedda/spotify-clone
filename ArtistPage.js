const mouseoverSong = function(){
    songNode= document.getElementsByClassName("song")
    numNode = document.getElementsByClassName("listNumber")
    for(let i =0;i<songNode.length;i++){
        songNode[i].addEventListener("mouseover",function(e){
            songNode[i].classList.add("highLighting")
            numNode[i].innerText = " "
            numNode[i].classList.add("listPlay")

        })
    }
    
    for(let i =0;i<songNode.length;i++){
        songNode[i].addEventListener("mouseleave",function(e){
            songNode[i].classList.toggle("highLighting")
            numNode[i].innerText = i+1
            numNode[i].classList.toggle("listPlay")
        })

    }
    
}   

 mouseoverSong()