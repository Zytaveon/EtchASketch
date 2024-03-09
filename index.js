
const tryMe = document.getElementById("temp");
const divList = document.getElementById("divList");




tryMe.onclick = function(){

    for(let i = 0; i < divList.children.length + 1; ++i){
       divList.removeChild(divList.children[0]);
       console.log(divList);
    }
    
    for(let i = 0; i < 3; ++i){
        let child = document.createElement("div");
        child.classList.add("box");
        divList.appendChild(child);
    }

    //console.log(divList);

    

    window.alert("we here");
}
