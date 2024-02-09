import { useDispatch } from "react-redux"
import { removeTodo,toggleTodoComplete } from "../store/slices/todoSlice";
import s from './index.module.css'

function TodoItem({id,text,complete}){
const dispatch = useDispatch();
const removeTask= ()=> dispatch(removeTodo({id}))
const toggleTask = ()=>dispatch(toggleTodoComplete({id}))


return(
    <li>
        <input type="checkbox" checked={complete} onChange={toggleTask} />
        <span>{text}</span>
    <span className={s.delete} onClick={removeTask}>&times;</span>
    </li>
)
}
export default TodoItem;