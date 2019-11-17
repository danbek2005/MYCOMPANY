menu.onclick = function() {
    var e = document.getElementsByClassName("main-menu")[0];
    "main-menu" == e.className ? e.className += " opened" : e.className = "main-menu";
};