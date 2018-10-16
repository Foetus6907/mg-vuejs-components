<html>
<head>
  <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body>
  <div id="app">
     <v-carousel>
        <v-carousel-item
          :key="key" v-for="(sprite, key) in sprites"
          :key="key"
          :src="sprite"
          v-if="sprite != null"
          
         
        ></v-carousel-item>
      </v-carousel>
    </div>

</body>
</html>



new Vue({
  el: "#app",
  data: {
    pokemonID :1,
    pokemonSprites:{},
    sprites:[],
  },
  methods: {
  	getPokemon: function(pokemonID){ 
    var vm = this;
    	axios.get('https://pokeapi.co/api/v2/pokemon/'+pokemonID+'/')
  		.then(function (response) {
      	//console.log(response.data.sprites);
        var array = [];
				this.pokemonSprites = response.data.sprites;
				for(var k in this.pokemonSprites) 
        {
          array = Object.values(this.pokemonSprites);
        }
        //console.log(this.pokemonSprites);
        
        console.log(array);
        vm.sprites = array;
        console.log(this.sprites)
      })
        .catch(function (error) {
        // handle error
        console.log(error);
      })
    },
    
  },

  mounted(){
  	//console.log(this.pokemonID);
  	this.getPokemon(this.pokemonID);
  }
})
