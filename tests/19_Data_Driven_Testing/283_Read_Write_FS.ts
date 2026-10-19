import fs from 'fs';
import path from 'path';
import { json } from 'stream/consumers';


// Always build paths from __dirname. A bare './280_Users.json' resolves
// against the working directory, so it breaks when run from elsewhere.

const filePath = path.join(__dirname,'280_Users.json');
console.log(filePath);

const fileData = fs.readFileSync(filePath,'utf-8');
const userDataJSObject = JSON.parse(fileData);
console.log("userData is ",userDataJSObject);


console.log(userDataJSObject.username);
console.log(userDataJSObject.password);


// Writing Data to a JSON File
const user = {
    name : "Shashank",
    role : "QA Trainer"
}

const jsonData = JSON.stringify(user);
fs.writeFileSync("output.json", jsonData);
console.log("JSON file created successfully");

