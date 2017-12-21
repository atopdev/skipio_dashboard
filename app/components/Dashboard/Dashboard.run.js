import initSparkLine from '../Common/sparkline';
import initPieChart from '../Common/easypiechart.js';

export default (chartSpline) => {
    // Chart Sline
    var datav2 = [{
        "label": "Outbound",
        "color": "#00c37a",
        "data": [
            ["Jan", 70],
            ["Feb", 20],
            ["Mar", 70],
            ["Apr", 85],
            ["May", 59],
            ["Jun", 93],
            ["Jul", 66],
            ["Aug", 86],
            ["Sep", 60],
            ["Oct", 60],
            ["Nov", 12],
            ["Dec", 50]
        ]
    }, {
        "label": "Inbound",
        "color": "#009af9",
        "data": [
            ["Jan", 20],
            ["Feb", 70],
            ["Mar", 30],
            ["Apr", 50],
            ["May", 85],
            ["Jun", 43],
            ["Jul", 96],
            ["Aug", 36],
            ["Sep", 80],
            ["Oct", 10],
            ["Nov", 72],
            ["Dec", 31]
        ]
    }];

    var options = {
        series: {
            lines: {
                show: false
            },
            points: {
                show: true,
                radius: 4
            },
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 1,
                fill: 0.5
            }
        },
        grid: {
            borderColor: '#eee',
            borderWidth: 1,
            hoverable: true,
            backgroundColor: '#fcfcfc'
        },
        tooltip: true,
        tooltipOpts: {
            content: function(label, x, y) {
                return x + ' : ' + y;
            }
        },
        xaxis: {
            tickColor: '#fcfcfc',
            mode: 'categories'
        },
        yaxis: {
            min: 0,
            max: 150, // optional: use it for a clear represetation
            tickColor: '#eee',
            //position: 'right' or 'left',
            tickFormatter: function(v) {
                return v /* + ' visitors'*/ ;
            }
        },
        shadowSize: 0
    };

    if (chartSpline) {
        $(chartSpline).height($(chartSpline).data('height') || 250);
        $.plot(chartSpline, datav2, options);
    }

    // Easy Pie chart
    initPieChart();
};
