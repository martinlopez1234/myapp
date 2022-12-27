import Footer from "./Footer";
import Navap from "./Navap";

function VideoLlamada() {
  return (
    <>
      <Navap />

      <div className="p-5 mb-4 bg-light rounded-3 jumbotron1 container-fluid ">
        <div className="container-fluid py-5">
          <h1 className="display-2 fw-bold text-white text-center">Aplicaciones de Video Llamada</h1>
          <p className="text-none">__</p>




        </div>
      </div>


      <div class="row row-cols-1 row-cols-md-3 g-4 container-fluid mb-4 mx-auto">
        <div class="col">
          <div class="card">
            <img src="https://i0.wp.com/www.blue-star.org/wp-content/uploads/2020/08/Zoom_logo.png?ssl=1" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Zoom</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente a la aplicación Zoom.</p>
              <button className='btn btn-primary'><a className="text-white" href="https://zoom.us/signin#/login">Ingresar a Zoom</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://logos-world.net/wp-content/uploads/2021/04/Microsoft-Teams-Symbol.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Teams</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente a la aplicación Teams.</p>
              <button className='btn btn-primary'><a className="text-white " href="https://www.microsoft.com/es-cl/microsoft-teams/log-in">Ingresar a Teams</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://victorfelix.edu.co/wp-content/uploads/2021/01/Logo-Meet.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Google Meet</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente a la aplicación Google Meet.</p>
              <button className='btn btn-primary'><a className="text-white " href="https://meet.google.com/">Ingresar a Google Meet</a></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
}

export default VideoLlamada;