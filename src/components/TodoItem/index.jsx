import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../store/slices/todoSlice";
import s from './index.module.css';
import { Icon } from "@iconify/react";
import { useState } from "react";

function TodoItem({id,completed,taskDescription,
  taskName,taskEndTime,taskStartTime,deadLineDate}) {


  const dispatch = useDispatch();
  const removeTask = (taskId) => dispatch(removeTodo({ id: taskId }));
  const toggleTask = (taskId, completed) => dispatch(toggleTodoComplete({ id: taskId, completed }));

  const dateParts = deadLineDate.split('-');
const formattedeadLinedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;


  const [showedDescription, setShowedDescription] = useState(null);

  const toggleDescription = (taskId) => {
    setShowedDescription(taskId === showedDescription ? null : taskId);
  }

  return (
    <div className={s.containerTodoItemMain}>
      <h5 className={s.todoDate}>{formattedeadLinedDate}</h5>
   <div className={s.containerAllTasks}>
    
          <div className={s.todoItemLeft}>
            <input type="checkbox" checked={completed} onChange={() => toggleTask(id,completed)} />
            
            <p className={s.taskName}>{taskName}</p>
          </div>
          <div className={s.todoItemRight}>
            <Icon onClick={() => removeTask(id)} className={s.deleteIcon} icon="ic:outline-delete" />
            <span className={s.iconDescription} onClick={() => toggleDescription(id)}>
              {showedDescription === id ? (
                <Icon icon="system-uicons:chevron-up" />
              ) : (
                <Icon icon="system-uicons:chevron-down" />
              )}
            </span>
            <span > 
                <p className={s.todoTime}>{taskStartTime}</p>
                <p className={s.todoTime}>{taskEndTime}</p>
              </span>
          </div>
          </div>
          {showedDescription === id && (
            <div className={s.textDescription}>
              <p>{taskDescription}</p>
            </div>
          )}
        </div>
      
    
  );
}

export default TodoItem;
