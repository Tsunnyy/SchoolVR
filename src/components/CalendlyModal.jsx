import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

const CalendlyModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        // Load Calendly script when component mounts
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        // Cleanup script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <button onClick={handleShow}
                className="px-6 py-2 bg-[#ecc243] text-black rounded-lg hover:bg-opacity-90 transition-all"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" />
                </svg>
            </button>

            {show && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                            <div className="bg-white p-4 rounded-lg w-full max-w-4xl h-[80vh] relative">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                                <iframe
                                    src="https://calendly.com/schoolvr001/30min?embed_domain=yourdomain.com&embed_type=Inline"
                                    width="100%"
                                    height="100%"
                                ></iframe>

                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </>
    );
};

export default CalendlyModal;
