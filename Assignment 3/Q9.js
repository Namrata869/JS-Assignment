function reverseString() {

    let S = document.getElementById("str").value;

    let reverse = "";

    for (let i = S.length - 1; i >= 0; i--) {
        reverse += S[i];
    }

    document.getElementById("result").innerHTML = "Reversed String: " + reverse;
}