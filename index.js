function submitData(name, email){

    let postData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com"
          }) 
        }
        
        return fetch('http://localhost:3000/users', postData)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            document.body.innerHTML = object.id;
            console.log(object);
        })
        .catch(function(error) {
        document.body.innerHTML = error.message;
        console.log(error.message);
    })
}

submitData();