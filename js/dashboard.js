
async function checkLogin() {
    const token = sessionStorage.getItem( 'token' )

    if ( !token ) {
        window.location = "./login.html"
    }
    
    const url = `https://todorescu.com/call-10/api/?method=checkLogin&params[token]=${ token }`
    const fetchResponse = await fetch( url )
    const data = await fetchResponse.json()
    
    if ( !data.valid ) {
        window.location = "./login.html"
    }
}

checkLogin()