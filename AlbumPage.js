const songHighliter = function(){
    songNode= document.getElementsByClassName("song")
    for(let i =0;i<songNode.length;i++){
        songNode[i].addEventListener("mouseover",function(e){
            songNode[i].classList.add("highLighting")
        })
    }
    
}   

 songHighliter()

// onmouseover , , add like heart icon with margin right, add three dots icon with margin left

// highlight : add .highLighting  // on mouseleft   with IF ???
// song number : remover innertext and add .listPlay 
//
//