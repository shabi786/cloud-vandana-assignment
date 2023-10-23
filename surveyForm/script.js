function submitForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const male = document.getElementById("male").checked;
  const female = document.getElementById("female").checked;
  const gender = male ? "Male" : female ? "Female" : "N/A";
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  document.getElementById("popupFirstName").textContent = firstName;
  document.getElementById("popupLastName").textContent = lastName;
  document.getElementById("popupDob").textContent = dob;
  document.getElementById("popupCountry").textContent = country;
  document.getElementById("popupGender").textContent = gender;
  document.getElementById("popupProfession").textContent = profession;
  document.getElementById("popupEmail").textContent = email;
  document.getElementById("popupMobile").textContent = mobile;

  document.getElementById("surveyForm").style.display = "none";
  document.getElementById("popup").style.display = "block";
  return false;
}

function resetForm() {
  document.getElementById("surveyForm").reset();
  document.getElementById("surveyForm").style.display = "block";
  document.getElementById("popup").style.display = "none";
}

function closePopup() {
  document.getElementById("surveyForm").style.display = "block";
  document.getElementById("popup").style.display = "none";
  resetForm();
}
