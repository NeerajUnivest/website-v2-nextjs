import { render, unmountComponentAtNode } from "react-dom"

const Toast = (props) => {
    return (
        <div className="toast-message-container">
            <div className="font-Inter text-sm font-semibold select-none text-black">
                {props.message}
            </div>
            <style jsx>{`
            @keyframes SlideInOut {
            0%{
                transform: translateY(20px);
                opacity:0.5;
            }
            100% {
                transform: translateY(0px);
                opacity:0;
            }
            }
            .toast-message-container {
                color: ${props.color || '#00439D'};
                max-width: 300px;
                background: ${props.color || '#00439D'};
                box-shadow: 0px 0px 10px #0000001f;
                margin: 0px auto;
                padding: 16px;
                border-radius: 4px;
                display: flex;
                border: 1px solid ${props.color || '#00439D'};
                background: #EFF6FF;
                animation: SlideInOut 30ms ease-in-out;
            }
        `}</style>
        </div >
    )
}

export const ToastContainer = (props) => {
    return (
        <div id="toast-container" className="toast-container z-40">
            <style jsx>{`
            .toast-container {
                position: fixed;
                width: 400px;
                bottom: 20px;
                right: 20px;
            }
            @media (max-width: 546px) {
                .toast-container {
                    position: fixed;
                    width: 100%;
                    bottom: 20px;
                    right: 0px;
                }
            }
        `}</style>
        </div>
    )
}

export const toast = {
    remove: () => {
        unmountComponentAtNode(document.getElementById('toast-container'))
        toast.currentToast = false
        if (toast.timeout) {
            clearTimeout(toast.timeout)
            toast.timeout = null
        }
    },
    currentToast: false,
    timeout: null,
    notify: (message, color) => {

        if (toast.currentToast) {
            toast.remove()

        }
        render(<Toast
            message={message}
            color={color || null} />,
            document.getElementById('toast-container'));
        toast.currentToast = true
        toast.timeout = setTimeout(toast.remove, 3000)
    }
}