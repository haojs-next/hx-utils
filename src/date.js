

class Fecha {
    default = undefined;
    masks = {
        'default': 'yyyy-MM-dd HH:mm:ss',
        'mediumDate': 'yyyy-MM-dd',
        'longDate': 'MM-dd',
        'shortTime': 'HH:mm',
        'mediumTime': 'HH:mm:ss'
    };
    constructor (mask = "default") {
        this.default = mask;
    }
    init () {
        const self = this;
        return {
            token: /d{1,2}|M{1,2}|yy(?:yy)?|S{1,2}|([HhMsDmW])\1?|[aA]|"[^"]*"|'[^']*'/g,
            formatFlags: {
                yy: function (dateObj) {
                    return String(dateObj.getFullYear()).substr(2);
                },
                yyyy: function (dateObj) {
                    return dateObj.getFullYear();
                },
                M: function (dateObj) {
                    return dateObj.getMonth() + 1;
                },
                MM: function (dateObj) {
                    return self.pad(dateObj.getMonth() + 1);
                },
                d: function (dateObj) {
                    return dateObj.getDate();
                },
                dd: function (dateObj) {
                    return self.pad(dateObj.getDate());
                },
                H: function (dateObj) {
                    return dateObj.getHours();
                },
                HH: function (dateObj) {
                    return self.pad(dateObj.getHours());
                },
                m: function (dateObj) {
                    return dateObj.getMinutes();
                },
                mm: function (dateObj) {
                    return self.pad(dateObj.getMinutes());
                },
                s: function (dateObj) {
                    return dateObj.getSeconds();
                },
                ss: function (dateObj) {
                    return self.pad(dateObj.getSeconds());
                },
                W: function (dateObj) {
                    return ['日', '一', '二', '三', '四', '五', '六'][dateObj.getDay()];
                }
                
            }
        };
    };
    format (dateObj, mask) {
        if (typeof dateObj === 'number') {
            dateObj = new Date(dateObj);
        }
        if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
            throw new Error('Invalid Date in format');
        }
        mask = this.masks[mask] || mask || this.masks[this.default];
        const { token, formatFlags } = this.init();
        return mask.replace(token, function ($0) {
            return $0 in formatFlags ? formatFlags[$0](dateObj) : $0.slice(1, $0.length - 1);
        });
    };
    pad(val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len) {
            val = '0' + val;
        }
        return val;
    }
}

let h = new Fecha();

export default h;