import { Container } from './styles';
import Modal from 'react-modal';
import { useContextProps } from '../../hooks/context';
import { FormEvent, useState } from 'react';

interface TaskProps {
  title: string;
  subtitle: string;
  description: string;
}

export function CreateNewTask() {
  const { modalIsOpen, closeModal, setTasks, tasks } = useContextProps();

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');

  let autoId = 0;

  function OnHandleNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([
      ...tasks,
      {
        id: autoId,
        title: title,
        subtitle: subtitle,
        description: description,
      },
    ]);

    setTitle('');
    setSubtitle('');
    setDescription('');

    autoId += 1;

    closeModal();
  }

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
      <Container>
        <div>
          <p>Nova Task</p>
          <button className="btn-close" onClick={closeModal}>
            x
          </button>
        </div>
        ;
        <form onSubmit={OnHandleNewTask}>
          <div className="info">
            <label>Titulo</label>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <label>Projeto</label>
            <input
              type="text"
              value={subtitle}
              onChange={(event) => setSubtitle(event.target.value)}
            />
            <label>Descrição</label>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>

          <input className="submit" type="submit" value="Criar" />
        </form>
      </Container>
    </Modal>
  );
}
