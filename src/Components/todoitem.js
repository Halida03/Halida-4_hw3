import React from "react";
import { AiOutlineDelete} from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

const Todoitem = ({todoTitle, todoDescription, deleteTask, id}) =>{
    return (
        <div className="todo-list-item">
        <div>
            <h3>{todoTitle}</h3>
            <p>{todoDescription}</p>
        </div>
        <div>
            <AiOutlineDelete title="Delete?" className="icon" onClick={() => deleteTask(id)}/>
            <BsCheckLg title="Completed?" className=" check-icon" />
        </div>
        </div>
    );
}

export default Todoitem;