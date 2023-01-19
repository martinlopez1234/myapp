import Footer from "./Footer";
import Navap from "./Navap";


function IniciarSesion() {
    return (
      <>
      <Navap/>


      <h1 className="text-center container mt-5 mb-3 fw-normal shadow-sm p-3  bg-body rounded">Inicie sesión para tener acceso a contactos personalizados</h1>
      <form className="container mb-5 mt-5 color shadow p-3 mb-5  rounded">
<center><img className="mb-3 " width={"200px"} src="https://cdn-icons-png.flaticon.com/512/9387/9387786.png"/></center>
  <div className="container">
 
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fw-bold "><h4 className="border-bottom border-dark">Correo electronico</h4></label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Ingrese en este recuadro blanco su correo electronico (haciendo click aqui)" aria-describedby="emailHelp"/>

  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label fw-bold"><h4 className="border-bottom border-dark">contraseña</h4></label>
    <input type="password" class="form-control" placeholder="Ingrese en este recuadro blanco su contraseña que desea usar (haciendo click aqui)" id="exampleInputPassword1"/>
  </div>
  
  
  <center><button type="submit" class="btn btn-primary mt-3 p-4">Haga click aqui para iniciar Sesión</button></center>
  </div>
</form>

       <Footer/>
  
  
      </>
    );
  }
  
  export default IniciarSesion;