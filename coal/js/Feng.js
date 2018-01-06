let Feng = {
    /**
     * 初始化数据数组
     * @param length
     * @param value
     * @returns {Array}
     */
    setDataArr(length, value = '-') {
        let arr = []
        for (let i = 0; i < length; i++) {
            arr.push(value)
        }
        return arr
    },
    rnd(n, m) {
        return Math.floor(Math.random() * n + m)
    },
    rndArr(length, n, m) {
        let arr = []
        for (let i = 0; i < length; i++) {
            arr.push(Feng.rnd(n, m))
        }
        return arr;
    },
    a(){
        alert(23)
    }

}