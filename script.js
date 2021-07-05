/*

This program can check how often you need to do an audit to reach a daily goal. It will also tell you if you are on track or not.
Made by: Austin Thornley 2021

*/

// Declaring needed variables
let dailyAudits;
let dailyHours;
let currentAudits;
let hoursWorked;
let onTrack;

// grabs all values from input on fields onClick
function getValues() {
  dailyAudits = document.getElementById('dailyAudits').value;
  dailyHours = document.getElementById('dailyHours').value;
  currentAudits = document.getElementById('currentAudits').value;
  hoursWorked = document.getElementById('hoursWorked').value;
  checkAudits(dailyAudits, dailyHours, currentAudits, hoursWorked);
}

//function calculates all audit stats
function checkAudits(dailyAudits, dailyHours, currentAudits, hoursWorked) {
  let auditsPerHour = dailyAudits / dailyHours;
  let timePerAudit = 60 / auditsPerHour;
  let secondsDecimal = (timePerAudit % 1) * 60;
  let parsedInt = parseInt(secondsDecimal); // gets after the decimal point
  let firstNum = Math.trunc(timePerAudit); // gets first num

  // Checks whether or not you are on track
  if (currentAudits < auditsPerHour * hoursWorked) {
    onTrack = `You are not on track! ⛔️`;
  } else {
    onTrack = `You are on track to hit ${dailyAudits}! ✅`;
  }


  // Outputs all elements (inputted by user or calculated values)
  document.getElementById('onTrack').textContent = `${onTrack}`;
  document.getElementById('auditString').textContent = `You will need to do 1 audit every ${firstNum} minutes and ${parsedInt} seconds in order to hit ${dailyAudits} audits in a ${dailyHours} hour shift.`;
  document.getElementById('dailyAuditsVal').textContent = `Daily Audits: ${dailyAudits}`;
  document.getElementById('dailyHoursVal').textContent = `Daily Hours: ${dailyHours}`;  
  document.getElementById('currentAuditsVal').textContent = `Current Audits: ${currentAudits}`;
  document.getElementById('hoursWorkedVal').textContent = `Hours Worked: ${hoursWorked}`;
  document.getElementById('auditsPerHourVal').textContent = `Hourly Audits Goal: ${auditsPerHour}`;
}
