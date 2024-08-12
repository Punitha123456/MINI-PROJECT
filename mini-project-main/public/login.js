
// signup & login

document.addEventListener('DOMContentLoaded',() => {

    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const toggleButton = document.getElementById('toggleFormButton')

    if(loginForm){

        loginForm.addEventListener('submit', function(event){
            event.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
        
            fetch('/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password})
            })
            .then(response => response.json())
            .then(data =>{
                if(data.success){
                    window.location.href = '/topics';
                }
                else{
                    console.log('Login Failed', data)
                }
            });
        });
        toggleButton.addEventListener('click', () => {
            window.location.href = '/signup';
        });
    }

    if(signupForm){

        signupForm.addEventListener('submit', function(event){
            event.preventDefault();
            const username = document.getElementById('signupUsername').value;
            const password = document.getElementById('signupPassword').value;
        
            fetch('/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            })
            .then(response => response.json())
            .then(data => {
                window.location.href = '/topics';
            });
        });
        toggleButton.addEventListener('click', () => {
            window.location.href = '/login';
          });

    }
});
    