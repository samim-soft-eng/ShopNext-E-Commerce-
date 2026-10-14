import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import { useContext } from 'react'
// import { SingleProduct } from './Products'

function ProductDetails() {
    // const product = useContext(SingleProduct)

    const [product, setproduct] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState("")

    const { id } = useParams()

    async function getApiData() {
        try {
            const result = await axios.get(`https://fakestoreapi.com/products/${id}`)
            console.log(result.data)
            setproduct(result.data)

        }
        catch (error) {
            seterror("Failed to fetch product details")
        }
        finally {
            setloading(false)
        }
    }

    useEffect(() => {
        getApiData()
    }, [id])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className="product-details-page">
            <h1 className="details-title">Product Details</h1>

            {
                (!product) ? (<h1 className="not-found">Product not found</h1>) : (
                    <div key={product.id} className="product-details-card">
                        <div className="product-image-box">
                            <img className="product-image" src={product.image} alt={product.title} />
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">{product.title}</h3>
                            <p className="product-price">${product.price}</p>
                            <p className="product-rating">⭐ {product.rating.rate} ({product.rating.count})</p>
                            <p className="product-description">{product.description}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ProductDetails