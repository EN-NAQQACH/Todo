import React, { useEffect, useRef, useState } from 'react';
import '../Styles/main.css';

function main() {
    const idCounter = useRef(1);
    const [title, settitle] = useState("");
    const [iscompleted, setiscompleted] = useState(false);
    const [task, settask] = useState([]);

    /* save tasks in localstorage */
    useEffect(()=>{
        if(task.length > 0){
            localStorage.setItem("array",JSON.stringify(task))
        }
    },[task])
    /* function to add task */
    const addtask = () => {
        const newTask = {
            "id":idCounter.current++,
            "title":title,
            "completed":iscompleted
        }
        settask((prev)=> [...prev,newTask])
    }

    return (
        <div>
            <div className="m-content">
                <h1>Todos List<div className="line"></div> </h1>
                <div className="m-addbar">
                    <input type="text" placeholder="ex : test 1" value={title} onChange={(e) => settitle(e.target.value)} />
                    <button onClick={addtask}>Add Task</button>
                </div>
                <div className="t-content">
                    {task.map((t) =>
                        <div className="w-task" key={t.id}>
                            <span>{t.title}</span>
                            <div className="actions">
                                <button>completed</button>
                                <button>modify</button>
                                <button>delete</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default main;