import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

function Room() {

    const product = useSelector(function (state) {
        // console.log(state.products.dataById[0])
        return state.products.dataById[0]
    })


    return (
        <>
            <Navbar />
            <div className="adjustement">

                <Link to="/"><span><i className="fa fa-long-arrow-left"></i>&nbsp; &nbsp;BACK</span></Link>
                <a ><span>Home</span></a>

                <h1 id="productHeading">{product?.categoryName}<span id="totalProductsCount"></span></h1>

                <div className="buttonsDiv">

                    <select name="price" id="priceFilter" className="filterButtons">
                        <option value="default">HARGA</option>
                        <option value="low" className="filterButtons">(Low - High)</option>
                        <option value="high" className="filterButtons">(High - Low)</option>
                    </select>

                    <select name="division" id="divisionFilter" className="filterButtons">
                        <option value="default"> DIVISION</option>
                        <option value="clothing">CLOTHING</option>
                        <option value="shoes">SHOES</option>
                        <option value="accessories">ACCESSORIES</option>
                    </select>

                    <select name="productType" id="productType" className="filterButtons">
                        <option value="default"> PRODUCT TYPE</option>
                        <option value="sneakers">SNEAKERS</option>
                        <option value="football">FOOTBALL</option>
                        <option value="sportsShoes">SPORTS SHOES</option>
                        <option value="Tshirts">T-SHIRTS</option>
                        <option value="sportsWear">SPORTS WEAR</option>
                    </select>

                    <select name="brand" id="brand" className="filterButtons">
                        <option value="default">BRAND</option>
                        <option value="performance">PERFORMANCE</option>
                        <option value="originals">ORIGINALS</option>
                        <option value="sportsInspired">SPORTS INSPIRED</option>
                        <option value="sportsWear">SPORTS WEAR</option>
                    </select>

                    <select name="collection" id="collection" className="filterButtons">
                        <option value="default">COLLECTION</option>
                        <option value="clima">CLIMA</option>
                        <option value="adicolor">ADICOLOR</option>
                        <option value="ultraBoost">ULTRA BOOST</option>
                        <option value="superNova">SUPER NOVA</option>
                    </select>

                    <select name="sustainability" id="sustainability" className="filterButtons">
                        <option value="default">SUSTAINABILITY</option>
                        <option value="sustainable">SUSTAINABLE</option>
                        <option value="vegan">VEGAN</option>
                        <option value="organicCotton">ORGANIC COTTON</option>
                        <option value="colorWithCare">COLOR WITH CARE</option>
                    </select>




                    <button className="filterButtons">CLEAR FILTER</button>
                </div>
                <Card />
            </div>
            <Footer />
        </>
    )
}

export default Room