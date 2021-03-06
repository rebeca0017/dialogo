(function ($) {
    $.miPlugin = function (options) {
        var setting = {

            am4charts: {
                data: '',
                value_max: 0,
                axis_min: 0,
                axis_max: 0,
                category: '',
                value: '',
                title: '',
                title_fontSize: 0,
                title_marginBottom: 0,
            }

        }


        $.extend(setting, options);
        am4core.useTheme(am4themes_animated);

        var chart = am4core.create("chartdiv", am4charts.PieChart);


        chart.data = setting.am4charts.data;

        var chart = am4core.create("chartdiv", am4charts.PieChart);
        chart.exporting.menu = new am4core.ExportMenu();
        chart.exporting.menu.align = "rigth";
        chart.exporting.menu.verticalAlign = "top"
        chart.exporting.menu.items[0].icon = "https://static.thenounproject.com/png/36971-200.png";

        //label
        let title = chart.titles.create();
        title.text = setting.am4charts.title;
        title.fontSize = setting.am4charts.title_fontSize;
        title.marginBottom = setting.am4charts.title_marginBottom;

        chart.innerRadius = am4core.percent(50);
        chart.startAngle = 180;
        chart.endAngle = 360;
        chart.radius = am4core.percent(70);

        var series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = setting.am4charts.value;
        series.dataFields.category = setting.am4charts.category;

        series.slices.template.cornerRadius = 10;
        series.slices.template.innerCornerRadius = 7;

        var fillModifier = new am4core.RadialGradientModifier();
        fillModifier.brightnesses.push(-0.2, -0.2, 0, -0.3);
        series.slices.template.fillModifier = fillModifier;

        // this creates initial animation
        series.hiddenState.properties.opacity = 1;
        series.hiddenState.properties.endAngle = -90;
        series.hiddenState.properties.startAngle = -90;


        chart.legend = new am4charts.Legend();
    };
})(jQuery);


