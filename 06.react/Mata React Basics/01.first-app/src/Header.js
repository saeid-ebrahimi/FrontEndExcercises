function Header(props){
    return ( <h1 title={"an title for header"}>{props.title}</h1>)  //JSX syntax
    //return React.createElement("h1",{title:"an title for header"}, props.title) // JS Syntax
}

export default Header;