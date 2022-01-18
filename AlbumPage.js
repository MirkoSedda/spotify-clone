const songHighliter = function(){
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

 songHighliter()

// onmouseover , , add like heart icon with margin right, add three dots icon with margin left

// highlight : add .highLighting  // on mouseleft    hide inner
// song number : remover innertext and add .listPlay 
//
//