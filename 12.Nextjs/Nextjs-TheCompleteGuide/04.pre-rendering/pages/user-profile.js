export default function UserProfilePage(props){
    return <h1>{props.username}</h1>
}

export async function getServerSideProps(context){
    const {params, req, res} = context;
    
    // return {redirect: {destination: "/"}}
    // return {notFound:true}
    return {
        props: {
        username: "Max",
        }
    }
}
