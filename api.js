console.log("hello marvel api");


const apiPrivate = "2f9dd4ee89d1bb10c4834093fc931805293aa9cc"

const publicKey = "3a4ad0f271eaaa3ac4ca105f93067049"

// fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}`, {
//         method: 'GET',
//         headers: {
//         'Content-Type': 'application/json',
//         'x-api-key': apiPrivate
//         }
//     })
// .then(function(response) {
//         return response.json();
//     })
// .then(function(json) {
//         return json;
//     });


fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiPrivate
        }
})
    .then(res =>{
        return res.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))