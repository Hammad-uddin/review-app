import PropTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn-${version}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  verson: "primary",
  type: "button",
  isDisabled: false,
};
export default Button;
