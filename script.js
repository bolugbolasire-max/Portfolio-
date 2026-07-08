const text = "Information Technology Student | Web Developer | Tech Enthusiast";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 70);

    }

}

window.onload = function () {

    typeWriter();

};