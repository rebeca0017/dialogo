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

        //export 
        chart.exporting.menu = new am4core.ExportMenu();
        chart.exporting.menu.align = "rigth";
        chart.exporting.menu.verticalAlign = "top"
        chart.exporting.menu.items[0].icon = "https://static.thenounproject.com/png/36971-200.png";

        //label
        let title = chart.titles.create();
        title.text = setting.am4charts.title;
        title.fontSize = setting.am4charts.title_fontSize;
        title.marginBottom = setting.am4charts.title_marginBottom;


        chart.data = setting.am4charts.data;

        chart.innerRadius = am4core.percent(50);

        var series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = setting.am4charts.value;
        series.dataFields.category = setting.am4charts.category;

        series.slices.template.cornerRadius = 10;
        series.slices.template.innerCornerRadius = 7;
        series.alignLabels = false;
        series.labels.template.padding(0, 0, 0, 0);

        series.labels.template.bent = true;
        series.labels.template.radius = 4;

        series.slices.template.states.getKey("hover").properties.scale = 1.1;
        series.labels.template.states.create("hover").properties.fill = am4core.color("#fff");

        series.slices.template.events.on("over", function (event) {
            event.target.dataItem.label.isHover = true;
        })

        series.slices.template.events.on("out", function (event) {
            event.target.dataItem.label.isHover = false;
        })

        series.ticks.template.disabled = true;

        // this creates initial animation
        series.hiddenState.properties.opacity = 1;
        series.hiddenState.properties.endAngle = -90;
        series.hiddenState.properties.startAngle = -90;

        chart.legend = new am4charts.Legend();
    };
})(jQuery);
