const myText = document.getElementById("ageInput");
const mySubmit = document.getElementById("submitBtn");
const myResult = document.getElementById("resultText");
let age;
mySubmit.addEventListener("click", function() {
    age = myText.value;
    age = Number(age);
    if (age < 0) {
        myResult.textContent = "theres no way you're doing this unborn bro";
    } else if (age >= 0 && age < 10) {
        myResult.textContent = "you're in the single digits, sweet, enjoy the time there";
    } else if (age >= 10 && age < 20) {
        myResult.textContent = "Have fun with your teen years, it only goes downhill... or uphill, depends how you planned your life.";
    } else if (age >= 20 && age < 50) {
        myResult.textContent = "you're getting old. Had your mid-life crisis yet?";
    } else if (age >= 50 && age < 100) {
        myResult.textContent = "dang. You're one old guy. Retiring soon?"
    } else if (age >= 100 && age < 123) {
        myResult.textContent = "Impressive! Triple digits!"
    } else if (age >= 123) {
        myResult.textContent = "no, you're not " + age + ". enter an actually possible age dinosaur."
    } else {
        myResult.textContent = "how did you even manage to break this theres so much error handling you cant even enter anything other than a number"
    }
})