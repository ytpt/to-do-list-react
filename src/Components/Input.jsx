import React from "react";

const Input = ({task, handleKeyPress, setTask}) => {

    return (
        <input
            type={"text"}
            value={task}
            onKeyPress={handleKeyPress}
            onChange={(e) => setTask(e.target.value)}
        />
    )
}

export default Input;