
const tryMe = document.getElementById("temp");
let divList = document.getElementById("divList");

let desiredBoxes = 19;

tryMe.onclick = function(){

    let columns = Array.from(document.querySelectorAll(".column"));

    for(let i = 0; i < columns.length; ++i){
        divList.removeChild(columns[i]);
    }

    

    for(let i = 0; i < desiredBoxes; ++i){
        let newColumn = document.createElement("div");
        newColumn.classList = "column";
        for(let j = 0; j < desiredBoxes; ++j){
            let newBox = document.createElement("div");
            newBox.classList = "box";
            newBox.addEventListener("mouseover", changeBox);
            newColumn.append(newBox);
        }

        divList.append(newColumn);
    }


    console.log(divList);
}

function changeBox(event){
    event.target.classList = "box_visited";
}



