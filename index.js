function changeHTML() {
    let element = document.getElementById("text");
    element.innerHTML = 'This is really cool!'
}

document.addEventListener("DOMContentLoaded", function(){
    changeHTML()
});

  