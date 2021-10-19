const toStr = Object.prototype.toString;
/**
 * 
 * @param {*} data 
 */
export function isType(data) {
    return toStr.call(data);
}

/**
 * 判断数据类型
 * @param {*} data 数据
 * @param {*} type 是否指定类型
 */
export function verifyType(data, type) {
    return isType(data).slice(8, -1) === type;
}


/**
 * 生成随机 id
 * @param { Number } num 
 */
export function generateId(num) {
    if (num && typeof num !== "number") {
        throw new Error(num + "Not Numbers")
    }
    return Math.random().toString(num).substr(2);
}

/**
 * 正则身份证
 * 
 * @param {*} card 
 */
 export function regIdCard(card) {
    if (!card) return false;
    const isCardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/;
    return isCardReg.test(card);
}

/**
 *  正则手机号
 * @param {*} phone 
 */
export function regPhone(phone) {
    if (!phone) return false;
    const isPhoneReg = /^1[3456789]\d{9}$/;
    return isPhoneReg.test(phone);
}


/**
 * 身份证号加密
 * @param {*} card 
 */
export const encryptIdCard = (card, start = 6, end = 4) => {
    if (!card) return;
    let reg = new RegExp(`^(.{${start}})(?:\\d+)(.{${end}})$`);
    return String(card).replace(reg, "$1********$2");
};

/**
 * 手机号加密
 * @param {*} phone 
 */
export const encryptPhone = (phone, start = 3, end = 4) => {
    if (!phone) return;
    // let reg = /^(.{3})(?:\d+)(.{4})$/;
    let reg = new RegExp(`^(.{${start}})(?:\\d+)(.{${end}})$`);
    return String(phone).replace(reg, "$1****$2");
};

/**
 * 座机电话号
 * @param {*} input 
 */
export const regFixedPhone = function(input) {
    if (!input) return false;
    return /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(input)
}

/**
 * 验证 url
 * @param {*} input 
 */
export const regUrl = function(input) {
    return /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(input)
}

// function url (value) {
//     var v = new RegExp(
//         "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
//         "i"
//     );
//     return v.test(value);
// }

/**
 * 验证手机或者座机号码
 * 
 * @param {*} phone 
 */
export const isPhone = (phone) => {
    return regPhone(phone) || regFixedPhone(phone)
}

/**
 *  uuid
 */
export const uuid = function() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
};
