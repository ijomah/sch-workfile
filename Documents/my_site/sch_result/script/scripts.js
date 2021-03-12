//
// JAVASCRIPT
//

// Dom element selection thru class attribute (left section)
const classNum = document.querySelector('.clasno');
const stuName = document.querySelector('.name');
const stuClass = document.querySelector('.class');
const daysInSch = document.querySelector('.attendance');
const stupopulace = document.querySelector('.classize');


// Dom element selection thru class attribute (right section)
const endOfTerm = document.querySelector('.termends');
const stuAge = document.querySelector('.age');
const timesSchOpened = document.querySelector('.openedschdays');

// Dom element selection thru class attribute (subject score table)

// Math scores
const mathCA = document.querySelector('.mthca');
const mathExam = document.querySelector('.mthexam');
const mathTotal = document.querySelector('.mthtot');

// English score
const engCA = document.querySelector('.engca');
const engExam = document.querySelector('.engexam');
const engTotal = document.querySelector('.engtot');

// Verbal reasoning
const verbalCA = document.querySelector('.verbalca');
const  verbalExam = document.querySelector('.verbalexam');
const verbalTotal = document.querySelector('.verbaltot');


const btechCA = document.querySelector('.btca');
const btechExam = document.querySelector('.btexam');
const btechTotal = document.querySelector('.bttot');


const bsCA = document.querySelector('.bsca');
const bsExam = document.querySelector('.bsexam');
const bsTotal = document.querySelector('.bstot');


const sosCA = document.querySelector('.sosca');
const sosExam = document.querySelector('.sosexam');
const sosTotal = document.querySelector('.sostot');


const pheCA =document.querySelector('.pheca');
const pheExam = document.querySelector('.pheexam');
const pheTotal = document.querySelector('.phetot');


const quantCA = document.querySelector('.quantitativeca');
const quantExam = document.querySelector('.quantitativeexam');
const quantTotal = document.querySelector('.quantitativetot');


const numeracyCA = document.querySelector('.numeracyca');
const numeracyExam = document.querySelector('.numeracyexam');
const numeracyTotal = document.querySelector('.numeracytot');


const healthCA = document.querySelector('.healthca');
const healthExam = document.querySelector('.healthexam');
const healthTotal = document.querySelector('.healthtot');

// Dom selection for total and average
const totals = document.querySelector('.total');
const averages = document.querySelector('.average');
const noOfSub = document.querySelector('.subno');
const studPercent = document.querySelector('.parcent');


// Dom selection for remarks
const mthrem = document.querySelector('.mrem');
const engrem = document.querySelector('.erem');
const verbrem = document.querySelector('.vrem');
const btechrem = document.querySelector('.btrem');
const bsrem = document.querySelector('.bsremk');
const sosrem = document.querySelector('.sorem');
const pherem = document.querySelector('.prem');
const quantrem = document.querySelector('.qrem');
const numrem = document.querySelector('.nrem');
const healthrem = document.querySelector('.hrem');
const ogarem = document.querySelector('.ogaremk');

// Variables 
var mathTotals = mathCA.value + mathExam.value;
        engTotals = engCA.value + engExam.value;
        verbalTotals = verbalCA.value + verbalExam.value;
        bsTotals = bsCA.value + bsExam.value; 
        btechTotals = btechCA.value + btechExam.value;
        sosTotals = sosCA.value + sosExam.value;
        pheTotals = pheCA.value + pheExam.value;
        quantTotals = quantCA.value + quantExam.value;
        numeracyTotals = numeracyCA.value + numeracyExam.value;
        healthTotals = healthCA.value + healthExam.value;

// Arrays of scores
var arrayCA = [mathCA.value, engCA.value, verbalCA.value, 
                bsCA.value, btechCA.value, sosCA.value, pheCA.value, 
                quantCA.value, numeracyCA.value, healthCA.value];

var arrayExam = [mathExam.value, engExam.value, verbalExam.value, 
                bsExam.value, btechExam.value, sosExam.value, pheExam.value, 
                quantExam.value, numeracyExam.value, healthExam.value]

var totScoreArr = [mathTotal.value, engTotal.value, verbalTotal.value, 
                bsTotal.value, btechTotal.value, sosTotal.value, pheTotal.value, 
                quantTotal.value, numeracyTotal.value, healthTotal.value];

console.log(totScoreArr);

// for mathematics
function mcalc() {
  var scoreCA = mathCA.value;
    var scoreCA = parseInt(scoreCA, 10);
    var scoreExam = mathExam.value;
    var scoreExam = parseInt(scoreExam, 10);
    var mtotal = scoreCA + scoreExam;
    mathTotal.value = mtotal;
    gradeStudent();
    console.log(mtotal);  
} 

// For English
function ecalc() {
  var scoreCA = engCA.value;
    var scoreCA = parseInt(scoreCA, 10);
    var scoreExam = engExam.value;
    var scoreExam = parseInt(scoreExam, 10);
    var etotal = scoreCA + scoreExam;
    engTotal.value = etotal;
    console.log(etotal);
    eGradeStudent();  
} 

// For Vrebal 
function vcalc() {
  var scoreCA = verbalCA.value;
    var scoreCA = parseInt(scoreCA, 10);
    var scoreExam = verbalExam.value;
    var scoreExam = parseInt(scoreExam, 10);
    var vtotal = scoreCA + scoreExam;
    verbalTotal.value = vtotal;
    vGradeStudent();
    console.log(vtotal);  
} 

// for Basic technology
function calc() {
  var scoreCA = btechCA.value;
    var scoreCA = parseInt(scoreCA, 10);
    var scoreExam = btechExam.value;
    var scoreExam = parseInt(scoreExam, 10);
    var bttotal = scoreCA + scoreExam;
    btechTotal.value = bttotal;
    btGradeStudent();
    console.log(bttotal);  
} 

// For Basic science
function bscalc() {
  var scoreCA = bsCA.value;
    var scoreCA = parseInt(scoreCA, 10);
    var scoreExam = bsExam.value;
    var scoreExam = parseInt(scoreExam, 10);
    var btotal = scoreCA + scoreExam;
    bsTotal.value = btotal;
    bGradeStudent();
    console.log(btotal);  
} 

// For Social studies
function soscalc() {
  var scoreCA = sosCA.value;
    var scoreCA = parseInt(scoreCA, 10);
    var scoreExam = sosExam.value;
    var scoreExam = parseInt(scoreExam, 10);
    var sototal = scoreCA + scoreExam;
    sosTotal.value = sototal;
    sGradeStudent();
    console.log(sototal);  
} 

//FOR Physical and health education
function phecalc() {
  var scoreCA = pheCA.value;
    var scoreCA = parseInt(scoreCA, 10);
    var scoreExam = pheExam.value;
    var scoreExam = parseInt(scoreExam, 10);
    var ptotal = scoreCA + scoreExam;
    pheTotal.value = ptotal;
    pGradeStudent();
    console.log(ptotal);  
} 


// For Quantitative
function qcalc() {
  var scoreCA = quantCA.value;
    var scoreCA = parseInt(scoreCA, 10);
    var scoreExam = quantExam.value;
    var scoreExam = parseInt(scoreExam, 10);
    var qtotal = scoreCA + scoreExam;
    quantTotal.value = qtotal;
    qGradeStudent();
    console.log(qtotal);  
} 

// For Numeracy
function ncalc() {
  var scoreCA = numeracyCA.value;
    var scoreCA = parseInt(scoreCA, 10);
    var scoreExam = numeracyExam.value;
    var scoreExam = parseInt(scoreExam, 10);
    var ntotal = scoreCA + scoreExam;
    numeracyTotal.value = ntotal;
    nGradeStudent();
    console.log(ntotal);  
} 


// For Health Habit
function hcalc() {
  var scoreCA = healthCA.value;
    var scoreCA = parseInt(scoreCA, 10);
    var scoreExam = healthExam.value;
    var scoreExam = parseInt(scoreExam, 10);
    var htotal = scoreCA + scoreExam;
    healthTotal.value = htotal;
    hGradeStudent();
    console.log(htotal);  
} 


// Calculate grand total
function calcGrandTotal() {
  var mt = mathTotal.value;
  var mt = parseInt(mt, 10);
  var et = engTotal.value;
  var et = parseInt(et, 10);
  var vt = verbalTotal.value;
  var vt = parseInt(vt, 10);
  var bt = btechTotal.value;
  var bt = parseInt(bt, 10);
  var bst = bsTotal.value;
  var bst = parseInt(bst, 10);
  var st = sosTotal.value;
  var st = parseInt(st, 10);
  var pt = pheTotal.value;
  var pt = parseInt(pt, 10);
  var qt = quantTotal.value;
  var qt = parseInt(qt, 10);
  var nt = numeracyTotal.value;
  var nt = parseInt(nt, 10);
  var ht = healthTotal.value;
  var ht = parseInt(ht, 10);
  var total = mt + et + vt + bt + bst + st + pt + qt + nt + ht;
  totals.value = total;
  console.log(total);
}


// To calculate the average mark
 function calcAverage() {
        var gt = totals.value;
        var gt = parseInt(gt, 10);
        var ns = noOfSub.value;
        var ns = parseInt(ns, 10);
        var sa = gt / ns;
        averages.value = sa;
        console.log(sa);
        studPercent.value = sa;
    }


// Auto Generation of remarks
let studentScore = ""
let arr0 = [...Array(40).keys()].map(i => i + 0);
let arr40 = [...Array(5).keys()].map(i => i + 40);
let arr45 = [...Array(5).keys()].map(i => i + 45);
let arr50 = [...Array(10).keys()].map(i => i + 50);
let arr60 = [...Array(10).keys()].map(i => i + 60);
let arr70 = [...Array(30).keys()].map(i => i + 70);

/*let arrFail = [...Array(40).keys()].map(i => i + 0);
let arrPoor = [...Array(5).keys()].map(i => i + 40);
let arrFair = [...Array(5).keys()].map(i => i + 45);
let arrGood = [...Array(10).keys()].map(i => i + 50);
let arrVeryGood = [...Array(10).keys()].map(i => i + 60);
let arrGreat = [...Array(30).keys()].map(i => i + 70); */


//New pseudocode solution
//.............................
// [] work with an array of total score created earlier
// () Create a function that will loop throught the scores in the array
// && Use the arrayindex to compare each total score entered with the 
//ranges in the functions called in the switch function
// () Create a function that has a switch statement
// () Use or create six functions for the grades
//........................

// Load Remarks
/*document.addEventListener("DOMContentLoaded", function() {
  loopTotScore(totScoreArr);
  console.log('I will loop oh!');
});
// Total Score looping
function loopTotScore() {
  for ( let totScoreIdx = 0; totScoreIdx <= totScoreArr.length; totScoreIdx++ ) {
    console.log(totScoreArr[2]);
    console.log('I loop total score array');
    loopFailscore(totScoreArr[totScoreIdx]);
    loopPoorScore(totScoreArr[totScoreIdx]);
    loopFairScore(totScoreArr[totScoreIdx]);
    loopGoodScores(totScoreArr[totScoreIdx]);
    loopVeryGoodScore(totScoreArr[totScoreIdx]);
    loopGreatScore(totScoreArr[totScoreIdx]);
    
  }
}

function loopGoodScore() {
  var arrGood = [...Array(10).keys()].map(i => i + 50);
  for (let arrGoodIdx = 0; arrGoodIdx < arrGood.length; arrGoodIdx++) {
    compareTotScores(arrGood[arrGoodIdx]);      
  } 
}

function loopFailscore() {
  var arrFail = [...Array(40).keys()].map(i => i + 0);
  for (let arrFailIdx = 0; arrFailIdx < arrFail.length; arrFailIdx++) {
    compareTotScores(arrFail[arrFailIdx]);
  }
  return arrFail[arrFailIdx];
}

function loopPoorScore() {
  var arrPoor = [...Array(5).keys()].map(i => i + 40);
  for (let arrPoorIdx = 0; arrPoorIdx < arrPoor.length; arrPoorIdx++) {
    compareTotScores();
  }
}

function loopFairScore() {
  var arrFair = [...Array(5).keys()].map(i => i + 45);
  for (let arrFairIdx = 0; arrFairIdx < arrFair.length; arrFairIdx++) {
    compareTotScores();
  }
}

function loopVeryGoodScore() {
  var arrVeryGood = [...Array(10).keys()].map(i => i + 60);
  for (let arrVeryGoodIdx = 0; arrVeryGoodIdx < arrVeryGood.length; arrVeryGoodIdx++) {
    compareTotScores();
  }
}

function loopGreatScore() {
  var arrGreat = [...Array(30).keys()].map(i => i + 70);
  for (let arrGreatIdx = 0; arrGreatIdx < arrGreat.length; arrGreatIdx++) {
    compareTotScores();
  }
}


// Comparing conditions 
function compareTotScores(totScoreArr) {
  var totScoreArr = [mathTotal.value, engTotal.value, verbalTotal.value, 
    bsTotal.value, btechTotal.value, sosTotal.value, pheTotal.value, 
    quantTotal.value, numeracyTotal.value, healthTotal.value];
    const arrGreat = [...Array(30).keys()].map(i => i + 70);
  for (let arrGreatIdx = 0; arrGreatIdx < arrGreat.length; arrGreatIdx++) {
    
    var arrVeryGood = [...Array(10).keys()].map(i => i + 60);
  for (let arrVeryGoodIdx = 0; arrVeryGoodIdx < arrVeryGood.length; arrVeryGoodIdx++) {

    var arrVeryGood = [...Array(10).keys()].map(i => i + 60);
  for (let arrVeryGoodIdx = 0; arrVeryGoodIdx < arrVeryGood.length; arrVeryGoodIdx++) {
    
    var arrGood = [...Array(10).keys()].map(i => i + 50);
    for (let arrGoodIdx = 0; arrGoodIdx < arrGood.length; arrGoodIdx++) {
  

    var arrFair = [...Array(5).keys()].map(i => i + 45);

    for (let arrFairIdx = 0; arrFairIdx < arrFair.length; arrFairIdx++) {
      
      let arrPoor = [...Array(5).keys()].map(i => i + 40);const arrPoor = [...Array(5).keys()].map(i => i + 40);
    for (let arrPoorIdx = 0; arrPoorIdx < arrPoor.length; arrPoorIdx++) {
   
    var arrFail = [...Array(40).keys()].map(i => i + 0);
    for (let arrFailIdx = 0; arrFailIdx < arrFail.length; arrFailIdx++) {
  for ( let totScoreIdx = 0; totScoreIdx <= totScoreArr.length; totScoreIdx++ ) {
  switch(totScoreArr[totScoreIdx]) {
    case arrFail[arrFailIdx]:
      gradeFail();
      break;
    case arrPoor[arrPoorIdx]:
      gradePoor();
      break;
    case arrFair[arrFairIdx]:
      gradeFair();
      break;
    case arrGood[arrGoodIdx]:
      gradeGood();
      break;
    case arrVeryGood[arrVeryGoodIdx]:
      gradeVeryGood();
      break;
    case arrGreat[arrGreatIdx]:
      gradeGreat();
      break;
    default:
      console.log('I compared the scores');

      // It is remaining other grades fxn to create
        }
      }
    }
  }
  }
  }
  }
  }
  }
}


// It is remaining other grades fxn to create
// It is remaining other grades fxn to create 
//take note

// For grading the Scores on each subject
function gradeFail() {
  mthrem.textContent = 'Fail';
  mthrem.style.backgroundColor = 'red';
  console.log('fail');
}   

function gradePoor() {
mthrem.textContent = 'Poor';
mthrem.style.backgroundColor = 'yellow';
  console.log('Poor');
}

function gradeFair() {
  mthrem.textContent = 'Fair';
  mthrem.style.backgroundColor = 'yellow';
  console.log('Fair');
}

function gradeGood() {
  mthrem.textContent = 'Good';
  mthrem.style.backgroundColor = 'greenyellow';
  console.log('Good');
}  

function gradeVeryGood() {
  mthrem.textContent = 'Very Good';
  mthrem.style.backgroundColor = 'skyblue';
  console.log('Very Good');
}

function gradeGreat() {
  mthrem.textContent = 'Excellent';
  mthrem.style.backgroundColor = 'turquoise';
    console.log('Great Score');
}

// fxn that will loop thru scores from 0 to 100

//
// fxn that wil compare student score to the range of score
*/



 


 function gradeStudent() {
  var s = Number(mathTotal.value); 
  const arrFail = [...Array(40).keys()].map(i => i + 0);
  for (let arrFailIdx = 0; arrFailIdx < arrFail.length; arrFailIdx++) {
      if (s === arrFail[arrFailIdx] ) {
          mthrem.textContent = 'Fail';
          mthrem.style.backgroundColor = 'red';
        console.log('fail');
      }  
    }
   
  
  let arrPoor = [...Array(5).keys()].map(i => i + 40);
  for (let arrPoorIdx = 0; arrPoorIdx < arrPoor.length; arrPoorIdx++) {
    var s = Number(mathTotal.value);
      if (s === arrPoor[arrPoorIdx] ) {
        mthrem.textContent = 'Poor';
        mthrem.style.backgroundColor = 'yellow';
          console.log('Poor');
      }  
      
  } 

  const arrFair = [...Array(5).keys()].map(i => i + 45);
  for (let arrFairIdx = 0; arrFairIdx < arrFair.length; arrFairIdx++) {
    var s = Number(mathTotal.value);
      if (s === arrFair[arrFairIdx] ) {
        mthrem.textContent = 'Fair';
        mthrem.style.backgroundColor = 'orange';
          console.log('Fair');
      }  
      
  }

  const arrGood = [...Array(10).keys()].map(i => i + 50);
  for (let arrGoodIdx = 0; arrGoodIdx < arrGood.length; arrGoodIdx++) {
    var s = Number(mathTotal.value);
      if (s === arrGood[arrGoodIdx] ) {
        mthrem.textContent = 'Good';
        mthrem.style.backgroundColor = 'greenyellow';
        console.log('Good');
      }  
      
  } 

  const arrVeryGood = [...Array(10).keys()].map(i => i + 60);
  for (let arrVeryGoodIdx = 0; arrVeryGoodIdx < arrVeryGood.length; arrVeryGoodIdx++) {
    var s = Number(mathTotal.value);
      if (s === arrVeryGood[arrVeryGoodIdx] ) {
        mthrem.textContent = 'Very Good';
        mthrem.style.backgroundColor = 'greenyellow';
          console.log('Very Good');
      }  
     
  } 

  const arrGreat = [...Array(30).keys()].map(i => i + 70);
  for (let arrGreatIdx = 0; arrGreatIdx < arrGreat.length; arrGreatIdx++) {
    var s = Number(mathTotal.value);
      if (s === arrGreat[arrGreatIdx] ) {
        mthrem.textContent = 'Excellent';
        mthrem.style.backgroundColor = 'skyblue';
          console.log('Great Score');
      }  
      
  } 
}

  // for eng
  var eS = Number(engTotal.value);
  function eGradeStudent() {
  
    const earrFail = [...Array(40).keys()].map(i => i + 0);
    var eS = Number(engTotal.value);
    for (let earrFailIdx = 0; earrFailIdx < earrFail.length; earrFailIdx++) {
        if (eS === earrFail[earrFailIdx] ) {
            engrem.textContent = 'Fail';
            engrem.style.backgroundColor = 'red';
          console.log('fail');
        }  
      }  
     
  
    const earrPoor = [...Array(5).keys()].map(i => i + 40);
    var eS = Number(engTotal.value);
    for (let earrPoorIdx = 0; earrPoorIdx < earrPoor.length; earrPoorIdx++) {
      if (eS === earrPoor[earrPoorIdx] ) {
        engrem.textContent = 'Poor';
        engrem.style.backgroundColor = 'yellow';
            console.log('Poor');
        }  
        
    } 
  
    const earrFair = [...Array(5).keys()].map(i => i + 45);
    var eS = Number(engTotal.value);
    for (let earrFairIdx = 0; earrFairIdx < earrFair.length; earrFairIdx++) {
      if (eS === earrFair[earrFairIdx] ) {
        engrem.textContent = 'Fair';
        engrem.style.backgroundColor = 'orange';
            console.log('Fair');
        }  
        
    }
  
    const earrGood = [...Array(10).keys()].map(i => i + 50);
    var eS = Number(engTotal.value);
    for (let earrGoodIdx = 0; earrGoodIdx < earrGood.length; earrGoodIdx++) {
      if (eS === earrGood[earrGoodIdx] ) {
        engrem.textContent = 'Good';
        engrem.style.backgroundColor = 'green';
            console.log('Good');
        }  
        
    } 
  
    const earrVeryGood = [...Array(10).keys()].map(i => i + 60);
    var eS = Number(engTotal.value);
    for (let earrVeryGoodIdx = 0; earrVeryGoodIdx < earrVeryGood.length; earrVeryGoodIdx++) {
      if (eS === earrVeryGood[earrVeryGoodIdx] ) {
          engrem.textContent = 'Very Good';
          engrem.style.backgroundColor = 'greenyellow';
            console.log('Very Good');
        }  
        
    } 
  
    const earrGreat = [...Array(30).keys()].map(i => i + 70);
    var eS = Number(engTotal.value);
    for (let earrGreatIdx = 0; earrGreatIdx < earrGreat.length; earrGreatIdx++) {
      if (eS === earrGreat[earrGreatIdx] ) {
          engrem.textContent = 'Excellent';
          engrem.style.backgroundColor = 'skyblue';
            console.log('Excellent');
        }  
        
    } 
  } 

 // for verbal
 


 function vGradeStudent() {
   
  const varrFail = [...Array(40).keys()].map(i => i + 0);
  var vS = Number(verbalTotal.value);
  for (let varrFailIdx = 0; varrFailIdx < varrFail.length; varrFailIdx++) {
      if (vS === varrFail[varrFailIdx] ) {
          verbrem.textContent = 'Fail';
          verbrem.style.backgroundColor  = 'red';
        console.log('fail');
      }  
    }  
   

  const varrPoor = [...Array(5).keys()].map(i => i + 40);
  var vS = Number(verbalTotal.value);
  for (let varrPoorIdx = 0; varrPoorIdx < varrPoor.length; varrPoorIdx++) {
    if (vS === varrPoor[varrPoorIdx] ) {
        verbrem.textContent = 'Poor';
        verbrem.style.backgroundColor = 'yellow';
          console.log('Poor');
      }  
      
  } 

  const varrFair = [...Array(5).keys()].map(i => i + 45);
  var vS = Number(verbalTotal.value);
  for (let varrFairIdx = 0; varrFairIdx < varrFair.length; varrFairIdx++) {
    if (vS === varrFair[varrFairIdx] ) {
        verbrem.textContent = 'Fair';
        verbrem.style.backgroundColor = 'orange';
          console.log('Fair');
      }  
      
  }

  const varrGood = [...Array(10).keys()].map(i => i + 50);
  var vS = Number(verbalTotal.value);
  for (let varrGoodIdx = 0; varrGoodIdx < varrGood.length; varrGoodIdx++) {
    if (vS === varrGood[varrGoodIdx] ) {
        verbrem.textContent = 'Good';
        verbrem.style.backgroundColor = 'green';
        console.log('Good');
      }  
      
  } 

  const varrVeryGood = [...Array(10).keys()].map(i => i + 60);
  var vS = Number(verbalTotal.value);
  for (let varrVeryGoodIdx = 0; varrVeryGoodIdx < varrVeryGood.length; varrVeryGoodIdx++) {
    if (vS === varrVeryGood[varrVeryGoodIdx] ) {
        verbrem.textContent = 'Very Good';
        verbrem.style.backgroundColor = 'greenyellow';
          console.log('Very Good');
      }  
      
  } 

  const varrGreat = [...Array(30).keys()].map(i => i + 70);
  var vS = Number(verbalTotal.value);
  for (let varrGreatIdx = 0; varrGreatIdx < varrGreat.length; varrGreatIdx++) {
    if (vS === varrGreat[varrGreatIdx] ) {
        verbrem.textContent = 'Excellence';
        verbrem.style.backgroundColor = 'skyblue';
          console.log('Great Score');
      }  
      
  } 
 }

  // for btech
 function btGradeStudent() {
  
  const btarrFail = [...Array(40).keys()].map(i => i + 0);
  var btS = Number(btechTotal.value);
  for (let btarrFailIdx = 0; btarrFailIdx < btarrFail.length; btarrFailIdx++) {
      if (btS === btarrFail[btarrFailIdx] ) {
          btechrem.textContent = 'Fail';
          btechrem.style.backgroundColor = 'red';
        console.log('fail');
      }  
    }  
   

  const btarrPoor = [...Array(5).keys()].map(i => i + 40);
  var btS = Number(btechTotal.value);
  for (let btarrPoorIdx = 0; btarrPoorIdx < btarrPoor.length; btarrPoorIdx++) {
    if (btS === btarrPoor[btarrPoorIdx] ) {
        btechrem.textContent = 'Poor';
        btechrem.style.backgroundColor = 'yellow';
          console.log('Poor');
      }  
      
  } 

  const btarrFair = [...Array(5).keys()].map(i => i + 45);
  var btS = Number(btechTotal.value);
  for (let btarrFairIdx = 0; btarrFairIdx < btarrFair.length; btarrFairIdx++) {
    if (btS === btarrFair[btarrFairIdx] ) {
        btechrem.textContent = 'Fair';
        btechrem.style.backgroundColor = 'orange';
          console.log('Fair');
      }  
      
  }

  const btarrGood = [...Array(10).keys()].map(i => i + 50);
  var btS = Number(btechTotal.value);
  for (let btarrGoodIdx = 0; btarrGoodIdx < btarrGood.length; btarrGoodIdx++) {
    if (btS === btarrGood[btarrGoodIdx] ) {
        btechrem.textContent = 'Good';
        btechrem.style.backgroundColor = 'green'
        console.log('Good');
      }  
      
  } 

  const btarrVeryGood = [...Array(10).keys()].map(i => i + 60);
  var btS = Number(btechTotal.value);
  for (let btarrVeryGoodIdx = 0; btarrVeryGoodIdx < btarrVeryGood.length; btarrVeryGoodIdx++) {
    if (btS === btarrVeryGood[btarrVeryGoodIdx] ) {
        btechrem.textContent = 'Very Good';
        btechrem.style.backgroundColor = 'greenyellow';
          console.log('Very Good');
      }  
      
  } 

  const btarrGreat = [...Array(30).keys()].map(i => i + 70);
  var btS = Number(btechTotal.value);
  for (let btarrGreatIdx = 0; btarrGreatIdx < btarrGreat.length; btarrGreatIdx++) {
    if (btS === btarrGreat[btarrGreatIdx] ) {
        btechrem.textContent = 'Excellence';
        btechrem.style.backgroundColor = 'skyblue';
          console.log('Great Score');
      }  
      
  } 
 }

  // for bs 
 function bGradeStudent() {
  
  const barrFail = [...Array(40).keys()].map(i => i + 0);
  var bS = Number(bsTotal.value);
  for (let barrFailIdx = 0; barrFailIdx < barrFail.length; barrFailIdx++) {
      if (bS === barrFail[barrFailIdx] ) {
          bsrem.textContent = 'Fail';
          bsrem.style.backgroundColor = 'red';
        console.log('fail');
      }  
    }  
   

  const barrPoor = [...Array(5).keys()].map(i => i + 40);
  var bS = Number(bsTotal.value);
  for (let barrPoorIdx = 0; barrPoorIdx < barrPoor.length; barrPoorIdx++) {
    if (bS === barrPoor[barrPoorIdx] ) {
        bsrem.textContent = 'Poor';
        bsrem.style.backgroundColor = 'yellow'
          console.log('Poor');
      }  
      
  } 

  const barrFair = [...Array(5).keys()].map(i => i + 45);
  var bS = Number(bsTotal.value);
  for (let barrFairIdx = 0; barrFairIdx < barrFair.length; barrFairIdx++) {
    if (bS === barrFair[barrFairIdx] ) {
        bsrem.textContent = 'Fair';
        bsrem.style.backgroundColor = 'orange';
          console.log('Fair');
      }  
      
  }

  const barrGood = [...Array(10).keys()].map(i => i + 50);
  var bS = Number(bsTotal.value);
  for (let barrGoodIdx = 0; barrGoodIdx < barrGood.length; barrGoodIdx++) {
    if (bS === barrGood[barrGoodIdx] ) {
        bsrem.textContent = 'Good';
        bsrem.style.backgroundColor = 'green';
        console.log('Good');
      }  
      
  } 

  const barrVeryGood = [...Array(10).keys()].map(i => i + 60);
  var bS = Number(bsTotal.value);
  for (let barrVeryGoodIdx = 0; barrVeryGoodIdx < barrVeryGood.length; barrVeryGoodIdx++) {
    if (bS === barrVeryGood[barrVeryGoodIdx] ) {
        bsrem.textContent = 'Very Good';
        bsrem.style.backgroundColor = 'greenyellow';
          console.log('Very Good');
      }  
      
  } 

  const barrGreat = [...Array(30).keys()].map(i => i + 70);
  var bS = Number(bsTotal.value);
  for (let barrGreatIdx = 0; barrGreatIdx < barrGreat.length; barrGreatIdx++) {
    if (bS === barrGreat[barrGreatIdx] ) {
        bsrem.textContent = 'Excellence';
        bsrem.style.backgroundColor = 'skyblue';
          console.log('Great Score');
      }  
      
  } 
 }

  
  // for sos 

  

 function sGradeStudent() {
  
  const sarrFail = [...Array(40).keys()].map(i => i + 0);
  var sS = Number(sosTotal.value);
  for (let sarrFailIdx = 0; sarrFailIdx < sarrFail.length; sarrFailIdx++) {
      if (sS === sarrFail[sarrFailIdx] ) {
          sosrem.textContent = 'Fail';
          sosrem.style.backgroundColor = 'red';
        console.log('fail');
      }  
    }  
   

  const sarrPoor = [...Array(5).keys()].map(i => i + 40);
  var sS = Number(sosTotal.value);
  for (let sarrPoorIdx = 0; sarrPoorIdx < sarrPoor.length; sarrPoorIdx++) {
    if (sS === sarrPoor[sarrPoorIdx] ) { 
        sosrem.textContent = 'Poor';
        sosrem.style.backgroundColor = 'yellow';
          console.log('Poor');
      }  
      
  } 

  const sarrFair = [...Array(5).keys()].map(i => i + 45);
  var sS = Number(sosTotal.value);
  for (let sarrFairIdx = 0; sarrFairIdx < sarrFair.length; sarrFairIdx++) {
    if (sS === sarrFair[sarrFairIdx] ) {
        sosrem.textContent = 'Fair';
        sosrem.style.backgroundColor = 'orange'
          console.log('Fair');
      }  
      
  }

  const sarrGood = [...Array(10).keys()].map(i => i + 50);
  var sS = Number(sosTotal.value);
  for (let sarrGoodIdx = 0; sarrGoodIdx < sarrGood.length; sarrGoodIdx++) {
    if (sS === sarrGood[sarrGoodIdx] ) {
        sosrem.textContent = 'Good';  
        sosrem.style.backgroundColor = 'green';
        console.log('Good');
      }  
      
  } 

  const sarrVeryGood = [...Array(10).keys()].map(i => i + 60);
  var sS = Number(sosTotal.value);
  for (let sarrVeryGoodIdx = 0; sarrVeryGoodIdx < sarrVeryGood.length; sarrVeryGoodIdx++) {
    if (sS === sarrVeryGood[sarrVeryGoodIdx] ) {
        sosrem.textContent = 'Very Good';
        sosrem.style.backgroundColor = 'greenyellow';
          console.log('Very Good');
      }  
      
  } 

  const sarrGreat = [...Array(30).keys()].map(i => i + 70);
  var sS = Number(sosTotal.value);
  for (let sarrGreatIdx = 0; sarrGreatIdx < sarrGreat.length; sarrGreatIdx++) {
    if (sS === sarrGreat[sarrGreatIdx] ) {
        sosrem.textContent = 'Excellence';
        sosrem.style.backgroundColor = 'skyblue';
          console.log('Great Score');
      }  
      
  } 
 }
  //phe

  

 function pGradeStudent() {
  
  const parrFail = [...Array(40).keys()].map(i => i + 0);
  var pS = Number(pheTotal.value);
  for (let parrFailIdx = 0; parrFailIdx < parrFail.length; parrFailIdx++) {
      if ( pS === parrFail[parrFailIdx] ) {
          pherem.textContent = 'Fail';
          pherem.style.backgroundColor = 'red';
        console.log('fail');
      }  
    }  
   

  const parrPoor = [...Array(5).keys()].map(i => i + 40);
  var pS = Number(pheTotal.value);
  for (let parrPoorIdx = 0; parrPoorIdx < parrPoor.length; parrPoorIdx++) {
    if (pS === parrPoor[parrPoorIdx] ) {
        pherem.textContent = 'Poor';
        pherem.style.backgroundColor ='yellow';
          console.log('Poor');
      }  
      
  } 

  const parrFair = [...Array(5).keys()].map(i => i + 45);
  var pS = Number(pheTotal.value);
  for (let parrFairIdx = 0; parrFairIdx < parrFair.length; parrFairIdx++) {
    if (pS === parrFair[parrFairIdx] ) {
        pherem.textContent = 'Fair';
        pherem.style.backgroundColor = 'orange';
          console.log('Fair');
      }  
      
  }

  const parrGood = [...Array(10).keys()].map(i => i + 50);
  var pS = Number(pheTotal.value);
  for (let parrGoodIdx = 0; parrGoodIdx < parrGood.length; parrGoodIdx++) {
    if (pS === parrGood[parrGoodIdx] ) {
        pherem.textContent = 'Good';
        pherem.style.backgroundColor = 'green';
        console.log('Good');
      }  
      
  } 

  const parrVeryGood = [...Array(10).keys()].map(i => i + 60);
  var pS = Number(pheTotal.value);
  for (let parrVeryGoodIdx = 0; parrVeryGoodIdx < parrVeryGood.length; parrVeryGoodIdx++) {
    if (pS === parrVeryGood[parrVeryGoodIdx] ) {
        pherem.textContent = 'Very Good';
        pherem.style.backgroundColor = 'greenyellow';
          console.log('Very Good');
      }  
      
  } 

  const parrGreat = [...Array(30).keys()].map(i => i + 70);
  var pS = Number(pheTotal.value);
  for (let parrGreatIdx = 0; parrGreatIdx < parrGreat.length; parrGreatIdx++) {
    if (pS === parrGreat[parrGreatIdx] ) {
        pherem.textContent = 'Excellence';
        pherem.style.backgroundColor = 'skyblue';
          console.log('Great Score');
      }  
      
  } 
 }

  // for quantitative
 function qGradeStudent() {
  
  const qarrFail = [...Array(40).keys()].map(i => i + 0);
  var qS = Number(quantTotal.value);
  for (let qarrFailIdx = 0; qarrFailIdx < qarrFail.length; qarrFailIdx++) {
      if (qS === qarrFail[qarrFailIdx] ) {
          quantrem.textContent = 'Fail';
          quantrem.style.backgroundColor = 'red';
        console.log('fail');
      }  
    }  
   

  const qarrPoor = [...Array(5).keys()].map(i => i + 40);
  var sS = Number(sosTotal.value);
  for (let qarrPoorIdx = 0; qarrPoorIdx < qarrPoor.length; qarrPoorIdx++) {
    if (qS === qarrPoor[qarrPoorIdx] ) {
        quantrem.textContent = 'Poor';
        quantrem.style.backgroundColor = 'yellow';
          console.log('Poor');
      }  
      
  } 

  const qarrFair = [...Array(5).keys()].map(i => i + 45);
  var sS = Number(sosTotal.value);
  for (let qarrFairIdx = 0; qarrFairIdx < qarrFair.length; qarrFairIdx++) {
    if (qS === qarrFair[qarrFairIdx] ) {
        quantrem.textContent = 'Fair';
        quantrem.style.backgroundColor = 'orange';
          console.log('Fair');
      }  
      
  }

  const qarrGood = [...Array(10).keys()].map(i => i + 50);
  var sS = Number(sosTotal.value);
  for (let qarrGoodIdx = 0; qarrGoodIdx < qarrGood.length; qarrGoodIdx++) {
    if (qS === qarrGood[qarrGoodIdx] ) {
        quantrem.textContent = 'Good';  
        quantrem.style.backgroundColor = 'green';
        console.log('Good');
      }  
      
  } 

  const qarrVeryGood = [...Array(10).keys()].map(i => i + 60);
  var sS = Number(sosTotal.value);
  for (let qarrVeryGoodIdx = 0; qarrVeryGoodIdx < qarrVeryGood.length; qarrVeryGoodIdx++) {
    if (qS === qarrVeryGood[qarrVeryGoodIdx] ) {
        quantrem.textContent = 'Very Good';
        quantrem.style.backgroundColor = 'greenyellow';
          console.log('Very Good');
      }  
      
  } 

  const qarrGreat = [...Array(30).keys()].map(i => i + 70);
  var sS = Number(sosTotal.value);
  for (let qarrGreatIdx = 0; qarrGreatIdx < qarrGreat.length; qarrGreatIdx++) {
    if (qS === qarrGreat[qarrGreatIdx] ) {
        quantrem.textContent = 'Excellence';
        quantrem.style.backgroundColor = 'skyblue';
          console.log('Great Score');
      }  
      
  } 
 }

  // for numeracy

  function nGradeStudent() {
      const narrFail = [...Array(40).keys()].map(i => i + 0);
      var nS = Number(numeracyTotal.value);
      for (let narrFailIdx = 0; narrFailIdx < narrFail.length; narrFailIdx++) {
          if (nS === narrFail[narrFailIdx] ) {
              numrem.textContent = 'Fail';
              numrem.style.backgroundColor = 'red';
            console.log('fail');
    
          }
        } 
      
              const narrPoor = [...Array(5).keys()].map(i => i + 40);
              var nS = Number(numeracyTotal.value);
        for (let narrPoorIdx = 0; narrPoorIdx < narrPoor.length; narrPoorIdx++) {
          if (nS === narrPoor[narrPoorIdx] ) {
              numrem.textContent = 'Poor';
              numrem.style.backgroundColor = 'yellow';
                console.log('Poor');
          }
        }  
              
      
                const narrFair = [...Array(5).keys()].map(i => i + 45);
                var nS = Number(numeracyTotal.value);
          for (let narrFairIdx = 0; narrFairIdx < narrFair.length; narrFairIdx++) {
            if (nS === narrFair[narrFairIdx] ) {
                numrem.textContent = 'Fair';
                numrem.style.backgroundColor = 'orange';
                  console.log('Fair');
            }
          }    
      
                  const narrGood = [...Array(10).keys()].map(i => i + 50);
                  var nS = Number(numeracyTotal.value);
            for (let narrGoodIdx = 0; narrGoodIdx < narrGood.length; narrGoodIdx++) {
              if (nS === narrGood[narrGoodIdx] ) {
                  numrem.textContent = 'Good';  
                  numrem.style.backgroundColor = 'green';
                  console.log('Good');
              }
            }  
                 
      
                  const narrVeryGood = [...Array(10).keys()].map(i => i + 60);
                  var nS = Number(numeracyTotal.value);
            for (let narrVeryGoodIdx = 0; narrVeryGoodIdx < narrVeryGood.length; narrVeryGoodIdx++) {
              if (nS === narrVeryGood[narrVeryGoodIdx] ) {
                  numrem.textContent = 'Very Good';
                  numrem.style.backgroundColor = 'greenyellow';
                    console.log('Very Good');
              }
            }    
                 
                  const narrGreat = [...Array(30).keys()].map(i => i + 70);
                  var nS = Number(numeracyTotal.value);
            for (let narrGreatIdx = 0; narrGreatIdx < narrGreat.length; narrGreatIdx++) {
              if (nS === narrGreat[narrGreatIdx] ) {
                  numrem.textContent = 'Excellence';
                  numrem.style.backgroundColor = 'skyblue';
                    console.log('Great Score');
                }  
                
            }
          }        
                
              
              
  // for health habit
  
  function hGradeStudent() {
  
  const harrFail = [...Array(40).keys()].map(i => i + 0);
  var hH = Number(healthTotal.value);
  for (let harrFailIdx = 0; harrFailIdx < harrFail.length; harrFailIdx++) {
      if (hH === harrFail[harrFailIdx] ) {
          healthrem.textContent = 'Fail';
          healthrem.style.backgroundColor = 'red';
        console.log('fail');
      }  
    }  
  

  const harrPoor = [...Array(5).keys()].map(i => i + 40);
  var hH = Number(healthTotal.value);
  for (let harrPoorIdx = 0; harrPoorIdx < harrPoor.length; harrPoorIdx++) {
    if (hH === harrPoor[harrPoorIdx] ) {
        healthrem.textContent = 'Poor';
        healthrem.style.backgroundColor = 'yellow';
          console.log('Poor');
      }  
  } 

  const harrFair = [...Array(5).keys()].map(i => i + 45);
  var hH = Number(healthTotal.value);
  for (let harrFairIdx = 0; harrFairIdx < harrFair.length; harrFairIdx++) {
    if (hH === harrFair[harrFairIdx] ) {
        healthrem.textContent = 'Fair';
        healthrem.style.backgroundColor = 'orange';
          console.log('Fair');
      }  
  }

  const harrGood = [...Array(10).keys()].map(i => i + 50);
  var hH = Number(healthTotal.value);
  for (let harrGoodIdx = 0; harrGoodIdx < harrGood.length; harrGoodIdx++) {
    if (hH === harrGood[harrGoodIdx] ) {
        healthrem.textContent = 'Good';  
        healthrem.style.backgroundColor = 'green';
        console.log('Good');
      }  
  } 

  const harrVeryGood = [...Array(10).keys()].map(i => i + 60);
  var hH = Number(healthTotal.value);
  for (let harrVeryGoodIdx = 0; harrVeryGoodIdx < harrVeryGood.length; harrVeryGoodIdx++) {
    if (hH === harrVeryGood[harrVeryGoodIdx] ) {
        healthrem.textContent = 'Very Good';
        healthrem.style.backgroundColor = 'greenyeloow';
          console.log('Very Good');
      }  
      
  } 

  const harrGreat = [...Array(30).keys()].map(i => i + 70);
  var hH = Number(healthTotal.value);
  for (let harrGreatIdx = 0; harrGreatIdx < harrGreat.length; harrGreatIdx++) {
    if (hH === harrGreat[harrGreatIdx] ) {
        healthrem.textContent = 'Excellence';
        healthrem.style.backgroundColor = 'skyblue';
          console.log('Great Score');
      }  
    }    
  }
document.addEventListener('DOMContentLoaded', () => {
  if (totScoreArr != []) {
  /*gradeStudent();
  eGradeStudent();
  vGradeStudent();
  bGradeStudent();
  btGradeStudent();
  sGradeStudent();
  pGradeStudent();
  qGradeStudent();
  nGradeStudent();
  hGradeStudent();
*/
  mcalc();
  ecalc();
  vcalc();
  calc();
  bscalc();
  soscalc();
  phecalc();
  qcalc();
  ncalc();
  hcalc();
  }
});
  //setTimeout(() => {
    //location.reload()
  //}, 10000);

  // for webcam activation
 /* navigator.getUserMedia ||
  (navigator.getUserMedia = navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia);
  videoBtn = document.getElementById('vidbtn');
  window.URL = window.URL || window.webkitURL || window.mozURL || window.maURL;
videoBtn.addEventListener('click' , () => {
  
  if (navigator.getUserMedia) {
     navigator.getUserMedia({
       video : true, Audio : true
     }, onSuccess, onError);
     console.log('success');
  } else { 
    alert('getUserMedia is not supported by thia browser');
      console.log('failure');
    }
  });
    function onSuccess(stream){
      var video = document.getElementById('webcam');
      var videoSource;
      videoSource = window.URL.createObjectURL(stream);
      video.autoplay = true;
      video.src = videoSource;
     }
  function onError() {
    alert('There is a problem retrieving the stream');
  }*/

 