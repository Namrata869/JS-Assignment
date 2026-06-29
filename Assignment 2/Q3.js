let A = 2;
let B = 5;
let C = 4;

if (A === B && B === C) {
    console.log(-1);
} else if (A >= B && A >= C) {
    console.log(A);
} else if (B >= A && B >= C) {
    console.log(B);
} else {
    console.log(C);
}