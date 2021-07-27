const btn = document.querySelector(".submit-btn");
const account = () => {
  const data = [
    {
      username: "rafmasloman",
      password: 12345,
    },
  ];
  localStorage.setItem("accounts", JSON.stringify(data));
  const getData = JSON.parse(localStorage.getItem("accounts"));
  // getData.map((res) => console.log(res));
  return getData;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.querySelector(".username");
  const password = document.querySelector(".password");
  account().map((data) => {
    const passwordValidate = data.password.toString();
    if (
      username.value === data.username &&
      password.value === passwordValidate
    ) {
      location.href = "../pages/home.html";
      sessionStorage.setItem("username", data.username);
    } else {
      console.log(typeof data.password);
    }
  });
  // if (username.value === "rafmasloman" && password.value === "12345") {
  //   //   localStorage.setItem("text",data[0])
  //   location.href = "../pages/home.html";
  //   const usernameData = username.value;
  // } else if (username.value === "") {
  //   console.log(username.validationMessage);
  // } else if (password.value === "") {
  //   console.log(password.validationMessage);
  // } else if (username.value !== "rafmasloman" && password.value !== "12345") {
  //   username.setCustomValidity("Username salah");
  //   password.setCustomValidity("Password salah");
  //   console.log(
  //     `${username.validationMessage} atau ${password.validationMessage}`
  //   );
  // }
});
