const submit = document.querySelector(".submit-btn");
const input = document.querySelectorAll("input");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = [];
  //   const badge = ["Nama Pemesan : ", "Alamat", "Jumlah", "No Telp", "Email"];
  input.forEach((e) => inputValue.push(e.value));
  alert(
    `Nama Pemesan : ${inputValue[0]}\nAlamat : ${inputValue[1]}\nJumlah : ${
      inputValue[2]
    }\nNo Telp : ${inputValue[3]}\nEmail : ${
      inputValue[4]
    }\nTotal : ${sessionStorage.getItem("price")}`
  );
  sessionStorage.setItem("price", 0);
});
