
let arr =JSON.parse( localStorage.getItem("arr"));



let inptdiv = document.querySelector(".inptdiv");
let btnn = document.querySelector(".btn");
let bg = document.querySelector(".bg");

let addbtn = document.getElementById("addbtn");
let clbtn = document.getElementById("clbtn");
let inpt = document.getElementById("inpt");
let texta = document.getElementById("texta");
let divB = document.getElementById("divB");




function data() {
 divB.innerHTML="";
    for (let i = 0; i < arr.length; i++) {
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        let but = document.createElement("button");
        but.addEventListener("click", function (event) {
            event.preventDefault();
           
            arr=arr.filter(function(value,index){
                return index !==i;
            })
            data();
            localStorage.setItem("arr",JSON.stringify(arr));
        })
        div.classList.add("div");
        but.classList.add("btun");
        h1.style.color = "rgb(68, 49, 49)";
        h2.style.flexGrow = "1";
        h2.style.color = " rgb(48, 48, 48)";

        h1.innerHTML = arr[i].hed;
        h2.innerHTML = arr[i].para;
        but.innerHTML = "remove";

        div.append(h1);
        div.append(h2);
        div.append(but);
        divB.append(div);
        div.append(name);
    }
}

btnn.addEventListener("click", function () {

    bg.style.display = "block";
    inptdiv.style.display = "block";

})




clbtn.addEventListener("click", function () {
    event.preventDefault();

    inptdiv.style.display = "none";
    bg.style.display = "none";

})



addbtn.addEventListener("click", function (event) {

    event.preventDefault();

    let name = {
        hed: inpt.value,
        para: texta.value,
    }
 
    

    arr.push(name);
    data();
   localStorage.setItem("arr",JSON.stringify(arr));

    inptdiv.style.display = "none";
    bg.style.display = "none";
})
data();