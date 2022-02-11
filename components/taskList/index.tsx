import { useContextProps } from '../../hooks/context';
import { Container } from './style';

export function TaskList() {
  const { tasks } = useContextProps();

  console.log(tasks);

  if (tasks.length === 0) {
    return (
      <Container>
        <p>Crie uma nova Task</p>
        <img src="image.svg" alt="" />
      </Container>
    );
  } else {
    return (
      <Container>
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <p className="title">{task.title}</p>
                <p className="subtitle">{task.subtitle}</p>
                <p className="description">{task.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    );
  }

  return null;
}
