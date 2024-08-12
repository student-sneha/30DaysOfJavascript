const age = document.querySelector("#age");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calculateBtn = document.querySelector(".calculate-btn");
const displayCalories = document.querySelector(".calories");
const errorMessage = document.querySelector(".error-msg");

 const calculateBMR = (weight, height, age, gender) => {
      if (gender == "male") {
        return 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        return 10 * weight + 6.25 * height - 5 * age - 161;
      }
};

calculateBtn.addEventListener("click" ,() =>{
  if(
    age.classList.contains("invalid") ||
    weight.classList.contains("invalid") ||
    height.classList.contains("invalid")
  ){
    errorMessage.classList.add("active");
    return;
  }
  errorMessage.classList.remove("active");
    const  genderValue = document.querySelector(".gender input[name='gender']:checked").value;
    console.log(genderValue);
  
    const BMR = calculateBMR(weight.value,height.value,age.value,genderValue);
    displayCalories.innerHTML = BMR.toLocaleString("en-US");

});


age.addEventListener("input", (e) => {
  let ageValue = e.target.value;
  if (!ageValue || isNaN(ageValue) || ageValue < 10 || ageValue > 100) {
    age.classList.add("invalid");
  } else {
    age.classList.remove("invalid");
  }
});

weight.addEventListener("input", (e) => {
  let weightValue = e.target.value;

  if (!weightValue || isNaN(weightValue) || weightValue <= 0) {
    weight.classList.add("invalid");
  } else {
    weight.classList.remove("invalid");
  }
});

height.addEventListener("input", (e) => {
  let heightValue = e.target.value;

  if (!heightValue || isNaN(heightValue) || heightValue<=0) {
    height.classList.add("invalid");
  } else {
    height.classList.remove("invalid");
  }
});