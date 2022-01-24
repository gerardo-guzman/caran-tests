
const contLetters = (texto = '') => {
    texto = texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\d']/g,"");
    const letterObj = {};
    texto.toLowerCase().split('').forEach(letter => {
        if (!letterObj[letter]) letterObj[letter] = 0;
        letterObj[letter] ++;
    });

    return Object.keys(letterObj).sort().map(key => {
        return { letter: key, count: letterObj[key] };
    });
}

module.exports = contLetters;
