import Footer from "./Footer";
import Navap from "./Navap";
import { Link } from 'react-router-dom';
import GoToTop from "./GoToTop";


function Tutoriales() {
  return (
    <>
      <GoToTop />

      <Navap />


      <div className="p-5 mb-4 bg-light rounded-3 jumbotron5 container-fluid ">
        <div className="container-fluid py-5">
          <h1 className="display-2 fw-bold text-white text-center">Tutoriales de tecnologia</h1>
          <p className="text-none">__ </p>
          <div class="container overflow-hidden">
            <div class="row gx-5">


            </div>
          </div>









        </div>

      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4 container-fluid mb-4 mx-auto">
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" width={"370px"} height={"370px"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Tutoriales de computador</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente a tutoriales de computadora.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.emol.com/">Ingresar a tutoriales computador</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card ">
            <img src="https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Tutoriales de telefono</h5>
              <p class="card-text">
              Haciendo click en el boton azul debajo te mandara directamente a tutoriales de telefono.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.lun.com/">Ingresar a tutoriales de telefono</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Tutoriales de tablet</h5>
              <p class="card-text">
              Haciendo click en el boton azul debajo te mandara directamente a tutoriales de tablet.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.latercera.com/">Ingresar a tutoriales de tablet</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Tutoriales de correo</h5>
              <p class="card-text">
              Haciendo click en el boton azul debajo te mandara directamente a tutoriales de correo.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.tvn.cl/">Ingresar a tutoriales de correo</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1632435499152-18838be77960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Tutoriales de whassap</h5>
              <p class="card-text">
              Haciendo click en el boton azul debajo te mandara directamente a tutoriales de Whasapp.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.mega.cl/">Ingresar a tutoriales de whasap</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1501250987900-211872d97eaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Tutoriales de internet</h5>
              <p class="card-text">
              Haciendo click en el boton azul debajo te mandara directamente a tutoriales de navegacion en internet.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.t13.cl/">Ingresar tutoriales de internet</a></button>
            </div>
          </div>
        </div>

      </div>


      <Footer />


    </>
  );
}

export default Tutoriales;