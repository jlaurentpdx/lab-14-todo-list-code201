// import functions and grab DOM elements
const loginPageRedir = document.getElementById('login-page-redir');

// initialize global state


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

loginPageRedir.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.replace('./login/');
});
