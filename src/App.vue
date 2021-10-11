<template>
  <div id="app">
    <!---------------------------------- Login Modal ------------------------------------>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            
            <!---------------------------------- tabs ------------------------------------>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Iniciar Sesion</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Crear Cuenta</button>
              </li>
            </ul>
          </div>
          
          <div class="modal-body">
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

          <!---------------------------------- Login form ------------------------------------>
                <form @submit.prevent="login()">
                  <div class="form-floating mb-3">
                    <input v-model="login_email" type="email" class="form-control" id="floatingMail" placeholder="name@example.com" required>
                    <label for="floatingMail">*Correo Electronico</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input v-model="login_pw" type="password" class="form-control" id="floatingPw" placeholder="Password" minlength="6"  required>
                    <label for="floatingPw">*Contraseña</label>
                  </div>

                  <p>*Campos obligatorios</p>
                  <div v-if="success_show" class="alert alert-success alert-dismissible fade show" role="alert">
                    {{ success_msg }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                  <div v-if="error_show" class="alert alert-danger alert-dismissible fade show" role="alert">
                    {{ error_msg }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn bgc-tclaro opaco-8" data-bs-dismiss="modal">Cancelar</button>
                    <!-- <button type="submit" class="btn bgc-tintenso opaco-8">Iniciar Sesion</button> -->
                    <button class="nav-link btn btn-sm btn bgc-tintenso tc-toscuro opaco-8" >Iniciar Sesion</button>
                  </div>
                </form>

              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

          <!---------------------------------- signup form ------------------------------------>
                <form @submit.prevent="signup()">
                  <div class="form-floating mb-3">
                    <input v-model="new_user.user_name" type="text" class="form-control" id="floatingName" placeholder="nombre completo" required>
                    <label for="floatingName">*Nombre Completo</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input v-model="new_user.user_phone" type="number" class="form-control" id="floatingTel" placeholder="numero telefonico">
                    <label for="floatingTel">Numero Telefonico</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input v-model="new_user.user_email" type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" required>
                    <label for="floatingEmail">*Correo Electronico</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input v-model="new_user.user_password" type="password" class="form-control" id="floatingPassword" placeholder="Password" minlength="6" required>
                    <label for="floatingPassword">*Contraseña</label>  
                  </div>
                  <p>*Campos obligatorios</p>
                  <div v-if="success_show" class="alert alert-success alert-dismissible fade show" role="alert">
                    {{ success_msg }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                  <div v-if="error_show" class="alert alert-danger alert-dismissible fade show" role="alert">
                    {{ error_msg }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn bgc-tclaro opaco-8" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn bgc-tintenso opaco-8">Crear Cuenta</button>
                  </div>

                </form>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <!------------------------------------------------------------------------------------->
    <nav id="nav" class="navbar navbar-dark bg-primary navbar-expand-md fixed-top bgc-toscuro shadow">
      <div class="container-fluid">
        <a class="navbar-brand ms-3" href="#"><img src="@/assets/img/logotxt-HoneyPetDC.svg" alt="HoneyPet DC" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><router-link to="/" class="nav-link"><i class="fas fa-home"></i> Inicio</router-link></li>
            <li class="nav-item"><router-link to="/mascotas" class="nav-link"><i class="fas fa-cat"></i> Mascotas</router-link></li>
            <li class="nav-item"><router-link to="/adoptar" class="nav-link"><i class="fas fa-paw"></i> Adoptar</router-link></li>
            <li class="nav-item"><router-link to="/alianzas" class="nav-link"><i class="fas fa-handshake"></i> Alianzas</router-link></li>

            <li v-if="this.unlogin" class="nav-item"><a to="/publicar" class="nav-link btn btn-sm bgc-tneutro tc-tprofundo opaco-5" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-lock"></i> Publicar</a></li>
            <li v-else class="nav-item"><router-link to="/publicar" class="nav-link btn btn-sm bgc-tneutro tc-tprofundo opaco-5" ><i class="fas fa-plus"></i> Publicar</router-link></li>

            <li v-if="this.unlogin" class="nav-item"><a class="nav-link" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-user-astronaut"></i> Ingresar</a></li>
            <li v-else class="nav-item"><router-link to="/perfil" class="nav-link" role="button"><i class="far fa-address-card"></i> Perfil</router-link></li>

          </ul>
        </div>
      </div>
    </nav>

    <router-view/>

    <footer class="bgc-toscuro tc-tneutro">
      <p class="text-center opaco-8">©2021 - TODOS LOS DERECHOS RESERVADOS HONEYPET DC - DEVELOP BY MTIC:UTP_G2-47</p>
    </footer>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import { getUserByEmail, createUser } from '@/services/UserService'
import Vue from 'vue'

export default {
  data () {
    return {
      user_data: [],
      error_show: false,
      success_show: false,
      error_msg: 'Error',
      success_msg: 'Logrado',
      login_email: '',
      login_pw: '',
      unlogin: true,
      new_user: {user_name:"",user_email:"",user_password:"",user_phone:0}

    }
  },
  mounted() {
    // console.warn("Hola desde el created.....")
    if(!localStorage.getItem('localUserData')){
      this.unlogin = true
    } else {
      this.unlogin = false
    }
    Vue.prototype.$islogin = this.unlogin
  },
  methods: {
    login() {
      getUserByEmail(this.login_email)
      .then((response) => {
        if (response.data.user_email) {
          if (response.data.user_password === this.login_pw) {
            this.user_data = response.data;
            this.success_show = true
            this.success_msg = "Operación Exitosa!, redireccionando..."
            this.unlogin = false;
            // loginModal.hide()
            const loginModal = document.getElementById("exampleModal")
            const backModal = document.querySelector("div.modal-backdrop");
            const padreM = loginModal.parentNode;
            const padreBM = backModal.parentNode;
            padreM.removeChild(loginModal);
            padreBM.removeChild(backModal);
            this.success_show = false
            this.error_show = false
            // poner un setimeout para que se vea el 

            localStorage.setItem('localUserData', JSON.stringify(response.data));

            // Vue.prototype.$app = this.user_data
            // this.$router.push('/perfil');
            window.location.reload()

          } else {
            this.error_show = false
            this.error_show = true
            this.error_msg = "La contraseña no coincide!"
          }
        }
      })
      .catch((e) => {
        console.error(e);
        this.error_show = true
        this.error_msg = "El email que ingreso no tiene un usuario asociado"
        // this.error_show = false
      });

    },
    signup() {
      // const newUser = JSON.stringify(this.new_user)
      // console.log(newUser)
      console.warn(this.new_user.user_email)
      getUserByEmail(this.new_user.user_email)
        .then((response) => {
          if (response.data.user_email) {
            if (response.data.user_password === this.new_user.user_password) {
              this.user_data = response.data;
              this.success_show = true
              this.success_msg = "Operación Exitosa!, redireccionando..."
              this.unlogin = false;
              // loginModal.hide()
              const loginModal = document.getElementById("exampleModal")
              const backModal = document.querySelector("div.modal-backdrop");
              const padreM = loginModal.parentNode;
              const padreBM = backModal.parentNode;
              padreM.removeChild(loginModal);
              padreBM.removeChild(backModal);
              this.success_show = false
              this.error_show = false
              // poner un setimeout para que se vea el 

              localStorage.setItem('localUserData', JSON.stringify(response.data));

              // Vue.prototype.$app = this.user_data
              // this.$router.push('/perfil');

            } else {
              this.error_show = true
              this.error_msg = "El email que ingresó ya tiene un usuario asociado, pero el pasword no coincide, use el formulario 'Iniciar Sesión' con el password correcto."
            }
          } else {
            createUser(this.new_user)
              .then((response) => {
                localStorage.setItem('localUserData', JSON.stringify(response.data));
                this.unlogin = false;

                const loginModal = document.getElementById("exampleModal")
                const backModal = document.querySelector("div.modal-backdrop");
                const padreM = loginModal.parentNode;
                const padreBM = backModal.parentNode;
                padreM.removeChild(loginModal);
                padreBM.removeChild(backModal);

                // this.$router.push('/perfil');

              })
              .catch((e) => {
                console.error(e);
                this.error_show = true
                this.error_msg = "Error, No se creó el usuario"
              })

          }
        })
        .catch(() => {
          createUser(this.new_user)
              .then((response) => {
                localStorage.setItem('localUserData', JSON.stringify(response.data));
                this.unlogin = false;

                const loginModal = document.getElementById("exampleModal")
                const backModal = document.querySelector("div.modal-backdrop");
                const padreM = loginModal.parentNode;
                const padreBM = backModal.parentNode;
                padreM.removeChild(loginModal);
                padreBM.removeChild(backModal);

                // this.$router.push('/perfil');

              })
              .catch((e) => {
                console.error(e);
                this.error_show = true
                this.error_msg = "Error, No se creó el usuario"
              })
          // this.error_show = false
        });
      
    }
  }
}
// ----- Local storage doc:
// ----- Guardar datos
// const miObjetoJson = { 'marcado': 'html5', 'estilo': 'css3', 'comportamiento': 'js' };
// localStorage.setItem('keyName', JSON.stringify(miObjeto));
// ----- Obtener los datos
// const dataString = localStorage.getItem('keyName');
// const dataJson = JSON.parse(dataString);
// ----- Borrar los datos
// localStorage.removeItem('keyName');
// ----- Elimina todos los elementos
// localStorage.clear();

// TO DO ===> cuando se deslogea borrar todos los datos del localStorage
</script>


<style>
#nav a.router-link-exact-active {
  color: #fff;
} 
</style>
