const button = document.querySelector(".js-button");
const message = document.querySelector("main .message-sent");

button.addEventListener("click", () => {
    const fname = document.querySelector(".js-fname");
    const lname = document.querySelector(".js-lname");
    const email = document.querySelector(".js-email");
    const radio = document.querySelectorAll(".js-radio");
    const textarea = document.querySelector(".js-textarea");
    const checkbox = document.querySelector(".js-checkbox");

    const form = document.querySelector("main .form");

    let fnameValid = false, lnameValid = false, emailValid = false, radioValid = false, textareaValid = false, checkboxValid = false;

    function fitContent() {
        if (form.style.height !== "773px") {
            form.style.height = "fit-content";
        } else {
            form.style.height = "773px";
        }
    }

    function check(element, name, valid) {
        const error = document.querySelector(`.js-${name}-error`);
        const validError = document.querySelector(".js-valid-error");

        if (!element.value) {
            element.style.borderColor = "hsl(0, 66%, 54%)";
            error.style.display = "block";
            fitContent();
            valid = false;
        } else if (name === "email" && email.value && !(/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email.value))) {
            email.style.borderColor = "hsl(0, 66%, 54%)";
            validError.style.display = "block";
            error.style.display = "none";
            fitContent();
            valid = false;
        } else {
            element.style.borderColor = "hsl(187, 24%, 22%)";
            validError.style.display = "none";
            error.style.display = "none";
            fitContent();
            valid = true;
        }

        return valid;
    }

    function radioCheck() {
        const error = document.querySelector(".radio-error");
        if (!radio[0].checked && !radio[1].checked) {
            error.style.display = "block";
            fitContent();
        } else {
            radioValid = true;
            error.style.display = "none";
            fitContent();
        }
    }

    function checkboxCheck() {
        const error = document.querySelector(".js-check-error");

        if (!checkbox.checked) {
            error.style.display = "block";
        } else {
            checkboxValid = true;
            error.style.display = "none";
        }
    }

    fnameValid = check(fname, "fname", fnameValid);
    lnameValid = check(lname, "lname", lnameValid);
    emailValid = check(email, "email", emailValid);
    radioCheck();
    textareaValid = check(textarea, "message", textareaValid);
    checkboxCheck();

    if (fnameValid && lnameValid && emailValid && radioValid && textareaValid && checkboxValid) {
        fname.value = "";
        lname.value = "";
        email.value = "";
        radio.forEach((value, index) => {
            radio[index].checked = false;
        })
        textarea.value = "";
        checkbox.checked = false;

        message.classList.add("message-animation");
    }
})

message.addEventListener("animationend", () => {
    message.classList.remove("message-animation");
})