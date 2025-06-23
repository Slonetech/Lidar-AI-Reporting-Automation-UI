import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

let toastId = 0;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, { type = 'info', duration = 3000 } = {}) => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed z-50 top-4 right-4 flex flex-col gap-2 items-end">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`animate-slide-down bg-background border-l-4 shadow-lg rounded-lg px-4 py-3 min-w-[220px] max-w-xs flex items-center gap-3 transition-all duration-300
              ${toast.type === 'success' ? 'border-success-500' : ''}
              ${toast.type === 'error' ? 'border-destructive-500' : ''}
              ${toast.type === 'info' ? 'border-primary-500' : ''}
            `}
            role="alert"
            tabIndex={0}
            onClick={() => removeToast(toast.id)}
          >
            {toast.type === 'success' && <span className="text-success-600">✔</span>}
            {toast.type === 'error' && <span className="text-destructive-600">✖</span>}
            {toast.type === 'info' && <span className="text-primary-600">ℹ</span>}
            <span className="flex-1 text-sm text-text-primary">{toast.message}</span>
            <button className="ml-2 text-secondary-400 hover:text-secondary-700" onClick={() => removeToast(toast.id)} aria-label="Dismiss">×</button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}; 