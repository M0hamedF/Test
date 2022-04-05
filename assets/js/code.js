/* Aside */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("slide").style.marginLeft = "250px";
    document.getElementById("nav").style.marginLeft = "250px";

}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("slide").style.marginLeft = "0";
    document.getElementById("nav").style.marginLeft = "0";
}