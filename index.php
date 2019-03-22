<?php $year = new Datetime(); ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Editor de texto OP</title>
    <link rel="stylesheet" href="Styles/bootstrap.min.css">
    <link rel="stylesheet" href="Styles/site.css">
    <link rel="stylesheet" href="Styles/HomeIndex.css">
    <link rel="stylesheet" href="Styles/editor.css">
  </head>
  <body>
    <div class="navbar navbar-inverse navbar-fixed-top">
       <div class="container">
           <div class="navbar-header">
               <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                   <span class="icon-bar"></span>
                   <span class="icon-bar"></span>
                   <span class="icon-bar"></span>
               </button>
               <h2>Editor de texto OP</h2>
           </div>
       </div>
   </div>
   <div class="container body-content">
     <div class="main-container">
         <div class="container">
             <div class="row">
                 <div class="col-md-6">
                     <h1>Editor de texto OP</h1>
                     <textarea id="myTextArea"></textarea>
                 </div>
                 <div class="col-md-6">
                     <h1>Resultado</h1>
                     <div class="resultado" >
                       <div id="divAux">


                       </div>
                     </div>
                 </div>
             </div>

         </div>

     </div>
       <hr />
       <footer class="text-center">
           <p>&copy; <?php echo $year->format('Y') ?> | Editor de texto OP |<strong> Victor Lantigua 2015-1760</strong></p>
       </footer>
   </div>

    <script type="text/javascript" src="Scripts/jquery-3.3.1.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/tinymce_4.9.4/tinymce/tinymce.min.js"></script>
    <script type='text/javascript' src="Scripts/main.js"></script>

  </body>

</html>
