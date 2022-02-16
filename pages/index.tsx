import { TaskList } from '../components/taskList';
import { Container } from '../styles/home';
import { FormEvent, useState } from 'react';
import { useContextProps } from '../hooks/context';
import { format } from 'date-fns';

export default function Home() {
  const { setTasks, tasks } = useContextProps();

  const [TaskTitle, setTaskTitle] = useState('');

  function OnHandleNewTask(event: FormEvent) {
    event.preventDefault();

    const Tasks = {
      id: Math.random(),
      title: TaskTitle,
      createdAt: format(new Date(), ' eeee d LLL H:mm')
    }

    if (TaskTitle !== '') {
      setTasks([
        ...tasks,
        Tasks,
      ]);
    }

    setTaskTitle('');
  }

  return (
    <Container>
      <nav className="content">
        <div className="header">
          <h2>To do</h2>
          <div className="newTask">
            <form onSubmit={OnHandleNewTask} action="">
              <input
                type="text"
                value={TaskTitle}
                onChange={(event) => setTaskTitle(event.target.value)}
                placeholder="Digite aqui sua task"
              />
              <input value="Nova task" type="submit" />
            </form>
          </div>
        </div>
        <TaskList />
      </nav>
    </Container>
  );
}
