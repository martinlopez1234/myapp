import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import GoToTop from './GoToTop';
function Home() {
  return (
    <>
      <GoToTop />
      <nav class="navbar navbar-expand-lg navbar-dark  bg-dark  p-3 sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Abuel@Tech</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse nav justify-content-end" id="navbarText">

            <span class="navbar-item">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link text-light" href="#"><Link className='text-white nav-link' to={`/registrarse`}>¡REGISTRESE AQUI!</Link></a>
                </li>
              </ul>

            </span>
          </div>
        </div>
      </nav>


      <div className="p-5 mb-4 bg-light rounded-3 jumbotron container-fluid ">
        <div className="container-fluid py-5">
          <h1 className="display-2 fw-bold text-white">¡Te ayudamos a mejorar!</h1>
          <p className="col-md-8 fs-4 text-white">Esta es un aplicación Web para ayudarlos a poder meterse y atreverse entrar a la tecnologia. Con la rueda del raton vaya bajando.</p>


        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4 container-fluid mb-4 mx-auto">
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHZpZGVvJTIwY2FsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo VideoLlamadas</h5>
              <p class="card-text">En este apartado se veran las distintas aplicaciones mas usadas de videoLlamada, como Zoom, Team, Meet y etc.</p>
              <button className='btn btn-primary'><Link className='text-white nav-link' to={`/videoLLamada`}>Ingresar a VideoLlamada</Link></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Bancos</h5>
              <p class="card-text">En este apartado se veran los distintos bancos para acceder rapidamente a ellos como por ejemplo Banco de Chile, Banco Estado, Santander y etc.</p>
              <button className='btn btn-primary'><Link className='text-white nav-link' to={`/bancos`}>Ingresar a Bancos</Link></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Medios de comunicación</h5>
              <p class="card-text">En este apartado se veran los distintos medios de comunicación como canales de noticias y periodicos online.</p>
              <button className='btn btn-primary'><Link className='text-white nav-link' to={`/medioscomunicacion`}>Ingresar a Medios de Comunicación</Link></button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Contactos de emegercia y personales</h5>
              <p class="card-text">En este apartado se mostraran contactos de emergecias y contactos personales los cuales podran visualizar de manera rapida y sencilla.</p>
              <button className='btn btn-primary'><Link className='text-white nav-link' to={`/Contactos`}>Contactos</Link></button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1585829365343-ea8ed0b1cb5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Tutoriales de tecnologia</h5>
              <p class="card-text">En este apartado se mostraran distintos tutoriales de tecnologia de como usar el computador, telefono y entre otros dispositivos.</p>
              <button className='btn btn-primary'><Link className='text-white nav-link' to={`/tutoriales`}>Ingresar a Tutoriales</Link></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1566694271453-390536dd1f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9taW5vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Entretenimiento</h5>
              <p class="card-text">En este apartados se mostraran distintos videojuegos como por ejemplo Sudoku, Domino, Memorize y entre otros.</p>
              <button className='btn btn-primary'>Ingresar a Entretenimiento</button>
            </div>
          </div>
        </div>

      </div>


      <Footer />






    </>
  );
}

export default Home;
