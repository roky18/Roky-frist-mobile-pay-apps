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
// toggling feature---
document.getElementById("addMoney-Btn").addEventListener("click", function () {
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("addMoney").style.display = "block";
});
document.getElementById("cashOut-Btn").addEventListener("click", function () {
  document.getElementById("addMoney").style.display = "none";
  document.getElementById("cashOut").style.display = "block";
});
