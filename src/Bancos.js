
import Footer from "./Footer";
import Navap from "./Navap";
import { useEffect, useState } from 'react';

function Bancos() {

  const [dinero, setDinero] = useState();

  useEffect(() => {
    fetch('https://mindicador.cl/api').then(function (response) {
      return response.json();
    }).then(function (dailyIndicators) {
      document.getElementById("UF").innerHTML = 'El valor actual de la UF es $' + dailyIndicators.uf.valor;
      document.getElementById("DolarO").innerHTML = 'El valor actual del Dólar observado es $' + dailyIndicators.dolar.valor;
      document.getElementById("DolarA").innerHTML = 'El valor actual del Dólar acuerdo es $' + dailyIndicators.dolar_intercambio.valor;
      document.getElementById("Euro").innerHTML = 'El valor actual del Euro es $' + dailyIndicators.euro.valor;
      document.getElementById("IPC").innerHTML = 'El valor actual del IPC es ' + dailyIndicators.ipc.valor;
      document.getElementById("UTM").innerHTML = 'El valor actual de la UTM es $' + dailyIndicators.utm.valor;
      document.getElementById("IVP").innerHTML = 'El valor actual del IVP es $' + dailyIndicators.ivp.valor;
      document.getElementById("Imacec").innerHTML = 'El valor actual del Imacec es ' + dailyIndicators.imacec.valor;
    }).catch(function (error) {
      console.log('Requestfailed', error);
    });


  }, []);

  return (
    <>
      <Navap />

      <div className="p-5 mb-4 bg-light rounded-3 jumbotron2 container-fluid ">
        <div className="container-fluid py-5">
          <h1 className="display-2 fw-bold text-white text-center">Accesos Directos Bancos</h1>
          <p className="text-none">__ </p>
          <div class="container overflow-hidden">
            <div class="row gx-5">
              <div class="col">
                <div class="p-3 border bg-light bg-black text-white display-6 " id="UF"></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-black text-white display-6" id="DolarO"></div>
              </div>
            </div>
          </div>







        </div>
      </div>


      <div class="row row-cols-1 row-cols-md-3 g-4 container-fluid mb-4 mx-auto">
        <div class="col">
          <div class="card">
            <img src="https://quieroserdelchile.cl/assets/logo_social-bc9410e884379ff062fc5d566d1132c5.png" width={"370px"} height={"370px"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Banco De Chile</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente al Banco De Chile.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://login.portal.bancochile.cl/bancochile-web/persona/login/index.html#/login">Ingresar a Banco de chile</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card ">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bci_Logotype.svg/2560px-Bci_Logotype.svg.png" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Banco Bci</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente a Banco Bci __.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.bci.cl/corporativo/banco-en-linea/personas">Ingresar banco bci</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Banco_Santander_Logotipo_%282007-2018%29.svg/2560px-Banco_Santander_Logotipo_%282007-2018%29.svg.png" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Banco Santander</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente a Banco Santander.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://banco.santander.cl/personas">Ingresar banco santander</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://imax.cl/wp-content/uploads/2018/04/montaje_BE_AI_1.jpg" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Banco Estado</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente a Banco Estado.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.bancoestado.cl/content/bancoestado-public/cl/es/home/home-microempresa.html#/">Ingresar banco estado</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banco_Ita%C3%BA_logo.svg/1011px-Banco_Ita%C3%BA_logo.svg.png" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Banco Itaú</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente a Banco Itaú _.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://banco.itau.cl/wps/portal/newolb/web/login/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zizS1czYw8DYz83F1cLQzMTIJNA4Ms_Q0MPA30wwkpiAJKG-AAjiD9UWAllv4uEBP8PbwNDQK9jQItPQ0CA_yNDKAK8JhRkBthkOmoqAgAtUxFsA!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/">Ingresar a banco itaú</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://www.diarioconstitucional.cl/wp-content/uploads/2021/05/scotiabank-1.png" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Banco Scotiabank</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente a Banco Scotiabank.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://www.scotiabank.cl/login/personas/?nocache=true">Ingresar a banco scotiabank</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Logo_Banco_BICE-300dpi.jpg" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Banco Bice</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente a Banco Bice _.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://ingreso.bice.cl/personas/">Ingresar a banco bice</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cdn2.downdetector.com/static/uploads/logo/Banco-Falabella.png" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Banco Falabella</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente a Banco Falabella.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://cuentacorriente.bancofalabella.cl/?adskeywords=banco%20falabella&gclsrc=ds&gclsrc=ds">Ingresar a banco falabella</a></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://banco.santander.cl/uploads/000/025/057/008785c2-b575-4ae3-816b-508a207f64cc/original/servipag.svg" width={"370px"} height={"370px"} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Acceso directo Servipag</h5>
              <p class="card-text">
                Haciendo click en el boton azul debajo te mandara directamente a servicio Servipag.</p>
              <button className='btn btn-primary'><a className="text-white nav-link" href="https://portal.servipag.com/">Ingresar a Servipag</a></button>
            </div>
          </div>
        </div>
      </div>

      <Footer />


    </>
  );
}

export default Bancos;