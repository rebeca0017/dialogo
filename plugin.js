(function ($) {

    $.fn.myPlugin = function (options) {
        $.extend({
            data: '',
            head: ''

        }, options);

        this.each(function () {
            var body = document.getElementsByTagName("body")[0];
            var table = document.createElement("table");
            table.className = 'table table-hover';
            var tblBody = document.createElement("tbody");
            var tblHead = document.createElement("thead");

            head.forEach(head => {
                var row = document.createElement("th")
                var cell = document.createElement("tr");
                var textcell = document.createTextNode(head);
                cell.appendChild(textcell);
                row.appendChild(cell);
                tblHead.appendChild(row);
            });

            for (var i = 0; i < data.length; i++) {
                var row = document.createElement("tr");

                for (var j = 0; j < data[i].length; j++) {

                    var cell = document.createElement("td");
                    var textcell = document.createTextNode(data[i][j]);
                    cell.appendChild(textcell);
                    row.appendChild(cell);
                }
                tblBody.appendChild(row);
            }

            body.appendChild(table);
            table.appendChild(tblBody);
            table.appendChild(tblHead);
            table.setAttribute("border", "2");

        });

        return this;
    }
})(jQuery);






