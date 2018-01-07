let t01 = echarts.init(document.getElementById('t01'), 'customed');
let t02 = echarts.init(document.getElementById('t02'), 'customed');
let t03 = echarts.init(document.getElementById('t03'), 'customed');
let t04 = echarts.init(document.getElementById('t04'), 'customed');
let t05 = echarts.init(document.getElementById('t05'), 'customed');
let map = echarts.init(document.getElementById('map'), 'customed');

setT01({obj: t01})
setT02({obj: t02})
setT03({obj: t03})
setT04({obj: t04})
setT05({obj: t05})
setMap({obj: map})

function setT01(json) {

    let option = {

        color: ['#aec253', '#0084f1', '#d9a82b'],
        title: {
            text: '收入',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        legend: {
            data: ['收入', '实际', '均线'],

        },
        xAxis: [
            {
                type: 'category',
                axisLabel: {
                    interval: 0,
                },
                data: ['煤炭', '化工', '有色\n金属', '装备\n制造', '物流\n贸易', '建筑\n矿建', '现代\n服务业'],

            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '单位：万元',
            }
        ],
        series: [
            {
                name: '收入',
                type: 'bar',
                barWidth: '60%',
                data: Feng.rndArr(7, 10, 100)
            },
        ]
    };
    json.obj.setOption(option);

}

function setT02(json) {


    let option = {

        color: ['#cf757c', '#0084f1', '#d9a82b'],
        title: {
            text: '利润',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        legend: {
            data: ['利润', '实际', '均线'],

        },
        xAxis: [
            {
                type: 'category',
                axisLabel: {
                    interval: 0,
                },
                data: ['煤炭', '化工', '有色\n金属', '装备\n制造', '物流\n贸易', '建筑\n矿建', '现代\n服务业'],

            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '单位：万元',
            }
        ],
        series: [
            {
                name: '利润',
                type: 'line',
                barWidth: '60%',
                data: Feng.rndArr(7, 10, 100)
            },
        ]
    };
    json.obj.setOption(option);

}

function setT03(json) {


    var option = {


        title: {
            text: '产量对比分析',
        },
        color: ['#db502c', '#0084f1', '#d9a82b', '#a6d1ff', '#d4555e', '#3a8e3a', '#9c43a5'],
        legend: {
            orient: 'vertical',
            align: 'left',
            left: '70%',
            top: '20%',
            data: ['煤炭', '化工', '有色金属', '装备制造', '物流贸易', '建筑矿建', '现代服务业   '],
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '75%',
                center: ['40%', '60%'],
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: [
                    {value: 400, name: '煤炭'},
                    {value: 200, name: '化工'},
                    {value: 300, name: '有色金属'},
                    {value: 150, name: '装备制造'},
                    {value: 240, name: '物流贸易'},
                    {value: 300, name: '建筑矿建'},
                    {value: 120, name: '现代服务业'},
                ],
                roseType: 'radius',


            }
        ]

    }
    json.obj.setOption(option);

}

function setT04(json) {

    let option = {

        color: ['#2fb8b8', '#0084f1', '#d9a82b'],
        title: {
            text: '费用',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        legend: {
            data: ['费用', '实际', '均线'],

        },
        yAxis: [
            {
                type: 'category',
                axisLabel: {
                    interval: 0,
                },
                data: ['煤炭', '化工', '有色金属', '装备制造', '物流贸易', '建筑矿建', '现代服务业'],

            }
        ],
        xAxis: [
            {
                type: 'value',
                // name: '单位：万元',
            }
        ],
        series: [
            {
                name: '费用',
                type: 'bar',
                barWidth: '60%',
                data: Feng.rndArr(7, 10, 100)
            },
        ]
    };
    json.obj.setOption(option);

}

function setT05(json) {


    let option = {

        color: ['#cf757c', '#0084f1', '#d9a82b'],
        title: {
            text: '瓦斯指标分析',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '30%',
            containLabel: true
        },
        legend: {
            top: '10%',
            data: ['抽采量', '利用量', '抽采利用率'],

        },
        xAxis: [
            {
                type: 'category',
                axisLabel: {
                    interval: 0,
                },
                data: ['煤炭', '化工', '有色\n金属', '装备\n制造', '物流\n贸易', '建筑\n矿建', '现代\n服务业'],

            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '单位：万元',
            }
        ],
        series: [
            {
                name: '抽采量',
                type: 'bar',
                data: Feng.rndArr(7, 10, 100)
            },
            {
                name: '利用量',
                type: 'bar',
                data: Feng.rndArr(7, 10, 100)
            },
            {
                name: '抽采利用率',
                type: 'line',
                data: Feng.rndArr(7, 10, 100)
            },
        ]
    };
    json.obj.setOption(option);

}

function setMap(json) {


    var data = [
        {name: "上海", value: 29780},
        {name: "珠海", value: 2186},
        {name: "三亚", value: 1135},
        {name: "惠州", value: 1973},
        {name: "海口", value: 2568},
        {name: "合肥", value: 4039},
        {name: "南京", value: 6959},
        {name: "杭州", value: 5632},
        {name: "苏州", value: 6707},
        {name: "无锡", value: 3393},
        {name: "昆山", value: 1894},
        {name: "广州", value: 15769},
        {name: "深圳", value: 8259},
        {name: "佛山", value: 5741},
        {name: "东莞", value: 3030},
        {name: "福州", value: 4542},
        {name: "厦门", value: 3329},
        {name: "南宁", value: 3157},
        {name: "郑州", value: 6690},
        {name: "武汉", value: 8678},
        {name: "长沙", value: 5303},
        {name: "南昌", value: 3025},
        {name: "北京", value: 20259},
        {name: "长春", value: 3016},
        {name: "大连", value: 3202},
        {name: "沈阳", value: 4540},
        {name: "哈尔滨", value: 3141},
        {name: "天津", value: 8626},
        {name: "济南", value: 4361},
        {name: "青岛", value: 6667},
        {name: "太原", value: 4080},
        {name: "石家庄", value: 6137},
        {name: "西安", value: 6991},
        {name: "成都", value: 13873},
        {name: "重庆", value: 13283},
        {name: "昆明", value: 4633},


    ];

    var geoCoordMap = {
        "上海": [121.48, 31.22],
        "珠海": [113.52, 22.3],
        "三亚": [109.31, 18.14],
        "惠州": [114.4, 23.09],
        "海口": [110.35, 20.02],
        "合肥": [117.27, 31.86],
        "南京": [118.78, 32.04],
        "杭州": [120.19, 30.26],
        "苏州": [120.62, 31.32],
        "无锡": [120.29, 31.59],
        "昆山": [120.95, 31.39],
        "广州": [113.23, 23.16],
        "深圳": [114.07, 22.62],
        "佛山": [113.11, 23.05],
        "东莞": [113.75, 23.04],
        "福州": [119.3, 26.08],
        "厦门": [118.1, 24.46],
        "南宁": [108.33, 22.84],
        "郑州": [113.65, 34.76],
        "武汉": [114.31, 30.52],
        "长沙": [113, 28.21],
        "南昌": [115.89, 28.68],
        "北京": [116.46, 39.92],
        "长春": [125.35, 43.88],
        "大连": [121.62, 38.92],
        "沈阳": [123.38, 41.8],
        "哈尔滨": [126.63, 45.75],
        "天津": [117.2, 39.13],
        "济南": [117, 36.65],
        "青岛": [120.33, 36.07],
        "太原": [112.53, 37.87],
        "石家庄": [114.48, 38.03],
        "西安": [108.95, 34.27],
        "成都": [104.06, 30.67],
        "重庆": [106.54, 29.59],
        "昆明": [102.73, 25.04],
    };

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    var convertedData = [
        convertData(data),
        convertData(data.sort(function (a, b) {
            return b.value - a.value;
        }).slice(0, 6))
    ];
    data.sort(function (a, b) {
        return a.value - b.value;
    })

    var selectedItems = [];
    var categoryData = [];
    var barData = [];
//   var maxBar = 30;
    var sum = 0;
    var count = data.length;
    for (var i = 0; i < data.length; i++) {
        categoryData.push(data[i].name);
        barData.push(data[i].value);
        sum += data[i].value;
    }
    console.log(categoryData);
    console.log(sum + "   " + count)
    var option = {
        // backgroundColor: '#404a59',
        color: ['#db502c', '#0084f1', '#d9a82b', '#a6d1ff', '#d4555e', '#3a8e3a', '#9c43a5'],

        animation: true,
        animationDuration: 1000,
        animationEasing: 'cubicInOut',
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'cubicInOut',
        title: [{
            // text: '全国36城“无人区”数',
            // link: 'http://pages.anjuke.com/expert/newexpert.html',
            // subtext: 'data from Anjuke',
            // sublink: 'http://pages.anjuke.com/expert/newexpert.html',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },],
        toolbox: {
            show: false,
            iconStyle: {
                normal: {
                    borderColor: '#fff'
                },
                emphasis: {
                    borderColor: '#b1e4ff'
                }
            },
            feature: {
                dataZoom: {},
                brush: {
                    type: ['rect', 'polygon', 'clear']
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        // brush: {
        //     outOfBrush: {
        //         color: '#abc'
        //     },
        //     brushStyle: {
        //         borderWidth: 2,
        //         color: 'rgba(0,0,0,0.2)',
        //         borderColor: 'rgba(0,0,0,0.5)',
        //     },
        //     seriesIndex: [0, 1],
        //     throttleType: 'debounce',
        //     throttleDelay: 300,
        //     geoIndex: 0
        // },
        geo: {
            map: 'china',
            left: 'center',
            right: 'center%',
            // center: [117.98561551896913, 31.205000490896193],
            zoom: 1,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'rgba(0,0,0,0)',
                    borderColor: '#0e7a9b'
                },
                emphasis: {
                    areaColor: 'rgba(0,0,0,0)'
                }
            }
        },
        tooltip: {
            trigger: 'item'
        },
        grid: {
            right: 40,
            top: 100,
            bottom: 40,
            width: '30%'
        },
        legend: {
            left:'center',
            top:'bottom',
            data: ['煤炭', '化工', '有色金属', '装备制造', '物流贸易', '建筑建', '现代服务业'],
        },
        series: [
            {
                name: '煤炭',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data:  convertedData[0].slice(0,2),
                symbolSize: function (val) {
                    return Math.max(val[2] / 500, 8);
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
            },
            {
                name: '化工',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data:  convertedData[0].slice(3,5),
                symbolSize: function (val) {
                    return Math.max(val[2] / 500, 8);
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
            },
            {
                name: '有色金属',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data:  convertedData[0].slice(6,8),
                symbolSize: function (val) {
                    return Math.max(val[2] / 500, 8);
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
            },
            {
                name: '装备制造',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data:  convertedData[0].slice(9,11),
                symbolSize: function (val) {
                    return Math.max(val[2] / 500, 8);
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
            },
            {
                name: '物流贸易',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data:  convertedData[0].slice(12,15),
                symbolSize: function (val) {
                    return Math.max(val[2] / 500, 8);
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
            },
            {
                name: '建筑建',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data:  convertedData[0].slice(16,18),
                symbolSize: function (val) {
                    return Math.max(val[2] / 500, 8);
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
            },
            {
                name: '现代服务业',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertedData[0].slice(20,22),
                symbolSize: function (val) {
                    return Math.max(val[2] / 500, 8);
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
            },

        ]
    };


    function renderBrushed(params) {
        var mainSeries = params.batch[0].selected[0];

        var selectedItems = [];
        var categoryData = [];
        var barData = [];
        var maxBar = 30;
        var sum = 0;
        var count = 0;

        for (var i = 0; i < mainSeries.dataIndex.length; i++) {
            var rawIndex = mainSeries.dataIndex[i];
            var dataItem = convertedData[0][rawIndex];
            var pmValue = dataItem.value[2];

            sum += pmValue;
            count++;

            selectedItems.push(dataItem);
        }

        selectedItems.sort(function (a, b) {
            //   return b.value[2] - a.value[2];
            return a.value - b.value;
        });

        for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
            categoryData.push(selectedItems[i].name);
            barData.push(selectedItems[i].value[2]);
        }

        this.setOption({
            title: {
                id: 'statistic',
                text: count ? '平均: ' + (sum / count).toFixed(4) : ''
            },
        });
    }

    console.log(convertedData[0].filter(() => Math.random() > 0.5))
    json.obj.setOption(option);

}