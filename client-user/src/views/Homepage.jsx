import '../App.css'
import Navbar from '../components/Navbar'
import CardHot from '../components/CardHot'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Homepage() {

  return (
    <>
      <Navbar />
      <div id="tileOne1">
        <div className="container" id='containerh1'>
          <h1 id='h1'>TRAIN TO BE YOUR BEST</h1>
          <p id="p1">The race-day feeling on your training runs, powered by high-performance technology.</p>
        </div>
        <a href="">
          <div className="btns1">
            <button>SHOP NOW</button>
          </div>
        </a>
      </div>
      <div id="tileOne2">
        <div className="container" id='containerh1'>
          <p id="p2">What&#39;s your Originals?</p>
        </div>
        <a href="">
          <div className="btns2">
            <button>TO THE COLLECTION</button>
          </div>
        </a>
      </div>
      <div id="tileOne3">
        <div className="container" id='containerh1'>
          <h1 id='h3'>MASA DEPAN LEBIH CEPAT DENGAN NMD</h1>
          <p id="p1">Tingkatkan caramu mengeksplorasi dunia masa depan.</p>
        </div>
        <a href="">
          <div className="btns3">
            <button>BELI SEKARANG</button>
          </div>
        </a>
      </div>
      <div className="container" id='containerh2'></div>
      <div>
        <b>WHAT&#39;S HOT?</b>
        <CardHot />
      </div>
      <div id='container-who-shopping'>
      <div id="tileThree">
        <div className="tileThreeHeading">WHO ARE YOU SHOPPING FOR?</div>
        <div className="tileThreeImages">
          <div className="tileMen">
            <Link to='/products/1'><h3>MEN</h3></Link>
            </div>
          <div className="tileWomen">
          <Link to='/products/2'><h3>WOMEN</h3></Link></div>
          <div className="tileKids">
          <Link to='/products/3'><h3>KIDS</h3></Link></div>
        </div>
      </div>

      </div>
      <div>
        <Footer />
      </div>

    </>
  )
}

export default Homepage