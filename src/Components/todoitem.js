import React from "react";
import { AiOutlineDelete} from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

const Todoitem = ({todoTitle, todoDescription}) =>{
    return (
        <div className="todo-list-item">
        <div>
            <h3>{todoTitle}</h3>
            <p>{todoDescription}</p>
        </div>
        <div>
            <AiOutlineDelete title="Delete?" className="icon" />
            <BsCheckLg title="Completed?" className=" check-icon" />
        </div>
        </div>
    );
}

export default Todoitem;