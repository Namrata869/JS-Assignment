function concatenateStrings() {

    let S1 = document.getElementById("str1").value;
    let S2 = document.getElementById("str2").value;

    let S3 = S1 + S2;

    document.getElementById("result").innerHTML = "Concatenated String: " + S3;
}