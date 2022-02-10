const loginButton = document.getElementById("login");
loginButton.addEventListener("click", function() {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
});

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function() {
    const depositNumber = getInputNumber("depositAmount");



    if (document.getElementById("depositAmount").value == "") {
        alert("field can't be empty");
    } else {
        updateSpanText("current-deposit", depositNumber);
        updateSpanText("currentBalance", depositNumber);
    }
    document.getElementById("depositAmount").value = "";
});
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function() {
    var withdrawNumber = getInputNumber("withdrawAmount");
    if (document.getElementById("withdrawAmount").value == "") {
        alert("field can't be empty");
    } else {
        updateSpanText("currentWithdraw", withdrawNumber);
        updateSpanText("currentBalance", -1 * withdrawNumber);
    }

    document.getElementById("withdrawAmount").value = "";
});

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const number = parseFloat(amount);
    return number;
}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + depositNumber;
    document.getElementById(id).innerText = total;
}