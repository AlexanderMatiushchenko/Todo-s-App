
import { useDispatch} from "react-redux"
import { removeTodo,toggleTodoComplete } from "../store/slices/todoSlice";
import s from './index.module.css';
import { Icon } from "@iconify/react";

function TodoItem({id,taskName,completed}){
const dispatch = useDispatch();
const removeTask= ()=> dispatch(removeTodo({id}))
const toggleTask = ()=>dispatch(toggleTodoComplete({id}))


return(
    <div className={s.containerTodoItem}> 
   
        <input type="checkbox" checked={completed} onChange={toggleTask} />
        < div className={s.todoItemContainerWIthSpanAndCheckbox}>
        <p>{taskName}</p>
        <Icon onClick={removeTask} className={s.deleteIcon} icon="ic:outline-delete" />
    {/* <span className={s.delete} onClick={removeTask}>&times;</span> */}
    
    </div>
    </div>
)
}
export default TodoItem;