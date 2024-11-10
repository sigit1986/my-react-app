/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Button from "../Elements/Button";
const CardProduct = (props) => {
    const {children} = props;
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-lg mx-2 flex flex-col justify-between">
            {children}
        </div>
    )
}

const Header = (props) => {
    const {image} = props;
    return ( 
        <a href="http://">
            <img className="rounded-t-lg p-5" src={image} alt="shoes-1" />
        </a>
    )
}

const Body = (props) => {
    const {name, children} = props;
    return (
        <div className="px-5 pb-5 h-full">
            <a href="http://">
                <h5 className="font-bold text-xl mb-2 text-white">{name}</h5>
            </a>
            <p className="text-white text-s">{children}</p>
        </div>
    )
}
const Footer = (props) => {
    const {price} = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">{price}</span>
            <Button classname="bg-blue-600">Add To Cart</Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;