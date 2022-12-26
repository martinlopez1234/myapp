
import './App.css';

function App() {
  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-dark  bg-dark  p-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Abuel@Tech</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse nav justify-content-end" id="navbarText">

            <span class="navbar-item">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link text-light" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">Inicio de sesión</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">Registrarse</a>
                </li>
              </ul>

            </span>
          </div>
        </div>
      </nav>


      <div className="p-5 mb-4 bg-light rounded-3 jumbotron container-fluid">
        <div className="container-fluid py-5">
          <h1 className="display-2 fw-bold text-white">¡Te ayudamos a mejorar!</h1>
          <p className="col-md-8 fs-4 text-white">Esta es un aplicación Web para ayudarlos a poder meterse y atreverse entrar a la tecnologia. Con la rueda del raton vaya bajando.</p>


        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4 container-fluid">
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHZpZGVvJTIwY2FsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button className='btn btn-primary'>Ingresar a videoLlamada</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button className='btn btn-primary'>Ingresar a videoLlamada</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              <button className='btn btn-primary'>Ingresar a videoLlamada</button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button className='btn btn-primary'>Ingresar a videoLlamada</button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1585829365343-ea8ed0b1cb5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button className='btn btn-primary'>Ingresar a videoLlamada</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1566694271453-390536dd1f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9taW5vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button className='btn btn-primary'>Ingresar a videoLlamada</button>
            </div>
          </div>
        </div>

      </div>









    </>
  );
}

export default App;
