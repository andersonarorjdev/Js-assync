let Ajax = new XMLHttpRequest();

Ajax.open('GET', 'https://api.github.com/users/andersonarorjdev');
Ajax.send(null);
Ajax.onreadystatechange = _ =>{
  let Dados = JSON.parse(Ajax.responseText);
  console.log(Dados);
  alert(Dados.login);
}

const CreateImageFromUSer = _ =>{
 let ProfileUser = document.createElement('img');
 ProfileUser
}