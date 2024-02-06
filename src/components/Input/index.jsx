import React, { useState } from "react";


function Input(){
const [text,setText]= useState('')

    return(
        <div>
<input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder="Write your’s Tasks" />
<button> Add Task</button>
        </div>
    )
}
export default Input;