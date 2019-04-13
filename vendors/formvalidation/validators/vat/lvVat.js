import isValidDate from '../../utils/isValidDate';
export default function lv(value) {
    let v = value;
    if (/^LV[0-9]{11}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{11}$/.test(v)) {
        return false;
    }
    const first = parseInt(v.charAt(0), 10);
    const length = v.length;
    let sum = 0;
    let weight = [];
    let i;
    if (first > 3) {
        sum = 0;
        weight = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1];
        for (i = 0; i < length; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = sum % 11;
        return sum === 3;
    }
    else {
        const day = parseInt(v.substr(0, 2), 10);
        const month = parseInt(v.substr(2, 2), 10);
        let year = parseInt(v.substr(4, 2), 10);
        year = year + 1800 + parseInt(v.charAt(6), 10) * 100;
        if (!isValidDate(year, month, day)) {
            return false;
        }
        sum = 0;
        weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
        for (i = 0; i < length - 1; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = (sum + 1) % 11 % 10;
        return `${sum}` === v.charAt(length - 1);
    }
}