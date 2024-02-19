
import { List, Items, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Items
                key={task.id}
                hidden={task.done && hideDone}
            >
                <Button
                    toggleDone
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </Button>
                <Content done={task.done}>
                    {task.content}
                </Content>
                <Button
                    remove
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </Button>
            </Items>
        ))}
    </List>
);

export default Tasks;