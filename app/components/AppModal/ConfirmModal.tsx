import {Button, Modal, TextContainer} from '@shopify/polaris';
import {useState, useCallback, useRef} from 'react';

function ConfirmModal({content, activatorRef, title}) {
  const [active, setActive] = useState(false);

  const button = useRef<HTMLDivElement>(null);

  const handleOpen = useCallback(() => setActive(true), []);

  const handleClose = useCallback(() => {
    setActive(false);
    requestAnimationFrame(() =>
      button.current?.querySelector('button')?.focus(),
    );
  }, []);

  return (
    <div >
      <div style={{height: 0, display: 'none'}} ref={activatorRef}>
        <Button onClick={handleOpen}>~</Button>
      </div>
      <Modal
        instant
        open={active}
        onClose={handleClose}
        title={title}
        primaryAction={{
          content: 'Cancel',
          onAction: handleClose,
        }}
        secondaryActions={[
          {
            content: 'Duplicate product',
            onAction: handleClose,
          },
        ]}
      >
        <Modal.Section>
          {content} 
        </Modal.Section>
      </Modal>
    </div>
  );
}

export default ConfirmModal