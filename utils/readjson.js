import fs from 'fs'

export function readJSON(filepath){

    //1.Read the json file using fs's method and returns a string
    const fileContent = fs.readFileSync(filepath, "utf-8")

    //2.convert the string text to JSON object
    const data = JSON.parse(fileContent)

    return data

}