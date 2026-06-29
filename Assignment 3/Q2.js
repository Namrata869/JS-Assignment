function countHead() {
    let S = document.getElementById("str").value;

    let freq = {};

    // Count frequency of each character
    for (let i = 0; i < S.length; i++) {
        let ch = S[i];

        if (freq[ch]) {
            freq[ch]++;
        } else {
            freq[ch] = 1;
        }
    }

    let result = "";

    // Print only characters whose frequency > 1
    // in alphabetical order
    for (let ch = 'a'.charCodeAt(0); ch <= 'z'.charCodeAt(0); ch++) {
        let letter = String.fromCharCode(ch);

        if (freq[letter] > 1) {
            result += letter + freq[letter];
        }
    }

    document.getElementById("output").innerHTML = "Output: " + result;
}