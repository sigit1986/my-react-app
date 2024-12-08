/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
const CardProduct = (props) => {
    const {children} = props;
    return (
        <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow-lg mx-1 my-1 flex flex-col justify-between">
            {children}
        </div>
    )
}

const Header = (props) => {
    const {image, id} = props;
    return ( 
        <Link to={`/product/${id}`}>  
            <img className="rounded-t-lg p-4 h-60 w-full object-cover" src={image} alt="shoes-1" />
        </Link>
    )
}

const Body = (props) => {
    const {name, children} = props;
    return (
        <div className="px-4 pb-4 h-full">
            <a href="http://">
                <h5 className="font-bold text-xl mb-2 text-white">{name.substring(0, 20)}...</h5>
            </a>
            <p className="text-white text-s">{children.substring(0, 100)}...</p>
        </div>
    )
}
const Footer = (props) => {
    const {price, handleAddToCart, id} = props;
    return (
        <div className="flex items-center justify-between px-4 pb-4">
            <span className="text-xl font-bold text-white">{price.toLocaleString("id-ID", {style: "currency", currency: "USD"})}</span>
            <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>Add To Cart</Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;