import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import * as hello from "./utils/hello";

hello.hello();
console.log(hello.name);

const tasks = [
    { id: 1, content: "przejść na React", done: false },
    { id: 2, content: "zjeść", done: true },
];

const hideDone = false;

function App() {
    return (
        <div>
            <Container>
                <Header title="Lista zadań"/>
                <Section
                    title="Dodaj nowe zadanie"
                    body={<Form />}
                />

                <Section
                    title="Lista zadań"
                    body={
                        <Tasks tasks={tasks} hideDone={hideDone} />
                    }
                    extraHeaderContent={
                        <Buttons tasks={tasks} hideDone={hideDone} />
                    }
                />
            </Container>
        </div>
    );
}

export default App;
