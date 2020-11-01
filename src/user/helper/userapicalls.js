const { API } = require("../../backend");

export const getuser =()=>{
    return fetch(`${API}/users`,{method : "GET"})
        .then(responce =>{
            return responce.json()
        })
        .catch(err=> console.log(err))
}