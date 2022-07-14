import {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export const BestSellers = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([])
    useEffect(()=>{
        //server request
        let promise = axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products')
        promise.then((res)=>{
            let products = res.data
            setProducts(products)
        })
    },[])

    const showProductHandler = ()=>{
        navigate('product');
    }

    return (
        <div className='bestSeller'>
            <h2>BestSellers</h2>
            <div className='cards'>
                {
                    products.map((pr)=>{
                        return(
                            <div className="card" key={pr.id}>
                                <img src={pr.image} alt="img" />
                                <h4>{pr.title}</h4>
                                <p className="price">${pr.price}</p>
                                <button onClick={showProductHandler}>Show more</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}