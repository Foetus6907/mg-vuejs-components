<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    
<div class="card container" id="app" style="width: 100%;" style="display:flex;">
   <div class="row" style="display: flex ">
     <div class="col-xs-2" style="float:left;display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;">
        <span class="badge badge-primary">
          {{badgeValue}}
        </span>
     </div>
     <div class="col-xs-2" style="float:left;display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;">
        <img class="card-img-top" :src="imgPath" alt="Card image cap">
      </div>
     <div class="card-body col-xs-8 row">
     
       <div class="col-xs-5">
         <h5 class="card-title">{{ title }}</h5>
         <label id="label1">{{labelValue1}}</label>    
         <br/>
         <label id="label1">{{labelValue2}}</label>
       </div>
       
       <div class="col-xs-5" style="display: flex;
    justify-items: center;
    align-items: center; margin: auto;">
         <a href="#" class="btn btn-primary">{{buttonValue}}</a>
       </div>
     </div>
     
     
   </div>
   
</div>
    
    
    
  </body>
</html>

<script>
var app = new Vue({
  el: '#app',
  data: {
    title: 'bulbizare', 			 	
    imgPath:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    buttonValue:'More',
    labelValue1:'Plante',
    labelValue2:'Plante',
    badgeValue:'999'
    
  }
})

</script>
