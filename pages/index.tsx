import { TaskList } from '../components/taskList';
import { Container } from '../styles/home';
import { CreateNewTask } from '../components/CreateNewtask';
import { useState } from 'react';
import { useContextProps } from '../hooks/context';

export default function Home() {
  const { openModal } = useContextProps();

  return (
    <Container>
      <nav className="content">
        <div className="header">
          <h2>To do</h2>
          <button onClick={openModal}>Nova task</button>
        </div>
        <TaskList />
        <div className="footer">
          <button onClick={openModal}>+</button>
        </div>
      </nav>

      <CreateNewTask />
    </Container>
  );
}
