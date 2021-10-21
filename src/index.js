export { moment } from "./date";
export { deepCopy } from "./clone";
export { browser } from "./browser";
export { generateId, regIdCard, regPhone, isType, verifyType, encryptIdCard, encryptPhone, regFixedPhone, regUrl, isPhone, uuid } from "./util";
import { moment } from "./date";
import { deepCopy } from "./clone";
import { browser } from "./browser";
import { generateId, regIdCard, regPhone, isType, verifyType, encryptIdCard, encryptPhone, regFixedPhone, regUrl, isPhone, uuid } from "./util";
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
