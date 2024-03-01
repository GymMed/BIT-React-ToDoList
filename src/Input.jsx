import PropTypes from "prop-types";

function Input({ onChange, value, type = "text", placeholder = "" }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            className="placeholder:text-purple-300 text-purple-500 p-2 border rounded border-purple-700 focus:ring focus:ring-offset-2 focus:ring-purple-500"
            onChange={(e) => {
                onChange(e);
            }}
        />
    );
}

Input.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Input;
