/* eslint-disable no-unused-vars */
import CardProduct from "../components/Fragments/CardProduct";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        image: "/img/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        price: "$120"
    },
    {
        id: 2,
        name: "Sepatu Baru",
        image: "/img/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        price: "$200"
    },
    {
        id: 3,
        name: "Sepatu Baru",
        image: "/img/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        price: "$300"
    }
];
const ProductPage = () => {
    return (
        <div className="flex flex-wrap justify-center py-5">
            {products.map((product) => {
                return (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                )
            })}
        </div>
    )      
}

export default ProductPage;
