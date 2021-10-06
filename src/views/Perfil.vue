<template>
  <div class="perfil">
    <!-- Modal Cerrar Sesión -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Confirmación</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Deberá iniciar sesión nuevamente para solicitar una adopción, publicar una mascota o gestionar sus publicaciones y adopciones.</p>
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <a href="index.html" class="btn btn-primary">Cerrar Sesión</a>
            <!-- <button type="button" class="btn btn-primary">Cerrar Sesión</button> -->
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
            <form class="form-editar">
              <div class="mb-3">
                <label for="foto-pet" class="form-label">Cambiar Foto de la mascota:</label>
                <input type="file" class="form-control" id="foto-pet">
              </div>
    
              <p>*Tipo de Mascota:</p>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="tipo-m" id="tipo-perro" checked required>
                <label class="form-check-label" for="tipo-perro">Perro</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="tipo-m" id="tipo-gato" required>
                <label class="form-check-label" for="tipo-gato">Gato</label>
              </div>       
              <br>
              <div class="mb-3">
                <label for="name-pet" class="form-label">*Nombre de la mascota</label>
                <input type="text" class="form-control" id="name-pet" value="Firulais" placeholder="Si no tiene nombre puedes poner S/N"  required>
              </div>
    
              <div class="mb-3">
                <label for="location-pet" class="form-label">*Ubicación actual</label>
                <select class="form-control" id="departamento" name="departamento" required>
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
              <textarea class="form-control" id="desc-pet" cols="30" rows="5" required placeholder="Cuentanos la historia o caracteristicas de la mascota, apliar la informacion facilitara la adopción.">Este perro fue abandonado en un parque lo encontre sucio, flaco y asustado, pero es un perro muy tierno y amoroso, lastimosamente no lo puedo conservar por que mi esposa es alergica a los perros.</textarea>
              </div>
  
              <div class= "mb-3">
              <label for="contacto" class="form-label">*Número de contacto</label>
              <input type="text" class="form-control" id="contacto" value="601 233 4455" required>
              </div>
  
              <p>*Campos obligatorios.</p>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary">Guardar Cambios</button>
          </div>
        </div>
      </div>
    </div>

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
              <pet-card/>
              <!-- Item 2 Publicaciones -->

              <div class="list-group-item d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img width="150px" src="img/pets/thums/thums-2.jpg" alt="Miniatura: Foto de la mascota">
                </div>
                  <div class="flex-grow-1 ms-3">
                    <div class="d-inline-flex w-100 justify-content-between">
                      <h5 class="mb-1">Cocolin</h5>
                      <small>Perro - Nariño</small>
                    </div>
                    <p class="mb-1 text-muted">Este perro tiene otra historia pero no me la se, pero es un perro muy tierno y amoroso, lastimosamente no lo puedo conservar por que mi esposa es alergica a los perros.</p>
                    <div class="d-inline-flex w-100 justify-content-end">
                      <div class="btn-group btn-group-sm"  role="group" aria-label="botones para editar o eliminar publicación">
                        <button data-bs-toggle="modal" data-bs-target="#eliminarPubModal" class="btn btn-secondary bgc-tclaro tc-toscuro"><i class="fas fa-trash"></i> Eliminar</button>
                        <button class="btn btn-secondary bgc-tclaro tc-toscuro" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fas fa-edit"></i> Editar</button>
                        <button data-bs-toggle="modal" data-bs-target="#solicitudesModal" class="btn btn-secondary bgc-tclaro tc-toscuro"><i class="fas fa-list"></i> Solicitudes: 0</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <p style="max-width: 230px" class="mx-auto mt-4 mb-5">
              <a class="nav-link btn btn-lg bgc-tintenso tc-toscuro opaco-8" href="publicar.html"><i class="fas fa-plus" role="button"></i> Publicar Mascota</a>
            </p>
            </div>
            <div class="col-xl">
              <h2 class="mb-4">Adopciones</h2>
              <div id="adopt-cardli" class="list-group">
                <adopt-card />
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
import PetCard from '@/components/PetCard.vue'
import AdoptCard from '@/components/AdoptCard.vue'

export default {
  name: 'Perfil',
  components: {
    UserCard,
    PetCard,
    AdoptCard
  }
}
</script>
