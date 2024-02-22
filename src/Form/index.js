import React, { useRef, useState } from "react";
import { StyledForm, Input, Button} from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();
        if (!trimmedNewTaskContent) {
            return;
        }
        
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                type="text"
                placeholder="Co jest do zrobienia ?"
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <Button>
                Dodaj zadanie
            </Button>
        </StyledForm>
    )
};

export default Form;