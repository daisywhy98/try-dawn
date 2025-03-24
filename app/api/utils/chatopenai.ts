


const {Configuration, OpenAIApi} =require("openai");
const configuration=new Configuration({
    apiKey:process.env.OPENAI_API_KEY,
})

const ChatOpenai= new OpenAIApi(configuration);
export default async function (req?:Request,res?:Response){
    if (configuration.apiKey){
        console.log(configuration.apiKey)
    }
}