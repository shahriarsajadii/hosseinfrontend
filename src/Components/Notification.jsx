import React, { useEffect, useState } from 'react';

export default function Notification({
    isOpen,
    onClose,
    title,
    message,
    className,
    btnText = null,
    icon,
    iconColor = 'green'
}) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShow(true)
        } else {
            const timer = setTimeout(() => setShow(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!show && !isOpen) return null;

    return (
        <div className={` fixed top-6 transform  z-9999 ${className}`}>
            <div

                className={` relative flex items-center gap-4 shadow-[0_0_20px_rgba(10,61,18,0.6)]
                             rounded-2xl p-5 min-w-90 max-w-md overflow-hidden transition-all duration-500  bg-gray-900
                            ${isOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-24 opacity-0 scale-90'}
        `}
            >

                <div className=" relative z-10">
                    <div className={`w-12 h-12 bg-${iconColor}-900/40 border border-${iconColor}-500/30 rounded-full flex items-center justify-center text-${iconColor}-400 text-2xl shadow-[0_0_15px_rgba(74,222,128,0.2)]`}>
                        {icon || "🔓"}
                    </div>
                </div>

                <div className="flex-1 text-right relative z-10" dir="rtl">
                    <h4 className="text-white  text-lg mb-1 drop-shadow-md">{title}</h4>
                    <p className="text-gray-300/70 text-md font-light leading-relaxed">{message}</p>
                </div>

                {
                    btnText != null ? (
                        <button
                            onClick={onClose}
                            className="relative z-10 mr-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs border border-white/10 rounded-lg transition-all active:scale-95 backdrop-blur-sm"
                        >
                            {btnText}
                        </button>
                    ) : ''
                }

            </div>
        </div>
    );
}
