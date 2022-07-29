import React, {useState} from 'react'
import Block from '../todo/Block';
import ITodo from '../todo/types/types';
import TaskInput from '../todo/TaskInput'

interface TodoProps {
    todos: ITodo[],
    changeTodo: (id: number) => void,
    removeTodo: (id: number) => void,
    onEnterPress: (event: React.KeyboardEvent<HTMLInputElement>) => void,
    switchedLanguage:boolean
}

function ToDo ({todos, changeTodo, removeTodo, onEnterPress, switchedLanguage}:TodoProps) {
    return (
        <div className="container">
            <div className="title">
                {switchedLanguage ? "ЧТО СОБИРАЕТЕСЬ ДЕЛАТЬ?" : "WHAT TO DO?"}
            </div>
            <TaskInput onEnterPress={onEnterPress}/>
            <div className="todo-container">
                <div className="todo-list">
                    {todos.map(todo =>
                        <Block key={todos.indexOf(todo)} changeTodo={changeTodo} removeTodo={removeTodo} todo={todo}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ToDo