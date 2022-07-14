import {useEffect, useState} from "react";
import axios from "axios";
import rating from './assets/img/rating.svg'
import cartWhite from './assets/img/cartWhite.svg'
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import arrow from './assets/img/arrowBack.svg'

export const Product =()=>{
    let { productId } = useParams();
    const [product, setProduct]= useState(null)
    useEffect(()=>{
        let promise = axios.get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${productId}`)
        promise.then((res)=>{
            const product = res.data
            setProduct(product)
        })
    })
    return(
        <div>
            {
                product === null
                    ? <h2>Продукт еще грузится ...</h2>:
                <div>
                    <div className="arrowBack">
                        <Link to={"/"}>
                            <img src={arrow} alt="" />
                            Back to Best Seller
                        </Link>
                    </div>
                    <div className="product">
                        <img src={product.image} alt="" />
                        <div className="info">
                            <p className="title">{product.title}</p>
                            <p className="price">$ {product.price}</p>
                            <div className="rating">
                                <p>Rating: {product.rating.rate}</p>
                                <img src={rating} alt="" />
                            </div>
                            <div className="category">
                                <span>Category:</span>
                                <p>{product.category}</p>
                            </div>
                            <p className="description">{product.description}</p>
                            <button>
                                <img src={cartWhite} alt="" />
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}