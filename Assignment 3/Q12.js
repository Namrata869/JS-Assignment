function splitString() {

    let S = document.getElementById("str").value;

    let arr = S.split(" ");

    let output = "";

    for (let i = 0; i < arr.length; i++) {
        output += arr[i] + "<br>";
    }

    document.getElementById("result").innerHTML = output;
}