import { useCallback, useMemo, useState } from "react";

export const useHandleToggleModal = () => {
  const [active, setActive] = useState(false);
  const handleClose = useCallback(() => {
    setActive(false);
  }, []);
  const handleOpen = useCallback(() => setActive(true), []);
  return useMemo(
    () => ({ active, handleClose, handleOpen }),
    [active, handleClose, handleOpen]
  );
};
