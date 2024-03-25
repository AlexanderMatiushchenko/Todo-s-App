
import { useDispatch} from "react-redux"
import { removeTodo,toggleTodoComplete } from "../store/slices/todoSlice";
import s from './index.module.css';
import { Icon } from "@iconify/react";
import { useState } from "react";

function TodoItem({id,taskName,completed,taskDescription}){
const dispatch = useDispatch();
const removeTask= ()=> dispatch(removeTodo({id}))
const toggleTask = (id,completed)=>dispatch(toggleTodoComplete({id}))

const [showedDescription, setshowedDescription] = useState(null);

const toggleDescription = (id)=>{
    setshowedDescription(id===showedDescription ? null : id);
}

return(
    <div className={s.containerTodoItem}> 
        
        <div className={s.todoItemContainerWIthSpanAndCheckbox}>
        <input type="checkbox" checked={completed} onChange={()=> toggleTask(id,completed)} />
        <p>{taskName}</p>
        <div>
             {showedDescription === id && <p>{taskDescription}</p>}
             </div>
             <span className={s.iconDescription} onClick={()=>toggleDescription(id) }>
              {showedDescription === id ? (
                  <Icon icon="system-uicons:chevron-up" />
                ) : (
                  <Icon icon="system-uicons:chevron-down" />
                )}

              </span>
        <Icon onClick={removeTask} className={s.deleteIcon} icon="ic:outline-delete" />
    {/* <span className={s.delete} onClick={removeTask}>&times;</span> */}
    
    </div>
    </div>
)
}
export default TodoItem;