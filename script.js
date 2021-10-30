/* 
Coding Challenge #3
*/

const teamDolphinsScore = 96 + 108 + 89;
const dolphinsAvg = (teamDolphinsScore / 3);
console.log(teamDolphinsScore, dolphinsAvg);

const teamKoalasScore = 88 + 91 + 110;
const koalasAvg = (teamKoalasScore / 3);
console.log(teamKoalasScore, koalasAvg);

if(dolphinsAvg > koalasAvg) {
    console.log('DOLPHINS WIN!!');
} else {
    console.log('KOALAS WIN!!');
}

// DATA BONUS #1 

const teamDolphinsBScore = 97 + 112 + 101;
const dolphinsBAvg = (teamDolphinsBScore / 3);
console.log(teamDolphinsBScore, dolphinsBAvg);

const teamKoalasBScore = 109 + 95 + 123;
const koalasBAvg = (teamKoalasBScore / 3);
console.log(teamKoalasBScore, koalasBAvg);

const minBScore = 100;
const dophinsBWin = dolphinsBAvg >= minBScore;
const koalasBWin = koalasBAvg >= minBScore;

if(dolphinsBAvg >= minBScore && (dolphinsBAvg > koalasBAvg)) {
    console.log('DOPHINS WIN AGAIN!');
} else if (koalasBAvg >= minBScore && (koalasBAvg > dolphinsBAvg)) {
    console.log ('KOALAS WIN!');
} else {
    console.log("IT'S A DRAW!");
}


// DATA BONUS #2

const teamDolphinsCScore = 97 + 112 + 101;
const dolphinsCAvg = (teamDolphinsCScore / 3);
console.log(teamDolphinsCScore, dolphinsCAvg);

const teamKoalasCScore = 109 + 95 + 106;
const koalasCAvg = (teamKoalasCScore / 3);
console.log(teamKoalasCScore, koalasCAvg);

const minCScore = 100;
const dophinsCWin = dolphinsCAvg >= minCScore;
const koalasCWin = koalasCAvg >= minCScore;
/*
So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
*/

if(dolphinsCAvg >= minCScore && (dolphinsCAvg > koalasCAvg)) {
    console.log('DOLPHINS WIN ONCE AGAIN!');
} else if (koalasCAvg >= minCScore && (koalasCAvg > dolphinsCAvg)) {
    console.log('KOALAS TAKE THE W!');
} else if ((dolphinsCAvg && koalasCAvg) >= minCScore && (dolphinsCAvg === koalasCAvg)) {
    console.log("IT'S A DRAW!");
} else {
    console.log("NO ONE WINS.");
}