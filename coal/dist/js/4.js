'use strict';

var t01 = echarts.init(document.getElementById('t01'), 'customed');
var t02 = echarts.init(document.getElementById('t02'), 'customed');
var t03 = echarts.init(document.getElementById('t03'), 'customed');
var t04 = echarts.init(document.getElementById('t04'), 'customed');
var t05 = echarts.init(document.getElementById('t05'), 'customed');
var t06 = echarts.init(document.getElementById('t06'), 'customed');
var t07 = echarts.init(document.getElementById('t07'), 'customed');

setT01({ obj: t01 });
setT02({ obj: t02 });
setT03({ obj: t03 });
setT04({ obj: t04 });
setT05({ obj: t05 });
setT06({ obj: t06 });
setT07({ obj: t07 });

function setT01(json) {

    var option = {
        color: ['#d4555e', '#0084f1', '#d9a82b'],
        title: {
            text: '各公司合同金额和采购金额对比'
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
            data: ['合同金额', '采购金额']

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
            name: '合同金额',
            type: 'bar',
            barWidth: '20%',
            data: Feng.rndArr(7, 100, 200)
        }, {
            name: '采购金额',
            type: 'bar',
            barWidth: '20%',
            data: Feng.rndArr(7, 60, 80)
        }]
    };
    json.obj.setOption(option);
}

function setT02(json) {

    var option = {
        color: ['#cf757c', '#0084f1', '#aec253'],
        title: {
            text: '各公司采购情况'
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
            data: ['采购率', '计划完成率', '资金节约率']

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
            name: '百分比'
        }],
        series: [{
            name: '采购率',
            type: 'line',
            barWidth: '20%',
            data: Feng.rndArr(7, 50, 200)
        }, {
            name: '计划完成率',
            type: 'line',
            barWidth: '20%',
            data: Feng.rndArr(7, 60, 200)
        }, {
            name: '资金节约率',
            type: 'line',
            barWidth: '20%',
            data: Feng.rndArr(7, 60, 200)
        }]
    };
    json.obj.setOption(option);
}

function setT03(json) {

    var option = {
        title: {
            text: '库存物资金额占比'
        },
        color: ['#9c43a5', '#db502c', '#0084f1', '#d9a82b', '#a6d1ff', '#d4555e', '#3a8e3a'],
        legend: {
            orient: 'vertical',
            align: 'left',
            left: 'right',
            top: '20%',
            data: ['A仓库', 'B仓库', 'C仓库', 'D仓库', 'E仓库', 'F仓库', 'G仓库']
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['20%', '60%'],
            center: ['40%', '55%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{ value: 100, name: 'A仓库' }, { value: 400, name: 'B仓库' }, { value: 350, name: 'C仓库' }, { value: 300, name: 'D仓库' }, { value: 250, name: 'E仓库' }, { value: 200, name: 'F仓库' }, { value: 150, name: 'G仓库' }],
            roseType: 'radius'

        }]
    };
    json.obj.setOption(option);
}

function setT04(json) {
    var option = {
        color: ['#cf757c', '#aec253'],
        title: {
            text: '采购金额对比分析'
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
            data: ['同比', '环比']
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
            name: '百分比'
        }],
        series: [{
            name: '同比',
            type: 'line',
            barWidth: '20%',
            data: Feng.rndArr(7, 50, 100)
        }, {
            name: '环比',
            type: 'line',
            barWidth: '20%',
            data: Feng.rndArr(7, 60, 100)
        }]
    };
    json.obj.setOption(option);
}
function setT05(json) {

    var option = {
        color: ['#d4555e', '#0084f1', '#d9a82b'],
        title: {
            text: '出入库分析'
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
            data: ['入库金额', '出库金额', '库存金额']

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
            name: '入库金额',
            type: 'bar',
            barWidth: '20%',
            data: Feng.rndArr(7, 60, 80)
        }, {
            name: '出库金额',
            type: 'bar',
            barWidth: '20%',
            data: Feng.rndArr(7, 60, 80)
        }, {
            name: '库存金额',
            type: 'bar',
            barWidth: '20%',
            data: Feng.rndArr(7, 60, 80)
        }]
    };
    json.obj.setOption(option);
}
function setT06(json) {

    var option = {
        color: ['#d4555e', '#aec253'],
        title: {
            text: '各公司代储代销物资分析'
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
            data: ['消耗金额', '采购率']

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
            name: '消耗金额',
            type: 'bar',
            barWidth: '20%',
            data: Feng.rndArr(7, 100, 120)
        }, {
            name: '采购率',
            type: 'line',
            barWidth: '20%',
            data: Feng.rndArr(7, 60, 80)
        }]
    };
    json.obj.setOption(option);
}
function setT07(json) {

    var option = {
        title: {
            text: '采购方式占比分析'
        },
        color: ['#9c43a5', '#db502c', '#0084f1', '#d9a82b', '#a6d1ff', '#d4555e', '#3a8e3a'],
        legend: {
            orient: 'vertical',
            align: 'left',
            left: 'right',
            top: '20%',
            data: ['A仓库', 'B仓库', 'C仓库', 'D仓库', 'E仓库', 'F仓库', 'G仓库']
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['20%', '60%'],
            center: ['40%', '55%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{ value: 100, name: 'A仓库' }, { value: 400, name: 'B仓库' }, { value: 350, name: 'C仓库' }, { value: 300, name: 'D仓库' }, { value: 250, name: 'E仓库' }, { value: 200, name: 'F仓库' }, { value: 150, name: 'G仓库' }],
            roseType: 'radius'

        }]
    };
    json.obj.setOption(option);
}