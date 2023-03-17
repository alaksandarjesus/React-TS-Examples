
import React, { Component } from 'react';

interface Todo {
    title: string;
    id:any
}

interface ComponentState {
    todos: Todo[],
    dummy: String
}
interface ComponentProps {

}


class Todos extends Component<ComponentProps, ComponentState>{

    constructor(props: any) {
        super(props);
        this.fetchTodo = this.fetchTodo.bind(this)
        this.state = {
            todos: [],
            dummy: ''
        }
    }

    componentDidMount(): void {
        this.fetchTodo()
        
    }

    fetchTodo() {
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setTimeout(() =>{
                    this.setState({
                        todos: json
                    })
                }, 3000)
                    
            })
      
    }

    render() {
            const { todos } = this.state;
            return (!todos.length)?<div>Loading Todos</div>:<>
                {todos.map((todo) =>{
                    return <div key={todo.id}>{todo.title}</div>
                })}
            </>
            
        
    }

}

export default Todos;

// https://17.reactjs.org/docs/concurrent-mode-suspense.html