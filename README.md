# hx-utils (javascript tools)


## 安装

```
yarn add hx-utils || npm i hx-utils -S

```
## 使用

## 正则验证

```javascript
import hxUtils from 'hx-utils';

// 验证身份证号
let card = "110101*******";
hxUtils.regIdCard(card);

// 验证手机号
let phone = "199****";
hxUtils.regPhone(phone);

// 验证座机号
hxUtils.regFixedPhone("0312-88888888")  // result: true

// 验证是否 座机或者手机号
hxUtils.isPhone(phone) 


// 身份证号加密
// encryptIdCard(card, start =6, end = 4) 
hxUtils.encryptIdCard("身份证号") // "123456********1234"
hxUtils.encryptIdCard("身份证号", 3, 6) // "123********123456"

// 手机号加密
// encryptPhone(card, start = 6, end = 4) 
hxUtils.encryptPhone("手机号") // "123****1234"
hxUtils.encryptPhone("手机号", 4, 2) // "1234****12"


// 验证是否是 url  (必须 http 或者 https 开头)
hxUtils.regUrl("//www.baidu.com") // false 
hxUtils.regUrl("https://www.baidu.com") // result: true

```

## 类型

```javascript
import hxUtils from 'hx-utils';

// 查询数据类型
hxUtils.isType("测试字符串")  // result: [object String]
hxUtils.isType({}) // [object Object]

// 验证数据类型
hxUtils.verifyType("测试字符串", "String")  // result: true
hxUtils.verifyType({}, "Object") // true

// 随机生成 id 
hxUtils.generateId() // 1223132151312

// 进制
hxUtils.generateId(16) // 进制输出



// 生成 uuid
hxUtils.uuid()  // "244023b7-abfa-4208-e5f8-96ec49671fa9"


```

## 时间

```javascript
import hxUtils from 'hx-utils';

// 注意：不支持 国际化配置，如需要请下载 dayjs、moment 等第三方工具
// 格式： yyyy-MM-dd HH:mm:ss （YYYY 为错误，必须小写）

hxUtils.moment.format(new Date(), "yyyy-MM-dd HH:mm:ss") // 2021-00-00 00:00:00

hxUtils.moment.format("时间戳", "yyyy-MM-dd") // 2021-10-01

hxUtils.moment.format("时间戳", "HH:mm:ss") // 18:00:00

hxUtils.moment.format("时间", "HH:mm:ss WWW") // 18:00:00 星期五

hxUtils.moment.format("时间", "HH时mm分ss秒 周W") // 18时03分20秒 周五

hxUtils.moment.format("时间", "今天WW HH:mm:ss ") // 今天周五 18:00:00 

```

## 拷贝

```javascript
import hxUtils from 'hx-utils';

hxUtils.deepCopy({});

```

## 识别浏览器

```javascript
import hxUtils from 'hx-utils';

let {
    isIE,       // ie
    isEdge,     // edge
    isOpera,    // Opera
    isSafari,   // Safari
    isChrome,   // Chrome
    isFirefox,  // 火狐
    isWechat,   // 是否 微信端
    isAndroid,  // 是否 安卓
    isIOS,      // 是否 苹果
    isMobile,   // 是否 移动端
    callCamera, // 看下面示例
    isAdr,      // 是否 安卓
    type        // 识别当前浏览器是哪个
} = hxUtils.browser;


// type 返回结果
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

```


<!-- [参考](https://github.com/shiguang0116/sg-utils) -->