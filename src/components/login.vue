<template>
  <div class="signup-page">

    <!--     Fonts and icons     -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
    <nav class="navbar navbar-transparent navbar-absolute">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="http://www.creative-tim.com"> <v-icon x-large>school</v-icon> ALC Intermediate Web Track Assessment</a>
        </div>

        <div class="collapse navbar-collapse" id="navigation-example">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="https://twitter.com/CreativeTim" target="_blank" class="btn btn-simple btn-white btn-just-icon">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/CreativeTim" target="_blank" class="btn btn-simple btn-white btn-just-icon">
                <i class="fa fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/CreativeTimOfficial" target="_blank" class="btn btn-simple btn-white btn-just-icon">
                <i class="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="wrapper">
      <div class="header header-filter" :style="{backgroundImage: `url(${require('../assets/img/bg.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'top centr'}">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
              <div class="card card-signup">
                  <div class="header header-info text-center">
                    <v-icon x-large>account_circle</v-icon>
                    <h4>Sign In</h4>

                  </div>
                  <br>
                  <div class="content">

                    <!-- todo: add login form -->
             <div id="form">
               <LoginForm/>
             </div>

                  </div>
              </div>
            </div>
          </div>
        </div>

        <div class="alert alert-info">
          <div class="container-fluid">
            <div class="alert-icon">
              <i class="material-icons">info_outline</i>
            </div>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true"><i class="material-icons">clear</i></span>
            </button>
            <div class="social-line text-center">
              login with: <v-icon>email</v-icon><span>email: musbell007@gmail.com</span>  |  <v-icon>lock</v-icon><span>password: test123</span>
            </div>
          </div>
        </div>


      </div>

    </div>

  </div>
</template>

<script>
  import '../assets/js/jquery.min'
  import '../assets/js/bootstrap.min'
  import '../assets/js/material.min'
  import LoginForm from './loginForm.vue'
export default {
  components: {
  LoginForm
}
}
</script>

<style scoped>
  @import '../assets/css/bootstrap.min.css';
  @import '../assets/css/material-kit.css';
  @import '../assets/css/demo.css';

  .header-filter:after {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
    left: 0;
    top: 0;
    content: "";
    background-color: rgba(0, 0, 161);
  }

  #form {
    padding-left: 20px;
  }
</style>
