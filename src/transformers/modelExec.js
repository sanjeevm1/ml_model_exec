import { getSentimentAnalysisModel, getTextGenModel } from "./model"


export const generateText = async (text)=>{

    const model = await getTextGenModel()
    let output = await model(text)
    console.log(output)

    return output[0].generated_text
}

export const analyseText = async (text)=>{

    const model = await getSentimentAnalysisModel()
    let output = await model(text)

    console.log(output);
    return output[0];
}