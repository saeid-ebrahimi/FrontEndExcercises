export default function UserIdPage(props){
    return <h1>{props.id}</h1>
}

export async function getServerSideProps(context){
    const {params} = context;
    const userId = params.uid;

    return {
        props: {
            id: 'user-id-' + userId
        }
    }
}

