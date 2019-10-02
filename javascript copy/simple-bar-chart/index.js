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

		var chart = am4core.create("chartdiv", am4charts.XYChart);
		
		
		chart.colors.saturation = 0.4;
		
		chart.data = setting.am4charts.data;

		chart.exporting.menu = new am4core.ExportMenu();
        chart.exporting.menu.align = "rigth";
        chart.exporting.menu.verticalAlign = "top"
        chart.exporting.menu.items[0].icon = "https://static.thenounproject.com/png/36971-200.png";

        //label
        let title = chart.titles.create();
        title.text = setting.am4charts.title;
        title.fontSize = setting.am4charts.title_fontSize;
        title.marginBottom = setting.am4charts.title_marginBottom;
		
		var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
		categoryAxis.renderer.grid.template.location = 0;
		categoryAxis.dataFields.category = setting.am4charts.category;
		categoryAxis.renderer.minGridDistance = 20;
		
		var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
		valueAxis.renderer.maxLabelPosition = 0.98;
		
		var series = chart.series.push(new am4charts.ColumnSeries());
		series.dataFields.categoryY = setting.am4charts.category;
		series.dataFields.valueX = setting.am4charts.value;
		series.tooltipText = "{valueX.value}";
		series.sequencedInterpolation = true;
		series.defaultState.transitionDuration = 1000;
		series.sequencedInterpolationDelay = 100;
		series.columns.template.strokeOpacity = 0;
		
		chart.cursor = new am4charts.XYCursor();
		chart.cursor.behavior = "panY";
		
		
		// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
		series.columns.template.adapter.add("fill", function (fill, target) {
			return chart.colors.getIndex(target.dataItem.index);
		});

		
    };
})(jQuery);


