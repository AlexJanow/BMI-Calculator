const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const btn = document.querySelector(".Calc__button");
const result = document.querySelector(".Calc__result");

btn.addEventListener("click", () => {
  if (height.value.length === 0 || weight.value.length === 0) {
    alert("input value");
  } else {
    result.innerHTML = weight.value / height.value ** 2;

    if (result.innerHTML < 18.5) {
      result.style.color = "#FF0000";
    } else if (result.innerHTML >= 18.5 && result.innerHTML < 25) {
      result.style.color = "#008000";
    } else if (result.innerHTML >= 25 && result.innerHTML < 30) {
      result.style.color = "#FFA500";
    } else if (result.innerHTML >= 30) {
      result.style.color = "#FF0000";
    }
    console.log(result);
  }
});
