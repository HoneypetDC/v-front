<template>
    <div class="list-group-item d-flex align-items-center">
        <div class="flex-shrink-0">
            <img width="150px" :src="require(`@/assets/${pet_thumb}`)" alt="Miniatura: Foto de la mascota">
        </div>
        <div class="flex-grow-1 ms-3">
            <div class="d-inline-flex w-100 justify-content-between">
                <h5 class="mb-1">{{pet_name}}</h5>
                <small>{{pet_type}} - {{pet_location}}</small>
            </div>
            <h6>Teléfono: <span>{{pet_phone}}</span></h6>
            <p class="mb-1 text-muted">{{pet_description}}</p>
            <div class="d-inline-flex w-100 justify-content-end">
                <p class="estado-solicitud card-subtitle">Estado de la solicitud: <span class="badge bg-secondary bgc-tintenso tc-toscuro">{{reqs_state}}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'adopt-card',
        data(){
            return {
                pet_thumb: 'img/pets/thums/thums-4.jpg',
                pet_name:'Felixio',
                pet_type: 'Gato',
                pet_location: 'Risaralda',
                pet_phone: 123456,
                pet_description: 'Es una gatita muy tierna que se quedó sin hogar por que sus dueños se fueron para el exterior, no padece de enfermedades y es una excelente compañera, tiene juguetes cama y arerenero.',
                reqs_state: "En estudio"
            }
        }
    }
</script>
