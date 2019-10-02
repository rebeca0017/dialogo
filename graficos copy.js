
var divNew = document.createElement('div');
divNew.setAttribute("id", 'modal');
var divNew2 = document.createElement('div');

(function ($) {
    $.miPlugin = function (options) {
        var setting = {
            modal: {


                size: 'modal-dialog',
                class: '',
                title: '',
                link: '',
                link2: '',
                data: '',
                value_max: 300,
                axis_min: 70,
                axis_max: 50,
                category: 'group',
                value: 'count',
                /*title: 'grupos por llamadas entrantes ',
                title_fontSize: 20,
                title_marginBottom: 50,*/



            }
        }


        $.extend(setting, options);
        document.body.appendChild(divNew);





        divNew.setAttribute('class', 'modal fade ');
        divNew.setAttribute('data-keyboard', 'false');
        divNew.setAttribute('tabindex', '-1');
        divNew.setAttribute('role', 'dialog');
        divNew.setAttribute('aria-labelledby', 'exampleModalLabel');
        divNew.setAttribute('aria-hidden', 'true');




        divNew2.setAttribute('class', setting.modal.size);
        divNew2.setAttribute('role', 'document');


        var divNew3 = document.createElement('div');
        divNew3.setAttribute('class', 'modal-content');


        var divNew4 = document.createElement('div');
        divNew4.setAttribute('class', 'modal-header');


        var h1 = document.createElement('h1');
        divNew4.appendChild(h1);
        h1.append(setting.modal.title);
        h1.setAttribute("class", 'modal-title');
        h1.setAttribute("id", 'exampleModalLabel');


        var button = document.createElement('button')
        divNew4.appendChild(button);
        button.append('x')
        button.setAttribute("class", 'close');
        button.setAttribute('data-dismiss', 'modal');
        button.setAttribute('aria-label', 'close');
        button.setAttribute('aria-hidden', 'true');
        button.setAttribute('onclick', 'Quitar()');



        var divNew5 = document.createElement('div');
        divNew5.setAttribute('class', 'modal-body');

        var array = setting.modal.link;
        var array2 = setting.modal.link2;

        var div_iframe = document.createElement('div');
        var titutlo = document.createElement('h2');
        titutlo.append("reporte de grupos por llamadas entrantes");
        div_iframe.appendChild(titutlo);
        div_iframe.setAttribute("style", 'text-align:center');

        var div_iframe1 = document.createElement('div');
        var titutlo1 = document.createElement('h2');
        titutlo1.append("llamadas por agentes");
        div_iframe1.appendChild(titutlo1);
        div_iframe1.setAttribute("style", 'text-align:center');

        for (var j = 0; j < array.length; j++) {

            if (array.length >= 2) {


                //for (var i = 0; i < 2; i++) {


                divNew5.appendChild(div_iframe);
                var iframe = document.createElement('iframe');
                div_iframe.appendChild(iframe);
                iframe.setAttribute('frameborder', '1');
                iframe.setAttribute('name', 'principal');
                iframe.setAttribute('width', '50%');
                iframe.setAttribute('height', '300');
                iframe.setAttribute('src', array[j]);

            }
        }
        for (var j = 0; j < array2.length; j++) {

            if (array2.length >= 2) {


                //for (var i = 0; i < 2; i++) {


                divNew5.appendChild(div_iframe1);
                var iframe1 = document.createElement('iframe');
                div_iframe1.appendChild(iframe1);
                iframe1.setAttribute('frameborder', '1');
                iframe1.setAttribute('name', 'principal');
                iframe1.setAttribute('width', '75%');
                iframe1.setAttribute('height', '500');
                iframe1.setAttribute('src', array2[j]);

            }
        }
        //}


        var divNew6 = document.createElement('div');
        divNew6.setAttribute('class', 'modal-footer')


        var Save = document.createElement('button')
        divNew6.appendChild(Save);
        Save.append('Save changes')
        Save.setAttribute("class", 'btn btn-primary');
        var close = document.createElement('button')
        divNew6.appendChild(close);
        close.append('Close')
        close.setAttribute("class", 'btn btn-secondary');
        close.setAttribute("data-dismiss", 'modal');


        divNew.appendChild(divNew2);
        divNew2.appendChild(divNew3);
        divNew3.appendChild(divNew4);
        divNew3.appendChild(divNew5);
        divNew3.appendChild(divNew6);
    };
})(jQuery);

function Quitar() {
    var ultimo = document.getElementById('divprincipal');
    document.body.removeChild(ultimo);
}


