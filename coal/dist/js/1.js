'use strict';

var t01 = echarts.init(document.getElementById('t01'), 'customed');
var t02 = echarts.init(document.getElementById('t02'), 'customed');
var t03 = echarts.init(document.getElementById('t03'), 'customed');
var t04 = echarts.init(document.getElementById('t04'), 'customed');

setT01({ obj: t01 });
setT02({ obj: t02 });
setT03({ obj: t03 });
setT04({ obj: t04 });

function setT01(json) {

    var option = {
        color: ['#3a8e3a', '#d9a82b', '#d9a82b'],
        title: {
            text: '洗煤生产分析'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        legend: {
            data: ['洗煤产量', '洗煤回收率', '均线']

        },
        xAxis: [{
            type: 'category',
            data: ['洗大块产量', '洗中块产量', '籽煤产量', '洗沫煤产量', '洗矸产量'],
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value',
            name: '单位：万元'
        }],
        series: [{
            name: '洗煤产量',
            type: 'bar',
            barWidth: '40%',
            data: Feng.rndArr(12, 50, 100)
        }, {
            name: '洗煤回收率',
            type: 'line',
            data: Feng.rndArr(5, 10, 50)
        }]
    };
    json.obj.setOption(option);
}

function setT02(json) {

    var option = {
        title: {
            text: '原煤生产作业'
        },
        color: ['#d4555e', '#0084f1', '#d9a82b'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        legend: {
            data: ['掘进进尺', '开拓进尺']

        },
        xAxis: [{
            type: 'category',
            data: ['A公司', 'B公司', 'C公司', 'D公司', 'E公司', 'F公司', 'G公司'],
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value',
            name: '单位：万元'
        }],
        series: [{
            name: '掘进进尺',
            type: 'line',
            smooth: true,
            data: Feng.rndArr(12, 1, 100)
        }, {
            name: '开拓进尺',
            type: 'line',
            smooth: true,
            data: Feng.rndArr(12, 1, 100)
        }]
    };
    json.obj.setOption(option);
}

function setT03(json) {
    var option = {
        title: {
            text: '产量分析'
        },
        color: ['#aec253'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        legend: {
            data: ['产量']

        },
        xAxis: [{
            type: 'category',
            data: ['原煤产量', '洗煤', '商品煤产量'],
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value',
            name: '单位：万元'

        }],
        series: [{
            name: '产量',
            type: 'bar',
            barWidth: '40%',
            data: Feng.rndArr(3, 1, 100)
        }]
    };
    json.obj.setOption(option);
}

function setT04(json) {
    var option = {
        title: {
            text: '产量超欠'
        },
        color: ['#d4555e', '#fddd4d', '#0084f1', '#d9a82b', '#a6d1ff', '#d4555e', '#3a8e3a'],
        legend: {
            orient: 'vertical',
            align: 'left',
            left: '65%',
            top: 'center',
            data: ['原煤', '洗煤', '商品煤']
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['0%', '60%'],
            center: ['40%', '55%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{ value: 100, name: '原煤' }, { value: 400, name: '洗煤' }, { value: 350, name: '商品煤' }],
            roseType: 'radius'

        }]
    };

    json.obj.setOption(option);
}