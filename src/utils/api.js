const apiUrl = 'http://api-vanhack-event-sp.azurewebsites.net'

const headers = {  'Accept': 'application/json', 'Content-Type': 'application/json-patch+json'}


// CREATE CUSTOMER
export function createCustomer(values) {
    return fetch(`${apiUrl}/api/v1/Customer`, { 
        method: 'POST',
        headers: headers,
        body: JSON.stringify(values)
    })
    .then((res) => res.json())
    .then((data) => data)
}

// AUTH CUSTOMER
export function authCustomer(values) {
    return fetch(`${apiUrl}/api/v1/Customer/auth`, { 
        method: 'POST',
        headers: headers,
        body: JSON.stringify(values)
    })
    .then((res) => res.json())
    .then((data) => data)
}


// GET STORES

export function getStores(){
    return fetch(`${apiUrl}/api/v1/Store`, { headers })
            .then((res) => res.json())
            .then((data) => data)
}

// GET PRODUCTS

export function getProducts(value){
    console.log('redux: ', value)
    return fetch(`${apiUrl}/api/v1/Store/${value}/products`, { headers })
            .then((res) => res.json())
            .then((data) => data)
}

