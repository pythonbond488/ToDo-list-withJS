const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function Addtask(){
    if(inputbox.value === ''){
        alert("You must write something...!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputbox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputbox.value = '';
    Savedata()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        Savedata()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        Savedata()
    }
}, false);

function Savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function Showdata(){
    listContainer.innerHTML = localStorage.getItem("data");
}
Showdata()