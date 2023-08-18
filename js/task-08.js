const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;

  if (formEl.email.value === "" || formEl.password.value === "") {
    alert("Всі поля форми мають бути заповнені");
    return;
  }

  const formData = {
    email: formEl.email.value,
    password: formEl.password.value,
  };

  console.log(formData);

  loginForm.reset();
}
