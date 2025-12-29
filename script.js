var lists=document.getElementById("inputbox")
var createvalues=document.getElementById("createvalue")
function enter(){
      if (lists.value.trim() === "") return; //empty box not created
    
    var h1=document.createElement("h1")
     
     var checkbox = document.createElement("input");
     checkbox.type = "checkbox";
    checkbox.onchange = function () {
        if (checkbox.checked) {
            h1.style.textDecoration = "line-through";
        } else {
            h1.style.textDecoration = "none";
        }
    };
   
    
   
    h1.textContent = lists.value
    h1.appendChild(checkbox);
    createvalues.appendChild(h1);

    lists.value = "";// clear the box

    
    
}