jQuery.fn.extend({
  myPlugin: function (options) {
    defaults = {
      id_divNew: "mostrarmodal",
      title_divNew: 'titulo',
      style_divNew: 'display: none',
      class_divNew: 'modal fade',
      class_divNew2:'modal-dialog',
      class_divNew3:'modal-content',
      class_divNew4:'modal-header',
      button:'x',
      button_class:'close',
     
      button_data_dismiss:'true',
      button_aria_label:'close',
      button_aria_hidden:'modal',
      button_onclick:'eliminarDiv()',
    
      class_divNew5:'modal-body',
      class_divNew6:'modal-footer'
      

    }
    var options = $.extend({}, defaults, options);
    
    var divNew = document.createElement('div');

    this.each(function () {
      

      //var divNew = document.createElement('div');
      divNew.setAttribute("id", options.id_divNew);
      divNew.setAttribute('title',options.title_divNew)
      divNew.setAttribute('style', options.style_divNew)
      divNew.setAttribute('class', options.class_divNew)
      document.body.appendChild(divNew);
    
    
      var divNew2=document.createElement('div');
      /*divNuevo2.setAttribute("id", 'title');
      divNuevo2.setAttribute('title','title')
      divNuevo2.setAttribute('style', 'title')*/
      divNew2.setAttribute('class', options.class_divNew2)
    
    
      var divNew3=document.createElement('div');
      /*divNuevo3.setAttribute("id", 'title');
      divNuevo3.setAttribute('title','title')
      divNuevo3.setAttribute('style', 'title')*/
      divNew3.setAttribute('class', options.class_divNew3)
    
    
    
      var divNew4=document.createElement('div');
      /*divNuevo5.setAttribute("id", 'title');
      divNuevo5.setAttribute('title','title')
      divNuevo5.setAttribute('style', 'title')*/
      divNew4.setAttribute('class', options.class_divNew4)
    
      var button=document.createElement('button')
      divNew4.appendChild(button);
      button.append(options.button)
      button.setAttribute("class", options.button_class);
      button.setAttribute('data-dismiss',options.button_aria_hidden)
      button.setAttribute('aria-label',options.button_aria_label )
      button.setAttribute('onclick',options. button_onclick )
      
      
      /*function eliminarDiv(){
        var eliminar=document.getElementById('mostrarmodal')
       document.body.removeChild(eliminar)
      }*/
      
    
      var divNew5=document.createElement('div');
      /*divNuevo6.setAttribute("id", 'title');
      divNuevo6.setAttribute('title','title')
      divNuevo6.setAttribute('style', 'title')*/
      divNew5.setAttribute('class', options.class_divNew5)
    
      var divNew6=document.createElement('div');
      /*divNuevo7=document.createElement('div');
      divNuevo7.setAttribute("id", 'title');
      divNuevo7.setAttribute('title','title')
      divNuevo7.setAttribute('style', 'title')*/
      divNew6.setAttribute('class', options.class_divNew6)
    
    
     
      divNew.appendChild(divNew2);
      divNew2.appendChild(divNew3);
      divNew3.appendChild(divNew4);
      divNew3.appendChild(divNew5);
      divNew3.appendChild(divNew6);
      
     function eliminarDiv(){
        var eliminar=document.getElementById('mostrarmodal')
       document.body.removeChild(eliminar)
      }
    
    })
  }
})