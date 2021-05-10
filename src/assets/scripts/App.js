import { Modal } from '@/components/modal/Modal';

const App = () => {
  // Диспетчер подключения скриптов модулей

  // Modal
  Modal().init();
  Modal().createModal(
    `
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias at beatae, dolore excepturi fugit harum in ipsa laudantium nemo nobis numquam perferendis perspiciatis qui quis saepe sit tenetur vero.
  `,
    'test'
  );
};

export default App;
