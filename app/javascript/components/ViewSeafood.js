import React from 'react';

const Fish = (props) => {
    const { tacos } = props;
    const renderFish = () => {
        const fishTacos = tacos.filter(t => t.name == "fish")
        return fishTacos.map(t => {
            return (
                <div>
                    <h1>{`Taco Name: ${t.name}`}</h1>
                    <h2>{`Price: $${t.price.toFixed(2)}`}</h2>
                    <h2>{`About: ${t.about}`}</h2>
                    <a href={`/tacos/${t.id}`}>View the Taco</a>
                </div>
            )
        })
    }

    return (
        <div>
            <h1>All Seafood Options:</h1>
            <a href="/">Back To All Fish</a>
            {renderFish()}
        </div>
    )
}

export default Fish;