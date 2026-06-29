function plainCheck() {

    let S = document.getElementById("str").value;

    let reverse = "";

    for (let i = S.length - 1; i >= 0; i--) {
        reverse += S[i];
    }

    if (S === reverse) {
        document.getElementById("result").innerHTML = "True";
    } else {
        document.getElementById("result").innerHTML = "False";
    }
}