import Footer from "./Footer";
import Navap from "./Navap";
import { Link } from 'react-router-dom';
import GoToTop from "./GoToTop";


function Entretenimiento() {
  return (
    <>
      <GoToTop />

      <Navap />


      <div className="p-5 mb-4 bg-light rounded-3 jumbotron6 container-fluid ">
        <div className="container-fluid py-5">
          <h1 className="display-2 fw-bold text-white text-center">Entretenimiento</h1>
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
            <img src="https://images.unsplash.com/photo-1619869300502-ac8d409e7635?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" width={"370px"} height={"370px"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Memorize</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente a juego Memorize.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.emol.com/">Ingresar a Memorize</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card ">
            <img src="https://images.unsplash.com/photo-1640537702474-3e503c21eefc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Sudoku</h5>
              <p class="card-text">
              Haciendo click en el boton azul debajo te mandara directamente a juego Sudoku.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.lun.com/">Ingresar a Sudoku</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1585338107529-13afc5f02586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Crucigrama</h5>
              <p class="card-text">
              Haciendo click en el boton azul debajo te mandara directamente a juego Crucigrama.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.latercera.com/">Ingresar a Crucigrama</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1594692707496-a9dc0498e175?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Solitario</h5>
              <p class="card-text">
              Haciendo click en el boton azul debajo te mandara directamente a juego Solitario.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.tvn.cl/">Ingresar a Solitario</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Puzzle</h5>
              <p class="card-text">
              Haciendo click en el boton azul debajo te mandara directamente a juego Puzzle.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.mega.cl/">Ingresar a Puzzle</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1533226458520-6f71cffeaa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Sopa de Letras</h5>
              <p class="card-text">
              Haciendo click en el boton azul debajo te mandara directamente a juego Sopa de Letras.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.t13.cl/">Ingresar Sopa de Letras </a></button>
            </div>
          </div>
        </div>

      </div>


      <Footer />


    </>
  );
}

export default Entretenimiento;