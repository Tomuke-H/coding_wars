import React from 'react';

const Prices = (props) => {
    const { tacos } = props;
    const salePrices = () => {
        return tacos.map((t) => {
            return (
                <div>
                    <h1>{`Taco: ${t.name}`}</h1>
                    <h1>{`Price: ${(t.price *.75).toFixed(2)}`}</h1>
                </div>
            )
        })
    }

    return (
        <div>
            <h1>Taco Sale prices</h1>
            <h1>25% off</h1>
            <a href="/">Back to all Tacos</a>
            {salePrices()}
        </div>
    )
}

export default Prices;