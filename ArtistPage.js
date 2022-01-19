const mouseoverSong = function(){
    songNode= document.getElementsByClassName("song")
    numNode = document.getElementsByClassName("listNumber")
    for(let i =0;i<songNode.length;i++){
        songNode[i].addEventListener("mouseover",function(e){
            songNode[i].classList.add("highLighting")
            numNode[i].innerText = " "
            /* numNode[i].classList.add("listPlay") */
            numNode[i].innerHTML= `<span><i class="bi bi-caret-right-fill"></i></span>`
            
        })
    }
    
    for(let i =0;i<songNode.length;i++){
        songNode[i].addEventListener("mouseleave",function(e){
            songNode[i].classList.toggle("highLighting")
            numNode[i].innerText = i+1
            /* numNode[i].classList.toggle("listPlay") */
            numNode[i].innerHTML= `<span>1</span>`
        })

    }
    
}   

 mouseoverSong()
