<template>
    <div>
        <!-- off canvas about project -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Sobre el Desarrollo:</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
        <div class="offcanvas-body">
            <div class="text-center mb-3">
                <img src="@/assets/img/logo-HoneyPetDC.svg" alt="HoneyPet DC" width="250px" />
            </div>
            <p class="text-center">Es un proyecto que nace como ejercicio y muestra de las habilidades adquiridas durante el tercer ciclo del diplomado en programación MisionTIC2022, impartido por la Universidad Tecnológica de Pereira UTP y el Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia (MinTIC)</p>
            <p class="fs-5"><strong>Construido con:</strong></p>
            <div class="d-flex justify-content-evenly mb-4">
                <span class="d-inline-block fs-4" tabindex="0" data-bs-toggle="tooltip" title="Lots of Love">
                    <i class="fas fa-heart"></i>
                </span>
                <span class="d-inline-block fs-4" tabindex="0" data-bs-toggle="tooltip" title="Figma">
                    <i class="fab fa-figma"></i>
                </span>
                <span class="d-inline-block fs-4" tabindex="0" data-bs-toggle="tooltip" title="GitHub">
                    <i class="fab fa-github-alt"></i>
                </span>
                <span class="d-inline-block fs-4" tabindex="0" data-bs-toggle="tooltip" title="HTML 5">
                    <i class="fab fa-html5"></i>
                </span>
                <span class="d-inline-block fs-4" tabindex="0" data-bs-toggle="tooltip" title="CSS 3">
                    <i class="fab fa-css3"></i>
                </span>
                <span class="d-inline-block fs-4" tabindex="0" data-bs-toggle="tooltip" title="JavaScript">
                    <i class="fab fa-js"></i>
                </span>
                <span class="d-inline-block fs-4" tabindex="0" data-bs-toggle="tooltip" title="Vue.JS">
                    <i class="fab fa-vuejs"></i>
                </span>
                <span class="d-inline-block fs-4" tabindex="0" data-bs-toggle="tooltip" title="Node.JS + Express">
                    <i class="fab fa-node-js"></i>
                </span>
                <span class="d-inline-block fs-4" tabindex="0" data-bs-toggle="tooltip" title="MongoDB">
                    <i class="fas fa-database"></i>
                </span>
                <span class="d-inline-block fs-4" tabindex="0" data-bs-toggle="tooltip" title="Bootstrap 5">
                    <i class="fab fa-bootstrap"></i>
                </span>
            </div>
            <p class="fs-5"><strong>Equipo de trabajo:</strong></p>
            <!-- Card Team Member -->
            <div v-for="(dev, index) in teamData" :key="index" class="card text-center mb-4">
                <div class="card-header">
                    {{dev.tName}}
                </div>
                <div class="card-body">
                    <figure>
                        <img :src="require(`@/assets/${dev.tPhoto}`)" class="figure-img img-fluid" alt="Foto" width="120px" />
                    </figure>
                    <p class="card-text">{{dev.tDescription}}</p>
                    <div class="btn-group btn-group-lg" role="group" aria-label="Basic outlined example">
                        <a :href="dev.urlGithub" target="_blank" class="btn btn-outline-secondary"><i class="fab fa-github-square"></i></a>
                        <a :href="dev.urlLin" target="_blank" class="btn btn-outline-secondary"><i class="fab fa-linkedin"></i></a>
                        <a :href="dev.urlInterp" target="_blank" class="btn btn-outline-secondary"><i class="fas fa-address-card"></i></a>
                    </div>
                </div>
            </div>

            <p class="fs-5"><strong>Descargo de Responsabilidad:</strong></p>
            <p>Esta Aplicación Web es un proyecto con fines demostrativos, abstengase de usar sus datos personales (reales) dentro de la aplicación.</p>
            <p>El código fuente, los diseños y logotipos fueron desarrollados por el equipo de trabajo, los datos de los usuarios y mascotas son ficticios, las fotografías que se usaron estan bajo licencia de uso libre.</p>
        </div>
        </div>

        <footer class="bgc-toscuro tc-tneutro">
            <p class="text-center opaco-8">©2021 - TODOS LOS DERECHOS RESERVADOS HONEYPET DC - POWER BY: <button class="btn btn-outline-light btn-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">HoneyPet_Team</button></p>
        </footer>
    </div>
    
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return {
            teamData: [
                {
                    tName: 'Ivan M. Campos',
                    tPhoto: 'img/avatars/fotoIMCrd.png',
                    tDescription: 'Emprendedor, Diseñador Gráfico y Dearrollador Web Apasionado por la Tecnología, la Educación y las Artes.',
                    urlGithub: 'https://github.com/imcamposdev',
                    urlLin: 'https://www.linkedin.com/in/ivan-m-campos-422a78221',
                    urlInterp: 'https://interacpedia.com/user/ivan-m-campos',
                    location: 'Bogotá D.C.'
                },
                {
                    tName: 'Miguel Alexis Caceres',
                    tPhoto: 'img/avatars/fotoMACrd.png',
                    tDescription: 'Estudiante de Ingeniería en Sistemas y Computación, Joven Programador con Ganas de Aprender y Trabajar en el Mundo de la Tecnología.',
                    urlGithub: 'https://github.com/MiguelNietox',
                    urlLin: 'https://www.linkedin.com/in/miguel-alexis-caceres-294b12221/',
                    urlInterp: 'https://interacpedia.com/user/miguel-alexis-caceres%7D',
                    location: 'Armenia - Quindío'
                },
                {
                    tName: 'Francisco J. Sanchez Toro',
                    tPhoto: 'img/avatars/fotoFJSrd.png',
                    tDescription: 'Estudiante de cuarto semestre en Ingeniería de sistemas, con gran motivación para seguir obteniendo conocimientos y habilidades, para así crecer profesionalmente.',
                    urlGithub: 'https://github.com/franciscoww',
                    urlLin: 'https://www.linkedin.com/in/francisco-javier-sanchez-toro-b8564a221/',
                    urlInterp: 'https://interacpedia.com/user/francisco-javier-sanchez-toro',
                    location: 'Ibagué - Tolima'
                },
                {
                    tName: 'Nelsi Daniela Miramag Diaz',
                    tPhoto: 'img/avatars/fotoNDMrd.png',
                    tDescription: 'Estudiante de Geología de la Universidad Nacional de Colombia y Programación de la Universidad Tecnológica de Pereira, con Gran Interés en las Nuevas Tecnologías y Apasionada por la Ciencia.',
                    urlGithub: 'https://github.com/danimidi',
                    urlLin: 'https://www.linkedin.com/in/nelsi-miramag-734144220/',
                    urlInterp: 'https://interacpedia.com/user/nelsi-miramag?tab=profile',
                    location: 'Bogotá D.C.'
                },
                {
                    tName: 'Andres Felipe Garcia Viña',
                    tPhoto: 'img/avatars/fotoAFGrd.png',
                    tDescription: 'Destacado Estudiante de Matemáticas y Estadística, Apasionado por las Ciencias Exactas y con Gran Motivación en Adquirir Habilidades en las Nuevas Tecnologías.',
                    urlGithub: 'https://github.com/Asap4u',
                    urlLin: 'https://www.linkedin.com/in/andres-garcia-405697194/',
                    urlInterp: 'https://interacpedia.com/user/andres-felipe-garcia-vina?tab=profile',
                    location: 'Ibagué - Tolima'
                }
            ]
        }
    }
}
</script>
