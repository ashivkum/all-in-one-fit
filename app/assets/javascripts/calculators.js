// Calorie Calculators

    function calsPerDay() {
      function find(id) {
      	return document.getElementById(id)
      }

      var age = find("age").value
      var height = find("height").value * 2.54
      var weight = find("weight").value / 2.2
      var result = 0
      if (find("male").checked) 
        result = 66.47 + (13.75 * weight) + (5.0 * height - (6.75 * age))
      else if (find("female").checked)
        result = 665.09 + (9.56 * weight) + (1.84 * height - (4.67 * age))
      find("totalCals").innerHTML = Math.round( result )
    }
    calsPerDay()

/*To determine your basal metabolic rate (BMR), aka how many calories your body burns at rest, use the following formula:

W = weight in kilograms (weight (lbs)/2.2) =weight in kg
H = height in centimeters (inches x 2.54) =height in cm
A = age in years

Men: BMR=66.47+ (13.75 x W) + (5.0 x H) - (6.75 x A)
Women: BMR=665.09 + (9.56 x W) + (1.84 x H) - (4.67 x A) */

