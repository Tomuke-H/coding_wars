const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]



// write a function that takes an tacoOBJ and a id

// and returns a new object with name changed to "changed"
const changeTacoName = (id) => {
    let changedTaco = tacos.find((t) => t.id == id)
    return {...changedTaco, name: "changed"};
};

// console.log(changeTacoName(2))


// write a function that takes an tacoOBJ and return some

// formatted html (will be a string technically)

const displayTacoInfo = (taco) => {
    const { id, name, price, about } = taco
    return (
        `<div>
            <h1>Id: ${id}</h1>
            <h1>Name: ${name}</h1>
            <h1>Price: ${price}</h1>
            <h1>About: ${about}</h1>
        </div>`
    )
}

// console.log(displayTacoInfo(taco1))


// write a function that takes an tacoOBJ and return formatted price with

// .00 

const formatPrice = (taco) => {
    let t = tacos.find((t) => t.id == taco.id)
    return {...t, price: t.price.toFixed(2)};
}

// console.log(formatPrice(taco2))



// create a new array where all of the prices is formatted with .00

const formatAllPrices = () => {
    return tacos.map((t) => {
        return { ...t, price: t.price.toFixed(2)}
    })
}

// console.log(formatAllPrices())

// write a function that takes an array and logs each item in the array

// hint forEach

const logItems = () => {
    tacos.forEach(t => console.log(t))
}

// logItems()

// use the find method to return the object with id:1

const findId1 = () => {
    return tacos.find(t => t.id == 1)
}

// console.log(findId1())

// return a new array with all prices greater than 19

const findExpensive = () => {
    return tacos.filter(t => t.price > 19)
}

// console.log(findExpensive())

// return a new array with a 'about' key where it is a combo of

// name price and about

const aboutAllInfo = () => {
    return tacos.map(t => {
        return {...t, about: [t.name, t.price, t.about]}
    })
}

// console.log(aboutAllInfo())


///CRUD

// don't change tacos array or change objects

// can hard code data (Don't need to get it from the users)



// READ (array of obj to array of html) 
const viewTacosArr = () => {
    return tacos.map(t => {
        return [
            `<h1>Name: ${t.name}</h1>`,
            `<h1>Id: ${t.id}</h1>`,
            `<h1>Price: ${t.price}</h1>`,
            `<h1>About: ${t.about}</h1>`
        ]
    })
} 

// console.log(viewTacosArr())

// Update (update a taco) 
const updateEntireTaco = (id, updatedTacoInfo) => {
    let taco = tacos.find(t => t.id == id);
    return taco = updatedTacoInfo;
};

// console.log(updateEntireTaco(3 ,{id:3, name:'fish eye', price:32, about:'So frickin good'}))

// Remove (delete a taco) 
const deleteTaco = (id) => {
    return tacos.filter(t => t.id != id)
}

// console.log(deleteTaco(2))

// Create (add a taco) 

const createTaco = (tacoInfo) => {
    return [...tacos, tacoInfo]
}

// console.log(createTaco({id:4, name: 'beef', price: 12, about: 'Frickin Love it'}))

// bonus use reduce to return the sum of prices in tacos array
const tacosSum = () => {
    return tacos.reduce((accum, t) => accum + t.price, 0)
}

// console.log(tacosSum())
// bonus do in rails

// bonus create you own

