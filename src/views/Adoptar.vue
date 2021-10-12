<template>
  <div class="adoptar">
    <div class="bg-foto-adoptar">
      <HeroHd title="Proceso de Adopción" />
    </div>
    <main>
      <section class="dim-div-form bgc-tneutro">
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Paso 1 - Requisitos de Adopción
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
              data-bs-parent="accordionPanelsStayOpenExample"
            >
              <div class="accordion-body pasos-adop">
                <ol>
                  <li>Ser mayor de edad</li>
                  <li>Disponer de tiempo, espacio y recursos suficientes.</li>
                  <li>
                    Contar con espacio suficiente para convivir con el animal.
                  </li>
                  <li>Llevar correa para perro o guacal para gato.</li>
                </ol>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Paso 2 - Compromiso de adopción
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingTwo"
              data-bs-parent="accordionPanelsStayOpenExample"
            >
              <div class="accordion-body pasos-adop">
                <h4>El adoptante se compromete a:</h4>

                <ol>
                  <li>
                    Dar los cuidados que necesite al animal, alimentarlo, darle
                    cobijo, sacarlo de paseo, llevarlo a hacer sus necesidades
                    fuera del lugar de descanso y vivienda habitual y tratarlo
                    con respeto y cariño.
                  </li>
                  <li>
                    Llevar un control sanitario, visitando a su veterinario para
                    vacunaciones, desparasitaciones y por cualquier enfermedad
                    que se le origine.
                  </li>
                  <li>
                    El adoptante permitirá estar al tanto de la condición del
                    animal de mutuo acuerdo con el dueño anterior, con el fin de
                    observar el estado de adaptación, condiciones generales del
                    animal, reservándose el derecho a retirar la custodia del
                    mismo si considera que no está adecuadamente atendido o no
                    se cumpliese el actual contrato en alguno de sus puntos.
                  </li>
                  <li>
                    El adoptante se hace cargo civilmente de su animal según la
                    ley 21.020 Ley de tenencia responsable de mascotas.
                  </li>
                  <li>
                    No debe abandonarlo, regalarlo, cederlo, venderlo, o
                    sacrificarlo sin justificación veterinaria por enfermedad
                    muy grave que lo obligue y sin previa autorización escrita
                    del representante de la adopción.
                  </li>
                  <li>
                    No realizará amputaciones de ningún tipo por motivos
                    estéticos. Nunca debe pegarle, humillarle ni utilizarle con
                    fines económicos.
                  </li>
                </ol>
                <h4>El adoptante declara:</h4>
                <ul>
                  <li>
                    Estar justo con las condiciones de apadrinamiento. Que las
                    personas que viven en su domicilio, adonde vivirá el animal
                    adoptado, han sido informados con antelación de su voluntad
                    de amparar al mismo, todos están de pacto en colaborar y
                    obrar las condiciones del arreglo.
                  </li>
                  <li>
                    Haber sido informado con antelación del estado de salud,
                    edad, composición y características físicas del animal
                    adoptado, y que este apadrinamiento no asegura a un impulso,
                    suerte a un acto meditado.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Paso 3 - Formulario de solicitud de adopción
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingThree"
              data-bs-parent="accordionPanelsStayOpenExample"
            >
              <div class="accordion-body pasos-adop">
                <div v-if="this.loginb" class="login-card">
                  <div class="card text-center">
                    <div class="card-body">
                      <h5 class="card-title">ALERTA</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Debes ingresar primero
                      </h6>
                      <p class="card-text">
                        Para hacer la solicitud de adopción debes crear una
                        cuenta o si ya tienes una, iniciar sesión
                      </p>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Iniciar Sesión o Crear Cuenta
                      </button>
                      <!-- <button type="button" class="btn btn-secondary">Crear Cuenta</button> -->
                    </div>
                  </div>
                </div>
                <div v-else class="solicitud-form">
                  <p>
                    Yo
                    <span id="perfil-name"
                      ><strong>{{ userData.user_name }}</strong></span
                    >
                    por medio del presente solicito la adopción del
                    <span id="pub-data-type">{{ petData.pet_type }} </span>
                    <span id="pub-data-name"
                      ><strong>{{ petData.pet_name }}</strong></span
                    >
                    para lo cual proporciono mis datos personales:
                  </p>

                  <div id="section" class="card card-body">
                    <form @submit.prevent="enviarSolicitud()">
                      <div class="mb-3">
                        <label class="form-label">Nombre del solicitante</label>
                        <input
                          v-model="userData.user_name"
                          class="form-control"
                          type="text"
                          disabled
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"
                          >Email</label
                        >
                        <input
                          v-model="userData.user_email"
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          disabled
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label"
                          >Mascota: {{ petData.pet_type }}</label
                        >
                        <input
                          class="form-control"
                          v-model="petData.pet_name"
                          placeholder="Gato: Felix"
                          disabled
                        />
                      </div>

                      <div class="mb-3 form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                          required
                        />
                        <label class="form-check-label" for="exampleCheck1"
                          >Cumplo los requisitos y Acepto el compromiso de
                          adopción</label
                        >
                      </div>
                      <button type="submit" class="btn btn-warning mb-3">
                        Solicitar Adopción
                      </button>

                      <div v-if="success" class="alert alert-success" role="alert">
                        La solicitud de adopción fue exitosa, en este momento está en estudio, podrá consultar el estado de su solicitud desde la página de su 
                        <router-link
                          to="/perfil"
                          class="btn btn-outline-success btn-sm"
                          >Perfil</router-link
                        >
                      </div>
                    </form>
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
import HeroHd from "@/components/HeroHd.vue";
import { createSolicitud } from "@/services/SolicitudesService";

export default {
  name: "Adoptar",
  components: {
    HeroHd,
  },
  data() {
    return {
      loginb: true,
      success: false,
      userData: {},
      petData: {
        pet_name: "mascota primero",
        pet_type: "debe seleccionar",
      },
      newSolicitud: { pet_id: "", candidate_id: "" }
    };
  },
  mounted() {
    if (localStorage.getItem("localUserData")) {
      this.loginb = false;
      console.log("Hay usuario en local store");
      const lsUserData = JSON.parse(localStorage.getItem("localUserData"));
      this.userData = lsUserData;
      console.log(this.userData);
    } else {
      this.loginb = true;
    }
    if (localStorage.getItem("localPetData")) {
      console.log("Hay mascota en local store");
      const lsPetData = JSON.parse(localStorage.getItem("localPetData"));
      this.petData = lsPetData;
      console.log(this.petData);
    } else {
      console.log("No hay pet en el local store");
    }
  },
  methods: {
    enviarSolicitud() {
      if (localStorage.getItem("localUserData") && localStorage.getItem("localPetData")) {
        console.log("Se cumplieron las dos condiciones");
        this.newSolicitud.pet_id = this.petData._id;
        this.newSolicitud.candidate_id = this.userData._id;
        console.log(this.newSolicitud);

        createSolicitud(this.newSolicitud)
          .then((response) => {
            console.log("Solicitud exitosa" + response);
            this.success = true;
          })
          .catch((e) => console.error("No se creó la solicitud " + e));

      } else {
        console.log("No se cumplieron las dos condiciones");
      }
    },
  },
};
</script>

<style scoped>
.bg-foto-adoptar {
  background-image: url(../assets/img/bg-adoptar.jpg);
  background-position: center;
  background-size: cover;
}
.pasos-adop {
  padding: 3% 5%;
}
.dim-div-form {
  padding: 5% 14%;
}
@media (max-width: 800px) {
  .dim-div-form {
    padding: 1%;
  }
}
</style>
