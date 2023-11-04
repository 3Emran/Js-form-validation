const username = document.getElementById("usrename");
const password = document.getElementById("password");
function showError(input, message) {
    formControl = input.parentElement;
    formControl.className = "form control eror";
    const small = formControl.querySelector("small");
    small.innerText = message;
}
console.log("Hello world");