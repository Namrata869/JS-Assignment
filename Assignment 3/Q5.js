function findLength() {

    let S = document.getElementById("str").value;

    let count = 0;

    for (let ch of S) {
        count++;
    }

    document.getElementById("result").innerHTML = "Length = " + count;
}