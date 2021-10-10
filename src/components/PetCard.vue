<template>
    <!-- pet-card -->
    <div class="list-group-item d-flex align-items-center">
        <div class="flex-shrink-0">
            <img width="150px" :src="require(`@/assets/${pet_thumb}`)" alt="Miniatura: Foto de la mascota">
        </div>
        <div class="flex-grow-1 ms-3">
            <div class="d-inline-flex w-100 justify-content-between">
                <h5 class="mb-1">{{pet_name}}</h5>
                <small>{{pet_type}} - {{pet_location}}</small>
            </div>
            <p class="mb-1 text-muted">{{pet_description}}</p>
            <div class="d-inline-flex w-100 justify-content-end">
                <div class="btn-group btn-group-sm"  role="group" aria-label="botones para editar o eliminar publicación">
                    <button data-bs-toggle="modal" data-bs-target="#eliminarPubModal" class="btn btn-secondary bgc-tclaro tc-toscuro"><i class="fas fa-trash"></i> Eliminar</button>
                    <button class="btn btn-secondary bgc-tclaro tc-toscuro" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fas fa-edit"></i> Editar</button>
                    <button data-bs-toggle="modal" data-bs-target="#solicitudesModal" class="btn btn-secondary bgc-tclaro tc-toscuro"><i class="fas fa-list"></i> Solicitudes: {{pet_reqs}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'pet-card',
        data(){
            return {
                pet_data:{},
                
                pet_thumb: 'img/pets/thums/thums-1.jpg',
                pet_name:'Firulo',
                pet_type: 'Perro',
                pet_location: 'Bogotá DC',
                pet_description: 'Este perro fue abandonado en un parque lo encontre sucio, flaco y asustado, pero es un perro muy tierno y amoroso, lastimosamente no lo puedo conservar por que mi esposa es alergica a los perros.',
                pet_reqs: 2
            }
        },
        created() {
            // const userData = localStorage.getItem('localUserData');
            // this.perfil_data = JSON.parse(userData)
            // console.log(this.perfil_data)

            // if (localStorage.getItem('localUserData')) {
            //     const userData = localStorage.getItem('localUserData');
            //     this.petpubs_data = JSON.parse(userData.user_pubs)

            //     console.log(this.pet_data)
            // } else {
            //      this.$router.push('/');
            // }
        }
    }
</script>
