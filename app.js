// https://calculator.swiftutors.com/angular-velocity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const angularVelocityRadio = document.getElementById('angularVelocityRadio');
const angularDisplacementRadio = document.getElementById('angularDisplacementRadio');
const timeTakenRadio = document.getElementById('timeTakenRadio');

let angularVelocity;
let angularDisplacement = v1;
let timeTaken = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

angularVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(θ) Angular Displacement (rad)';
  variable2.textContent = '(t) Time Taken (sec)';
  angularDisplacement = v1;
  timeTaken = v2;
  result.textContent = '';
});

angularDisplacementRadio.addEventListener('click', function() {
  variable1.textContent = '(ω) Angular Velocity (rad/sec)';
  variable2.textContent = '(t) Time Taken (sec)';
  angularVelocity = v1;
  timeTaken = v2;
  result.textContent = '';
});

timeTakenRadio.addEventListener('click', function() {
  variable1.textContent = '(ω) Angular Velocity (rad/sec)';
  variable2.textContent = '(θ) Angular Displacement (rad)';
  angularVelocity = v1;
  angularDisplacement = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(angularVelocityRadio.checked)
    result.textContent = `Angular Velocity = ${computeAngularVelocity().toFixed(2)} rad/sec`;

  else if(angularDisplacementRadio.checked)
    result.textContent = `Angular Displacement = ${computeAngularDisplacement().toFixed(2)} rad`;

  else if(timeTakenRadio.checked)
    result.textContent = `Time Taken = ${computeTimeTaken().toFixed(2)} sec`;
})

// calculation

function computeAngularVelocity() {
  return Number(angularDisplacement.value) / Number(timeTaken.value);
}

function computeAngularDisplacement() {
  return Number(angularVelocity.value) * Number(timeTaken.value);
}

function computeTimeTaken() {
  return Number(angularDisplacement.value) / Number(angularVelocity.value);
}