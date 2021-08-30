import React from 'react';

const Taco = (props) => {
    const renderTaco = () => {
        return (
            <div>
                <h1>{`Taco Name: ${props.taco.name}`}</h1>
                <h2>{`Price: $${props.taco.price.toFixed(2)}`}</h2>
                <h2>{`About: ${props.taco.about}`}</h2>
            </div>
        )
    }

    return (
        <div>
            <h1>Here it is, the Taco:</h1>
            {renderTaco()}
            <a href="/">Back to all Tacos</a>
        </div>
    )

}

export default Taco;