const ProductCard = ({ product, demoVersion }) => {
    let demoHighlights = {
        img: 'group-hover:border-red-700',
        name: 'group-hover:border-red-700',
        price: 'group-hover:border-red-700',
        stock: 'group-hover:border-red-700',
    }

    if (demoVersion >= 3) {
        demoHighlights.price = 'group-hover:border-green-700'
    }

    return (
        <div
            key={product.sku}
            className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
        >
            <div
                className={
                    'aspect-h-1 aspect-w-1 overflow-hidden rounded-lg border-2 border-transparent ' +
                    demoHighlights.img
                }
            >
                <img
                    src={product.image.url}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="pb-4 pt-10 text-center">
                <h3
                    className={
                        'text-sm font-medium text-gray-900 rounded-lg border-2 border-transparent ' +
                        demoHighlights.name
                    }
                >
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                </h3>
                <p
                    className={
                        'mt-4 text-base font-medium text-gray-900 rounded-lg border-2 border-transparent ' +
                        demoHighlights.price
                    }
                >
                    {new Intl.NumberFormat('en-AU', {
                        style: 'currency',
                        currency: 'AUD',
                    }).format(
                        product.price_range.minimum_price.regular_price.value
                    )}
                </p>
            </div>
            <div
                className={
                    'text-slate-700 text-center text-sm rounded-lg border-2 border-transparent ' +
                    demoHighlights.stock
                }
            >
                {product.stock_status == 'IN_STOCK'
                    ? 'In stock'
                    : 'Out of Stock'}
            </div>
        </div>
    )
}

export default ProductCard
