 const GetUserName = _ =>{
   let UserName = document.getElementById('UserField').value;

      let Ajax = new XMLHttpRequest();
        Ajax.open('GET', `https://api.github.com/users/${UserName}`);
        Ajax.send(null);
        Ajax.onreadystatechange = _ =>{
          let Dados = JSON.parse(Ajax.responseText);
          let Body = document.querySelector('Body')
          let userImage = Dados.avatar_url
    
            let ImageTag = document.getElementById('UserImage');
                ImageTag.src = userImage;
        }
    }

GetUserImage();

