function borrado() {
 
  
  
  
  var divNuevo = document.createElement('div');
  divNuevo.setAttribute("id", 'mostrarmodal');
  divNuevo.setAttribute('title','titulo')
  divNuevo.setAttribute('style', 'display:none')
  divNuevo.setAttribute('class', 'modal fade')
  document.body.appendChild(divNuevo);


  var divNuevo2=document.createElement('div');
  /*divNuevo2.setAttribute("id", 'title');
  divNuevo2.setAttribute('title','title')
  divNuevo2.setAttribute('style', 'title')*/
  divNuevo2.setAttribute('class', 'modal-dialog')


  var divNuevo3=document.createElement('div');
  /*divNuevo3.setAttribute("id", 'title');
  divNuevo3.setAttribute('title','title')
  divNuevo3.setAttribute('style', 'title')*/
  divNuevo3.setAttribute('class', 'modal-content')



  var divNuevo5=document.createElement('div');
  /*divNuevo5.setAttribute("id", 'title');
  divNuevo5.setAttribute('title','title')
  divNuevo5.setAttribute('style', 'title')*/
  divNuevo5.setAttribute('class', 'modal-header')

  var button=document.createElement('button')
  divNuevo5.appendChild(button);
  button.append('x')
  button.setAttribute("class", 'close');
  button.setAttribute('data-dismiss','modal')
  button.setAttribute('aria-hidden', 'true')

  var divNuevo6=document.createElement('div');
  /*divNuevo6.setAttribute("id", 'title');
  divNuevo6.setAttribute('title','title')
  divNuevo6.setAttribute('style', 'title')*/
  divNuevo6.setAttribute('class', 'modal-body')

  var divNuevo7=document.createElement('div');
  /*divNuevo7=document.createElement('div');
  divNuevo7.setAttribute("id", 'title');
  divNuevo7.setAttribute('title','title')
  divNuevo7.setAttribute('style', 'title')*/
  divNuevo7.setAttribute('class', 'modal-footer')


 
  divNuevo.appendChild(divNuevo2);
  divNuevo2.appendChild(divNuevo3);
  divNuevo3.appendChild(divNuevo5);
  divNuevo3.appendChild(divNuevo6);
  divNuevo3.appendChild(divNuevo7);

  $(document).ready(function()
              {
                 $("#mostrarmodal").modal("toggle");
              });
  
 
}