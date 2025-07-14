import axios from 'axios'
import { title } from 'process';
const url = "https://jsonplaceholder.typicode.com/todos/1";


//creating a custom datatype
interface Todo{
    id:number;
    title:string;
    completed: boolean
}

axios.get(url).then((res)=>{

    const todo = res.data as Todo;
    
    const ID = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    
    logDetails(ID,title,completed)

})

const logDetails = (ID:number,title:string,completed:boolean)=>{
    console.log(`ID: ${ID}
                TItle: ${title}
                completed:${completed}`)

}