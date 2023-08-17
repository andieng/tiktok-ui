function ClearIcon({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="rgba(22, 24, 35, .34)"
            viewBox="0 0 48 48"
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M24 46c12.15 0 22-9.85 22-22S36.15 2 24 2 2 11.85 2 24s9.85 22 22 22zm-8.853-15.268L21.879 24l-6.732-6.732a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0L24 21.879l6.732-6.732a1 1 0 011.415 0l.707.707a1 1 0 010 1.414L26.12 24l6.733 6.732a1 1 0 010 1.415l-.707.707a1 1 0 01-1.415 0L24 26.12l-6.732 6.733a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.415z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default ClearIcon;
