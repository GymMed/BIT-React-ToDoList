import PropTypes from "prop-types";

export default function Button({ onClick, text, isDark = false }) {
    function getColors() {
        if (isDark)
            return `from-purple-700 to-purple-900 text-purple-300 hover:from-purple-900 hover:to-purple-950 `;
        return `from-purple-500 to-purple-700 text-purple-300 hover:from-purple-700 hover:to-purple-900 `;
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className={
                getColors() +
                "py-2 px-6 bg-gradient-to-br rounded font-bold focus:ring focus:ring-offset-2 focus:ring-purple-500"
            }
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    isDark: PropTypes.bool,
};
