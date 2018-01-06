'use strict';

var Feng = {
    /**
     * 初始化数据数组
     * @param length
     * @param value
     * @returns {Array}
     */
    setDataArr: function setDataArr(length) {
        var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';

        var arr = [];
        for (var i = 0; i < length; i++) {
            arr.push(value);
        }
        return arr;
    },
    rnd: function rnd(n, m) {
        return Math.floor(Math.random() * n + m);
    },
    rndArr: function rndArr(length, n, m) {
        var arr = [];
        for (var i = 0; i < length; i++) {
            arr.push(Feng.rnd(n, m));
        }
        return arr;
    },
    a: function a() {
        alert(23);
    }
};