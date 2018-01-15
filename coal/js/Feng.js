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
        return Math.floor(Math.random() * (m-n)) +n
    },
    rndArr(length, n, m) {
        let arr = []
        for (let i = 0; i < length; i++) {
            arr.push(Feng.rnd(n, m))
        }
        return arr;
    },
    monthArr(){
         var arr = [];
         for(var i =1; i<=12;i++){
             arr.push(i+'月')
         }
         return arr;
    },
    a(){

    }

}

var a = ['A公司','B公司','C公司','D公司','E公司','F公司','G公司']