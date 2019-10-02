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
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            var chart = am4core.create("chartdiv", am4charts.XYChart);
            chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

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
            categoryAxis.renderer.minGridDistance = 40;
            categoryAxis.fontSize = 11;

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.min = 0;
            valueAxis.max = setting.am4charts.value_max;
            valueAxis.strictMinMax = true;
            valueAxis.renderer.minGridDistance = 30;
            // axis break
            var axisBreak = valueAxis.axisBreaks.create();
            axisBreak.startValue = setting.am4charts.axis_min;
            axisBreak.endValue = setting.am4charts.axis_max;
            axisBreak.breakSize = 0.005;

            // make break expand on hover
            var hoverState = axisBreak.states.create("hover");
            hoverState.properties.breakSize = 1;
            hoverState.properties.opacity = 0.1;
            hoverState.transitionDuration = 1500;

            axisBreak.defaultState.transitionDuration = 1000;

            var series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.categoryX = setting.am4charts.category;
            series.dataFields.valueY = setting.am4charts.value;
            series.columns.template.tooltipText = "{valueY.value}";
            series.columns.template.tooltipY = 0;
            series.columns.template.strokeOpacity = 0;

            // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
            series.columns.template.adapter.add("fill", function (fill, target) {
                return chart.colors.getIndex(target.dataItem.index);
            });

        });
    };
})(jQuery);