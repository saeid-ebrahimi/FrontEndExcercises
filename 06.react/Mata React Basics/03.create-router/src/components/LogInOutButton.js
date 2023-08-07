function LogInOutButton(props){
    const isLoggedIn = props.isLoggedIn
    if(isLoggedIn){
        return <LogoutButton/>
    }else{
        return <LogInButton/>
    }
}