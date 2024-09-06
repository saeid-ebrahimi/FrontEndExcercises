import {MongoClient} from  "mongodb"
async function handler(req, res){
    if (req.method === "POST"){

    }else{
        const connectionClient = await MongoClient.connect("mongodb+srv://saeid:saeid123456@cluster0.8nvozrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        const mdb = connectionClient.db("newsletter");
        const allEvents = await mdb.collection("events").find({}).toArray()
        res.status(200).json(allEvents)
    }
}
export default handler;
