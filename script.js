function calculateBMI(){
	const height = parseFloat(document.getElementById('height').value) / 100;
	const weight = parseFloat(document.getElementById('weight').value);

	if(isNaN(height) || isNaN(weight)){
		document.getElementById('result').innerText = "Please enter valid number";
		return;
	}

	const bmi = weight / (height * height);
	let category;

	if(bmi < 18.5){
		category = "Underweight";
	}
	else if(bmi < 24.9){
		category = "Normal weight";
	}
	else if(bmi < 29.9){
		category = "Overweight";
	}
	else{
		category = "Obesity";
	}

	document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}