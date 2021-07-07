"use strict";

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
let monthlyAudits;
let monthlyHours;
let monthlyAverage;
let currentAuditSpeed;
let auditsPerHour;
let timePerAudit;
let secondsDecimal;
let parsedInt;
let firstNum;

// grabs all values from input on fields onClick
function getValues() {
  dailyAudits = document.getElementById('dailyAudits').value;
  dailyHours = document.getElementById('dailyHours').value;
  currentAudits = document.getElementById('currentAudits').value;
  hoursWorked = document.getElementById('hoursWorked').value;
  // runs checkAudits function below
  checkAudits(dailyAudits, dailyHours, currentAudits, hoursWorked);
}

//function calculates all audit stats and outputs on page
function checkAudits(dailyAudits, dailyHours, currentAudits, hoursWorked) {
	auditsPerHour = dailyAudits / dailyHours;
	timePerAudit = 60 / auditsPerHour;
	secondsDecimal = (timePerAudit % 1) * 60;
	parsedInt = parseInt(secondsDecimal); // gets after the decimal point
	firstNum = Math.trunc(timePerAudit); // gets first num
	currentAuditSpeed = currentAudits / hoursWorked;

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
  document.getElementById('currentAuditSpeedVal').textContent = `Current Average Hourly Speed: ${currentAuditSpeed} per hour.`
}

// do not forget to calc in breaks/meetings/lunches, etc.
// maybe if dailyHours >= 7, exclude two 15 min breaks and one 30 min lunch

monthlyHours = 0;
monthlyAudits = 0;
monthlyAverage = 0;


function calcMonthlyAverage (monthlyAudits, monthlyHours) {
	monthlyAudits = document.getElementById('monthlyAudits').value;
	monthlyHours = document.getElementById('monthlyHours').value;
	monthlyAverage = monthlyAudits / monthlyHours;

	document.getElementById('monthlyAuditsVal').textContent = `Monthly audits (MTD): ${monthlyAudits}`;
	document.getElementById('monthlyHoursVal').textContent = `Monthly hours (MTD): ${monthlyHours}`;
	document.getElementById('monthlyAverageVal').textContent = `Your average hourly audit rate is: ${monthlyAverage} per hour.`;
}