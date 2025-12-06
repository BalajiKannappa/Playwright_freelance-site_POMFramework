import fs from "fs"
import Papa from "papaparse"

export function readCSV(filePath)
{
   
    console.log("reading csv file")

    //1.read the file using fs module, returns a string value
    const fileContent = fs.readFileSync(filePath, "utf-8") 

    //2. Coverts the string into javascript objects
    //if multiple rows are there, mutiple JS objects will be returned, so run a loop
    const result = Papa.parse(fileContent,{header: "true"})

    //3. returns the 'JS object array/JSON array' to the function.
    //Papa Parse returns an object with multiple things (data, errors, meta)
    //we only want the actual rows, so returning 'result.data'
    return result.data

}