
  function signup() {
       var name = document.getElementById('name').value;
       var uid = document.getElementById('uid').value;
       var password = document.getElementById('password').value;
       var body = {
           name: name,
           uid: uid,
           password: password
       };
       fetch('http://127.0.0.1:8888/api/users/create', {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            credentials: 'include', // include, same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-cache',
            body: JSON.stringify(body)
       })
       .then(response => response.json())
       .then(data => {
           console.log('Sign Up successful:', data);
           window.location.href = "http://localhost:4100/cptproject/2024/02/11/loginpagetest.html";
       })
       .catch(error => {
           console.error('Error:', error);
       });
   }

