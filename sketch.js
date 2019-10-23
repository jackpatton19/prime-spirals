// Checks if a number is prime
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

// Sleep function
function pausecomp(millis){
  var date = new Date();
  var curDate = null;
  do{
    curDate = new Date();
  }while(curDate - date < millis)
}

// Variables for incrementing the draw function
let i = 0;
let num = 10000;

// =========================================================
// P5 FUNCTIONS
function setup(){
  createCanvas(displayWidth, displayHeight);
  background(51);
}

// ========================================================
function draw(){

  // Does the translations for width and height
  translate(width / 2, height / 2);

  // Goes through the max number of primes to be drawm
  if(i < num){
    if(isPrime(i)){
      // Gets x and y from polar coordinates
      let x = i * sin(i);
      let y = i * cos(i);
      ellipseMode(CENTER);
      noStroke();
      fill(255);
      // ----------------------------------------------------
      //if(i < num / 3){
        //fill(i / 10, 0, 0);
      //}else if(i < ((num / 3) * 2) && i > (num / 3)){
        //fill(0, (i - (num / 3)) / 10, 0);
      //}else{
        //fill(0, 0, (i - ((num / 3) * 2)) / 10);
      //}
      // ----------------------------------------------------
      ellipse(x / 50, y / 50, 4, 4);
      //pausecomp(5);
    }
    i++;
  }
}
