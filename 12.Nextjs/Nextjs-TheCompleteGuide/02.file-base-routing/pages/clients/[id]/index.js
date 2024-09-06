import {useRouter} from "next/router";

function ClientProjectPage(){
    const router = useRouter();

    function loadProjectHandler(){
        // router.push('/clients/max/projectA')
        router.push({pathname:'/clients/[id]/[clientprojectid]', query: {id:router.query.id, clientprojectid:"projecta"}})
    }


    console.log(router.query);
    return(
        <div>
            <h1>The Projects of Client {router.query.id}</h1>
            <button onClick={loadProjectHandler} >Load Project A</button>
        </div>
    )
}
export default ClientProjectPage;