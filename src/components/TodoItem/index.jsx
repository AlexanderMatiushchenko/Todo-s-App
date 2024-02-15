
import { useDispatch} from "react-redux"
import { removeTodo,toggleTodoComplete } from "../store/slices/todoSlice";
import s from './index.module.css'

function TodoItem({id,taskName,completed}){
const dispatch = useDispatch();
const removeTask= ()=> dispatch(removeTodo({id}))
const toggleTask = ()=>dispatch(toggleTodoComplete({id}))


return(
    <div> 
    <li>
        <input type="checkbox" checked={completed} onChange={toggleTask} />
        <span>{taskName}</span>
    <span className={s.delete} onClick={removeTask}>&times;</span>
    </li>
    
    </div>
)
}
export default TodoItem;