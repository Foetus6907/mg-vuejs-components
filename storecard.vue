<div
    id="app"
    style="max-width: 400px; margin: auto;"
    class="grey lighten-3"
  >   

    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          

          <v-flex xs12>
            <v-card color="grey" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    :src="picsrc"
                    height="125px"
                    contain
                  ></v-img>
                  
                      
                
               
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{title}}</div>
                      <div>{{openperiodday}}</div>
                      <div>
                        {{telephone}}
                      </div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <div class="text-xs-center">
                  <v-rating v-model="rating"></v-rating>
                </div>
                <v-spacer></v-spacer>
                
                <v-alert v-if="opennow"
                         value="true"
                         color="success"
                         icon="check_circle"
                         outline
                         >
                  Open
                </v-alert>
                <v-alert v-else
                         value="true"
                         color="error"
                         icon="warning"
                         outline
                         >
                  Close
                </v-alert>
              </v-card-actions>
            </v-card>
          </v-flex>

          
        </v-layout>
      </v-container>
    </v-card>
  </div>
  
  
var apikey = "AIzaSyA1RDgFGrgBSFJmUnRba__E8hOgkpUUZxc"
var placeid = "ChIJCe4KMG7r9EcRaJ3bSsz6FLA"

const URL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid="+placeid+"&fields=name,rating,formatted_phone_number,opening_hours,photos&key=" +apikey;


var lat = 45.7763394;
var long = 4.7980793;

var miles =5;
var meters=miles*1609.344;
var getFoodType="restaurant"

var googleAPI= "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+lat+","+long+"&radius="+meters+"&type="+getFoodType+"&key=AIzaSyA1RDgFGrgBSFJmUnRba__E8hOgkpUUZxc&name=Marmara";


new Vue({
  el: '#app',
  data() {
    return {
      title: '',
      rating:5,
      picsrc:'',
      opennow: false,
      openperiodday : '',
      telephone :''
    }
  },
  created() {
    //this.loading = true --> not needed already set in data
    axios.get(URL, {


      // withCredentials: true,
      //transformRequest: [(data) => JSON.stringify(data.data)],
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://maps.googleapis.com/',
        'Access-Control-Allow-Methods': 'POST, GET'
      }
    }
             ).then((response) => {
      console.log(response.data, this)
      this.title = response.data.result.name
      this.rating = response.data.result.rating
      this.picsrc = "https://maps.googleapis.com/maps/api/place/photo?photoreference="+response.data.result.photos[0].photo_reference + "&key="+apikey+"&maxheight=1000&maxwidth=600"
      this.opennow = response.data.result.opening_hours.open_now
      this.openperiodday = response.data.result.opening_hours.weekday_text["0"]
      this.telephone =  response.data.result.formatted_phone_number
    }).catch(function (error) {
      // handle error
      this.title = 'error'//response.data
    }).finally(function () {
      this.title = 'fin'//response.data
    })
  }
})
