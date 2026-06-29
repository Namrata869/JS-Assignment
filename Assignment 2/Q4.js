let X = 2;
let Y = 9;
let Z = 23;

if ((X > Y && X < Z) || (X < Y && X > Z)) {
    console.log(X);
} else if ((Y > X && Y < Z) || (Y < X && Y > Z)) {
    console.log(Y);
} else {
    console.log(Z);
}