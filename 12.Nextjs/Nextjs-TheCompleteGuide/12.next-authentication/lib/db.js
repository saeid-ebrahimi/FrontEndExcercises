import {MongoClient} from "mongodb";
export async function connectToDatabase(){
    const client = await MongoClient.connect('mongodb+srv://saeid:saeid123456@cluster0.8nvozrn.mongodb.net/auth-demo?retryWrites=true&w=majority&appName=Cluster0')
    return client
}