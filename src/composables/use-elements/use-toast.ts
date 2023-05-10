import { Config } from '~/create-elements';

export const useToast = (_config?: Config) => {
  const pop = (name: string) => {
    const event = new CustomEvent('create', {
      bubbles: true,
    });
    const modalRef = document.getElementById(name + 'ref')!;
    modalRef.dispatchEvent(event);
    document.body.style.overflowY = '';
  };

  return {
    pop,
  };
};
