## HTML 规范
```html
<!-- 文件后缀使用.html -->
<!-- 单行注释开始和结束符前后一个空格 -->
<!-- 
    0.多行注释如此；
    1.声明文档使用<!DOCTYPE html>；
    2.<html>元素使用lang属性；
    3.嵌套元素使用4个空格缩进；
    4.元素标签名和属性名使用小写；
    5.属性值使用双引号；
    6.声明字符编码；
    7.使用语义化元素；
    8.class和id值使用小写和连字符-连接；
    9.自闭合元素不使用斜杠/；
    10.布尔值属性不取值。
 -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <header>
        <input class="selector-order" type="text" required>
    </header>
</body>
</html>
```

## CSS 规范
```css
/* 文件后缀使用.css */
/* 单行注释开始和结束符前后一个空格 */
/* 
 * 0.多行注释如此；
 * 1.声明字符编码
 * 2.选择器小写；
 * 3.使用-连接；
 * 4.属性选择器属性使用双引号；
 * 5.等号前后不加空格；
 * 6.开始括号前一个空格；
 * 7.结束括号另起一行；
 * 8.声明语句间空一行。
 */
@charset "UTF-8" ;
.selector-order input[type="text"] {
    /* 
     * 0.属性声明使用4个空格缩进；
     * 1.属性顺序：定位、尺寸、字体、颜色背景；
     * 2.属性冒号后一个空格；
     * 3.不给0值指明单位；
     * 4.颜色值使用十六进制小写，可简写时使用3位数；
     * 5.小于0的小数值不写0；
     * 6.字符串值使用双引号
     */
    /* Position */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    /* Box model */
    display: block;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    margin: 10px;
    float: left;
    overflow: auto;
    /* Typographic */
    font: normal 13px "Microsoft YaHei", sans-serif;
    line-height: 1.5;
    text-align: center;
    /* Visual */
    background-color: #f5f5f5;
    background-image: url("image.jpg");
    color: #fff;
    opacity: .8;
    /* Others */
    cursor: pointer;
}
```

## JavaScript 规范
```js
// 文件后缀使用.js
// 单行注释开始符后一个空格
/* 
 * 0.多行注释如此；
 * 1.使用严格模式；
 * 2.使用双引号；
 * 3.语句结束使用分号；
 * 4.变量名、对象、函数使用小驼峰命名camelCase；
 * 5.类和构造函数使用大驼峰命名CamelCase；
 * 6.常量使用大写和下划线命名；
 * 7.非参数括号前后使用一个空格；
 * 8.非一元运算符前后使用一个空格；
 * 9.逗号后一个空格；
 * 10.文件末尾留一个空行。
 */
"use strict";
var name = "itroger";
function getName() {}
class Person(name, age) {} 
const PI_NUMBER = 3.14;
if (name === "itroger") {
    console.log("Hello" + name);
}

```