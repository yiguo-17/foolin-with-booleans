/********************
 * YOUR CODE BELOW! *
 ********************/
// variables
const iGetTheJoke = true;
const havingFun = true;
const learning = true;
const killingIt = havingFun&& learning;

// functions
function returnFalse(sttmnt){
  return result = false;
}

function isOpposite(argue){
  return result = ! argue;
}

function both(s1, s2){
  return result =s1 && s2;
}

function either (s1, s2){
  return result = s1 || s2;
}

function firstOnly(s1,s2){
  return result = s1 && !s2;
}

function secondOnly(s1, s2){
  return result = !s1&& s2;
}
function neither(s1,s2){
  return result = !s1 && !s2 ;
} 
function itsComplicated(s1,s2,s3){
  return result = !s1 || (s2 && s3);
} 


/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof iGetTheJoke === 'undefined') {
  iGetTheJoke = undefined;
}

if (typeof havingFun === 'undefined') {
  havingFun = undefined;
}

if (typeof learning === 'undefined') {
  learning = undefined;
}

if (typeof killingIt === 'undefined') {
  killingIt = undefined;
}

if (typeof isOpposite === 'undefined') {
  isOpposite = undefined;
}

if (typeof returnFalse === 'undefined') {
  returnFalse = undefined;
}

if (typeof both === 'undefined') {
  both = undefined;
}

if (typeof either === 'undefined') {
  either = undefined;
}

if (typeof firstOnly === 'undefined') {
  firstOnly = undefined;
}

if (typeof secondOnly === 'undefined') {
  secondOnly = undefined;
}

if (typeof neither === 'undefined') {
  neither = undefined;
}

if (typeof itsComplicated === 'undefined') {
  itsComplicated = undefined;
}


module.exports = {
  iGetTheJoke,
  havingFun,
  learning,
  killingIt,
  returnFalse,
  isOpposite,
  both,
  either,
  firstOnly,
  secondOnly,
  neither,
  itsComplicated,
}