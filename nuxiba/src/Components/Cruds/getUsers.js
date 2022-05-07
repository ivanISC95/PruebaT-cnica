// FUNCION GET DE USUARIOS
export default function getUsers(){
    const URL = 'https://jsonplaceholder.typicode.com/users';
    return fetch(URL)
        .then(Response => Response.json())
}

export function getPosts(id){
    const URL = `https://jsonplaceholder.typicode.com/users/${id}/posts`;
    return fetch(URL)
        .then(Response => Response.json())
}

export function getTodos(id){
    const URL = `https://jsonplaceholder.typicode.com/users/${id}/todos`;
    return fetch(URL)
        .then(Response => Response.json())
}

export function postTodos(id,data){
    const URL = `https://jsonplaceholder.typicode.com/users/${id}/todos`;
    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };  
    return  fetch(URL,request)
        .then(Response => Response.json())
        .catch(error => console.error(error))
        .then(Response => {return(console.log('Success:', Response))});    
}