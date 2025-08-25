let ValidPin = 1234;
let Transactions = [];

// add Money Section--
document.getElementById("AddMny").addEventListener("click", function (e) {
  e.preventDefault();

  let selectBank = document.getElementById("BankSl").value;
  let BankAccount = document.getElementById("BankAc").value;
  let BankAmount = parseInt(document.getElementById("Amount").value);
  if (BankAmount <= 0) {
    alert("Invalide,,,Eto kom Taka Add hoy na");
    return;
  }
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

  let deta = {
    name: "Add money",
    date: new Date().toLocaleTimeString(),
  };
  Transactions.push(deta);

  console.log(Transactions);
});

// cash Out Section-
let wPin = 9090;
document.getElementById("withdraw-Btn").addEventListener("click", function (e) {
  e.preventDefault();
  let withdraw = parseInt(document.getElementById("withdraw-inp").value);

  let AvlBlance = parseInt(document.getElementById("ToAmount").innerText);
  let AgentNumber = document.getElementById("AgentNbr").value;
  let withdraPin = parseInt(document.getElementById("withdrawPin").value);

  if (withdraw <= 0 || withdraw > AvlBlance) {
    alert("Invalide,,,Eto kom Taka cash out hoy na");
    return;
  }

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

  let deta = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  Transactions.push(deta);
  console.log(Transactions);
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

// Transactions sec//

document.getElementById("TrnBtn").addEventListener("click", function () {
  let TransactionsContainer = document.getElementById("Transactions-container");
  TransactionsContainer.innerText = "";
  for (let deta of Transactions) {
    let div = document.createElement("div");
    div.innerHTML = `
      <div
            class="bg-white rounded-xl p-3 flex justify-between items-center mt-3"
          >
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-[#f4f5f7]">
                <img src="./assets/wallet1.png" class="mx-auto" alt="" />
              </div>
              <div class="ml-3">
                <h1>${deta.name}</h1>
                <p>${deta.date}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>`;

    TransactionsContainer.appendChild(div);
  }
});
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

let logoutBtn = document
  .getElementById("logOut")
  .addEventListener("click", function () {
    window.location.href = "./index.html";
  });
