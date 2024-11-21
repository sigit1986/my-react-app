/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        image: "/img/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        price: 100000
    },
    {
        id: 2,
        name: "Sepatu Lama",
        image: "/img/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet,  nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        price: 200000
    },
    {
        id: 3,
        name: "Sepatu Bilbong",
        image: "/img/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        price: 500000
    }
];

const email = localStorage.getItem("email");
const ProductPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, item) =>{
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    },[cart]);
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }

    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
        setCart(
            cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item)
            
        )    
        } else {
            setCart([...cart, {id, qty: 1}]);
        }
    }

    // useRef
    const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

    const handleAddToCartRef = (id) => {
        cartRef.current = [...cartRef.current, {id, qty: 1}];
        localStorage.setItem("cart", JSON.stringify(cartRef.current));
    };

    const totalPriceRef = useRef(null);

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        }else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);

    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex flex-wrap justify-center py-4">
                <div className="w-4/6 flex flex-wrap">
                    {products.map((product) => {
                        return (
                            <CardProduct key={product.id}>
                                <CardProduct.Header image={product.image} />
                                <CardProduct.Body name={product.name}>
                                    {product.description}
                                </CardProduct.Body>
                                <CardProduct.Footer 
                                price={product.price} 
                                id={product.id}
                                handleAddToCart={handleAddToCart} 
                                />
                            </CardProduct>
                        )
                    })}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-2">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id);
                                return (
                                    <tr key={item.id}>
                                        <td className="p-1">{product.name}</td>
                                        <td className="p-1">{product.price.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}</td>
                                        <td className="p-1">{item.qty}</td>
                                        <td className="p-1">{(item.qty * product.price).toLocaleString("id-ID", {style: "currency", currency: "IDR"})}</td>
                                    </tr>
                                )
                            })}
                            <tr ref={totalPriceRef}>
                                <td colSpan={3}>
                                    <b>Total Price</b>
                                </td>
                                <td>
                                    <b>
                                        {totalPrice.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}
                                    </b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="mt-5 flex justify-center">
                <Counter></Counter>
            </div> */}
        </Fragment>
    )      
}

export default ProductPage;
