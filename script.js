// This program can check how often you need to do an audit to reach a daily goal. It will also tell you if you are on track or not.
let dailyAudits;
let dailyHours;
let currentAudits;
let hoursWorked;
let onTrack;
// gets data from the user input

// add output for hourlyRate


function displayValues() {
	dailyAudits = document.getElementById('dailyAudits').value;
	dailyHours = document.getElementById('dailyHours').value;
	currentAudits = document.getElementById('currentAudits').value;
	hoursWorked = document.getElementById('hoursWorked').value;
	checkAudits(dailyAudits,dailyHours,currentAudits,hoursWorked);
}

function checkAudits(dailyAudits, dailyHours, currentAudits, hoursWorked) {
  let auditsPerHour = dailyAudits / dailyHours;
  let timePerAudit = 60 / auditsPerHour;
  let secondsDecimal = (timePerAudit % 1) * 60;
  let parsedInt = parseInt(secondsDecimal); // gets after the decimal point
  let firstNum = Math.trunc(timePerAudit); // gets first num

//   console.log(
//     `You will need to do 1 audit every ${firstNum} minutes and ${parsedInt} seconds in order to hit ${dailyAudits} audits in a ${dailyHours} hour shift.`
//   );

  // Checks whether or not you are on track
  if (currentAudits < auditsPerHour * hoursWorked) {
    // console.log('Go faster!');
	onTrack = `Go faster!`;
  } else {
    // console.log('Looking great!');
	onTrack = `Looking great!`;
  }

//   console.log(`Daily Audits: ${dailyAudits}`);
//   console.log(`Daily Hours: ${dailyHours}`);
//   console.log(`Current Audits: ${currentAudits}`);
//   console.log(`Hours Worked: ${hoursWorked}`);

  document.getElementById('speed').textContent = `${onTrack}`
  document.getElementById('results').textContent = `You will need to do 1 audit every ${firstNum} minutes and ${parsedInt} seconds in order to hit ${dailyAudits} audits in a ${dailyHours} hour shift.`;
  document.getElementById('results2').textContent = `Daily Audits: ${dailyAudits} Daily Hours: ${dailyHours} Current Audits: ${currentAudits} Hours Worked: ${hoursWorked}`;
  // 120 , 6, 80 , 4

  //set text content of a div to this string `You will need to do 1 audit every ${firstNum} minutes and ${parsedInt} seconds in order to hit ${dailyAudits} audits in a ${dailyHours} hour shift.`
}

// Put numbers in between () separated by commas. Ex: 120,6,38,2.2
// Order is Daily Audit Goal, Daily Hours, Current Audits, and Hours worked so far.
// Output will be on the right and tell you how often you need to do an audit and will also tell you if you are on track or not.
// checkAudits(120, 6, 80, 4);

//possibly get param of shiftstarttime and use current time to print out how many audits should be done at x time

/* // Check how often you need to do an audit
let aud = 120; // Put daily audit goal
let hours = 6; // Put hours worked (subtract out any breaks/lunches)
let currentAudits = 38; //  Put # of audits completed to see if on track
let hoursWorked = 2.2; // Put hours worked (in decimals if desired) to see if on track.
let auditsPerHour = aud / hours;
let timePerAudit = 60 / auditsPerHour;
let secondsDecimal = (timePerAudit % 1) * 60;
let parsedInt = parseInt(secondsDecimal); //gets after the decimal point
let firstNum = Math.trunc(timePerAudit); //gets first num

console.log(
  `You will need to do 1 audit every ${firstNum} minutes and ${parsedInt} seconds.`
);

if (currentAudits < (auditsPerHour * hoursWorked)) {
  console.log('Go faster!');
} else {
  console.log('Looking great!');
} */

//Implementing next - formula for audits per hour based on daily or weekly audits and hours worked, possibly something that can calculate if you are ahead or behind based on hours work and audits done that day

/* Extra playground code
// need to convert the two or three numbers on the right of the decimal point to seconds. .53 minutes is = 31.8 min (.53 * 60)
//math = audits / min = audits/hr * 1 hr / 60 min
// implement string manipulation to grab 3 numbers on the right of the decimal point and then multiply those three numbers 60 seconds then concatenate that answer with 2 (store the first number/numbers before the decimal point)

// var myNumber = 3.2;
// var integerPart = parseInt(myNumber);
// var decimalPart = myNumber - integerPart;


// Long style
  // let audits = 130;
  // let hoursWorked = 5.5;
  // let auditTime = 1 / ((audits / hoursWorked) / 60);

  // console.log(auditTime);

  //math = audits / min = audits/hr * 1 hr / 60 min
  // implement string manipulation to grab 3 numbers on the right of the decimal point and then multiply those three numbers 60 seconds then concatenate that answer with 2 (store the first number/numbers before the decimal point) */
