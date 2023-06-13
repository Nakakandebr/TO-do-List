
document.getElementById("form").addEventListener("submit", async function(event){
    event.preventDefault();
    
    let id = document.getElementById("first-task").value;
    let todo = document.getElementById("last-task").value;
    let userid = document.getElementById("id").value;
    let data ={
        id:id,
        todo:todo,
        userId:userid 
      };
      console.log({data});
    
     
     
      let result = await fetch("https://dummyjson.com/todos/add",{
    
    
        
       method: "POST",
       headers:{
           "Content-Type": "application/json"
       },
           body : JSON.stringify(data)
    })
     .then(response=>response.json())
     .then(response=>response)
     .catch(error=>error.message)
     console.log({result});
    
     let success = document.getElementById("success")
     result.id ? success.innerHTML ="User added successfully " : success.innerHTML="User not added"
    
    })
    