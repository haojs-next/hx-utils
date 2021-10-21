/** ******************************************* browser 浏览器/手机端 ***************************************************/

var userAgent = window.navigator.userAgent; // 获取浏览器的userAgent字符串

/**
 * @description 判断是否Opera浏览器
 */
const isOpera = function () {
    return userAgent.indexOf("Opera") > -1;
};

/**
 * @description 判断是否是IE浏览器
 */
const isIE = function () {
    return userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera();
};
/**
 * @description 判断是否IE的Edge浏览器
 */
const isEdge = function () {
    return userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE();
};
/**
 * @description 判断是否Safari浏览器
 */
const isSafari = function () {
    return userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1;
};
/**
 * @description 判断是否是Chrome浏览器
 */
const isChrome = function () {
    return userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1;
};
/**
 * @description 判断是否Firefox浏览器
 */
const isFirefox = function () {
    return userAgent.indexOf("Firefox") > -1;
};

/**
 * @description 判断是否是微信浏览器
 */
const isWechat = function () {
    var ua = userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) === "micromessenger") return true;
    else return false;
};
/**
 * @description 判断是否是android
 */
const isAndroid = function () {
    return /android/gi.test(navigator.appVersion);
};

/**
 * @description 判断是否是 android
 */
const isAdr = () => {
    return (userAgent.indexOf("Android") > -1 || userAgent.indexOf("Adr") > -1);
}
/**
 * @description 判断是否是ios
 */
const isIOS = function () {
    return !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};
/**
 * @description 判断是否是移动端
 */
const isMobile = function () {
    if (userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        return true;
    } else return false;
};
/**
 * @description 根据手机设备调取相机
 * <input type="file" capture="camera" accept="image/*" multiple="multiple">
 * Android：加上 capture 属性，可以同时调用相册和相机，否则只能调用相册；
 * IOS：    加上 capture 属性，只能调相机，反之可以同时调用相册和相机。二者在 capture="camera" 上是相反的
 */
const callCamera = function () {
    if (isIOS()) {
        var file = window.document.querySelectorAll("input[capture=camera]");
        for (var i = 0; i < file.length; i++) {
            file[i].removeAttribute("capture");
        }
    }
};


/**
 * @description 判断当前浏览类型
 * @return {String} ie7
 * @return {String} ie8
 * @return {String} ie9
 * @return {String} ie10
 * @return {String} ie11
 * @return {String} edge
 * @return {String} chrome
 * @return {String} safari
 * @return {String} firefox
 * @return {String} opera
 */
const type = function () {
    if (isIE()) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion === 7) return "ie7";
        if (fIEVersion === 8) return "ie8";
        if (fIEVersion === 9) return "ie9";
        if (fIEVersion === 10) return "ie10";
        if (fIEVersion === 11) return "ie11";
        else return false; // IE版本过低
    }

    if (isFirefox()) return "firefox";
    if (isOpera()) return "opera";
    if (isSafari()) return "safari";
    if (isChrome()) return "chrome";
    if (isEdge()) return "edge";
};

export const browser = {
    isIE,
    isEdge,
    isOpera,
    isSafari,
    isChrome,
    isFirefox,
    isWechat,
    isAndroid,
    isIOS,
    isMobile,
    callCamera,
    isAdr,
    type
}
