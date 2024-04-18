import { Button, Toast } from "@shopify/polaris";
import { useCallback, useState } from "react";

export function useToast() {
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState("Success");
  const [error, setError] = useState(false);
  const handleSetMessage = useCallback((value) => setMessage(value), []);

  const toggleActive = useCallback(() => setActive((active) => !active), []);
  const showToast = useCallback((message, _error = false) => {
    handleSetMessage(message);
    if (_error) {
      setError(true);
    }
    toggleActive();
  }, []);
  const toastMarkup = active ? (
    <Toast
      content={message}
      error={error}
      onDismiss={toggleActive}
      duration={4500}
    />
  ) : null;

  return {
    toastMarkup,
    active,
    setActive,
    showToast,
  };

  //   return <div>{toastMarkup}</div>;
}
