function LoadingIcon({ className }) {
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
                d="M24 12.5c-6.351 0-11.5 5.149-11.5 11.5S17.649 35.5 24 35.5c2.817 0 5.392-1.01 7.392-2.69a2.5 2.5 0 113.216 3.828A16.444 16.444 0 0124 40.5c-9.113 0-16.5-7.387-16.5-16.5S14.887 7.5 24 7.5 40.5 14.887 40.5 24a2.5 2.5 0 01-5 0c0-6.351-5.149-11.5-11.5-11.5z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default LoadingIcon;
