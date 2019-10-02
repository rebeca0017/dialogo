
var divprincipal = document.createElement('div')
divprincipal.setAttribute('id', 'divprincipal')
var divNew = document.createElement('div');
var divNew_form = document.createElement('div');

(function ($) {
    $.miPlugin = function (options) {
        var setting = {
            modal: {

                id: 'modal',
                size: 'modal-dialog',
                normal: '',
                form: '',
                class: '',
                title1: '',
                title: '',
                text: '',
                showbuttons: true

            }
        }


        $.extend(setting, options);
        document.body.appendChild(divprincipal);

        if (setting.modal.normal == true) {


            divNew.setAttribute("id", setting.modal.id);
            divNew.setAttribute('title', 'titulo');
            divNew.setAttribute('style', 'display: none');
            divNew.setAttribute('class', 'modal fade ');


            var divNew2 = document.createElement('div');
            divNew2.setAttribute('class', setting.modal.size);


            var divNew3 = document.createElement('div');
            divNew3.setAttribute('class', 'modal-content');


            var divNew4 = document.createElement('div');
            divNew4.setAttribute('class', 'modal-header');


            var h1 = document.createElement('h1');
            divNew4.appendChild(h1);
            h1.append(setting.modal.title1);
            h1.setAttribute("class", 'modal-title');


            var button = document.createElement('button')
            divNew4.appendChild(button);
            button.append('x')
            button.setAttribute("class", 'close');
            button.setAttribute('data-dismiss', 'modal')
            button.setAttribute('aria-label', 'close')
            button.setAttribute('aria-hidden', 'true')
            button.setAttribute('onclick', 'Quitar()')


            var divNew5 = document.createElement('div');
            divNew5.setAttribute('class', 'modal-body')


            var p = document.createElement('p')
            divNew5.appendChild(p);
            p.append(setting.modal.text);

            var divNew6 = document.createElement('div');
            divNew6.setAttribute('class', 'modal-footer')


            if (setting.modal.showbuttons == true) {

                var Save = document.createElement('button')
                divNew6.appendChild(Save);
                Save.append('Save changes')
                Save.setAttribute("class", 'btn btn-primary');
                var close = document.createElement('button')
                divNew6.appendChild(close);
                close.append('Close')
                close.setAttribute("class", 'btn btn-secondary');
                close.setAttribute("data-dismiss", 'modal');
            }

            divprincipal.appendChild(divNew);
            divNew.appendChild(divNew2);
            divNew2.appendChild(divNew3);
            divNew3.appendChild(divNew4);
            divNew3.appendChild(divNew5);
            divNew3.appendChild(divNew6);


        }

        if (setting.modal.form == true) {

            //CODIGO DE FORMULARIO
            //div principal moda fade 

            divNew_form.setAttribute("id", setting.modal.id);
            divNew_form.setAttribute('title', 'modal form')
            divNew_form.setAttribute('style', 'modal')
            divNew_form.setAttribute('class', 'modal fade')


            //segundo div modal dialog 
            var divNew_form2 = document.createElement('div');
            divNew_form2.setAttribute('class', setting.modal.size)

            //tercer div modal content
            var divNew_form3 = document.createElement('div');
            divNew_form3.setAttribute('class', "modal-content")

            //cuarto div modal header 
            var divNew_form4 = document.createElement('div');
            divNew_form4.setAttribute('class', "modal-header")

            //titulo  del formulario 
            var h1_form = document.createElement('h1');
            divNew_form4.appendChild(h1_form);
            h1_form.append(setting.modal.title);
            h1_form.setAttribute("class", 'modal-title');

            // boton de cerrar 'x'
            var button_form = document.createElement('button')
            divNew_form4.appendChild(button_form);
            button_form.append('x')
            button_form.setAttribute("class", 'close');
            button_form.setAttribute('data-dismiss', 'modal')
            button_form.setAttribute('aria-label', 'close')
            button_form.setAttribute('aria-hidden', 'true')
            button_form.setAttribute('onclick', 'Quitar()')

            // quinto div modal body 
            var divNew_form5 = document.createElement('div');
            divNew_form5.setAttribute('class', 'modal-body')

            // inicio codigo del formulario
            var form = document.createElement('form')
            var divform = document.createElement('div')
            divform.setAttribute('class', 'form-group')
            var label = document.createElement('label')
            label.setAttribute('for', 'recipient-name')
            label.setAttribute('class', 'col-form-label')
            label.append('nombre')
            var input = document.createElement('input')
            input.setAttribute('type', "text")
            input.setAttribute('class', "form-control")
            var label2 = document.createElement('label')
            label2.setAttribute('for', 'message-text')
            label2.setAttribute('class', 'col-form-label')
            label2.append('mensaje')
            var textarea = document.createElement('textarea')
            textarea.setAttribute('class', 'form-control')


            divNew_form5.appendChild(form)
            form.appendChild(divform)
            divform.appendChild(label)
            divform.appendChild(input)
            divform.appendChild(label2)
            divform.appendChild(textarea)
            // fin del codigo del formulario 

            //modal footer sexto div 
            var divNew_form6 = document.createElement('div');
            divNew_form6.setAttribute('class', 'modal-footer')



            if (setting.modal.showbuttons == true) {
                //botones del formulario
                var Sendmessage = document.createElement('button')
                divNew_form6.appendChild(Sendmessage);
                Sendmessage.append('Send message')
                Sendmessage.setAttribute("class", 'btn btn-primary');
                Sendmessage.setAttribute("type", 'button');
                var close = document.createElement('button')
                divNew_form6.appendChild(close);
                close.append('close')
                close.setAttribute("class", 'btn btn-secondary');
                close.setAttribute("data-dismiss", 'modal');
            }

            divprincipal.appendChild(divNew_form);
            divNew_form.appendChild(divNew_form2);
            divNew_form2.appendChild(divNew_form3);
            divNew_form3.appendChild(divNew_form4);
            divNew_form3.appendChild(divNew_form5);
            divNew_form3.appendChild(divNew_form6);
        }
    };
})(jQuery);

function Quitar() {
    var ultimo = document.getElementById('divprincipal');
    document.body.removeChild(ultimo);
}


