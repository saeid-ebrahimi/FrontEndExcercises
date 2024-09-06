
import {connectDatabase, insertDocument} from "@/helpers/db-utils";

async function handler(req, res){
    if (req.method && req.method === "POST"){
        const userEmail =  req.body.email;
        if (!userEmail || !userEmail.includes("@")){
            req.status(422).json({message: "Invalid email Address!"});
            return;
        }
        let connectionClient;
        try{
            connectionClient = connectDatabase()
        }catch (error){
            res.status(500).json({message: "Connecting to the database failed!"})
            return
        }
        try{
            await insertDocument(connectionClient,"newsletter", {email:userEmail})
            await connectionClient.close();
            res.status(201).json({message: "Signed up!"})
        }catch (error){
            res.status(500).json({message:"Inserting Data Failed!"})
            return;
        }
        console.log(userEmail)

    }
    else{
        console.log(req)
    }
}


export default handler;