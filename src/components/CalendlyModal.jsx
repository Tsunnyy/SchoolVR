import { useEffect } from "react";

export const CalendlyModal = ({ calenActive, setCalenActive }) => {

    useEffect(() => {
        // Load the Calendly script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        // Cleanup the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        // Toggle body scroll
        if (calenActive) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [calenActive]);

    return (
        <div
            className="modal noBgAndPadding"
            style={{
                opacity: calenActive ? 1 : 0,
                pointerEvents: calenActive ? "all" : "none",
                display: "flex",
                transition: "opacity 0.3s",
            }}
            onClick={() => setCalenActive(false)}
        >
            <div className="form-section form-section-colob" onClick={(e) => e.stopPropagation()}>
                <div className="position-relative">
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/schoolvr001/30min?text_color=292d32&primary_color=ecc243"
                        style={{ minWidth: '320px', height: '700px' }}
                    />
                    <button
                        className="btn-close"
                        onClick={() => {
                            setCalenActive(false);
                        }}
                    >
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 11L11 1"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11 11L1 1"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <button onClick={() => {
                    setCalenActive(false);
                }} className="closeCalen">
                    Close Modal
                </button>
            </div>
        </div>
    );
};
