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

        var chart = am4core.create("chartdiv", am4charts.PieChart3D);

        chart.exporting.menu = new am4core.ExportMenu();
        chart.exporting.menu.align = "rigth";
        chart.exporting.menu.verticalAlign = "top"
        chart.exporting.menu.items[0].icon = "https://static.thenounproject.com/png/36971-200.png";

        //label
        let title = chart.titles.create();
        title.text = setting.am4charts.title;
        title.fontSize = setting.am4charts.title_fontSize;
        title.marginBottom = setting.am4charts.title_marginBottom;


        chart.legend = new am4charts.Legend();

        chart.data = setting.am4charts.data;
        chart.innerRadius = am4core.percent(40);

        var series = chart.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = setting.am4charts.value;
        series.dataFields.category = setting.am4charts.category;
    };
})(jQuery);