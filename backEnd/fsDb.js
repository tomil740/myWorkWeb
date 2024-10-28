/*
will be currently a mock for the backend layer that could merge at newer versions
In practice:
 * create the db(which is jason file) with the object 
 * all of the actull method to controll the data :
    * initalize the file (with our constrcuter of the dao)
    * pull all of the object data 
    * add new object to the collection
*/

//const fs = require('node:fs');
import * as fs from 'fs';


//import fs from 'fs-js';

class FsDb{
    constructor(fileName){
        if(!fileName){
            throw new Error('creating a dao requered a file name');
        }
        this.fileName = fileName;
        //try to acess the file 
        try{
            fs.accessSync(this.fileName);
        }catch(err){
            //if there is an error then its proberly need to be initalized
            fs.writeFileSync(this.fileName,'[]');
        }
        console.log("theee",this.getAll());
        //test(this);
    }


    async getAll(){
        const content = await fs.promises.readFile(this.fileName,{encoding : 'UTF8'});
        const data = JSON.parse(content);
        console.log("theDa",data);
        return data
    }

    async insertDeclare(declareObj){
        const currentFile = await this.getAll();
        currentFile.push(declareObj);
        await fs.promises.writeFile(this.fileName,JSON.stringify(currentFile));
    }
}
export const fsDb = new FsDb("workDeclaries.json");

async function test(ref){
    const a = await ref.getAll();
    console.log(a);
    await ref.insertDeclare({someObj:"sfas",workTime:5});
    const b = await ref.getAll();
    console.log(b.date);
}

export default fsDb;




