<template>
  <div class="publicar">
    <div class="bg-foto-publicar">
      <HeroHd title="Publicar Mascota"/>
    </div>
    <main class="fondo bgc-tprofundo">
      <section class="NuevaPublicacion">
        
        <div class="card text-center mx-auto" style="max-width: 800px;">
          <div class="card-body">
            <h5 class="card-title">ALERTA</h5>
            <h6 class="card-subtitle mb-2 text-muted">Debes ingresar primero</h6>
            <p class="card-text">Para hacer la solicitud de adopción debes crear una cuenta o si ya tienes una, iniciar sesión</p>
            <button type="button" class="btn btn-secondary">Crear Cuenta</button>
            <button type="button" class="btn btn-secondary">Iniciar Sesión</button>
          </div>
        </div>

        <form class="form-publicar">
          <div class="mb-3">
            <label for="foto-pet" class="form-label">*Foto de la mascota:</label>
            <input type="file" class="form-control" id="foto-pet" required>
          </div>

          <p>*Tipo de Mascota:</p>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="tipo-m" id="tipo-perro" required>
            <label class="form-check-label" for="tipo-perro">Perro</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="tipo-m" id="tipo-gato" required>
            <label class="form-check-label" for="tipo-gato">Gato</label>
          </div>
          <br>
          <div class="mb-3">
            <label for="name-pet" class="form-label">*Nombre de la mascota</label>
            <input type="text" class="form-control" id="name-pet"  required>
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
          </div>
          
          <p>Cuentanos un poco más acerca de la mascota</p>
          <div class="mb-3">
            <label for="desc-pet" class="form-label">*Descripcción: </label>
            <textarea class="form-control" id="desc-pet" cols="30" rows="10" required placeholder="Cuentanos la historia o características de la mascota, ampliar la información facilitará la adopción."></textarea>
          </div>

          <div class= "mb-3">
            <label for="contacto" class="form-label">*Número de contacto</label>
            <input type="number" class="form-control" id="contacto" required>
          </div>

          <p>*Campos obligatorios.</p>
          <div class="text-center">
            <input class="btn bgc-tclaro opaco-8" type="reset" value="Limpiar">
            <input class="btn bgc-tintenso opaco-8"  type="submit" value="Publicar Mascota">
          </div>
    
        </form>
      </section>

    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroHd from '@/components/HeroHd.vue'

export default {
  name: 'Publicar',
  components: {
    HeroHd
  }
}
</script>

<style scoped>
.bg-foto-publicar {
  background-image: url(../assets/img/bg-publicar.jpg);
  background-position: center;
  background-size: cover;
}
.form-publicar{
  border-radius: 15px;
  padding: 40px;
  background-color:rgb(255, 255, 255);
  margin-top: 10px;
  margin-bottom: 45px;
}
.NuevaPublicacion {
  padding: 60px 0px;
  margin-left: 15%;
  margin-right: 15%;
}

@media (max-width: 600px) {
  .form-publicar{
    border-radius: 5px;
    padding: 20px;
  }
  .NuevaPublicacion {
    margin-left: 2%;
    margin-right: 2%;
  }
}
</style>