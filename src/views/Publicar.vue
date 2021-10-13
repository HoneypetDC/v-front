<template>
  <div class="publicar">
    <div class="bg-foto-publicar">
      <HeroHd title="Publicar Mascota" />
    </div>
    <main class="fondo bgc-tprofundo">
      <section class="NuevaPublicacion">

        <form @submit.prevent="publicarMascota()" class="form-publicar">
          <div class="mb-3">
            <label for="foto-pet" class="form-label"
              >*Foto de la mascota:
              </label>
            <input @change="onImgSelected" type="file" class="form-control mb-2" id="foto-pet" accept="image/*" required />
            <p><span class="badge bg-secondary"><i class="fas fa-lightbulb"></i> Consejo</span> Procura que la cabeza de la mascota quede centrada en la foto que vas a subir.</p>
          </div>

          <p>*Tipo de Mascota:</p>
          <div class="form-check">
            <input
              v-model="pet_type"
              class="form-check-input"
              type="radio"
              name="tipo-m"
              id="tipo-perro"
              value="Perro"
              required
            />
            <label class="form-check-label" for="tipo-perro">Perro</label>
          </div>
          <div class="form-check">
            <input
              v-model="pet_type"
              class="form-check-input"
              type="radio"
              name="tipo-m"
              id="tipo-gato"
              value="Gato"
              required
            />
            <label class="form-check-label" for="tipo-gato">Gato</label>
          </div>
          <br />
          <div class="mb-3">
            <label for="name-pet" class="form-label"
              >*Nombre de la mascota</label
            >
            <input v-model="pet_name" type="text" class="form-control" id="name-pet" required />
          </div>

          <div class="mb-3">
            <label for="location-pet" class="form-label"
              >*Ubicación actual</label
            >
            <select
              v-model="pet_location"
              class="form-control"
              id="departamento"
              name="departamento"
              required
            >
              <option value="">Seleccione una opción...</option>
              <option value="Amazonas">Amazonas</option>
              <option value="Antioquia">Antioquia</option>
              <option value="Arauca">Arauca</option>
              <option value="Atlántico">Atlántico</option>
              <option value="Bogotá">Bogotá D.C.</option>
              <option value="Bolívar">Bolívar</option>
              <option value="Boyacá">Boyacá</option>
              <option value="Caldas">Caldas</option>
              <option value="Caquetá">Caquetá</option>
              <option value="Casanare">Casanare</option>
              <option value="Cauca">Cauca</option>
              <option value="Cesar">Cesar</option>
              <option value="Chocó">Chocó</option>
              <option value="Córdoba">Córdoba</option>
              <option value="Cundinamarca">Cundinamarca</option>
              <option value="Guainía">Guainía</option>
              <option value="Guaviare">Guaviare</option>
              <option value="Huila">Huila</option>
              <option value="La Guajira">La Guajira</option>
              <option value="Magdalena">Magdalena</option>
              <option value="Meta">Meta</option>
              <option value="Nariño">Nariño</option>
              <option value="Norte de Santander">Norte de Santander</option>
              <option value="Putumayo">Putumayo</option>
              <option value="Quindío">Quindío</option>
              <option value="Risaralda">Risaralda</option>
              <option value="San Andrés y Providencia">
                San Andrés y Providencia
              </option>
              <option value="Santander">Santander</option>
              <option value="Sucre">Sucre</option>
              <option value="Tolima">Tolima</option>
              <option value="Valle del Cauca">Valle del Cauca</option>
              <option value="Vaupés">Vaupés</option>
              <option value="Vichada">Vichada</option>
            </select>
          </div>

          <p>Cuentanos un poco más acerca de la mascota.</p>
          <div class="mb-3">
            <label for="desc-pet" class="form-label">*Descripcción: </label>
            <textarea
              v-model="pet_description"
              class="form-control"
              id="desc-pet"
              cols="30"
              rows="10"
              required
              placeholder="Cuentanos la historia o características de la mascota, ampliar la información facilitará la adopción."
            ></textarea>
          </div>

          <div class="mb-3">
            <label for="contacto" class="form-label">*Número de contacto</label>
            <input v-model="pet_phone" type="number" class="form-control" id="contacto" required />
          </div>

          <p>*Campos obligatorios.</p>
          <div class="text-center">
            <input
              class="btn bgc-tclaro opaco-8 mb-3"
              type="reset"
              value="Limpiar"
            />
            <input
              @click="bandera()"
              class="btn bgc-tintenso opaco-8 mb-3 ms-3"
              type="submit"
              value="Publicar Mascota"
            />
          </div>
        
          <div v-show="show" class="alert alert-success" role="alert">
            La mascota fue publicada con éxito, puedes administrarla desde tu <router-link to="/perfil" class="btn btn-outline-success btn-sm">Perfil</router-link> o <input @click="bandera()" type="reset" class="btn btn-outline-success btn-sm" value="Publicar otra mascota"/>
          </div>
          

        </form>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroHd from '@/components/HeroHd.vue'
import { createMascota } from '@/services/MascotasService'

export default {
  name: 'Publicar',
  components: {
    HeroHd
  },
  
  data() {
      return {
        show:false,
        selectedImage: null,
        pet_name:"",
        pet_type:"",
        pet_location:"",
        pet_description:"",
        pet_phone:0
      }
  },
  methods:{
    onImgSelected(event) {
      this.selectedImage = event.target.files[0]
      console.log(this.selectedImage)
    },
    publicarMascota(){
      this.show = true
      const lsUserData = JSON.parse(localStorage.getItem("localUserData"));
      console.log(lsUserData._id)
      const newPetData = new FormData();
      newPetData.append("publisher_id", lsUserData._id)
      newPetData.append("pet_name", this.pet_name)
      newPetData.append("pet_type", this.pet_type)
      newPetData.append("pet_location", this.pet_location)
      newPetData.append("pet_phone", this.pet_phone)
      newPetData.append("pet_description", this.pet_description)
      newPetData.append("image", this.selectedImage)
      console.log(newPetData)

      createMascota(newPetData)
        .then((response) => {
          console.log("Exitooooo!!!!!! "+response)
          // this.$router.push('/perfil');

        })
        .catch((e) => {
          console.error(e);
        })

    },
    bandera(){
      this.show = false
    }
  }
}
</script>


<style scoped>
.bg-foto-publicar {
  background-image: url(../assets/img/bg-publicar.jpg);
  background-position: center;
  background-size: cover;
}
.form-publicar {
  border-radius: 15px;
  padding: 40px;
  background-color: rgb(255, 255, 255);
  margin-top: 10px;
  margin-bottom: 45px;
}
.NuevaPublicacion {
  padding: 60px 0px;
  margin-left: 15%;
  margin-right: 15%;
}

@media (max-width: 600px) {
  .form-publicar {
    border-radius: 5px;
    padding: 20px;
  }
  .NuevaPublicacion {
    margin-left: 2%;
    margin-right: 2%;
  }
}
</style>