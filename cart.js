var removeButton = document.getElementsByClassName("remove");

for (i = 0; i < removeButton.length; i++) {
    var button = removeButton[i]
    button.addEventListener("click", function (event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
    })
}

var increment = 0;

function add(elemeId) {
    increment++;
    document.getElementById(elemeId).innerHTML = increment;
}

function sub(elemeId) {
    increment--;
    document.getElementById(elemeId).innerHTML = increment;
}