import hdate from "./date";
import { generateId,regIdCard, regPhone, isType, verifyType, encryptIdCard, encryptPhone, regFixedPhone, regUrl, isPhone, uuid } from "./util";
import deepCopy from "./clone";
import browser from "./browser";

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
    moment: hdate,
    browser,
    uuid
}

export default utils;
