


(function ($) {
    $.miPlugin = function (options) {
        var setting = {

            am4charts: {
                data: '',
                value_max: 0,
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


        chart.data = setting.am4charts.data

        chart.padding(40, 40, 40, 40);
        chart.maskBullets = false; // allow bullets to go out of plot area

        // titulos
        let title = chart.titles.create();
        title.text = setting.am4charts.title;
        title.fontSize = setting.am4charts.title_fontSize;
        title.marginBottom = setting.am4charts.title_marginBottom;

        // category axis
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = setting.am4charts.category;
        categoryAxis.renderer.minGridDistance = 60;
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.line.disabled = true;

        // value axis
        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        // we set fixed min/max and strictMinMax to true, as otherwise value axis will adjust min/max while dragging and it won't look smooth
        valueAxis.min = 0;
        valueAxis.max = setting.am4charts.value_max;
        valueAxis.strictMinMax = true;
        valueAxis.renderer.line.disabled = true;
        valueAxis.renderer.minWidth = 40;

        // series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = setting.am4charts.category;
        series.dataFields.valueY = setting.am4charts.value;
        series.tooltip.pointerOrientation = "vertical";
        series.tooltip.dy = -8;

        // label bullet
        var labelBullet = new am4charts.LabelBullet();
        series.bullets.push(labelBullet);
        labelBullet.label.text = "{valueY.value.formatNumber('#.')}";
        labelBullet.strokeOpacity = 0;
        labelBullet.stroke = am4core.color("#dadada");
        labelBullet.dy = - 20;

        // series bullet
        var bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.stroke = am4core.color("#ffffff");
        bullet.strokeWidth = 3;
        bullet.defaultState.properties.opacity = 0;

        // resize cursor when over
        bullet.cursorOverStyle = am4core.MouseCursorStyle.verticalResize;
        bullet.draggable = true;
        bullet.circle.radius = 8;

        // create hover state
        var hoverState = bullet.states.create("hover");
        hoverState.properties.opacity = 1; // visible when hovered

        // while dragging
        bullet.events.on("drag", function (event) {
            handleDrag(event);
        });

        bullet.events.on("dragstop", function (event) {
            handleDrag(event);
            var dataItem = event.target.dataItem;
            dataItem.column.isHover = false;
            event.target.isHover = false;
        });

        function handleDrag(event) {
            var dataItem = event.target.dataItem;
            // convert coordinate to value
            var value = valueAxis.yToValue(event.target.pixelY);
            // set new value
            dataItem.valueY = value;
            // make column hover
            dataItem.column.isHover = true;
            // hide tooltip not to interrupt
            dataItem.column.hideTooltip(0);
            // make bullet hovered (as it might hide if mouse moves away)
            event.target.isHover = true;
        }

        // column template    
        var columnTemplate = series.columns.template;
        columnTemplate.column.cornerRadiusTopLeft = 8;
        columnTemplate.column.cornerRadiusTopRight = 8;
        columnTemplate.fillOpacity = 0.8;
        columnTemplate.tooltipText = "cantidad de llamadas, {group}";
        columnTemplate.tooltipY = 0; // otherwise will point to middle of the column
        columnTemplate.strokeOpacity = 0;

        // hover state
        var columnHoverState = columnTemplate.column.states.create("hover");
        columnHoverState.properties.fillOpacity = 1;
        // you can change any property on hover state and it will be animated
        columnHoverState.properties.cornerRadiusTopLeft = 35;
        columnHoverState.properties.cornerRadiusTopRight = 35;

        // show bullet when hovered
        columnTemplate.events.on("over", function (event) {
            var dataItem = event.target.dataItem;
            var itemBullet = dataItem.bullets.getKey(bullet.uid);
            itemBullet.isHover = true;
        })

        // hide bullet when mouse is out
        columnTemplate.events.on("out", function (event) {
            var dataItem = event.target.dataItem;
            var itemBullet = dataItem.bullets.getKey(bullet.uid);
            // hide it later for touch devices to see it longer
            itemBullet.isHover = false;
        })


        // start dragging bullet even if we hit on column not just a bullet, this will make it more friendly for touch devices
        columnTemplate.events.on("down", function (event) {
            var dataItem = event.target.dataItem;
            var itemBullet = dataItem.bullets.getKey(bullet.uid);
            itemBullet.dragStart(event.pointer);
        })

        // when columns position changes, adjust minX/maxX of bullets so that we could only drag vertically
        columnTemplate.events.on("positionchanged", function (event) {
            var dataItem = event.target.dataItem;
            var itemBullet = dataItem.bullets.getKey(bullet.uid);

            var column = dataItem.column;
            itemBullet.minX = column.pixelX + column.pixelWidth / 2;
            itemBullet.maxX = itemBullet.minX;
            itemBullet.minY = 0;
            itemBullet.maxY = chart.seriesContainer.pixelHeight;
        })

        // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        columnTemplate.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index).saturate(0.3);
        });

        bullet.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index).saturate(0.3);
        });
        

   
};
})(jQuery);