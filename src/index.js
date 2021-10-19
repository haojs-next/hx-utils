export * as moment from "./date";
export { generateId, regIdCard, regPhone, isType, verifyType, encryptIdCard, encryptPhone, regFixedPhone, regUrl, isPhone, uuid } from "./util";
export * as deepCopy from "./clone";
export * as browser from "./browser";

const utils = {
    generateId,
    regIdCard,
    regPhone,
    isType,
    verifyType,
    deepCopy,
    encryptIdCard,
    encryptPhone,
    regFixedPhone, 
    regUrl,
    isPhone,
    moment: moment,
    browser,
    uuid
}

export default utils;
