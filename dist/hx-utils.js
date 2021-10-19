(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.hxUtils = factory());
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var Fecha = /*#__PURE__*/function () {
    function Fecha() {
      var mask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";

      _classCallCheck(this, Fecha);

      _defineProperty(this, "default", undefined);

      _defineProperty(this, "masks", {
        'default': 'yyyy-MM-dd HH:mm:ss',
        'mediumDate': 'yyyy-MM-dd',
        'longDate': 'MM-dd',
        'shortTime': 'HH:mm',
        'mediumTime': 'HH:mm:ss'
      });

      this["default"] = mask;
    }

    _createClass(Fecha, [{
      key: "init",
      value: function init() {
        var self = this;
        return {
          token: /d{1,2}|M{1,2}|yy(?:yy)?|S{1,2}|([HhMsDmW])\1?|[aA]|"[^"]*"|'[^']*'/g,
          formatFlags: {
            yy: function yy(dateObj) {
              return String(dateObj.getFullYear()).substr(2);
            },
            yyyy: function yyyy(dateObj) {
              return dateObj.getFullYear();
            },
            M: function M(dateObj) {
              return dateObj.getMonth() + 1;
            },
            MM: function MM(dateObj) {
              return self.pad(dateObj.getMonth() + 1);
            },
            d: function d(dateObj) {
              return dateObj.getDate();
            },
            dd: function dd(dateObj) {
              return self.pad(dateObj.getDate());
            },
            H: function H(dateObj) {
              return dateObj.getHours();
            },
            HH: function HH(dateObj) {
              return self.pad(dateObj.getHours());
            },
            m: function m(dateObj) {
              return dateObj.getMinutes();
            },
            mm: function mm(dateObj) {
              return self.pad(dateObj.getMinutes());
            },
            s: function s(dateObj) {
              return dateObj.getSeconds();
            },
            ss: function ss(dateObj) {
              return self.pad(dateObj.getSeconds());
            },
            W: function W(dateObj) {
              return ['日', '一', '二', '三', '四', '五', '六'][dateObj.getDay()];
            },
            WW: function WW(dateObj) {
              return ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][dateObj.getDay()];
            },
            WWW: function WWW(dateObj) {
              return ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][dateObj.getDay()];
            }
          }
        };
      }
    }, {
      key: "format",
      value: function format(dateObj, mask) {
        if (typeof dateObj === 'number') {
          dateObj = new Date(dateObj);
        }

        if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
          throw new Error('Invalid Date in format');
        }

        mask = this.masks[mask] || mask || this.masks[this["default"]];

        var _this$init = this.init(),
            token = _this$init.token,
            formatFlags = _this$init.formatFlags;

        return mask.replace(token, function ($0) {
          return $0 in formatFlags ? formatFlags[$0](dateObj) : $0.slice(1, $0.length - 1);
        });
      }
    }, {
      key: "pad",
      value: function pad(val, len) {
        val = String(val);
        len = len || 2;

        while (val.length < len) {
          val = '0' + val;
        }

        return val;
      }
    }]);

    return Fecha;
  }();

  var h = new Fecha();

  var toStr = Object.prototype.toString;
  /**
   * 
   * @param {*} data 
   */

  function isType(data) {
    return toStr.call(data);
  }
  /**
   * 判断数据类型
   * @param {*} data 数据
   * @param {*} type 是否指定类型
   */

  function verifyType(data, type) {
    return isType(data).slice(8, -1) === type;
  }
  /**
   * 生成随机 id
   * @param { Number } num 
   */

  function generateId(num) {
    if (num && typeof num !== "number") {
      throw new Error(num + "Not Numbers");
    }

    return Math.random().toString(num).substr(2);
  }
  /**
   * 正则身份证
   * 
   * @param {*} card 
   */

  function regIdCard(card) {
    if (!card) return false;
    var isCardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/;
    return isCardReg.test(card);
  }
  /**
   *  正则手机号
   * @param {*} phone 
   */

  function regPhone(phone) {
    if (!phone) return false;
    var isPhoneReg = /^1[3456789]\d{9}$/;
    return isPhoneReg.test(phone);
  }
  /**
   * 身份证号加密
   * @param {*} card 
   */

  var encryptIdCard = function encryptIdCard(card) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
    if (!card) return;
    var reg = new RegExp("^(.{".concat(start, "})(?:\\d+)(.{").concat(end, "})$"));
    return String(card).replace(reg, "$1********$2");
  };
  /**
   * 手机号加密
   * @param {*} phone 
   */

  var encryptPhone = function encryptPhone(phone) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
    if (!phone) return; // let reg = /^(.{3})(?:\d+)(.{4})$/;

    var reg = new RegExp("^(.{".concat(start, "})(?:\\d+)(.{").concat(end, "})$"));
    return String(phone).replace(reg, "$1****$2");
  };
  /**
   * 座机电话号
   * @param {*} input 
   */

  var regFixedPhone = function regFixedPhone(input) {
    if (!input) return false;
    return /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(input);
  };
  /**
   * 验证 url
   * @param {*} input 
   */

  var regUrl = function regUrl(input) {
    return /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(input);
  }; // function url (value) {
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

  var isPhone = function isPhone(phone) {
    return regPhone(phone) || regFixedPhone(phone);
  };
  /**
   *  uuid
   */

  var uuid = function uuid() {
    function S4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }

    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
  };

  function find(list, f) {
    return list.filter(f)[0];
  }
  /**
   * 拷贝
   * @param {*} obj
   * @param {*} cache
   */


  function deepCopy(obj) {
    var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (obj && isType(obj)) return obj;
    if (obj === null || _typeof(obj) !== "object") return obj;
    var hit = find(cache, function (f) {
      return f.original === obj;
    });

    if (hit) {
      return hit.copy;
    }

    var copy = Array.isArray(obj) ? [] : {};
    cache.push({
      original: obj,
      copy: copy
    });
    Object.keys(obj).forEach(function (key) {
      copy[key] = deepCopy(obj[key], cache);
    });
    return copy;
  }

  /** ******************************************* browser 浏览器/手机端 ***************************************************/
  var userAgent = window.navigator.userAgent; // 获取浏览器的userAgent字符串

  /**
   * @description 判断是否Opera浏览器
   */

  var isOpera = function isOpera() {
    return userAgent.indexOf("Opera") > -1;
  };
  /**
   * @description 判断是否是IE浏览器
   */


  var isIE = function isIE() {
    return userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera();
  };
  /**
   * @description 判断是否IE的Edge浏览器
   */


  var isEdge = function isEdge() {
    return userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE();
  };
  /**
   * @description 判断是否Safari浏览器
   */


  var isSafari = function isSafari() {
    return userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1;
  };
  /**
   * @description 判断是否是Chrome浏览器
   */


  var isChrome = function isChrome() {
    return userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1;
  };
  /**
   * @description 判断是否Firefox浏览器
   */


  var isFirefox = function isFirefox() {
    return userAgent.indexOf("Firefox") > -1;
  };
  /**
   * @description 判断是否是微信浏览器
   */


  var isWechat = function isWechat() {
    var ua = userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) === "micromessenger") return true;else return false;
  };
  /**
   * @description 判断是否是android
   */


  var isAndroid = function isAndroid() {
    return /android/gi.test(navigator.appVersion);
  };
  /**
   * @description 判断是否是 android
   */


  var isAdr = function isAdr() {
    return userAgent.indexOf("Android") > -1 || userAgent.indexOf("Adr") > -1;
  };
  /**
   * @description 判断是否是ios
   */


  var isIOS = function isIOS() {
    return !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  };
  /**
   * @description 判断是否是移动端
   */


  var isMobile = function isMobile() {
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


  var callCamera = function callCamera() {
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


  var type = function type() {
    if (isIE()) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp["$1"]);
      if (fIEVersion === 7) return "ie7";
      if (fIEVersion === 8) return "ie8";
      if (fIEVersion === 9) return "ie9";
      if (fIEVersion === 10) return "ie10";
      if (fIEVersion === 11) return "ie11";else return false; // IE版本过低
    }

    if (isFirefox()) return "firefox";
    if (isOpera()) return "opera";
    if (isSafari()) return "safari";
    if (isChrome()) return "chrome";
    if (isEdge()) return "edge";
  };

  var browser = {
    isIE: isIE,
    isEdge: isEdge,
    isOpera: isOpera,
    isSafari: isSafari,
    isChrome: isChrome,
    isFirefox: isFirefox,
    isWechat: isWechat,
    isAndroid: isAndroid,
    isIOS: isIOS,
    isMobile: isMobile,
    callCamera: callCamera,
    isAdr: isAdr,
    type: type
  };

  var utils = {
    generateId: generateId,
    regIdCard: regIdCard,
    regPhone: regPhone,
    isType: isType,
    verifyType: verifyType,
    deepCopy: deepCopy,
    encryptIdCard: encryptIdCard,
    encryptPhone: encryptPhone,
    regFixedPhone: regFixedPhone,
    regUrl: regUrl,
    isPhone: isPhone,
    moment: h,
    browser: browser,
    uuid: uuid
  };

  return utils;

}));
