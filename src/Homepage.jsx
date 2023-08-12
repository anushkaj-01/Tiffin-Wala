import "./Homepage.css";
import Page2 from "./Page2.jsx";
import Page3 from "./Page3.jsx";
import Orderpage from "./Orderpage.jsx";
// import landingpage from './landingpage.jpg';
export default function Homepage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            Tiffin Wala
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  About US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Tiffins
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="landing-page">
        <div className="row">
          <img className="landing-bg" src="/images/landing-page.jpg" alt="" />
          <div className="col-lg-6 title">
            <h1>Anytime Tiffin</h1>
            <p>Get Homiee Tiffin in Your Hand</p>
            <button type="button" class="btn btn-outline-dark btn-lg">
              {" "}
              Log in
            </button>
            <button type="button" class="btn btn-outline-dark btn-lg">
              Sign Up
            </button>
          </div>
          <div className="col-lg-6 title">
            <img className="landing-img" src="/images/img2.jpg" alt="" />
          </div>
        </div>
      </section>
      <Page2 />
      <Page3 />
      <Orderpage />
    </>
  );
}
