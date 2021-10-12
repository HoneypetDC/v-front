<template>
  <div class="mascotas">
    <div class="bg-foto-mascotas">
      <HeroHd title="Mascotas Publicadas"/>
    </div>
    <main>
      <div class="filter-box d-flex fixed-top align-items-center text-center">
        <div class="filter-container ms-auto me-4 d-flex p-1 rounded-pill">
          <div class="filter-text mx-3"><h5 class="fs-6">Viendo: <span>Perros</span> <div class="vr"></div> <span>Risaralda</span></h5></div>
          <button class="btn btn-primary rounded-pill bgc-tintenso tc-toscuro opaco-8" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas"><i class="fas  fa-filter"></i> Filtrar</button>
        </div>
      </div>
      <section class="gallery">
          <div id="petpics" class="container-lg">
            <div class="row g-4 row-cols-2 row-cols-sm-3 row-cols-md-4">
              <div v-for="(pet, index) in pets" :key="index" class="col">
                  <img @click="verMascota(index)" class="pet-thumb img-fluid rounded-3" :src="pet.pet_thumb" :alt="pet.pet_name">
              </div>
            </div>
          </div>
      </section>

        <!-- off canvas -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvaslabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title">Filtrar Mascotas</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">

            <form>
              <p>Tipo de mascota</p>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="tipo-m" id="tipo-todos" checked>
                <label class="form-check-label" for="tipo-todos">Todos</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="tipo-m" id="tipo-perro">
                <label class="form-check-label" for="tipo-perro">Perro</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="tipo-m" id="tipo-gato">
                <label class="form-check-label" for="tipo-gato">Gato</label>
              </div>
              <br>
              <label for="inputCiudadLine2" class="control-label">Ubicación</label>

              <select class="form-control mb-3" id="departamento" name="departamento">
                <option value = "">Todas</option>
                <option value = "Amazonas">Amazonas</option>
                <option value = "Antioquia">Antioquia</option>
                <option value = "Arauca">Arauca</option>
                <option value = "Atlántico">Atlántico</option>
                <option value = "Bogotá">Bogotá D.C.</option>
                <option value = "Bolívar">Bolívar</option>
                <option value = "Boyacá">Boyacá</option>
                <option value = "Caldas">Caldas</option>
                <option value = "Caquetá">Caquetá</option>
                <option value = "Casanare">Casanare</option>
                <option value = "Cauca">Cauca</option>
                <option value = "Cesar">Cesar</option>
                <option value = "Chocó">Chocó</option>		            
                <option value = "Córdoba">Córdoba</option>
                <option value = "Cundinamarca">Cundinamarca</option>
                <option value = "Guainía">Guainía</option>
                <option value = "Guaviare">Guaviare</option>
                <option value = "Huila">Huila</option>
                <option value = "La Guajira">La Guajira</option>
                <option value = "Magdalena">Magdalena</option>
                <option value = "Meta">Meta</option>
                <option value = "Nariño">Nariño</option>
                <option value = "Norte de Santander">Norte de Santander</option>
                <option value = "Putumayo">Putumayo</option>                
                <option value = "Quindío">Quindío</option>  
                <option value = "Risaralda">Risaralda</option>
                <option value = "San Andrés y Providencia">San Andrés y Providencia</option>
                <option value = "Santander">Santander</option>
                <option value = "Sucre">Sucre</option>
                <option value = "Tolima">Tolima</option>
                <option value = "Valle del Cauca">Valle del Cauca</option>
                <option value = "Vaupés">Vaupés</option>
                <option value = "Vichada">Vichada</option>
              </select>

              <div class="d-flex">
                <button class="btn btn-warning text-center tc-toscuro ms-auto me-3">Filtrar</button>
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
import { getAllMascotas } from '@/services/MascotasService'
import * as basicLightbox from 'basiclightbox'

export default {
  name: 'Mascotas',
  components: {
    HeroHd
  },
  data () {
    return {
      pets: []
    }
  },
  mounted() {
    getAllMascotas()
      .then((response) => {
        this.pets = response.data;
        console.log(this.pets);
      })
      .catch((e) => console.error(e));
  },
  methods: {
    verMascota(index){
      const reqimg = require(`@/assets/${this.pets[index].pet_pic}`);
      basicLightbox.create(/*html*/`
        <div class="lb-container">
          <img src="${reqimg}">
          <div class="pet-info tc-tclaro w-100">
              <div class="pet-info-bar d-flex align-items-center p-2">
              <h3 class="mt-3 ms-3">${this.pets[index].pet_name}</h3>
              <div class="mx-3 vr"></div>
              <h5 class="mt-3">${this.pets[index].pet_location}</h5>
              <div class="ms-auto">
                  <button type="button" class="mas-btn btn btn-outline-secondary rounded-pill"><i class="fas fa-plus"></i> Info</button>
                  <button type="button" class="close-lb btn btn-outline-secondary rounded-circle"><i class="fas fa-times"></i></button>
              </div>
              </div>
              <div class="pet-info-desc bgc-tprofundo">
              <p>${this.pets[index].pet_description}</p>
              <div class="text-center">
                  <button class="btnAdopt btn btn-lg bgc-tintenso tc-toscuro text-center opaco-8">Adoptar ${this.pets[index].pet_type}</button>
              </div>
              </div>
          </div>
        </div>
      `).show();

      const petdesc = document.querySelector('div.pet-info-desc');
      document.querySelector('.mas-btn').onclick = () => {
          petdesc.classList.toggle("mas-info");
      }

      const blb = document.querySelector('div.basicLightbox');
      const padre = blb.parentNode;
      document.querySelector('.close-lb').onclick = () => {
          padre.removeChild(blb);
      }

      document.querySelector('.btnAdopt').onclick = () => {
          console.log(this.pets[index]);
          const lspet = localStorage.setItem('localPetData', JSON.stringify(this.pets[index]));
          console.log(lspet);
          padre.removeChild(blb);
          this.$router.push('/Adoptar');

      }

      // selectPet(pet) {
      //   console.log(pet);
      // }

      // document.querySelector('.close-lb').onclick = () => instancelb.close()
    }
    

  }
}
</script>

<style>
.bg-foto-mascotas {
    background-image: url(../assets/img/bg-mascotas.jpg);
    background-position: center;
    background-size: cover;
}
.gallery {
    padding: 60px 0;
}

.filter-box {
    margin-top: 70px;
}
.filter-text {
    margin-top: 10px;
}
.filter-container {
    background-color: white;
    color: #00303f;
    opacity: .8;
}

img.pet-thumb {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px;
    transition: all .3s;
}
img.pet-thumb:hover {
    transform: scale(1.04);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 13px 27px -5px, rgba(0, 0, 0, 0.45) 0px 8px 16px -8px;
}
.basicLightbox{
    z-index: 1090 !important;
}
.lb-container{
    background-color: rgba(0,0,0,.2);
    position: relative;
    border-radius: 10px;
    overflow: hidden;
}
.lb-container img {
    max-height: 90vh; 
    max-width: 90vw;
}
.lb-container .pet-info {
    position: absolute;
    top: 0;
    left: 0;
}

.pet-info-bar {
    background-color: #00303f;
    opacity: .8;
}

.pet-info-bar h3 {
    font-size: 1.4rem;
}
.pet-info-bar h5 {
    font-size: 1.1rem;
}
.pet-info-bar button {
    color: #cae4db;
    border-color: #cae4db;
    opacity: .5;
}
.pet-info-bar button:hover {
    color: #004f67;
    border-color: #cae4db;
    background-color: #cae4db;
    opacity: 1;
}
div.pet-info-desc {
    padding-top: 0%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    overflow: hidden;
    opacity: 0;
}
div.pet-info-desc.mas-info {
    padding-top: 5%;
    opacity: .8;
    
}
div.pet-info-desc {
    transition: all 0.3s cubic-bezier(.25,.8,.25,1) 0s;
}

@media (max-width: 800px) {
    .pet-info-bar h3 {
        font-size: 1rem;
    }
    .pet-info-bar h5 {
        font-size: .9rem;
    }
}

</style>