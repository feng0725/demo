var Feng = {
    /**
     * 初始化数据数组
     * @param length
     * @param value
     * @returns {Array}
     */
    setDataArr: function (length, value) {
        var arr = []
        value = value || '-'
        for (var i = 0; i < length; i++) {
            arr.push(value)
        }
        return arr
    },
    rnd: function (n, m) {
        return Math.floor(Math.random() * n + m)
    },
    rndArr: function (length, n, m) {
        var arr = []
        for (var i = 0; i < length; i++) {
            arr.push(Feng.rnd(n, m))
        }
        return arr;
    }

}