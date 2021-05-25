const tableIcon = document.getElementById("table-icon");
const chatbots = document.getElementById("library-chatbots");
const letters = document.getElementById("lettersFilter")
let showHide = true;
let attr = tableIcon.src;
var btn = document.createElement("BUTTON");
// check if  chatbots section appears
tableIcon.addEventListener("click",function(){
    if(showHide){
        letters.style.display = "block";
        chatbots.style.display = "none";
        tableIcon.src = "images/table2.svg";
        showHide = false;
    }else{
        letters.style.display = "none";
        chatbots.style.display = "flex";
        tableIcon.src = "images/table1.svg";
        showHide = true;
    }
})

for(let i = 0 ; i <33 ; i++){
    let letterUl = document.createElement("ul");
    let letterLi = document.createElement("li");
    let h4 = document.createElement("h4");
    h4.innerText = String.fromCharCode(4304+i);
    letterLi.innerText = `${String.fromCharCode(4304+i)}-ზე სახელი`
    letters.appendChild(letterUl);
    letterUl.appendChild(h4)
    letterUl.appendChild(letterLi);
}
