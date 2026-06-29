function countVowel() {
    let S = document.getElementById("str").value;

    let count = 0;

    for (let i = 0; i < S.length; i++) {
        let ch = S[i];

        if (
            ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
            ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
        ) {
            count++;
        }
    }

    document.getElementById("result").innerHTML = "Number of Vowels: " + count;
}