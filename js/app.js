$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu/navbar script

    $(".menu-btn").click(function() {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    })
});

// typing animation script

let typed = new Typed (".typing", {
    strings: [ "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

let type = new Typed (".typing-2", {
    strings: [ "Full Stack Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-content');

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link')
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add("active-tab")
}