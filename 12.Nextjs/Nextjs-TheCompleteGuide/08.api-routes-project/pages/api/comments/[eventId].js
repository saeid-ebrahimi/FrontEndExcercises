import {connectDatabase, getAllDocuments, insertDocument} from "@/helpers/db-utils";

async function handler(req, res){
    const eventId = req.query.eventId;
    let client;
    try {
        client = await connectDatabase()
    }catch (error){
        res.status(500).json({message: "Connecting to the database failed!"})
        return
    }

    if (req.method === "POST"){
        const {email,name,text} = req.body;
        if (!email || !email.includes("@") || !name || name.trim() === "" || !text || text.trim() === "" ){
            res.status(442).json({message: "Invalid input."})
            await client.close()
            return;
        }

        const newComment = {
            email,
            name,
            text,
            eventId
        }

        try{
            const result = await insertDocument(client, "comments", newComment )
            newComment._id = result.insertedId
            res.status(201).json({message: "Added comment.", comment: newComment})
            await client.close()
        }catch (error){
            res.status(500).json({message: "Inserting comment failed!"})
            await client.close()
            return;
        }
        // console.log(result);

    }
    if (req.method === "GET"){
       try{
           const documents = getAllDocuments(client,"comments", {_id:-1})
           res.status(200).json({comments: documents})
           await client.close()
       }catch (error){
           res.status(500).json({message: "Getting comments failed!"})
           await client.close()
           return
       }
        // const dummyList = [
        //     {id: "c1", name: "Max", text: "A first comment!"},
        //     {id: "c2", name: "Manuel", text: "A second comment!"}
        // ]

    }

}
export default handler;