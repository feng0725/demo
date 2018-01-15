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
        return Math.floor(Math.random() * (m - n)) + n;
    },
    rndArr: function rndArr(length, n, m) {
        var arr = [];
        for (var i = 0; i < length; i++) {
            arr.push(Feng.rnd(n, m));
        }
        return arr;
    },
    monthArr: function monthArr() {
        var arr = [];
        for (var i = 1; i <= 12; i++) {
            arr.push(i + '月');
        }
        return arr;
    },
    a: function a() {}
};

var a = ['A公司', 'B公司', 'C公司', 'D公司', 'E公司', 'F公司', 'G公司'];