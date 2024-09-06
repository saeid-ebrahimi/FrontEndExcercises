import {MongoClient} from "mongodb";

export async function connectDatabase() {
    const connectionClient = await MongoClient.connect(
        'mongodb+srv://saeid:saeid123456@cluster0.8nvozrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    return connectionClient;
}
export async function insertDocument(client,collection, document){
    const mdb = client.db('events');
    const result = await mdb.collection(collection).insertOne(document)
    return result
}
export async function getAllDocuments(client, collection, sortBy){
    const mdb = client.db('events')
    const documents = mdb.collection(collection).find().sort(sortBy).toArray()
    return documents
}