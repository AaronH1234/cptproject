function login_user(){
    const url = 'http://127.0.0.1:8086/api/users/authenticate'; // Authentication endpoint

    // Get user ID and password from the form
    const body = {
        "uid": document.getElementById("uid").value,
        "password": document.getElementById("password").value,
    };

    // Options for authentication request
    const authOptions = {
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify(body)
    };

    // Fetch for authentication
    fetch(url, authOptions)
    .then(response => {
        if (!response.ok) { // Handle error response
            const errorMsg = 'Login error: ' + response.status;
            console.log(errorMsg);
            return;
        }
        // On success, redirect to the database page
        else {
            window.location.href = "http://localhost:4100/cptproject/c4.1/2024/02/05/CPTProjectFinder_IPYNB_2.html";
        }
    })
    .catch(err => { // Handle fetch errors
        console.error(err);
    });
}
