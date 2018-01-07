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
        color: ['#aec253', '#0084f1', '#d9a82b'],
        title: {
            text: '销量收入'
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
            data: ['销量收入', '实际', '均线']

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
            name: '销量收入',
            type: 'bar',
            data: Feng.rndArr(12, 10, 100)
        }]
    };
    json.obj.setOption(option);
}

function setT02(json) {

    var option = {
        title: {
            text: '销量利润'
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
            data: ['销量利润']

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
            name: '销量利润',
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
            text: '近五年销量总之对比分析'
        },
        color: ['#2ec8ca'],
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
            data: ['销量总值']

        },
        xAxis: [{
            type: 'category',
            data: ['2014年', '2015年', '2016年', '2017年', '2018年'],
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value',
            name: '单位：万元'

        }],
        series: [{
            name: '销量总值',
            type: 'bar',
            data: Feng.rndArr(5, 1, 100)
        }]
    };
    json.obj.setOption(option);
}

function setT04(json) {
    var option = {
        title: {
            text: '实物量销售对比分析'
        },
        color: ['#3a8e3a', '#0084f1', '#d9a82b', '#db502c'],
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
            data: ['计划', '实际', '均线', '发热量']

        },
        yAxis: [{

            type: 'value',
            axisTick: {
                alignWithLabel: true
            }
        }],
        xAxis: [{
            type: 'category',
            data: Feng.monthArr()
        }],
        series: [{
            name: '计划',
            type: 'bar',
            data: Feng.rndArr(12, 1, 100)
        }, {
            name: '实际',
            type: 'bar',
            data: Feng.rndArr(12, 1, 100)
        }, {
            name: '均线',
            type: 'line',
            smooth: true,
            data: Feng.rndArr(12, 1, 50)
        }, {
            name: '发热量',
            type: 'line',
            smooth: true,
            data: Feng.rndArr(12, 1, 100)
        }]
    };
    json.obj.setOption(option);
}

function setT05(json) {

    var option = {
        title: {
            text: '各省销售对比分析'
        },
        color: ['#9c43a5', '#0084f1', '#d9a82b'],
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
            data: ['河南', '新疆', '青海', '贵州', '内蒙古', '山西', '四川', '其他'],
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
            // smooth:true,
            data: Feng.rndArr(8, 1, 100)
        }]
    };
    json.obj.setOption(option);
}

$('.t01 ul li ').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    setT04({ obj: t04 });
});