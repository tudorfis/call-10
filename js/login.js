 
function $( selector ) {
    return document.querySelector( selector );
}

 const inputEmail =  $("#email");
 const inputPassword =  $("#password");
 const buttonSubmit = $("#button");

 buttonSubmit.addEventListener("click", async function(){
    const emailValue = inputEmail.value;
    const passwordValue =  CryptoJS.MD5( inputPassword.value ).toString();

    const url = `https://todorescu.com/call-10/api/?method=login&params[email]=${ emailValue }&params[password]=${ passwordValue }`
    const fetchResponse = await fetch( url )
    const data = await fetchResponse.json()

    if ( data.token === '' ) {
        const loginNotification = $( '.login-notification' )
        loginNotification.classList.remove( 'hide' )

        inputPassword.value = ''

        loginNotification.querySelector( '.delete' ).addEventListener( 'click', function() {
            loginNotification.classList.add( 'hide' )
        })
    }
    else {
        sessionStorage.setItem( 'token', data.token )
        window.location = './dashboard.html'
    }
})
