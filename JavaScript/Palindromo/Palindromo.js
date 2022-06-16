//Solução 1 - para uma palavra
function verificaPalindromo(string) {
    if(!string) return "String inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo(""));

//Solução 2
function verificaPalindromo2(string) {
    if(!string) return "String inexistente";

    for(let i = 0; i < string.lenght / 2; i++) {
        if(string[i] !== string[string.lenght - 1 - i]) {
            return false
        }
    }

    return true;
}

console.log(verificaPalindromo2("abba"));