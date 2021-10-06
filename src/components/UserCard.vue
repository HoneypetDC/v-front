<template>
    <div class="list-group-item d-flex align-items-center mx-auto rounded-3 shadow-sm" style="max-width: 520px;">
        <div class="flex-shrink-0">
            <img width="200px" src="@/assets/img/avatars/default.png" alt="Avatar o Foto de Perfil">
        </div>
        <div class="flex-grow-1">
            <h5 class="card-title">{{ user_name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ user_email }}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">No. de Publicaciones <span class="perfil-data-pubs badge bg-secondary">{{ no_pubs }}</span></li>
                <li class="list-group-item">No. de Adopciones <span class="perfil-data-pubs badge bg-secondary">{{ no_adopts }}</span></li>
                <li class="list-group-item"><button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-secondary bgc-tclaro tc-toscuro"><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</button></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'user-card',
        data(){
            return {
                user_name: 'Peter Porker',
                user_email: 'vecinospider@shero.net.co',
                no_pubs: 2,
                no_adopts: 1
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>