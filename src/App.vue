<template>
  <div id="app">
    <!----------------------------------Ventana flotante------------------------------------>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Iniciar Sesion</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Crear Cuenta</button>
              </li>
            </ul>
          </div>

          <div class="modal-body">
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                <form action="">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingMail" placeholder="name@example.com" required>
                    <label for="floatingMail">*Correo Electronico</label>
                  </div>
                  <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPw" placeholder="Password" minlength="8"  required>
                    <label for="floatingPw">*Contraseña</label>
                  </div>

                  <p></p>
                  <p>*Campos obligatorios</p>

                  <div class="modal-footer">
                    <button type="button" class="btn bgc-tclaro opaco-8" data-bs-dismiss="modal">Cancelar</button>
                    <!-- <button type="submit" class="btn bgc-tintenso opaco-8">Iniciar Sesion</button> -->
                    <a class="nav-link btn btn-sm btn bgc-tintenso tc-toscuro opaco-8" href="perfil.html" >Iniciar Sesion</a>
                  </div>
                </form>

              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                <form action="">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingName" placeholder="nombre completo" required>
                    <label for="floatingName">*Nombre Completo</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingTel" placeholder="numero telefonico" size="10" max="10">
                    <label for="floatingTel">Numero Telefonico</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" required>
                    <label for="floatingEmail">*Correo Electronico</label>
                  </div>
                  <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" minlength="8"  required>
                    <label for="floatingPassword">*Contraseña</label>  
                  </div>
                  <p></p>

                  <p>*Campos obligatorios</p>
                  <div class="modal-footer">
                    <button type="button" class="btn bgc-tclaro opaco-8" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn bgc-tintenso opaco-8">Crear Cuenta</button>
                  </div>

                </form>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <!------------------------------------------------------------------------------------->
    <nav id="nav" class="navbar navbar-dark bg-primary navbar-expand-md fixed-top bgc-toscuro shadow">
      <div class="container-fluid">
        <a class="navbar-brand ms-3" href="#"><img src="@/assets/img/logotxt-HoneyPetDC.svg" alt="HoneyPet DC" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><router-link to="/" class="nav-link"><i class="fas fa-home"></i> Inicio</router-link></li>
            <li class="nav-item"><router-link to="/mascotas" class="nav-link"><i class="fas fa-cat"></i> Mascotas</router-link></li>
            <li class="nav-item"><router-link to="/adoptar" class="nav-link"><i class="fas fa-paw"></i> Adoptar</router-link></li>
            <li class="nav-item"><router-link to="/alianzas" class="nav-link"><i class="fas fa-handshake"></i> Alianzas</router-link></li>
            <li class="nav-item"><router-link to="/publicar" class="nav-link btn btn-sm bgc-tneutro tc-tprofundo opaco-5" href="publicar.html"><i class="fas fa-plus"></i> Publicar</router-link></li>
            <li class="nav-item"><router-link to="/perfil" class="nav-link" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-user-circle"></i> Perfil</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>

    <footer class="bgc-toscuro tc-tneutro">
      <p class="text-center opaco-8">©2021 - TODOS LOS DERECHOS RESERVADOS HONEYPET DC - DEVELOP BY MTIC:UTP_G2-47</p>
    </footer>
  </div>
</template>

<style>
#nav a.router-link-exact-active {
  color: #fff;
} 
</style>
