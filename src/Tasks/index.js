import "./style.css"

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li
                key={task.id}
                className={`" list__items${
                        task.done && props.hideDone
                        ? " list__item--hidden "
                        : ""}`
                }
            >

                <button className=" list__button">
                    {task.done ? "✔" : ""}
                </button>
                <span className={` list__item${task.done ? " list__item--done" : ""}`}>
                    {task.content}
                </span>
                <button className=" list__button  list__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;