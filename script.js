const currentYear = new Date().getFullYear();
document.getElementById("year").setAttribute("max", currentYear);

const form = document.querySelector("#dateForm")
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();

    // Adjusting the age if the birth day is later than the current day
    if (ageDays < 0) {
    ageMonths--;
    const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    ageDays += lastMonthDate.getDate();
    }

    // Adjusting the age if the birth month is later than the current month
    if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
    }

    console.log("Age:", ageYears, "years", ageMonths, "months", ageDays, "days");

    const ageText = document.querySelector(".dateYear")
    const monthsText = document.querySelector(".dateMonths")
    const daysText = document.querySelector(".dateDays")

    ageText.innerText = ageYears
    monthsText.innerText = ageMonths
    daysText.innerText = ageDays

});

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.querySelector(`label[for="${input.id}"]`);

  input.addEventListener('input', function() {
    if (input.value.trim() === '') {
      input.classList.remove('invalid');
      label.classList.remove('invalidLabel');
    } else if (input.validity.valid) {
      input.classList.remove('invalid');
      label.classList.remove('invalidLabel');
    } else {
      input.classList.add('invalid');
      label.classList.add('invalidLabel');
    }
  });

  input.addEventListener('invalid', function() {
    input.classList.add('invalid');
    label.classList.add('invalidLabel');
  });
});