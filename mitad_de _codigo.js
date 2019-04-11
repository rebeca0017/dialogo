



//div principal moda fade 
var divNew_form = document.createElement('div');
divNew_form.setAttribute("id", setting.form.id);
divNew_form.setAttribute('title', 'modal form')
divNew_form.setAttribute('style', 'modal')
divNew_form.setAttribute('class', 'modal fade')
document.body.appendChild(divNew_form);

//segundo div modal dialog 
var divNew_form2 = document.createElement('div');
divNew_form2.setAttribute('class', setting.form.tamaño)

//tercer div modal content
var divNew_form3 = document.createElement('div');
divNew_form3.setAttribute('class', "modal-content")

//cuarto div modal header 
var divNew_form4 = document.createElement('div');
divNew_form4.setAttribute('class', "modal-header")

//titulo  del formulario 
var h5_form = document.createElement('h5')
divNew_form4.appendChild(h5)
h5_form.append(setting.form.tittle)
h5_form.setAttribute("class", 'modal-title');

// boton de cerrar 'x'
var button_form = document.createElement('button')
divNew_form4.appendChild(button_form);
buttonform.append('x')
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



divNew_form.appendChild(divNew_form2);
divNew_form2.appendChild(divNew_form3);
divNew_form3.appendChild(divNew_form4);
divNew_form3.appendChild(divNew_form5);
divNew_form3.appendChild(divNew_form6);
