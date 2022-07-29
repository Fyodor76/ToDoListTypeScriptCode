import ITodo from './types/types'
import {useEffect, useState} from "react";
import Draggable from 'react-draggable';

interface BlockProps {
    todo: ITodo
    changeTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

function Block({todo, changeTodo, removeTodo}: BlockProps) {

    const [changeText, setText] = useState<boolean>(false)
    const [editedText, setEditText] = useState<string>(todo.title)
    const [newText, setNewText] = useState<string>("")

    let resetEditToDo = () => {
        setTimeout(()=> {
            setNewText("")
        },0)
    }
    return (
        <Draggable axis={"y"}>
            <div className="block">
                <div className="icon" onClick={() => changeTodo(todo.id)}>
                    {/* <FontAwesomeIcon icon="fa-regular fa-square fa-xl" /> */}
                    {todo.completed ? <span>&#9745;</span> : <span>&#10066;</span>}
                </div>
                <div className="info">
                    <div className="text"
                         id={todo.completed ? 'checked' : ''}
                         onDoubleClick={() => !changeText && setText(true)}
                         onClick={()=>setEditText(todo.title)}>
                        {changeText
                            ?
                            <div>
                            <textarea className="edit" value={editedText}
                                      onChange={e => setEditText(e.target.value)}
                                      autoFocus={true}
                                      onBlur={() => {setText(false)
                                          setNewText(editedText)
                                          resetEditToDo()
                                      }}/>
                            </div>
                            :
                            <div style={{cursor:"pointer"}}
                                 onClick={() => changeTodo(todo.id)}>
                                {newText=="" ? todo.title : todo.title=newText }</div>}
                    </div>
                    <div className="delete" onClick={() => removeTodo(todo.id)}>&#10060;</div>
                </div>
            </div>
        </Draggable>
    )
}

export default Block;