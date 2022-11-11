let menu = document.querySelector(".menu-icon");

menu.addEventListener("click", () => {
    menu.classList.toggle("move");


}
);
// Email JS
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let message = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || message.value == "") {
            emptyerror();

        }
        else {
            sendmail(name.value, email.value, message.value);
            success();
        }
    });
}

validate();

function sendmail() {
    emailjs.send("service_str78u3", "template_8raez0n", {

        from_name: email,
        to_name: name,
        message: message,

    });
}

function emptyerror() {
    swal({
        title: "Oh No....!",
        text: "Fields cannot be empty!",
        icon: "Error!",
    });
}
function success() {
    swal({
        title: "Email sent!",
        text: "We try to repy within 24 hours!",
        icon: "Success!",
    });
}

// Header Backgroud Change On Scroll

let header = document.querySelector('header')

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

// Scroll top
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >400);
});

// Skills
(function($){
    new WOW().init();
})(jQuery);



