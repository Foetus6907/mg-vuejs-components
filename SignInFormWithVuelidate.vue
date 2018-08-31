<template>
  <div id="app">
    <form>
    <div class="form-group">
        <label for="firstname">Firstname</label>
        <input v-model="$v.firstname.$model" :class="status($v.firstname)" type="text" class="form-control" id="firstname" placeholder="Firstname">
    </div>
    <div class="form-group">
        <label for="lastname">Lastname</label>
        <input v-model="$v.lastname.$model" :class="status($v.lastname)" type="text" class="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Lastname">

     </div>
     <div class="form-group">
        <label for="phone">Phone number</label>
        <input v-model="$v.phone.$model" :class="status($v.phone)" type="tel" class="form-control" id="phone" aria-describedby="emailHelp" placeholder="+33 ">
      </div>

    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="$v.email.$model" :class="status($v.email)" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="$v.password.$model" :class="status($v.password)" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        <small id="passwordHelp" class="form-text text-muted">Password must contain 6 characters including UPPER/Lowercase and number.</small>
        <label for="exampleInputPassword2">Repeat Password</label>
        <input v-model="$v.password2.$model" :class="status($v.password2)" type="password" class="form-control" id="exampleInputPassword2" placeholder="Repeat Password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

  </div>
</template>

<script>

function checkPassword()
{
	re = /[0-9]/;
	if(!re.test(this.password)) {
	  return false;
	}
	re = /[a-z]/;
	if(!re.test(this.password)) {
	  return false;
	}
	re = /[A-Z]/;
	if(!re.test(this.password)) {
	  return false;
	}
	return true;
}

Vue.use(window.vuelidate.default)
const { required, minLength, email, numeric, and , sameAs } = window.validators


new Vue({
  el: "#app",
  data: {
    email:'',
    password:'',
    password2:'',
    firstname:'',
    lastname:'',
    phone:null
  },
  computed:{
  
  },
  methods: {
  	status(validation) {
    	return {
      	error: validation.$error,
        dirty: validation.$dirty
      }
    },
  },
  validations: {
    email:{
    	required,
      email,    
    },
    password: {
    	required,
      checkPassword,
      and,
      minLength: minLength(6)
      
    },
    password2: {
    	required,
      matchText: sameAs( scope => { 
				return true;
			}),
      
    },
    firstname:{
    	required,
      minLength: minLength(2)
    },
    lastname:{
    	required,
      minLength: minLength(2)
    },
    phone:{
    	required,
      minLength: minLength(10),
    	numeric
    }
  },
})
</script>

<style>

body {
  background: #20262E;
  padding: 20px;
  font-family: Helvetica;
}

#app {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
}

li {
  margin: 8px 0;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}

del {
  color: rgba(0, 0, 0, 0.3);
}

input {
  border: 1px solid silver;
  border-radius: 4px;
  background: white;
  padding: 5px 10px;
}

.dirty {
  border-color: #5A5;
  background: #EFE;
}

.dirty:focus {
  outline-color: #8E8;
}

.error {
  border-color: red;
  background: #FDD;
}

.error:focus {
  outline-color: #F99;
}

</style>

