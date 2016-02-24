var inputWindow=document.getElementById('input');
var firstValue = inputWindow.value;
var secondValue = 0;
var oreparation = " ";
var result;


function number(){
 /*if ((this.value===".")&&((firstValue.includes(".")||(secondValue.includes("."))) )){} else*/
 if ((oreparation===" ") || (oreparation===null)) {
 firstValue += this.value; 
 inputWindow.value=parseFloat(firstValue);  } 
  else {
     secondValue += this.value; 
 inputWindow.value=parseFloat(secondValue); }
  
}


function changeSign (){
  firstValue *=(-1);
  inputWindow.value=firstValue;
  }

function clear(){
  firstValue ="0";
  inputWindow.value=firstValue;
  }

function clearEnt(){
  firstValue ="0";
  secondValue =" ";
  oreparation=" ";
  inputWindow.value=firstValue;
  }

function operation(){
  
  if (this.value==="+") {
  oreparation= "+";
   } else
     if (this.value==="-") {
  oreparation= "-";
   } else
     if (this.value==="/") {
  oreparation= "/";
   }else
     if (this.value==="*") {
  oreparation= "*";
   }else
     if (this.value==="%") {
  oreparation= "%";
   }
     
      
}

function calculation() {
  if (oreparation==="+") {
  inputWindow.value=parseFloat(firstValue)+parseFloat(secondValue);
   } else
     if (oreparation==="-") {
  inputWindow.value=parseFloat(firstValue)-parseFloat(secondValue);
   } else
     if (oreparation==="/") {
  inputWindow.value=parseFloat(firstValue)/parseFloat(secondValue);
   }else
     if (oreparation==="*") {
  inputWindow.value=parseFloat(firstValue)*parseFloat(secondValue);
   }else
     if (oreparation==="%") {
  inputWindow.value=parseFloat(firstValue)/100*parseFloat(secondValue);
   }
 
 firstValue = parseFloat(inputWindow.value); 
 secondValue = "";
 oreparation = null;
  
  
}


document.getElementsByName('btnOne')[0].addEventListener('click', number, false);
document.getElementsByName('btnTwo')[0].addEventListener('click', number, false);
document.getElementsByName('btnThree')[0].addEventListener('click', number, false);
document.getElementsByName('btnFour')[0].addEventListener('click', number, false);
document.getElementsByName('btnFive')[0].addEventListener('click', number, false);
document.getElementsByName('btnSix')[0].addEventListener('click', number, false);
document.getElementsByName('btnSeven')[0].addEventListener('click', number, false);
document.getElementsByName('btnEight')[0].addEventListener('click', number, false);
document.getElementsByName('btnNine')[0].addEventListener('click', number, false);
document.getElementsByName('btnZero')[0].addEventListener('click', number, false);
document.getElementsByName('btnDecimal')[0].addEventListener('click', number, false);
document.getElementsByName('btnNeg')[0].addEventListener('click', changeSign, false);
document.getElementsByName('btnClear')[0].addEventListener('click', clear, false);
document.getElementsByName('btnClearEntry')[0].addEventListener('click', clearEnt, false);
document.getElementsByName('btnPlus')[0].addEventListener('click', operation, false);
document.getElementsByName('btnMinus')[0].addEventListener('click', operation, false);
document.getElementsByName('btnDivide')[0].addEventListener('click', operation, false);
document.getElementsByName('btnMultiply')[0].addEventListener('click', operation, false);
document.getElementsByName('btnPercent')[0].addEventListener('click', operation, false);
document.getElementsByName('btnEquals')[0].addEventListener('click', calculation, false);