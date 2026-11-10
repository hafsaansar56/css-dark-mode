
function changeMode() {
    var btn= document.getElementById("myBtn")
    var head= document.getElementsByTagName("h1")
    var table= document.getElementsByTagName("table")

    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor="white"
        for (var i=0; i<head.length; i++) {
            head[i].style.color="black"
        }
        btn.innerHTML='<i class="fa-solid fa-moon"></i>'
        console.log("Switched to Light Mode")

    } else {
        document.body.style.backgroundColor = "black"
        table[0].style.border ="2px solid white"
        for (var i=0; i<head.length; i++) {
            head[i].style.color="white"
        }
        btn.innerHTML='<i class="fa-solid fa-sun"></i>'
        console.log("Switched to Dark Mode")
    }
}