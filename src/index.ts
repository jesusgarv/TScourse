import axios from "axios";

const url : string = 'https://jsonplaceholder.typicode.com/todos/1';

// Interface of todo object request
interface Todo {
    id: number;
    title: string;
    completed : boolean;
}

// Fetch from API
axios.get(url).then(response => {
    const todo = response.data as Todo;
    const id : number = todo.id;
    const title : string = todo.title;
    const completed : boolean = todo.completed;

    logTodo(id,title, completed);
});

/**
 * 
 * @param id:number id of the todo
 * @param title:string title associated with the todo
 * @param completed:boolean status of the todo object
 */
const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The Todo with ID: ${id}
        has a title of: ${title}
        Is it finished: ${completed}
    `);
}