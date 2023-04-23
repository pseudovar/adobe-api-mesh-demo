import './styles.css'
import 'react-tooltip/dist/react-tooltip.css'
import React from 'react'
import { Tooltip } from 'react-tooltip'
import query from './query.js'

// const API_MESH_URL =
//   "https://graph.adobe.io/api/c29aab13-2a06-41c5-8f67-5632ad62598c/graphql?api_key=077cf40dae5144ef8b799b0d53964e24";
const API_MESH_URL =
    'https://graph.adobe.io/api/f94967db-30e8-41f9-bc20-4c4f618b12cc/graphql?api_key=99f0c5c18d2249b188d92529f31ccdf1'

class APIMeshExample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            inventory: [],
            salePrice: 55,
        }
    }

    componentDidMount() {
        let options = {
            method: 'post',
            body: JSON.stringify(query),
            headers: {
                'content-type': 'application/json',
            },
        }

        fetch(API_MESH_URL, options)
            .then((response) => response.json())
            .then((res) => {
                console.log(res)

                this.setState({
                    products: res.data.products.items,
                    // inventory: res.data.inventory
                })
            })
    }

    render() {
        return (
            <>
                <div>
                    <ul>
                        {this.state.products.map((item, idx) => (
                            <>
                                <li key={item.sku}>
                                    <img
                                        id={item.image.url}
                                        src={item.image.url}
                                        alt={item.name}
                                    />
                                    <p
                                        className="item-name auto-width"
                                        id={item.name}
                                    >
                                        {item.name}
                                    </p>

                                    {this.state.salePrice ? (
                                        <div className="price-container">
                                            <p
                                                className="price"
                                                id={
                                                    idx +
                                                    item.price_range
                                                        .minimum_price
                                                        .regular_price.value
                                                }
                                            >
                                                $
                                                {
                                                    item.price_range
                                                        .minimum_price
                                                        .regular_price.value
                                                }
                                            </p>
                                        </div>
                                    ) : (
                                        <p id="price">
                                            $
                                            {
                                                item.price_range.minimum_price
                                                    .regular_price.value
                                            }
                                        </p>
                                    )}

                                    <button>ADD TO CART</button>
                                    <span>&#9825;</span>
                                    <Tooltip
                                        anchorId={item.image.url}
                                        place="bottom"
                                        content="Source: Venia Catalogue"
                                    />

                                    <Tooltip
                                        anchorId={item.name}
                                        place="bottom"
                                        content="Source: Venia Catalogue"
                                    />

                                    <Tooltip
                                        anchorId={
                                            idx +
                                            item.price_range.minimum_price
                                                .regular_price.value
                                        }
                                        place="bottom"
                                        content="Source: Venia Catalogue"
                                    />

                                    <Tooltip
                                        anchorId={idx + this.state.salePrice}
                                        place="bottom"
                                        content="Source: Sales data"
                                    />

                                    <Tooltip
                                        anchorId={item.sku}
                                        place="bottom"
                                        content="Source: Inventory data"
                                    />

                                    <Tooltip
                                        anchorId={item.sku + idx}
                                        place="bottom"
                                        content="Source: Inventory data"
                                    />
                                </li>
                            </>
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}

export default APIMeshExample
