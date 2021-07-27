const times = (date, time) => {
  const hour = date.getHours();
  if (hour >= 5 && hour < 10) {
    time.innerHTML = "Selamat Pagi";
  }
  if (hour >= 10 && hour < 15) {
    time.innerHTML = "Selamat Siang";
  }
  if (hour >= 15 && hour < 18) {
    time.innerHTML = "Selamat Sore";
  } else {
    time.innerHTML = "Selamat Malam";
  }
};

const days = (date, day) => {
  const today = date.getDay();
  const listDay = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
  ];
  for (let i = 0; i < listDay.length; i++) {
    if (today === i + 1) {
      day.innerHTML = listDay[i];
    }
  }
};

// ? Untuk menambah barang yang ingin kita beli ke list
const add = () => {
  // const addButton = document.querySelectorAll(".add");
  // const btnAdd = Object.values(addButton);
  // const prices = [];
  // let total = 0;
  // btnAdd.map((btn) =>
  //   btn.addEventListener("click", (e) => {
  //     console.log(e.target.previousElementSibling);
  //     prices.push(e.target.previousElementSibling.lastElementChild.innerHTML);
  //     console.log(prices);
  //   })
  // );
  const card = document.querySelector(".card");
  const prices = [];
  card.addEventListener("click", (e) => {
    if (e.target.className === "add") {
      prices.push(e.target.previousElementSibling.lastElementChild.innerHTML);
    }
    order(prices);
  });
};

// ? Mengelola total yang harus dibayar
const order = (prices) => {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    const deleteRP = prices[i].split(" ");
    const price = parseInt(deleteRP[1]);
    total += price;
  }
  sessionStorage.setItem("price", total);
  console.log(total);
};

const main = () => {
  const date = new Date();
  const time = document.querySelector(".time");
  const day = document.querySelector(".day");
  const loginNav = document.querySelector(".login");
  const logout = document.querySelector(".logout");

  if (sessionStorage.hasOwnProperty("username")) {
    loginNav.innerHTML = sessionStorage.getItem("username");
    logout.style.display = "none";
  }

  if (loginNav.innerHTML !== "Login") {
    loginNav.setAttribute("href", "");
  }

  times(date, time);
  days(date, day);

  add();
};

main();
