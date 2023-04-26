const resolvers = {
    SimpleProduct: {
        price_range: {
            selectionSet: '{ sku }',
            resolve: (root, args, context, info) => {
                if (context.productsData) {
                    return pricingResponse(context.productsData, root)
                }
                return context.Pricing.Query.demo({
                    root,
                    args: {
                        skus: `${root.sku}`,
                    },
                    context,
                    info,
                    selectionSet:
                        '{ products { sku location quantity price ziocode} }',
                }).then((response) => {
                    context.productsData = response.products
                    return pricingResponse(context.productsData, root)
                })
            },
        },
        demoDetails: {
            selectionSet: /* GraphQL */ `
                {
                    sku
                }
            `,
            resolve(root, _args, context, info) {
                if (context.productsData) {
                    return context.productsData.filter(
                        (product) => product.sku === root.sku
                    )[0]
                }
                return context.Pricing.Query.demo({
                    root,
                    args: {
                        skus: `${root.sku}`,
                    },
                    context,
                    info,
                    selectionSet:
                        '{ products { sku location quantity price zipcode} }',
                }).then((response) => {
                    context.productsData = response.products
                    return response.products.filter(
                        (product) => product.sku === root.sku
                    )[0]
                })
            },
        },
    },
}

const pricingResponse = (productsData, root) => {
    const product = productsData.filter(
        (product) => product.sku === root.sku
    )[0]
    return {
        minimum_price: {
            regular_price: {
                value: product.price,
                currency: `USD`,
            },
        },
        maximum_price: {
            regular_price: {
                value: product.price,
                currency: `USD`,
            },
        },
    }
}

module.exports = {
    resolvers,
}
