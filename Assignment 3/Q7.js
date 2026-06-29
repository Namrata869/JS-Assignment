function joinStrings() {

    let S = document.getElementById("str1").value;
    let P = document.getElementById("str2").value;

    let result = S + P;

    document.getElementById("result").innerHTML = "Joined String: " + result;
}