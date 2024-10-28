import dao from '../data/appRepo.js';

class Entry{
    constructor(){
        const a = "asfsf"
        dao.getAllDeclaries();
        dao.getAllDeclaries();
        //this.#init();
    }

    async #init(){
        await dao.insertDeclare(JSON.parse('{"name":"John", "age":30, "car":null}'));
    }
}
const a = new Entry();