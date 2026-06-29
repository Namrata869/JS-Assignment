function countCharacters() {

    let S = document.getElementById("str").value;

    let countA = 0;
    let countD = 0;

    for (let i = 0; i < S.length; i++) {

        if (S[i] === 'A') {
            countA++;
        }
        else if (S[i] === 'D') {
            countD++;
        }
    }

    let B = [countA, countD];

    document.getElementById("result").innerHTML =
        "Output: [" + B[0] + ", " + B[1] + "]";
}