
function gameWinner() {

    let S = document.getElementById("games").value;

    let aditya = 0;
    let danish = 0;

    for (let i = 0; i < S.length; i++) {

        if (S[i] === "A") {
            aditya++;
        }
        else if (S[i] === "D") {
            danish++;
        }
    }

    if (aditya > danish) {
        document.getElementById("result").innerHTML = "Winner: Aditya";
    }
    else if (danish > aditya) {
        document.getElementById("result").innerHTML = "Winner: Danish";
    }
    else {
        document.getElementById("result").innerHTML = "Draw";
    }
}