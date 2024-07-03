export const useScrollLock = () => {
  const lock = () => {
    if (typeof window !== 'undefined' && window.document) {
      document.body.classList.add('noscroll');
    }
  };

  const unlock = () => {
    if (typeof window !== 'undefined' && window.document) {
      document.body.classList.remove('noscroll');
    }
  };

  return {
    lock,
    unlock,
  };
};
