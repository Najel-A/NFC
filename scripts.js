function name () {
    var name = "Najel Alarcon"
    document.write(name.fontsize(6).fontcolor("white"))
}

function Linkedin() {
    var link = "https://www.linkedin.com/in/najel-alarcon-19b189198/"
    window.open(link, "_blank");
}

function Snapchat() {
    var link = "https://www.snapchat.com/add/unknown48"
    window.open(link, "_blank");
}

function Instagram() {
    var link = "https://www.instagram.com/najel_alarcon/"
    window.open(link, "_blank")
}

function Twitter() {
    var link = "https://twitter.com/najeliciouz"
    window.open(link, "_blank")
}

function TikTok() {
    var link = "https://vm.tiktok.com/ZMJxeY5Rw/"
    window.open(link, "_blank")
}

function Suprise() {
    var link = window.location.href("surpise.html")
    window.open(link, "_blank")
}

// Changes background image based on time
function time() {
    var d = new Date();
    var t = d.getHours();
    if ((t < 19) && (t > 6)) {
        document.body.style.backgroundImage = "url(./pictures/Background.png)";
        document.body.style.backgroundSize = "cover";
    }
    else {
        document.body.style.backgroundImage = "url(./pictures/Nighttime.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
    }
}