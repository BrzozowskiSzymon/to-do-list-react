import { Wrapper, ButtonsButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    if (tasks.lenght === 0) {
        return null;
    }

    return (
        <Wrapper>
            {tasks.length > 0 && (
                <>
                    <ButtonsButton 
                        onClick={toggleHideDone}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </ButtonsButton>
                    <ButtonsButton
                        onClick={setAllDone}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </ButtonsButton>
                </>
            )}
        </Wrapper>
    )
};

export default Buttons