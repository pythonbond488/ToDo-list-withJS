const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function Addtask() {
    if (inputbox.value === '') {
        alert("You must write something...!")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputbox.value = '';
    Savedata()
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        Savedata()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        Savedata()
    }
}, false);

function Savedata() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function Showdata() {
    listContainer.innerHTML = localStorage.getItem("data");
}
Showdata()




function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
    document.getElementById('clock').innerHTML = dateString + ' ' + timeString;
}

setInterval(updateClock, 1000); // Har 1 second baad update karega
updateClock(); // Page load hote hi ek baar call karega
