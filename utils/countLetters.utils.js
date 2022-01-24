
const contLetters = (texto = '') => {
    
    const letterObj = {};
    texto.toLowerCase().split('').forEach(letter => {
        if (!letterObj[letter]) letterObj[letter] = 0;
        letterObj[letter] ++;
    });

    return Object.keys(letterObj).sort().map(key => {
        return { [key]: letterObj[key] };
    });
}

module.exports = contLetters;
