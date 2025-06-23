import React, { useEffect, useRef } from 'react';

const Modal = ({ open, onClose, title, children, actions }) => {
  const ref = useRef();

  useEffect(() => {
    if (open) {
      const handleKey = (e) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleKey);
      // Focus trap
      if (ref.current) ref.current.focus();
      return () => document.removeEventListener('keydown', handleKey);
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fade-in" aria-modal="true" role="dialog">
      <div
        className="bg-background rounded-xl shadow-2xl max-w-md w-full p-6 relative animate-scale-in outline-none"
        tabIndex={-1}
        ref={ref}
      >
        <button
          className="absolute top-3 right-3 text-secondary-400 hover:text-secondary-700 text-xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        {title && <h3 className="text-lg font-semibold mb-4 text-text-primary">{title}</h3>}
        <div className="mb-6">{children}</div>
        <div className="flex gap-2 justify-end">
          {actions}
        </div>
      </div>
    </div>
  );
};

export default Modal; 