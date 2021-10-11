<template>
  <div class="alianzas">
    <div class="bg-foto-alianzas">
      <HeroHd title="Donaciones, Patrocinios y Alianzas"/>
    </div>
    <main >
      <div class="bgc-tblanco dim-div-text">
        <section>
            <div class="tc-tprofundo text-center ">
              <h2>¿Como Puedo Apoyar la Iniciativa?</h2>
              <p class="alianzas-p">HoneyPet-DC, es un sitio en constante actualización y soporte, emarcada en la adopción de perros y gatos que buscan un hogar en donde puedan recibir el cuidado y amor que merecen, puedes ayudarnos a contribuir con esta iniciativa de tres formas diferentes:</p>
            </div>
            <div class="tc-tprofundo text-center">
              <h3>1. Donaciones</h3>  
              <p class="alianzas-p">Donar es una de las mejores formas en las que puedes ayudar a que esta página siga teniendo soporte y actualizaciones, para hacer de este sitio de adopción uno de los mejores a nivel mundial. Para donar debes dirigirte a la parte inferior de esta página, allí encontrarás un formulario de contacto en el cual debes colocar como asunto "Donación", luego debes rellenar los datos que te solicitan para poder contactarte y darte más información acerca del proceso de donación.</p>
            </div>
            <div class="tc-tprofundo text-center">
              <h3>2. Patrocinios</h3>
              <p class="alianzas-p">Patrocinar es otra forma destacada para ayudar a que HoneyPet-DC crezca y pueda llegar a más lugares y mascotas abandonadas o necesitadas de un nuevo hogar. Para patrocinarnos debes dirigirte a la parte inferior de esta página, allí encontrarás un formulario de contacto en el cual debes colocar como asunto "Patrocinio", luego debes rellenar los datos que te solicitan para poder contactarte y darte más información acerca del proceso de patrocinio.</p>
            </div>
            <div class="tc-tprofundo text-center">
              <h3>3. Alianzas</h3>
              <p class="alianzas-p">Las alianzas representan un gran aporte hacia esta iniciativa y de paso pueden contribuir al crecimiento y fortalecimiento de tu empresa junto con nosotros. Para realizar una alianza debes diligenciar el formulario de contacto ubicado en la última sección de la página, en el cual debes colocar como asunto "Alianzas" y luego rellenar los datos que te solicitan para poder contactarte y darte más información acerca del proceso de una alianza con nuestra organización.</p>
            </div>
        </section>
        </div>
        <div class="dim-div-form bgc-tprofundo">
            <div class="container-fluid bgc-tblanco form-contact mx-auto">
              <h2 class="text-center mb-4">Formulario de Contacto</h2>
              <form @submit.prevent="enviarEmail()">
                <div class="mb-3">
                    <label for="nombre-alianza" class="form-label">Persona, empresa o sociedad: </label><input v-model="new_email.nombre" id="nombre-alianza" width="25px"  type="text" size="20" placeholder="Ingrese su nombre o el nombre de su empresa" max="10" class="form-control">
                </div>
                <div  class="mb-3">
                    <label for="correo-electronico" class="form-label">*Correo electronico: </label><input v-model="new_email.email" id="correo-electronico" name="correo-electronico" class="form-control" type="email" size="20"  placeholder="nombre@example.com" required>
                </div>
                <div class="mb-3">
                  <label for="asunto-alianza" class="form-label">*Asunto:</label>
                  <select v-model="new_email.asunto" class="form-control mb-3" name="asunto" id="asunto-alianza">
                    <option value="Default">Seleccione uno...</option>
                    <option value="Donacion">Donación</option>
                    <option value="Patrocinio">Patrocinio</option>
                    <option value="Alianza">Alianza</option>
                  </select>
                </div>
                <div class="mb-3"> 
                  <label for="descripcion-alianza" class="form-label">*Mensaje:</label>
                  <textarea v-model="new_email.mensaje" class="form-control" id="descripcion-alianza" placeholder="Describanos mas acerca de como quieres apoyarnos" rows="3" required></textarea>
                </div>
                <p>*Campos obligatorios</p>
                <div  class="text-center">
                  <button type="reset" class="btn bgc-tclaro opaco-8 me-3">Limpiar</button>
                  <button type="submit" class="btn bgc-tintenso opaco-8">Enviar</button>
                  <div v-if="show_alert" class="alert alert-success  alert-dismissible fade show m-3" role="alert">
                    <strong>¡FELICIDADES!</strong> el formulario ha sido enviado con exito, pronto nos comunicaremos contigo
                    <button type="reset" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                </div>
              </form>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroHd from '@/components/HeroHd.vue'
import {sendEmail} from '@/services/EmailService'


export default {

  name: 'Alianzas',
  components: {
    HeroHd
  },
  data () {
    return {
      show_alert:false,
      new_email: {nombre:"",email:"",asunto:"",mensaje:""}
    }
  },

  methods: {
    enviarEmail(){
      sendEmail(this.new_email)
      .then((response) => {
        this.show_alert = true
        console.log(response)

      })
      .catch((e) => {
        console.error("pinche errror"+e);
      });
    }
  }
}
</script>

<style scoped>
.bg-foto-alianzas {
    background-image: url(../assets/img/bg-alianzas.jpg);
    background-position: center;
    background-size: cover;
}
.dim-div-text{
    padding: 100px 0;
}

.dim-div-form{
    padding: 100px 0;
}

.alianzas-p {
    padding: 20px 10%;
}

.form-contact{
    width: 600px;
    border-radius: 20px;
    padding: 70px 70px;

}

@media (max-width: 600px) {
    .alianzas-p {
        padding: 20px;
    }
    .form-contact{
        width: 100%;
        border-radius: 20px;
        padding: 20px;
    }
}

@media (min-width: 1440px) {
    .alianzas-p {
        padding: 20px 20%;
    }
}
</style>

