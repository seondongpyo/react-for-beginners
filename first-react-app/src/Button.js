import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text, increaseCount }) {
  return (
    <button className={styles.btn} onClick={increaseCount}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
