function calculateBMI(weight, height) {
    return weight / (height * height);
}


const weight = 70; 
const height = 1.75; 
const bmi = calculateBMI(weight, height);
console.log(`BMI: ${bmi}`);
