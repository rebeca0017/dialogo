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
				value01: '',
				value02: '',
				value03: '',
				title: '',
				title_fontSize: 0,
				title_marginBottom: 0,
			}

		}


		$.extend(setting, options);
		am4core.useTheme(am4themes_animated);

		var chart = am4core.create("chartdiv", am4charts.XYChart3D);


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

		chart.padding(30, 30, 10, 30);
		chart.legend = new am4charts.Legend();

		chart.colors.step = 2;

		var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = setting.am4charts.category;
		categoryAxis.renderer.minGridDistance = 60;
		categoryAxis.renderer.grid.template.location = 0;
		categoryAxis.interactionsEnabled = false;
		// hace que los label se haga horizontal
		categoryAxis.renderer.labels.template.rotation = 90;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.tooltip.disabled = true;
		valueAxis.renderer.grid.template.strokeOpacity = 0.05;
		valueAxis.renderer.minGridDistance = 20;
		valueAxis.interactionsEnabled = false;
		valueAxis.min = 0;
		valueAxis.renderer.minWidth = 35;

		var series1 = chart.series.push(new am4charts.ColumnSeries3D());
		series1.columns.template.width = am4core.percent(80);
		series1.columns.template.tooltipText = "{name}: {valueY.value}";
		series1.name = "Series 1";
		series1.dataFields.categoryX = setting.am4charts.category;
		series1.dataFields.valueY = setting.am4charts.value;
		series1.stacked = true;

		var series2 = chart.series.push(new am4charts.ColumnSeries3D());
		series2.columns.template.width = am4core.percent(80);
		series2.columns.template.tooltipText = "{name}: {valueY.value}";
		series2.name = "Series 2";
		series2.dataFields.categoryX = setting.am4charts.category;
		series2.dataFields.valueY = setting.am4charts.value01;
		series2.stacked = true;

		var series3 = chart.series.push(new am4charts.ColumnSeries3D());
		series3.columns.template.width = am4core.percent(80);
		series3.columns.template.tooltipText = "{name}: {valueY.value}";
		series3.name = "Series 3";
		series3.dataFields.categoryX = setting.am4charts.category;
		series3.dataFields.valueY = setting.am4charts.value02;
		series3.stacked = true;

		var series4 = chart.series.push(new am4charts.ColumnSeries3D());
		series4.columns.template.width = am4core.percent(80);
		series4.columns.template.tooltipText = "{name}: {valueY.value}";
		series4.name = "Series 4";
		series4.dataFields.categoryX = setting.am4charts.category;
		series4.dataFields.valueY = setting.am4charts.value03;
		series4.stacked = true;

		chart.scrollbarX = new am4core.Scrollbar();


	};
})(jQuery);

