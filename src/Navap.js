import { Link } from "react-router-dom";
function Navap() {
  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-dark  bg-dark  p-3 sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><Link className="text-white" to={`/`}>Haga click aqui para volver al inicio <img src="https://cdn-icons-png.flaticon.com/512/7510/7510228.png" width={"50px"} /></Link> </a>



        </div>
      </nav>


    </>
  );
}

export default Navap;