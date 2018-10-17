function toggleButton() {
    var x = document.getElementById("menu");
    if (x.className === "header__navbar") {
        x.className += " responsive";
    } else {
        x.className = "header__navbar";
    }
}