import { Container } from './styles';
import Modal from 'react-modal';
import { useContextProps } from '../../hooks/context';

export function CreateNewTask() {
  const { modalIsOpen, closeModal } = useContextProps();

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
        <form action="">
          <div className="info">
            <label>Titulo</label>
            <input type="text" />
            <label>Projeto</label>
            <input type="text" />
            <label>Tags</label>
          </div>

          <input className="submit" type="submit" />
        </form>
      </Container>
    </Modal>
  );
}
