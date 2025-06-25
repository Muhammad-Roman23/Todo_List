/*let input = document.querySelector("input");
let button = document.querySelector("button");
let text = document.querySelector(".text");

function btn (){
    if(input.value == ""){
        alert ("Please write something")
    }else{
        let newEle  = document.createElement("ul");
        newEle.innerText= `${input.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle)
        input.value = ""
        
    }
}

button.addEventListener("click",() => {
    console.log("roman");
    btn();
    
})*/

let input = document.querySelector("input");
let button = document.querySelector ("button");
let text = document.querySelector(".text");
let photo = document.querySelector(".image")

function btn (){
    if(input.value == ""){
        alert ("Please write something");
    }
    else{
       let newEle = document.createElement("ul");
       newEle.innerText = input.value
       text.appendChild(newEle);
       input.value = ""
       
    }
}


button.addEventListener("click", () => {
    btn();
    console.log("roman")
})