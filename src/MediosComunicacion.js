import Footer from "./Footer";
import Navap from "./Navap";
import { Link } from 'react-router-dom';
import GoToTop from "./GoToTop";


function MediosComunicacion() {
  return (
    <>
      <GoToTop />

      <Navap />


      <div className="p-5 mb-4 bg-light rounded-3 jumbotron3 container-fluid ">
        <div className="container-fluid py-5">
          <h1 className="display-2 fw-bold text-white text-center">Accesos Directos Medios de comunicación</h1>
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
            <img src="https://static.emol.cl/emol50/img/EmolTwitter.png" width={"370px"} height={"370px"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Diario Emol</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente al diario online Emol.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.emol.com/">Ingresar a Emol</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card ">
            <img src="https://play-lh.googleusercontent.com/Klt5oCk7TKXhho_QAG_Wog6hO5mIEzOFnRPWdSpc-2z6GkrjjS8H_dy1GxGeNE25P4BZ" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Diario Lun</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente al diario online Lun.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.lun.com/">Ingresar a Lun</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="http://www.cega-uchile.cl/wp-content/uploads/2017/04/logo-diario-la-tercera.jpg" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Diario La Tercera</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente al diario online La Tercera.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.latercera.com/">Ingresar a La Tercera</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Logotipo_de_Televisi%C3%B2n_Nacional_de_Chile_%282004-2016%29.svg" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo TVN</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente a noticias online TVN.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.tvn.cl/">Ingresar a TVN</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://brandemia.org/sites/default/files/sites/default/files/logo_mega_nuevo.jpg" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Banco Itaú</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente a noticias online MEGA.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.mega.cl/">Ingresar a MEGA</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://media.biobiochile.cl/wp-content/uploads/2018/03/1521760521-e0eb4835-e27e-46a4-8750-3946c0eea954.jpg" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo TELE13</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente a noticias online TELE13.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.t13.cl/">Ingresar a TELE13</a></button>
            </div>
          </div>
        </div>

      </div>


      <Footer />


    </>
  );
}

export default MediosComunicacion;