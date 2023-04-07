import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.OptionsList}>
      {options.map(option => {
        return (
          <li key={shortid.generate()} className={s.OptionsItem}>
            <button
              className={s.OptionsBtn}
              type="button"
              value={option}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
