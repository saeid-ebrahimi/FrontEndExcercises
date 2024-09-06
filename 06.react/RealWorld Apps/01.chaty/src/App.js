import "./App.css"
import {ChatEngine} from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
            height={"100vh"}
            projectID={"c3e66acf-f5f8-4375-a5f9-87d615844b26"}
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            rederChatFeed={(chatAppProps)=> (<ChatFeed {...chatAppProps} />)}
        />
    )
}

export default App;