function stringMatch() {

    let S1 = document.getElementById("str1").value;
    let S2 = document.getElementById("str2").value;

    if (S1 === S2) {
        document.getElementById("result").innerHTML = "YES";
    } else {
        document.getElementById("result").innerHTML = "NO";
    }
}