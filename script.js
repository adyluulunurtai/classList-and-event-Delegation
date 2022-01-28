window.addEventListener("DOMContentLoaded", ()=>{
 
 
let btns = document.querySelectorAll('button');
let wrapper = document.querySelector(".btn-block");

wrapper.addEventListener("click", (e)=>{
    if(e.target&& e.target.tagName == "BUTTON"){
        console.log("pravilno")
    } else{
        console.log("nepravilno")
    }
});

const some = document.createElement("button");
wrapper.append(some);


;
if(btns[0].classList.contains('blue')){
    console.log("est")
}
else{
    console.log("netu")
}

btns[1].classList.add("red");
btns[0].classList.remove("blue");
console.log(btns[0].classList.item(0))
btns[0].classList.toggle("blue");

btns[0].addEventListener("click", (e)=>{
    btns[1].classList.toggle("red");
})



    


})