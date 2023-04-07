import PropTypes from 'prop-types';
import s from './Notification.module.css';

export default function Notificationn({ message }) {
  return <h2 className={s.NotificationTitle}>{message}</h2>;
}

Notification.propTypes = {
  message: PropTypes.string,
};
