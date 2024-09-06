import  fs from 'fs';
import path from 'path'

export function buildFeedbackPath() {
    return path.join(process.cwd(),"data", "feedback.json")
}
export const extractFeedback = (filePath) => {
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData)
    return data
}
function handler(req,res){
    if (req.method === "POST"){
        const reqBody = JSON.parse(req.body)
        console.log(reqBody.email)
        const email = reqBody.email
        const text = reqBody.text
        const newFeedback = {
            id: Math.random().toString(16).slice(2),
            email:email,
            text:text
        }
        const filePath = buildFeedbackPath()
        const data = extractFeedback(filePath)
        data.push(newFeedback);
        fs.writeFileSync(filePath, JSON.stringify(data))
        res.status(201).json({message:"Success", feedback: newFeedback})
    }else{
        const filePath = buildFeedbackPath()
        const data = extractFeedback(filePath)
        res.status(200).json({feedback: data})

    }

}

export default handler;