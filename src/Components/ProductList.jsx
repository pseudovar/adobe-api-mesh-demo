import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const API_MESH_URL = import.meta.env.VITE_API_MESH_URL
const SEARCH_TERM = import.meta.env.VITE_SEARCH_TERM

const query = {
    query: `{
    products(search: "${SEARCH_TERM}") {
      items {
        name
        sku
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
        image {
          url
        }
      }
    }
  }`,
}

const options = {
    method: 'post',
    body: JSON.stringify(query),
    headers: {
        'content-type': 'application/json',
    },
}

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(API_MESH_URL, options)
            .then((response) => response.json())
            .then((res) => {
                console.log(res)

                setProducts(res.data.products.items)
            })
    }, [])
    return (
        <div className="mx-auto max-w-7xl overflow-hidden px-6 lg:px-8 mb-20">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                Customers also purchased
            </h2>

            <div className="-mx-px grid grid-cols-2 border-l border-t border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard product={product} key={product.sku} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
