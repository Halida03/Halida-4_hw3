import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Todoitem = ({ todoTitle, todoDescription, deleteTask, id, taskCompleted, completed }) => {
    let iconComponent;

    if (completed) {
        iconComponent = (
            <RxCross1 title="Delete" className="delete-icon" onClick={() => taskCompleted(id)} />
        );
    } else {
        iconComponent = (
            <BsCheckLg title="Completed" className="check-icon" onClick={() => taskCompleted(id)} />
        );
    }

    return (
        <div className="todo-list-item">
            <div>
                <h3>{todoTitle}</h3>
                <p>{todoDescription}</p>
            </div>
            <div>
                <AiOutlineDelete title="Delete?" className="icon" onClick={() => deleteTask(id)} />
                {iconComponent}
            </div>
        </div>
    );
}

export default Todoitem;
