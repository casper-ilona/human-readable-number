const alphaListnumb = [
    ['zero', '', ''],
    ['one', 'eleven', 'ten'],
    ['two', 'twelve', 'twenty'],
    ['three', 'thirteen', 'thirty'],
    ['four', 'fourteen', 'forty'],
    ['five', 'fifteen', 'fifty'],
    ['six', 'sixteen', 'sixty'],
    ['seven', 'seventeen', 'seventy'],
    ['eight', 'eighteen', 'eighty'],
    ['nine', 'nineteen', 'ninety'],
];


module.exports = function toReadable(number) {
    
    const hund = number / 100 >> 0;
    const dozens = (number % 100) / 10 >> 0;
    const n = number % 10;
    
    
    let result = '';
    if (hund) {
        result += `${alphaListnumb[hund][0]} hundred`;
    }
    if (dozens === 1 && !n || dozens > 1) {
        result += `${result && ' '}${alphaListnumb[dozens][2]}`;
    }
    
    if (n) {
        result += `${result && ' '}${alphaListnumb[n][dozens === 1 ? 1 : 0]}`;
    }
    
    return result || alphaListnumb[0][0];
};




