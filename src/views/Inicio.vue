<template>
    <div class="Inicio">
        <div class="bg-foto-home">
            <header class="container-section-brand-home">
                <div class="section-brand mx-auto text-center">
                    <h1><img class="logo-home img-fluid" src="@/assets/img/logo-HoneyPetDC.svg" alt="HoneyPet DC" /></h1>
                    <p>Sumamos amor a las familias, dandole una segunda oportunidad a una mascota que necesita un hogar. En este sitio podrás publicar o adoptar una mascota en cualquier lugar de Colombia</p>
                </div>
            </header>
        </div>
        <main>
            <section class="home-ult-mascotas p-section">
                <h2 class="text-center">Últimas Mascotas Publicadas</h2>
                <div class="container py-5">
                    <div class="row row-cols-2 row-cols-lg-4 mx-auto">
                        <div v-for="(pet, index) in uPets" :key="index" class="col">
                            <img @click="verMascota(index)" class="pet-thumb img-fluid rounded-3" :src="pet.pet_thumb" :alt="pet.pet_name">
                        </div>
                    </div>
                </div>
                <p style="max-width: 230px" class="mx-auto">
                    <router-link class="nav-link btn btn-lg bgc-tintenso tc-toscuro opaco-8" to="/mascotas"><i class="fas fa-dog" role="button"></i> Ver Todas</router-link>
                </p>
            </section>

            <section class="home-guia p-section text-center bgc-tprofundo tc-tclaro">
                <!-- La idea del texto descriptivo es incetivar a que el usuario preione el botón :3 -->
                <h2 style="margin-bottom: 70px;">Publicar o Adoptar una Mascota</h2>
                <div class="container">
                    <div class="row d-flex align-items-end">
                        <div class="col-lg mb-3">
                            <img src="@/assets/img/ico-home-perfil.svg" alt="Icono perfil" class="mb-4">
                            <h3 class="mb-4">Ingresa en tu cuenta</h3>
                            <p class="mb-4">Para publicar o adoptar una mascota debes crear una cuenta. Al iniciar tu sesión podras ver y gestionar tus publicaciones y ver como va tu proceso de adopción desde tu propia página de perfil.</p>
                            <p style="max-width: 230px" class="mx-auto">
                                <a v-if="unlogin" data-bs-toggle="modal" data-bs-target="#exampleModal" class="nav-link btn btn-sm bgc-tneutro tc-toscuro opaco-8"  role="button"><i class="fas fa-user"></i> Crear Cuenta o Ingresar</a>
                                <router-link v-else to="/perfil" role="button" class="nav-link btn btn-sm bgc-tneutro tc-toscuro opaco-8"><i class="far fa-address-card"></i> Ver mi Perfil</router-link>
                            </p>
                        </div>
                        <div class="col-lg mb-3">
                            <img src="@/assets/img/ico-home-pets.svg" alt="Icono Publicar Mascotas" class="mb-4" />
                            <h3 class="mb-4">Publicar una mascota</h3>
                            <p class="mb-4">¿Quieres dar una mascota en adopción? Ayuda a un perro o gato a encontrar una familia responsable que la proteja, la cuide y quiera integrarla a su hogar, mediante la página de nueva publicación.</p>
                            <p style="max-width: 230px" class="mx-auto">
                                <a v-if="unlogin" data-bs-toggle="modal" data-bs-target="#exampleModal" class="nav-link btn btn-sm bgc-tneutro tc-toscuro opaco-8"><i class="fas fa-lock"></i> Ingresar y Publicar</a>
                                <router-link v-else to="/publicar" class="nav-link btn btn-sm bgc-tneutro tc-toscuro opaco-8" ><i class="fas fa-plus"></i> Publicar Mascota</router-link>
                            </p>
                        </div>
                        <div class="col-lg mb-3">
                            <img src="@/assets/img/ico-home-pethouse.svg" alt="Icono Adoptar"  class="mb-4"/>
                            <h3 class="mb-4">Adoptar una mascota</h3>
                            <p class="mb-4">
                                ¿Quieres adoptar una mascota?, Brindale la oportunidad de un segundo hogar a un animalito, ellos merecen tanto amor como el que ofrecen. conoce los requisitos, compromisos e inicia el proceso de adopción.
                            </p>
                            <p style="max-width: 230px" class="mx-auto">
                                <router-link to="/adoptar" class="nav-link btn btn-sm bgc-tneutro tc-toscuro opaco-8"><i class="fas fa-paw" role="button"></i> Página de Adopción</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="home-aliados p-section text-center"> 
                <h2>Marcas Aliadas</h2>
                <div class="container py-5">
                    <div class="row">
                        <div class="col">
                            <img src="@/assets/img/alianza/logo-al3.png" width="338" height="112" alt="MinTic" />
                        </div>
                        <div class="col">
                            <img src="@/assets/img/alianza/logo-al2.png" width="164" height="109" alt="UTP" />
                        </div>
                        <div class="col">
                            <img src="@/assets/img/alianza/logo-al1.png" width="209" height="115" alt="BTP" />
                        </div>
                    </div>
                </div>
                <p style="max-width: 920px;" class="mx-auto px-4 mb-4">Puede apoyar esta noble iniciativa mediante una donación, un patrocinio o una alianza de mutuo beneficio, si usted es una persona o empresa altruista puedes contactarnos para coordinar la colaboración, ayudenos a hacer este mundo mejor brindandole bienestar a una mascota que lo necesita.</p>
                <p style="max-width: 230px" class="mx-auto">
                    <router-link to="/alianzas" class="nav-link btn btn-lg bgc-tintenso tc-toscuro opaco-8"><i class="fas fa-hand-holding-usd" role="button"></i> Apoyar la Iniciativa</router-link>
                </p>
            </section>
        </main>
    </div>
</template>

<script>
import { getLastMascotas } from '@/services/MascotasService'
import * as basicLightbox from 'basiclightbox'

export default {
    name: 'Inicio',
    data() {
        return {
        unlogin: true,
        uPets: []
    }
    },
    mounted() {
        if (localStorage.getItem('localUserData')) {
            this.unlogin = false
        } else {
            this.unlogin = true
        }

        getLastMascotas()
            .then((response) => {
            this.uPets = response.data;
            console.log("Ultimas 4 mascotas "+this.uPets);
            })
            .catch((e) => console.error(e));
    },
    methods: {
    verMascota(index){
        const petPhoto = this.pets[index].pet_pic
        this.lbInstance = basicLightbox.create(/*html*/`
        <div class="lb-container">
            <img src="${petPhoto}">
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
        `);

        this.lbInstance.show();

        const petdesc = document.querySelector('div.pet-info-desc');
        document.querySelector('.mas-btn').onclick = () => {
        petdesc.classList.toggle("mas-info");
        }

        document.querySelector('.btnAdopt').onclick = () => {
            console.log("Capturo la mascota "+this.uPets[index]);
            const lspet = localStorage.setItem('localPetData', JSON.stringify(this.uPets[index]));
            console.log("Mascota en LS: "+lspet);

            this.lbInstance.close()

            this.$router.push('/Adoptar');
        }

        document.querySelector('.close-lb').onclick = () => { 
        this.lbInstance.close()
        }
    }
    }
}
</script>

<style scoped>
.bg-foto-home {
    background-image: url(../assets/img/bg-home.jpg);
    background-position: center;
    background-size: cover;
}
.container-section-brand-home {
    background-color: rgba(201, 228, 218, .85);
    padding: 200px 0;
}

</style>