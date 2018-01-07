'use strict';

var t01 = echarts.init(document.getElementById('t01'), 'customed');
var t02 = echarts.init(document.getElementById('t02'), 'customed');
var t03 = echarts.init(document.getElementById('t03'), 'customed');
var t04 = echarts.init(document.getElementById('t04'), 'customed');
var t05 = echarts.init(document.getElementById('t05'), 'customed');

setT01({ obj: t01 });
setT02({ obj: t02 });
setT03({ obj: t03 });
setT04({ obj: t04 });
setT05({ obj: t05 });

function setT01(json) {

    var option = {
        color: ['#3a8e3a', '#0084f1', '#d9a82b'],
        title: {
            text: '总产值分析'
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
            data: ['计划', '实际', '均线']

        },
        xAxis: [{
            type: 'category',
            data: Feng.monthArr(),
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value',
            name: '单位：万元'
        }],
        series: [{
            name: '计划',
            type: 'bar',
            data: Feng.rndArr(12, 10, 100)
        }, {
            name: '实际',
            type: 'bar',
            data: Feng.rndArr(12, 10, 100)
        }, {
            name: '均线',
            type: 'line',
            smooth: true,
            data: Feng.rndArr(12, 10, 50)
        }]
    };
    json.obj.setOption(option);
}

function setT02(json) {
    var option = {
        title: {
            text: '原煤产量对比分析'
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
            data: ['销售值']

        },
        xAxis: [{
            type: 'category',
            data: ['综采一队产量', '综采二队产量', '连采煤产量', '掘进煤产量', '其他煤产量'],
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value',
            name: '单位：万元'

        }],
        series: [{
            name: '销售值',
            type: 'line',
            data: Feng.rndArr(5, 1, 100)
        }]
    };
    json.obj.setOption(option);
}

function setT03(json) {
    var option = {
        title: {
            text: '洗煤产量对比分析'
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
            data: ['销售值']

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
            name: '销售值',
            type: 'bar',
            data: Feng.rndArr(5, 1, 100)
        }]
    };
    json.obj.setOption(option);
}

function setT04(json) {
    var option = {
        title: {
            text: '煤粉产量对比分析'
        },
        color: ['#2fb8b8'],
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
            data: ['销售值']

        },
        xAxis: [{

            type: 'value',
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'category',
            data: ['矸石产量', '其他煤粉产量', '洗煤粉产量', '精细煤粉产量']
        }],
        series: [{
            name: '销售值',
            type: 'bar',
            data: Feng.rndArr(4, 1, 100)
        }]
    };
    json.obj.setOption(option);
}

function setT05(json) {

    var option = {

        title: {
            text: '产量对比分析'
        },
        color: ['#d4555e', '#fddd4d', '#0084f1'],
        legend: {
            orient: 'vertical',
            align: 'left',
            left: '70%',
            top: '40%',
            data: ['原煤 40%', '洗煤 25%', '煤粉 35%']
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{ value: 400, name: '原煤 40%' }, { value: 200, name: '洗煤 25%' }, { value: 300, name: '煤粉 35%' }],
            roseType: 'radius'

        }]
    };
    json.obj.setOption(option);
}

$('.t01 ul li ').on('click', function () {
    console.log(3);
    $(this).addClass('active').siblings().removeClass('active');
    setT01({ obj: t01 });
});