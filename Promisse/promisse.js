const MinhaPromisse = () =>{
  return new Promise( function(resolve, reject){
    let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/andersonarorj');
        xhr.send(null);

        xhr.onreadystatechange = () =>{
          if(xhr.readyState === 4){
            if(xhr.status === 200){
              resolve(JSON.parse(xhr.responseText));
            } else{
              reject('Error on requisition');
            }
          }
        }
  });
}

MinhaPromisse()
    .then( (response) => {
      console.log(response);
      //Retorna a resposta certa para os dados.
    })
    .catch( (error) =>{
      //Captura os erros dentro da promisse.
      console.log(error);
    });
