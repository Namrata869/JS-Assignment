function Count_Vowels(S) {

    let vowels = 0;

    for (let i = 0; i < S.length; i++) {

        let ch = S[i];

        if (
            ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
            ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
        ) {
            vowels++;
        }
    }

    return vowels;
}

function Count_Consonants(S) {

    let consonants = 0;

    for (let i = 0; i < S.length; i++) {

        let ch = S[i];

        if (
            (ch >= 'a' && ch <= 'z') ||
            (ch >= 'A' && ch <= 'Z')
        ) {

            if (
                ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u' &&
                ch !== 'A' && ch !== 'E' && ch !== 'I' && ch !== 'O' && ch !== 'U'
            ) {
                consonants++;
            }
        }
    }

    return consonants;
}

function countVC() {

    let S = document.getElementById("str").value;

    let vowels = Count_Vowels(S);
    let consonants = Count_Consonants(S);

    document.getElementById("result").innerHTML =
        "Vowels = " + vowels + "<br>Consonants = " + consonants;
}