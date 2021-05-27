const messengerBtn = document.getElementById("messenger-button");
const closeBtn = document.getElementById("close-chatbox")
const content = document.getElementById("messenger-content");
// close/open messenger content 
messengerBtn.addEventListener("click",function(){
    content.style.opacity = 1;
    messengerBtn.style.opacity = 0;
});
closeBtn.addEventListener("click",function(){
    content.style.opacity = 0;
    messengerBtn.style.opacity = 1;
});