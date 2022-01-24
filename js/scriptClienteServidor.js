var config = {
    apiKey: "AIzaSyCxOsPwSgcQJWg5wPSHUUpD6_sRsRc417o",
    authDomain: "diego-add8c.firebaseapp.com",
    databaseURL: "https://diego-add8c.firebaseio.com",
    projectId: "diego-add8c",
    storageBucket: "diego-add8c.appspot.com",
    messagingSenderId: "349367773725"
  };
  
firebase.initializeApp(config);

function saveToList(event) {
    if (event.which == 13 || event.keyCode == 13) { 
        var nickname = document.getElementById('txtNickname').value.trim();
        var randomNum = Math.floor((Math.random() * 1000) + 1) + Math.floor((Math.random() * 15) + 5);
        if (nickname.length > 0) {
            firebase.database().ref().child('usuario').push({
                id: randomNum,
                name: nickname
            });
        }
        //document.getElementById('movieName').value = '';
        return false;
    }
};


function login(){
    var nickname = document.getElementById('txtNickname').value.trim();
  /*  var randomNum = Math.floor((Math.random() * 1000) + 1) + Math.floor((Math.random() * 15) + 5);

    alert(nickname);
    alert(randomNum);

    if (nickname.length > 0) {
        alert("entra");
        firebase.database().ref().child('usuario').push({
            //idUsuario: randomNum,
            name: nickname
        });
    }*/
    var movieName = nickname;
        if (movieName.length > 0) {
            firebase.database().ref().child('movies').push({
                name: movieName
            })
            .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        })
        ;
        }
        //document.getElementById('movieName').value = '';
        return false;
}

// function logout(){
//     localStorage.user=0;
//     alert("Gracias por haber utilizado CHATito!");
// }

// function saveToList(event) {
//     if (event.which == 13 || event.keyCode == 13) { 
//         var movieName = document.getElementById('movieName').value.trim();
//         if (movieName.length > 0) {
//             firebase.database().ref().child('movies').push({
//                 name: movieName
//             });
//         }
//         document.getElementById('movieName').value = '';
//         return false;
//     }
// };

// firebase.database().ref().child('movies').on("value", function(misdatos) {
//     var data = misdatos.val();
//     var lista = '';

//     for (var key in data) {
//         var name = data[key].name;

//         lista += '<li>' + name + '</li>';
//     }

//     document.getElementById('favMovies').innerHTML = lista;

// });

