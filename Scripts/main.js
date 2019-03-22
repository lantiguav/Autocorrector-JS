//'use strict'

$(document).ready(function(){
  function sentenceCase(input, lowercaseBefore) {
    input = ( input === undefined || input === null ) ? '' : input;
    if (lowercaseBefore) { input = input.toLowerCase(); }
    return input.toString().replace( /(^|\. *)([a-z])/g, function(match, separator, char) {
        return separator + char.toUpperCase();
    });
  }
  function jsUcfirst(string)
  {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  tinymce.init({
     language : "es_MX" // change language here
      ,height : "350"
      ,content_css: "Styles/editor.css"
      ,selector: "#myTextArea"
      ,external_plugins: { "nanospell": "/Autorcorrector-Js/Scripts/nanospell/plugin.js" }
      ,nanospell_dictionary: "es"
      ,menubar: 'file edit insert format table help'
      ,nanospell_server: "php" // choose "php" "asp" "asp.net" or "java"
      ,init_instance_callback:  function(editor){
        editor.on('keyup', function (e) {
          var inp = String.fromCharCode(event.keyCode);
          if (/[a-zA-Z0-9-_ ]/.test(inp) || true) {
            let contenido = sentenceCase(tinyMCE.activeEditor.getContent())
            contenido = capitalize(contenido);
            // console.log(contenido);

            // contenido = jsUcfirst(contenido);
            // var range = editor.selection.getRng().startOffset;     // get range
            //
            // var node = editor.selection.getNode();
            // $(node).addClass('capitalize');
            // $(node).css('text-transform','capitalize');
            // console.log(node);
            //
            // editor.selection.setCursorLocation(node);
            // tinyMCE.activeEditor.setContent(contenido)
            // editor.focus();
            // editor.selection.select(editor.getBody(), true);
            // editor.selection.collapse(false);


          }
        });
        editor.on('change', function(){
          let contenido = sentenceCase(tinyMCE.activeEditor.getContent())
          contenido = capitalize(contenido);
        })
      }
  });
  const capitalize = (contenido) => {
    $('#divAux').html('');
    $('#divAux').append(contenido);
    $('#divAux p').each(function(i){
      let capitalized = jsUcfirst($(this).text())
      $(this).text(capitalized);
    })
    $('#divAux h1').each(function(i){
      let capitalized = jsUcfirst($(this).text())
      $(this).text(capitalized);
    })
    $('#divAux h2').each(function(i){
      let capitalized = jsUcfirst($(this).text())
      $(this).text(capitalized);
    })
    $('#divAux h3').each(function(i){
      let capitalized = jsUcfirst($(this).text())
      $(this).text(capitalized);
    })
    $('#divAux h4').each(function(i){
      let capitalized = jsUcfirst($(this).text())
      $(this).text(capitalized);
    })
    $('#divAux h5').each(function(i){
      let capitalized = jsUcfirst($(this).text())
      $(this).text(capitalized);
    })
    $('#divAux h6').each(function(i){
      let capitalized = jsUcfirst($(this).text())
      $(this).text(capitalized);
    })
    return $('#divAux').html()
  }

});
