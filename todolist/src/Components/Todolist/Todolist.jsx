import React ,{ useState } from "react";
import  styleelment from "./Todolist.module.css"
function ToDolist(){

    const [task,setTask]=useState([]);
    const[newTask,setNewTask]=useState("");
    function handlechange(ev){
        setNewTask(ev.target.value);
    }
    function addTask(){
            if(newTask.trim()!==""){
                
                setTask( task=>[...task,newTask]);
                // setNewTask("");
            }

    }
    function deleteTask(i){
        const updatedTasks=task.filter((t,index)=>index!==i);
        setTask(updatedTasks);

    }

    function complete(i){
        const updatedTasks=task.map((task,index)=>{
            if(index===i){
                return <s>{task}</s>
            }
            return task;
        });
        
        setTask(updatedTasks);

    }

return(

    <>
      <div className={styleelment.Todolist}>
        <h1 className={styleelment.h1}>To Do List</h1>

        <div>
            <input type="text" placeholder="Enter a task" onChange={handlechange} value={newTask}/>
            <button className={styleelment.add_button} onClick={addTask}>Add Task</button>
        </div>
        <ol className={styleelment.ol}>
            {task.map((task,i)=>
            <li className={styleelment.li} key={i}>
                    <span className="text"> {task} </span>
                     <button className={styleelment.delete_button} onClick={()=>deleteTask(i)}>Delete</button>
                     <button className={styleelment.complete_button} onClick={()=>complete(i)}>Complete</button>                                                                                 
            </li>
            )}
            </ol>
            
        </div>

    </>
)


}

export default ToDolist;