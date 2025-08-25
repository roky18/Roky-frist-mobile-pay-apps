let ValidPin = 1234;

// add Money Section--
document.getElementById("AddMny").addEventListener("click", function (e) {
  e.preventDefault();

  let selectBank = document.getElementById("BankSl").value;
  let BankAccount = document.getElementById("BankAc").value;
  let BankAmount = parseInt(document.getElementById("Amount").value);
  let Pin = parseInt(document.getElementById("Pin").value);

  let AvBlance = parseInt(document.getElementById("ToAmount").innerText);

  if (BankAccount.length < 11 || BankAccount.length > 13) {
    alert("Plase Provide A Valide Acount Number");
    return;
  }
  if (Pin !== ValidPin) {
    alert("Plase Provide A Valide pin Number");
    return;
  }

  let NewBlance = AvBlance + BankAmount;

  document.getElementById("ToAmount").innerText = NewBlance;

  console.log(AvBlance);
});

// cash Out Section-
let wPin = 9090;
document.getElementById("withdraw-Btn").addEventListener("click", function (e) {
  e.preventDefault();
  let withdraw = parseInt(document.getElementById("withdraw-inp").value);
  let AvlBlance = parseInt(document.getElementById("ToAmount").innerText);
  let AgentNumber = document.getElementById("AgentNbr").value;
  let withdraPin = parseInt(document.getElementById("withdrawPin").value);

  if (AgentNumber.length !== 11) {
    alert("Please Provide A Valide Acount Number");
    return;
  }
  if (withdraPin !== wPin) {
    alert("Please Provide A Valide pin Number");
    return;
  }

  let newAvBalence = AvlBlance - withdraw;
  document.getElementById("ToAmount").innerText = newAvBalence;
});

//function to toggle//
function handleToggle(id) {
  let allSections = document.getElementsByClassName("allSection");

  for (let allSection of allSections) {
    allSection.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}

//fungction to buttone handle//

function handleBtn(id) {
  let formBtn = document.getElementsByClassName("form-btn");
  for (let btn of formBtn) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}
// toggling feature---

document.getElementById("addMoney-Btn").addEventListener("click", function () {
  handleToggle("addMoney");
  handleBtn("addMoney-Btn");
});
document.getElementById("cashOut-Btn").addEventListener("click", function () {
  handleToggle("cashOut");
  handleBtn("cashOut-Btn");
});

// transfer butone--->

document.getElementById("Transfer-Btn").addEventListener("click", function () {
  handleToggle("transMoney");
  handleBtn("Transfer-Btn");
});

let wPinTf = 9090;
document.getElementById("sendBtn").addEventListener("click", function (e) {
  e.preventDefault();

  let AgentNumberTTf = document.getElementById("AgentNbrTf").value;
  let withdraPinTTf = parseInt(document.getElementById("withdrawPinTf").value);

  if (AgentNumberTTf.length !== 11) {
    alert("Please Provide A Valide Acount Number");
    return;
  }

  // prrrrooooooobbbbbbbllllllllleeeeem--
  if (withdraPinTTf !== wPinTf) {
    alert("Please Provide A Valide pin Number");
    return;
  }
});
// bonuse-->
document.getElementById("Bonus").addEventListener("click", function () {
  let allSections = document.getElementsByClassName("allSection");

  for (let allSection of allSections) {
    allSection.style.display = "none";
  }

  document.getElementById("bonusMny").style.display = "block";

  handleBtn("Bonus");
});

// pay bill--->

document.getElementById("PayBillBtn").addEventListener("click", function () {
  handleToggle("billpay");
  handleBtn("PayBillBtn");
});
// Transction--->

document.getElementById("TrnBtn").addEventListener("click", function () {
  handleToggle("Transactions");
  handleBtn("TrnBtn");
});
