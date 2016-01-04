// Calorie Calculators

var age,height,weight,female,male,BMR;

age=document.getElementById("age").value;
height=document.getElementById("height").value;
weight=document.getElementById("weight").value;
female=document.getElementById("female").value;
male=document.getElementById("male").value;
BMR=document.getElementById("BMR").value;

function convert(value) {
	if (value === "male") {
		BMR= document.getElementById("BMR").value = 66.47 + (13.75 * weight/2.2) + (5.0 * (height * 2.54) - (6.75 x age) 
	} else if (value === "female") {
		BMR= document.getElementById("BMR").value = 665.09 + (9.56 * weight/2.2) + (1.84 * (height * 2.54) - (4.67 x age) 
	}
}

/*To determine your basal metabolic rate (BMR), aka how many calories your body burns at rest, use the following formula:

W = weight in kilograms (weight (lbs)/2.2) =weight in kg
H = height in centimeters (inches x 2.54) =height in cm
A = age in years

Men: BMR=66.47+ (13.75 x W) + (5.0 x H) - (6.75 x A)
Women: BMR=665.09 + (9.56 x W) + (1.84 x H) - (4.67 x A) */


//Workout Planning Scripts