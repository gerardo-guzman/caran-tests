
const dateParser = (timeStamp = 0) => {
    let hour = new Date(timeStamp * 1000).getHours();
    if (hour >= 12) return `${hour - 12}:00 PM`;
    return `${hour}:00 aM`
}

module.exports = dateParser;

