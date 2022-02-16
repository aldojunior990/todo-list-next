import { useContextProps } from '../../hooks/context';
import { Container } from './style';
import { AiFillDelete } from 'react-icons/ai';
import { MdOutlineDateRange } from "react-icons/md";

export function TaskList() {
  const { tasks, setTasks } = useContextProps();

  console.log(tasks);

  function OnDeletedTask(id: number) {
    const removeTask = tasks.filter((task) => task.id != id);

    setTasks(removeTask);

  }

  if (tasks.length === 0) {
    return (
      <Container>
        <header>
          <p>Crie uma nova Task</p>
          <img src="image.svg" alt="" />
        </header>
      </Container>
    );
  } else {
    return (
      <Container>
        {tasks.map((task) => {
          return (
            <div className="Task" key={task.id}>
              <nav className="content">
                <div className="info">
                  <a className="taskTitle">{task.title}</a>
                  <div className='taskDate'>
                      <MdOutlineDateRange  />
                      <a>{task.createdAt}</a>
                  </div>
                 
                </div>

                <div className="buttons">
                  <input type="checkbox" />
                  <button onClick={() => OnDeletedTask(task.id)}>
                    <AiFillDelete className="icon" />
                  </button>
                </div>
              </nav>
            </div>
          );
        })}
      </Container>
    );
  }

  return null;
}
