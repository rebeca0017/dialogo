

(function ($) {

    $.myPlugin = function (options) {
        var setting = {

            
                data: '',
                head: ''
            


        }
       $.extend(setting, options);


        var body = document.getElementsByTagName("body")[0];
        var table = document.createElement("table");
        table.className = 'table table-hover';
        var tblBody = document.createElement("tbody");
        var tblHead = document.createElement("thead");

        setting.head.forEach(head => {
            var row = document.createElement("th")
            var cell = document.createElement("tr");
            var textcell = document.createTextNode(head);
            cell.appendChild(textcell);
            row.appendChild(cell);
            tblHead.appendChild(row);
        });

        for (var i = 0; i < setting.data.length; i++) {
            var row = document.createElement("tr");

            for (var j = 0; j < setting.data[i].length; j++) {

                var cell = document.createElement("td");
                var textcell = document.createTextNode(setting.data[i][j]);
                cell.appendChild(textcell);
                row.appendChild(cell);
            }
            tblBody.appendChild(row);
        }

        body.appendChild(table);
        table.appendChild(tblBody);
        table.appendChild(tblHead);
        table.setAttribute("border", "2");



        return this;
    }
})(jQuery);


