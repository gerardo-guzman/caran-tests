
const getBisiesto = (inicio = 0, fin = 0) => {

    if (fin < inicio) return 0;
    // if (inicio < 0 || fin < 0) return 0;

    let bisiestos = '';

    for (let i = inicio; i < fin; i++) {
       if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0)
        bisiestos = bisiestos === '' ? `${i}`: `${bisiestos}@${i}`;
    }

    if (bisiestos === '') return 'Sin bisiestos';
    return bisiestos;
}

module.exports = getBisiesto;
