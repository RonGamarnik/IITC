function storywrite() {
    document.getElementById("btn1").classList.add("hide")

    let age = prompt("Please enter your age.");
    if (age <= 12) {
        alert("The story is not for you");
    }
    else {
        let name = prompt("Please enter your name.");
        let city = prompt("Please enter the name of your city.");
        if (name == "Ron") {
            document.getElementById("story1").innerHTML = "I am sorry Suprem Leader"
        }
        else {
            document.getElementById("story1").innerHTML = " Hello " + name + " I know that you are " + age + " years old, and i know that you live in " + city + " now im coming for you!!!!!!";

        }

    }
}
function storywrite2() {
    let age = prompt("Please enter your age.");
    if (age <= 12) {
        alert("The story is not for you");
    }
    else {
        document.getElementById("story2").innerHTML = "your story is too boring to write";
    }
}