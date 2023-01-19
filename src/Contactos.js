import Footer from "./Footer";
import GoToTop from "./GoToTop";
import Navap from "./Navap";
import { Link } from 'react-router-dom';

function Contactos() {
  return (
    <>
      <GoToTop />
      <Navap />

      <div className="p-5 mb-4 bg-light rounded-3 jumbotron4 container-fluid ">
        <div className="container-fluid py-5">
          <h1 className="display-2 fw-bold text-white text-center">Contactos de emegercia y personales
          </h1>
          <p className="text-none">__</p>




        </div>
      </div>


      <div class="row row-cols-1 row-cols-md-3 g-4 container-fluid mb-4 mx-auto">
        <div class="col">
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Roundel_of_Carabineros_de_Chile.svg/1200px-Roundel_of_Carabineros_de_Chile.svg.png" width={"370px"} height={"370px"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Número de Carabineros De Chile</h5>
              <button type="button" class="btn btn-primary p-3">133</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Bomberos_Chile.jpg" width={"370px"} height={"370px"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Número de Bomberos</h5>
              <button type="button" class="btn btn-primary p-3">132</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cdn.chiletrabajos.cl/empleadores/images/logos/logo-8ec584628c8db68c6167b8e98f2ac75e.png" width={"370px"} height={"370px"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Número Ambulancia Help</h5>
              <button type="button" class="btn btn-primary p-3">9 8891 3533</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1559054109-82d938dac629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" width={"370px"} height={"370px"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Agregar contactos personales</h5>
              <button className='btn btn-primary'><Link className='text-white nav-link' to={`/iniciosesion`}>INICIE SESIÓN PARA AGREGAR CONTACTOS FAMILIARES O AMIGOS.</Link></button>
            </div>
          </div>
        </div>



        <div />
      </div>
      <Footer />

    </>
  );
}

export default Contactos;