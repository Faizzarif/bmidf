function calculateBMI() {
    // Get the user's weight and height from the input fields
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Check if the height is in centimeters and convert it to meters if necessary
    let heightInMeters = height;
    if (height > 3) { // Assuming a height over 3 is in centimeters
        heightInMeters /= 100;
    }

    // Calculate the BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    // Display the result to the user
    const bmiResultElement = document.getElementById('bmi-result');
    bmiResultElement.innerText = 'Your BMI: ' + bmi.toFixed(2);

    // Optionally, you can also provide feedback based on the BMI categories
    let bmiCategory = '';
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi < 25) {
        bmiCategory = 'Normal weight';
    } else if (bmi < 30) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obesity';
    }
    bmiResultElement.innerText += '\nCategory: ' + bmiCategory;
}