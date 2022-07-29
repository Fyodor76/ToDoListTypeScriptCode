import React, {useState} from 'react';
import axios from 'axios';
import ToDo from "./components/ToDo";
import ITodo from './todo/types/types';
import {BlockRules} from "./components/BlockRules";
import {ChooseLanguage} from "./todo/chooseLanguage";

function App() {

  const [todos, setTodos] = React.useState<ITodo[]>([])
  const [switchedLanguage, setSwitchedLanguage] = useState<boolean>(false)

  React.useEffect(() => {
    fetchTodos()
  }, [])

  /* Запрос на сервер для получения готового списка todo  */
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
      setTodos(response.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  /* Эффект зачеркивания  */

  const changeTodo = (id: number) => {
    const copy = [...todos];
    const checkedTodo = copy.find(todo => todo.id === id);
    if (checkedTodo !== undefined) {
      checkedTodo.completed = !checkedTodo.completed;
      setTodos(copy)
    }
  }



  /* Удаление элемента */

  const removeTodo = (id: number) => {
    let copy = [...todos];
    copy = copy.filter(todo => todo.id !== id);
    setTodos(copy)
  }

  /* Получение нового элемента  */

  const manageTodo = (todos: ITodo[]) => {
    let copy = [...todos];
    let newTodos: ITodo[] = [];
    copy.forEach((todo,index) => {
      todo.id = index;
      index++
      newTodos.push(todo)
    });
    setTodos(newTodos)
  }

  const onEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.keyCode || event.key;
    if (key === 13) {
      const value = (event.target as HTMLInputElement).value;
      const copy = [...todos];
      copy.unshift({
        "userId": 1,
        "id": 1,
        "title": value,
        "completed": false
      });
      (event.target as HTMLInputElement).value = '';
      manageTodo(copy);
    }
  }

  return (
      <div className="App">
        <ToDo todos={todos} changeTodo={changeTodo} removeTodo={removeTodo} onEnterPress={onEnterPress} switchedLanguage={switchedLanguage}/>
        <BlockRules  switchedLanguage={switchedLanguage} setSwitchedLanguage={setSwitchedLanguage} />
        <ChooseLanguage switchedLanguage={switchedLanguage} setSwitchedLanguage={setSwitchedLanguage}/>
      </div>
  );
}

export default App;
