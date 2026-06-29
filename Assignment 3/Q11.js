function replaceString() {

    let S = document.getElementById("sentence").value;
    let pattern = document.getElementById("pattern").value;
    let text = document.getElementById("text").value;

    let result = S.replace(pattern, text);

    document.getElementById("result").innerHTML = "Updated String: " + result;
}