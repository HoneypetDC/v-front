<template>
  <div class="perfil">
    <!-- Modal Cerrar Sesión -->
    <div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Confirmación</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Deberas iniciar sesión nuevamente para solicitar una adopción, publicar una mascota o gestionar sus publicaciones y adopciones.</p>
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button @click="logout()" type="button" class="btn btn-primary">Cerrar Sesión</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Eliminar Publicación -->
    <div class="modal fade" id="eliminarPubModal" tabindex="-1" aria-labelledby="eliminarPubModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="eliminarPubModalLabel">¡Advertencia!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Está a punto de borrar la publicación de la mascota: <strong>Firulais</strong>. Esta acción no se puede deshacer ¿esta seguro?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Eliminar Publicación</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Editar Publicación -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Editar Publicación</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="editarMascota(newMascotaData._id)" class="form-editar">
              <!-- <div class="mb-3">
                <label for="foto-pet" class="form-label">Cambiar Foto de la mascota:</label>
                <input type="file" class="form-control" id="foto-pet">
              </div> -->
              <br>
              <div class="mb-3">
                <label for="name-pet" class="form-label">*Nombre de la mascota</label>
                <input v-model="newMascotaData.pet_name" type="text" class="form-control" id="name-pet" value="Firulais" placeholder="Si no tiene nombre puedes poner S/N"  required>
              </div>
    
              <div class="mb-3">
                <label for="location-pet" class="form-label">*Ubicación actual</label>
                <select v-model="newMascotaData.pet_location" class="form-control" id="departamento" name="departamento" required>
                  <option value = "">Seleccione una opción...</option>
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
              <!-- <input type="text" class="form-control"  id="location-pet" value="Bogotá DC" required> -->
              </div>
                
              <div class="mb-3">
              <label for="desc-pet" class="form-label">*Descripcción: </label>
              <textarea v-model="newMascotaData.pet_description" class="form-control" id="desc-pet" cols="30" rows="5" required placeholder="Cuentanos la historia o caracteristicas de la mascota, apliar la informacion facilitara la adopción."></textarea>
              </div>
  
              <div class= "mb-3">
              <label for="contacto" class="form-label">*Número de contacto</label>
              <input v-model="newMascotaData.pet_phone" type="text" class="form-control" id="contacto" value="601 233 4455" required>
              </div>
  
              <p>*Campos obligatorios.</p>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" class="btn btn-primary">Guardar Cambios</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- fin modal editar mascota -->

    <!-- Modal Solicitudes -->
    <div class="modal fade" id="solicitudesModal" tabindex="-1" aria-labelledby="solicitudesModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="solicitudesModalLabel">Solicitudes de Adopción</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="d-inline-flex w-100 justify-content-around">
                <h5 class="mb-1">Firulais</h5>
                <p class="text-muted">Perro - Bogotá DC</p>
            </div>
            <div class="list-group">
              <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                  <h5>Mary Jane Watson</h5>
                  <p class="text-muted">01 Oct 2021</p>
                </div>
                <div class="d-flex w-100">
                  <div class="flex-fill">
                    <small>Teléfono:</small>
                    <p>300 455 6677</p>
                  </div>
                  <div class="flex-fill">
                    <small>Estado:</small>
                    <select class="form-select form-select-sm" aria-label=".form-select-sm">
                      <option selected>En estudio</option>
                      <option value="1">Aprobado</option>
                      <option value="2">Rechazado</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                  <h5>Bruce Wayne</h5>
                  <p class="text-muted">03 Oct 2021</p>
                </div>
                <div class="d-flex w-100">
                  <div class="flex-fill">
                    <small>Teléfono:</small>
                    <p>301 655 6677</p>
                  </div>
                  <div class="flex-fill">
                    <small>Estado:</small>
                    <select class="form-select form-select-sm" aria-label=".form-select-sm">
                      <option selected>En estudio</option>
                      <option value="1">Aprobado</option>
                      <option value="2">Rechazado</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary">Guardar Cambios</button>
          </div>
        </div>
      </div>
    </div>

    <header class="bg-foto-perfil"> 
      <div id="user" class="container-section-brand">
        <user-card/>
      </div>
    </header>

    <main>
      <section class="container p-section">
        <div class="row">
          <div class="col-xl">
            <h2 class="mb-4">Publicaciones</h2>
            <div id="petcardli" class="list-group">
              <!-- <pet-card v-for="(petpub, index) in petpubs" :key="index" :petid="petpub" /> -->
              <!-- pet-card -->
              <div v-for="(pet, index) in petpubs_data" :key="index" class="list-group-item d-flex align-items-center">
                  <div class="flex-shrink-0">
                      <img width="150px" :src="pet.pet_thumb" :alt="pet.pet_name">
                  </div>
                  <div class="flex-grow-1 ms-3">
                      <div class="d-inline-flex w-100 justify-content-between">
                          <h5 class="mb-1">{{pet.pet_name}}</h5>
                          <small>{{pet.pet_type}} - {{pet.pet_location}}</small>
                      </div>
                      <h6>Teléfono: <span>{{pet.pet_phone}}</span></h6>
                      <p class="mb-1 text-muted">{{pet.pet_description}}</p>
                      <div class="d-inline-flex w-100 justify-content-end">
                          <div class="btn-group btn-group-sm"  role="group" aria-label="botones para editar o eliminar publicación">
                              <button @click="eliminarMascota(pet._id,pet.publisher_id)" class="btn btn-secondary bgc-tclaro tc-toscuro"><i class="fas fa-trash"></i> Eliminar</button>
                              <button @click="prepararEdicion(pet._id)" class="btn btn-secondary bgc-tclaro tc-toscuro" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fas fa-edit"></i> Editar</button>
                              <!-- <button data-bs-toggle="modal" data-bs-target="#solicitudesModal" class="btn btn-secondary bgc-tclaro tc-toscuro"><i class="fas fa-list"></i> Solicitudes: {{pet.pet_request.length}}</button> -->
                          </div>
                      </div>
                  </div>
              </div>

              <p style="max-width: 230px" class="mx-auto mt-4 mb-5">
                <a class="nav-link btn btn-lg bgc-tintenso tc-toscuro opaco-8" href="publicar.html"><i class="fas fa-plus" role="button"></i> Publicar Mascota</a>
              </p>
            </div>
          </div>
          <!-- adopciones section -->
          <div class="col-xl">
            <h2 class="mb-4">Adopciones</h2>
            <div id="adopt-cardli" class="list-group">
              <!-- <adopt-card /> -->
              <div v-for="(petad, index) in petadopts_data" :key="index" class="list-group-item d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img width="150px" :src="petad.pet_id.pet_thumb" :alt="petad.pet_id.pet_name">
                </div>
                <div class="flex-grow-1 ms-3">
                  <div class="d-inline-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{petad.pet_id.pet_name}}</h5>
                    <small>{{petad.pet_id.pet_type}} - {{petad.pet_id.pet_location}}</small>
                  </div>
                  <h6>Teléfono: <span>{{petad.pet_id.pet_phone}}</span></h6>
                  <p class="mb-1 text-muted">{{petad.pet_id.pet_description}}</p>
                  <div class="d-inline-flex w-100 justify-content-end">
                    <p class="estado-solicitud card-subtitle">Estado de la solicitud: <span class="badge bg-secondary bgc-tintenso tc-toscuro">{{petad.reqs_state}}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import UserCard from '@/components/UserCard.vue'
import { getMascotaById,deleteMascotaById,editMascota } from '@/services/MascotasService'
import { getSolicitudById } from '@/services/SolicitudesService'
import { getUserById } from '@/services/UserService'
// import PetCard from '@/components/PetCard.vue'
// import AdoptCard from '@/components/AdoptCard.vue'

export default {
  name: 'Perfil',
  components: {
    UserCard
  },
  data() {
    return {
      petpubs_ids: [],
      petpubs_data: [],
      petadopts_ids: [],
      petadopts_data: [],
      // petSolicitud_data: [],
      newMascotaData: {},

      no_pubs: true,
      no_adopts: true
    }

  },
  mounted() {
    if (localStorage.getItem('localUserData')) {
      const lsUserData = JSON.parse(localStorage.getItem('localUserData'));
      console.log("Datos en lacal store: "+lsUserData)
      const lsUserId = lsUserData._id
      console.log("Id del usuario logeado: "+lsUserId)
      getUserById(lsUserId)
        .then((response) => {
          // renueva el lsUserData
          localStorage.removeItem('localUserData');
          lsUserData = localStorage.setItem('localUserData', JSON.stringify(response.data));

          this.petpubs_ids = lsUserData.user_pubs
          console.log("Ids de Mascotas Publicadas: "+this.petpubs_ids)
        
          this.petpubs_ids.forEach((id) => {
            getMascotaById(id)
              .then((response) => {
                this.petpubs_data.push(response.data)
                console.log("Datos de Mascotas Publicadas: "+this.petpubs_data);
              })
              .catch((e) => console.error("No se llenaron los datos de las mascotas publicadas: "+e));
          })

          this.petadopts_ids = lsUserData.user_adopts
          console.log("Ids de Solicitudes: "+this.petadopts_ids)
          
          this.petadopts_ids.forEach((id) => {
            getSolicitudById(id)
              .then((response) => {
                this.petadopts_data.push(response.data)
                console.log("Datos de Solicitudes: "+this.petadopts_data);
              })
              .catch((e) => console.error("No cargó los datos de las adopciones: " + e));
          })

        })
        .catch((e) => {
          console.error("No renovo el usuario "+e);
        })

    } else {
      this.$router.push('/');
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('localUserData');
      window.location.reload()
    },
    eliminarMascota(idPet,idPub) {
      console.log(this.petpubs_data)
      console.log("Id mascota: "+idPet+" | Id publisher: "+idPub)
      deleteMascotaById(idPet,idPub)
        .then((response) => {
          console.log("Mascota eliminada: " + response);
          this.petpubs_data.splice(this.petpubs_data.indexOf(idPet),1)
        })
        .catch((e) => console.error("No se eliminó la mascota: " + e));
      console.log(this.petpubs_data)
    },
    prepararEdicion(petId) {
      getMascotaById(petId)
        .then((response) => {
            this.newMascotaData = response.data
            console.log("Nueva data de la mascota a editar: "+this.newMascotaData);
          })
        .catch((e) => console.error("No se cargo la nueva data: "+e));
    },
    editarMascota(id) {
      console.log("Id de la mascota a editar: "+id)
      editMascota(id,this.newMascotaData)
        .then((response) => {
            console.log("Se Actualizó la mascota");
            window.location.reload()
          })
        .catch((e) => console.error("No se actualizó la mascota: "+e));
    }
  }
}
</script>
