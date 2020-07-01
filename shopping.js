const add = document.getElementById("add"); 
const input = document.getElementById("input"); 
const list = document.getElementById("list");


add.addEventListener("click", function() {
    let li = document.createElement("li")
    let btn = document.createElement("button")
    btn.innerHTML = "delete"
    let newItem = document.createTextNode(input.value)

    btn.addEventListener("click", function() {
        list.removeChild(li)
    })
    
    
    if (input.value !== "") {  
    li.appendChild(newItem)
    li.appendChild(btn)
    list.appendChild(li)
    input.value = ""; }

    li.addEventListener("click", function() {
        li.classList.toggle("done")
    })

});

input.addEventListener("keypress", function(event) {
    let li = document.createElement("li")
    let btn = document.createElement("button")
    btn.innerHTML = "delete"
    let newItem = document.createTextNode(input.value)

    
    btn.addEventListener("click", function() {
        list.removeChild(li)
    })
    
   
    if (input.value !== "" && event.charCode === 13) {  
    li.appendChild(newItem)
    li.appendChild(btn)
    list.appendChild(li)
    input.value = ""; }

    li.addEventListener("click", function() {
        li.classList.toggle("done")
    })
});
