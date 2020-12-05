 const GetUserName = _ =>{
   let UserName = document.getElementById('UserField').value;

      let Ajax = new XMLHttpRequest();
        Ajax.open('GET', `https://api.github.com/users/${UserName}`);
        Ajax.send(null);
        Ajax.onreadystatechange = _ =>{
          let Dados = JSON.parse(Ajax.responseText);
            console.log(Dados);

            //Data about user
          let userImage = Dados.avatar_url
            let ImageTag = document.getElementById('UserImage');
                ImageTag.src = userImage;
          
          let UserLinkTag = document.getElementById('UserLink');
              UserLinkTag.innerHTML = "Perfil no Github";
              UserLinkTag.href = Dados.html_url;
          
          let UserNameTag = document.getElementById('UserName');
              UserNameTag.innerHTML = Dados.name;

          let UserBioTag = document.getElementById('UserBio');
              UserBioTag.innerText = Dados.bio;
          
          let UserFollowersTag = document.getElementById('UserFollowers');
              UserFollowersTag.innerHTML = Dados.followers;

          let UserFollowingTag = document.getElementById('UserFollowing');
              UserFollowingTag.innerHTML = Dados.following;

          let FollowersTwitterTag = document.getElementById('UserFollowersTwitter');
              FollowersTwitterTag.innerHTML = Dados.twitter_username;
        }
    }


