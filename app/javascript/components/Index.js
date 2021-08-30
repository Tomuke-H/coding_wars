import React from 'react';

const Index = (props) => {
    const { tacos } = props;
    const displayTacos = () => {
        return tacos.map(t => {
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
            <h1>Welcome to Tom's Taco emporium!</h1>
            <a href="/sale">See our sale prices</a>
            <a href="/sort">Sort page</a>
            {displayTacos()}
        </div>
    )
}

export default Index;