 axios.get('https://api.github.com/users/andersonarorjdev')
          .then((response) =>{
            console.log(response.data.bio); //Returns user bio's;
          })
          .catch((error) =>{
            console.log(error);
          });
