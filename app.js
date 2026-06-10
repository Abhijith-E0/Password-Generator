const passwordField = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");


lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {

    let chars = "";

    if (uppercase.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase.checked) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers.checked) chars += "0123456789";
    if (symbols.checked) chars += "!@#$%^&*()_+[]{}<>?/";

    if (chars === "") {
        alert("Select at least one option!");
        return;
    }

    let password = "";

    for (let i = 0; i < lengthSlider.value; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    passwordField.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
    if (passwordField.value === "") {
        alert("No password to copy!");
        return;
    }
    navigator.clipboard.writeText(passwordField.value);

    copyBtn.textContent = "Copied!";

    setTimeout(() => {
        copyBtn.textContent = "Copy";
    }, 1500);
});

clearBtn.addEventListener("click", () => {
    passwordField.value = "";
});

// Generate a password when page loads
generatePassword();