import{UserProvider, useUser} from "./UserContext";

const LoggedInUser = () => {
    const {user} = useUser()
    return (
        <p>
            Hello <span className={"Username"}>{user.name}</span>
        </p>
    )
}

const Header = () => {
    return (
        <header>
            <h2>Blog App</h2>
            <LoggedInUser/>
        </header>
    )
}

const Page = () => {
    const {user} = useUser()
    return (
        <div>
            <h2>What is Lorem ipsum?</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aut commodi dolor
                dolorem error excepturi hic inventore ipsam magni officiis pariatur quas repellat repudiandae,
                soluta. Consequuntur, dignissimos ducimus enim illum ipsum nesciunt quam temporibus voluptates?
                Adipisci aperiam asperiores, aspernatur blanditiis consequatur dignissimos eum explicabo facilis
                illum incidunt libero nisi omnis quaerat quo sed soluta vero vitae. Aperiam aspernatur, cupiditate
                explicabo hic iste necessitatibus neque! A accusantium amet animi aspernatur deleniti doloribus
                ex excepturi, exercitationem fugit illum incidunt ipsum labore maxime minus modi molestiae officia
                quaerat quia repudiandae sequi, similique unde ut, velit vero voluptatibus. Amet delectus dolores
                explicabo libero maiores nesciunt numquam obcaecati recusandae reiciendis voluptate. Distinctio
                maxime mollitia officia porro qui ratione sed, temporibus? Adipisci aliquam consequatur cum distinctio
                dolor esse est eveniet, expedita facere fugit id incidunt inventore, iste laudantium maiores necessitatibus
                obcaecati perferendis quae quaerat sed sequi sunt, velit vero voluptatem voluptatum? Atque cum delectus ex hic
                , inventore nulla obcaecati quae quibusdam quis vitae! Adipisci aliquam animi architecto beatae
                cupiditate dolore eligendi in incidunt inventore ipsa ipsum laboriosam natus nesciunt praesentium quos
                ratione, sint! A dolorem excepturi fugiat harum incidunt natus neque nisi! Aperiam atque distinctio
                doloribus esse hic inventore iste, possimus quisquam sit voluptate, voluptatum?
            </p>
            <p>
                Written by {user.name}
            </p>
        </div>
    )
}

function App() {
    return (
        <div className={"App"}>
            <Header/>
            <Page/>
        </div>
    )
}
function Root(){
    return (
        <UserProvider>
            <App/>
        </UserProvider>
    )
}

export default Root;