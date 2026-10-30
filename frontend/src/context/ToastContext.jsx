import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

    const showToast = useCallback((message, type = 'success') => {
        setToast({ show: true, message, type });
        setTimeout(() => {
            setToast((prev) => ({ ...prev, show: false }));
        }, 3000);
    }, []);

    const success = (message) => showToast(message, 'success');
    const error = (message) => showToast(message, 'error');

    return (
        <ToastContext.Provider value={{ success, error }}>
            {children}
            {/* Toast UI overlay */}
            {toast.show && (
                <div className={`fixed bottom-5 right-5 z-[9999] px-6 py-3 rounded-lg shadow-2xl font-semibold tracking-wide text-sm transition-all duration-300 transform translate-y-0 opacity-100 ${
                    toast.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                }`}>
                    {toast.message}
                </div>
            )}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    return useContext(ToastContext);
};
