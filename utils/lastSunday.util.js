
const getLastSundays = (fechaI, fechaF) => {

    const fechI = new Date(fechaI), fechF = new Date(fechaF);

    if (isNaN(fechI.getTime()) || isNaN(fechF.getTime())) return null;

    if (fechI.getTime() > fechF.getTime()) return null;

    let lastSundays = 0
    while(fechI.getTime() < fechF.getTime()) {
        const auxDate = new Date(fechI);
        auxDate.setMonth(fechI.getMonth());
        auxDate.setDate(0);
        if (auxDate.getTime() > fechF.getTime()) break;
        if (auxDate.getDay() === 0) lastSundays ++;
        fechI.setMonth(fechI.getMonth() + 1);
    }

    return lastSundays;

}

module.exports = getLastSundays;
