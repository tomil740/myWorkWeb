class Dao{
    constructor(){
        this.baseRoute = "http://localhost:3100";
    }

    getAllDeclaries(){ 
        return new Promise((resolve,reject)=>{
             fetch(`${this.baseRoute}/declaries`).then(
                 (response)=> {response.json().then((data)=>
                     resolve(JSON.stringify(data))
                 )
                 }
             )
         })
     }

     async insertDeclare(declareObj){
        //get the matcehd player room at the time
        const request = new Request(`${this.baseRoute}/insertDeclare`, {
            method: "POST",
            body: JSON.stringify(declareObj),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
            });
            console.log(JSON.stringify(request.body));
          const response =  await fetch(request);
          //const data = await response.json()
         
    }
}

export const dao = new Dao();
export default dao;
dao.getAllDeclaries().then((data)=>console.log(data));