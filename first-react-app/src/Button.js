import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text, changeVisibility }) {
  return (
    <button className={styles.btn} onClick={changeVisibility}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
