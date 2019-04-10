var divNew = document.createElement('div');

(function ($) {
    $.miPlugin = function (options) {
        var setting = {
            divNew: {

                id_divNew: 'mostrarmodal',
                title_divNew: 'titulo',
                style_divNew: 'display: none',
                class_divNew: 'modal fade'
            },
            class_divs: {
                class_divNew2: 'modal-dialog modal-lg ',
                class_divNew3: 'modal-content',
                class_divNew4: 'modal-header',
                class_divNew5: 'modal-body',
                class_divNew6: 'modal-footer'
            },
            

            text: {
                class: '',
                tittle: '',
                text:''
            },

            button: {

                button: 'x',
                button_class: 'close',
                button_data_dismiss: 'true',
                button_aria_label: 'close',
                button_aria_hidden: 'modal',
                button_eliminar:'Quitar()',
                Save: 'Save changes',
                Save_class: 'btn btn-primary',
                close: 'Close',
                close_class: 'btn btn-secondary',
                close_data_dismiss: 'modal'
            },

            formulario:{
                div_class:'form-group',
                input_type:'text',
                input_class:'form-control',
                textarea_class:'form-control'

            }
    }
   

        $.extend(setting, options)
        
        
        divNew.setAttribute("id", setting.divNew.id_divNew);
        divNew.setAttribute('title', setting.divNew.title_divNew)
        divNew.setAttribute('style', setting.divNew.style_divNew)
        divNew.setAttribute('class', setting.divNew.class_divNew)
        document.body.appendChild(divNew);

        var divNew2 = document.createElement('div');
        /*divNuevo2.setAttribute("id", 'title');
        divNuevo2.setAttribute('title','title')
        divNuevo2.setAttribute('style', 'title')*/
        divNew2.setAttribute('class', setting.class_divs.class_divNew2)


        var divNew3 = document.createElement('div');
        /*divNuevo3.setAttribute("id", 'title');
        divNuevo3.setAttribute('title','title')
        divNuevo3.setAttribute('style', 'title')*/
        divNew3.setAttribute('class', setting.class_divs.class_divNew3)


        var divNew4 = document.createElement('div');
        /*divNuevo5.setAttribute("id", 'title');
        divNuevo5.setAttribute('title','title')
        divNuevo5.setAttribute('style', 'title')*/
        divNew4.setAttribute('class', setting.class_divs.class_divNew4)


        var h5 = document.createElement('h5')
        divNew4.appendChild(h5)
        h5.append(setting.text.tittle)
        h5.setAttribute("class", setting.text.class);


        var button = document.createElement('button')
        divNew4.appendChild(button);
        button.append(setting.button.button)
        button.setAttribute("class", setting.button.button_class);
        button.setAttribute('data-dismiss', setting.button.button_aria_hidden)
        button.setAttribute('aria-label', setting.button.button_aria_label)
        button.setAttribute('aria-hidden', setting.button.button_data_dismiss)
        button.setAttribute('onclick', setting.button.button_eliminar)


        var divNew5 = document.createElement('div');
        /*divNuevo6.setAttribute("id", 'title');
        divNuevo6.setAttribute('title','title')
        divNuevo6.setAttribute('style', 'title')*/
        divNew5.setAttribute('class', setting.class_divs.class_divNew5)


        var p = document.createElement('p')
        divNew5.appendChild(p)
        p.append(setting.text.text);
         
        var form=document.createElement('form')

        var divform=document.createElement('div')
        divform.setAttribute('class',setting.formulario.div_class)
        //var label=document.createElement('label')
        //label.setAttribute('for',message-text)
        //label.setAttribute('class',col-form-label)
        var input=document.createElement('input')
        input.setAttribute('type',setting.formulario.input_type)
        input.setAttribute('class',setting.formulario.input_class)
        //var label2=document.createElement('label')
        //label2.setAttribute('for',message-text)
        //label2.setAttribute('class',col-form-label)
        var textarea=document.createElement('textarea')
        textarea.setAttribute('class',setting.formulario.textarea_class)
        
        divNew5.appendChild(form)
        form.appendChild(divform)
        divform.appendChild(input)
        divform.appendChild(textarea)





        var divNew6 = document.createElement('div');
        /*divNuevo7=document.createElement('div');
        divNuevo7.setAttribute("id", 'title');
        divNuevo7.setAttribute('title','title')
        divNuevo7.setAttribute('style', 'title')*/
        divNew6.setAttribute('class', setting.class_divs.class_divNew6)

        var Save = document.createElement('button')
        divNew6.appendChild(Save);
        Save.append(setting.button.Save)
        Save.setAttribute("class", setting.button.Save_class);

        var close = document.createElement('button')
        divNew6.appendChild(close);
        close.append(setting.button.close)
        close.setAttribute("class", setting.button.close_class);
        close.setAttribute("data-dismiss", setting.button.close_data_dismiss);
       


        divNew.appendChild(divNew2);
        divNew2.appendChild(divNew3);
        divNew3.appendChild(divNew4);
        divNew3.appendChild(divNew5);
        divNew3.appendChild(divNew6);
        //divNew3.appendChild(divNewform);

    };
})(jQuery);

function Quitar() {
    var ultimo = document.getElementById('mostrarmodal');
    document.body.removeChild(ultimo);
}