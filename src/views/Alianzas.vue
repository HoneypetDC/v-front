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
              <p class="alianzas-p">HoneyPet-DC, es un sitio en constante actualización y soporte, todo esto con el fin de buscar un hogar para aquellos perros y gatos que no lo tengan, puedes ayudándonos a contribuir en esta iniciativa de tres formas diferentes:</p>
            </div>
            <div class="tc-tprofundo text-center">
              <h3>1. Donaciones</h3>
              <p class="alianzas-p">Donar es una de las mejores formas en las que puedes ayudar a que esta página siga teniendo soporte y actualizaciones, para hacer de este sitio de aopción uno de los mejores a nivel mundial. Para donar debes dirigirte a la parte inferior de esta página, allí encontraras un formulario de contacto en el cual debes colocar como asunto "Donación", luego debes rellenar los datos que te solicitan para poder contactarte y darte más información acerca del proceso de donación.</p>
            </div>
            <div class="tc-tprofundo text-center">
              <h3>2. Patrocinios</h3>
              <p class="alianzas-p">Patrocinar es la mejor forma para ayudar a que HoneyPet-DC crezca y pueda llegar a más lugares y mascotas abandonadas y necesitabas de un nuevo hogar. Para patrocinarnos debes dirigirte a la parte inferior de esta página, allí encontraras un formulario de contacto en el cual debes colocar como asunto "Patrocinio", luego debes rellenar los datos que te solicitan para poder contactarte y darte más información acerca del proceso de patrocinio.</p>
            </div>
            <div class="tc-tprofundo text-center">
              <h3>3. Alianzas</h3>
              <p class="alianzas-p">Las alianzas son la mejor forma de hacer crecer tu empresa junto con nosotros y así poder ayudar a más mascotas abandonadas en todo el pais. Para hacer una alianza con nosotros debes debes diligenciar el formulario de contacto en el cual debes colocar como asunto "Alianzas", luego debes rellenar los datos que te solicitan para poder contactarte y darte más información acerca del proceso de una alianza.</p>
            </div>
        </section>
        </div>
        <div class="dim-div-form bgc-tprofundo">
            <div class="container-fluid bgc-tblanco form-contact mx-auto">
              <h2 class="text-center mb-4">Formulario de Contacto</h2>
              <form>
                <div class="mb-3">
                    <label for="nombre-alianza" class="form-label">Persona, empresa o sociedad: </label><input id="nombre-alianza" width="25px"  type="number" size="20" placeholder="Ingrese su nombre o el nombre de su empresa" max="10" class="form-control">
                </div>
                <div  class="mb-3">
                    <label for="correo-electronico" class="form-label">*Correo electronico: </label><input id="correo-electronico" name="correo-electronico" class="form-control" type="email" size="20"  placeholder="nombre@example.com" required>
                </div>
                <div class="mb-3">
                  <label for="asunto-alianza" class="form-label">*Asunto:</label>
                  <select class="form-control mb-3" name="asunto" id="asunto-alianza">
                    <option value="Default">Seleccione uno...</option>
                    <option value="Donacion">Donación</option>
                    <option value="Patrocinio">Patrocinio</option>
                    <option value="Alianza">Alianza</option>
                  </select>
                </div>
                <div class="mb-3"> 
                  <label for="descripcion-alianza" class="form-label">*Descripcion:</label>
                  <textarea class="form-control" id="descripcion-alianza" placeholder="Describanos mas acerca de como quieres apoyarnos" rows="3" required></textarea>
                </div>
                <p>*Campos obligatorios</p>
                <div class="text-center">
                  <button type="reset" class="btn bgc-tclaro opaco-8 me-3">Limpiar</button>
                  <button type="submit" class="btn bgc-tintenso opaco-8">  Enviar</button>
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

export default {
  name: 'Alianzas',
  components: {
    HeroHd
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