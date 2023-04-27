import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <div
            key={product.sku}
            className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
        >
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <img
                    src={product.image.url}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="pb-4 pt-10 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                    <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                    </a>
                </h3>
                <p className="mt-4 text-base font-medium text-gray-900">
                    {new Intl.NumberFormat('en-AU', {
                        style: 'currency',
                        currency: 'AUD',
                    }).format(
                        product.price_range.minimum_price.regular_price.value
                    )}
                </p>
            </div>
        </div>
    )
}

export default ProductCard
