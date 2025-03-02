document.getElementById("playButton0").addEventListener("click", function () {
    window.location.href = "call.html";
});
document.getElementById("playButton1").addEventListener("click", function () {
    window.location.href = "money.html";
});
document.getElementById("playButton2").addEventListener("click", function () {
    window.location.href = "pick.html";
});
document.getElementById("playButton3").addEventListener("click", function () {
    window.location.href = "bayar.html";
});

document.getElementById("playButton4").addEventListener("click", function () {
    window.location.href = "terima.html";
});
document.getElementById("playButton5").addEventListener("click", function () {
    window.location.href = "play.html";
});
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

function pindahPage() {
    window.location.href = "login.html";
}

window.addEventListener("scroll", function () {
    window.scrollTo(0, 0);
});

