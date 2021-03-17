// let e = document.getElementsByClassName("new_list");
// e.onmouseover = function(){
//     document.getElementsByClassName("new_list_pop_up").style.diplay = "block";
// }
// e.onmouseout = function() {
//     document.getElementById("new_list_pop_up").style.display = "none";
//   }


function newTask () {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").nodeValue;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("checklist").appendChild(li);
      }

      document.getElementById("myInput").value = "":

      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}
