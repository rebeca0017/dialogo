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

        var chart = am4core.create("chartdiv", am4charts.XYChart3D);
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
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = setting.am4charts.category;
        categoryAxis.renderer.minGridDistance = 60;
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.baseGrid.disabled = true;
        categoryAxis.renderer.labels.template.dy = 20;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.disabled = true;
        valueAxis.renderer.baseGrid.disabled = true;
        valueAxis.renderer.labels.template.disabled = true;
        valueAxis.renderer.minWidth = 0;

        var series = chart.series.push(new am4charts.ConeSeries());
        series.dataFields.categoryX = setting.am4charts.category;
        series.dataFields.valueY = setting.am4charts.value;
        series.columns.template.tooltipText = "{valueY.value}";
        series.columns.template.tooltipY = 0;
        series.columns.template.strokeOpacity = 1;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.max = setting.am4charts.value_max;
        valueAxis.strictMinMax = true;
        valueAxis.calculateTotals = true;


        // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        series.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });

        series.columns.template.adapter.add("stroke", function (stroke, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });
    };
})(jQuery);

