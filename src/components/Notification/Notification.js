import './Notification.scss';
import useNotification from "../../hooks/useNotification";

export default function Notification() {
    const {isNotificationVisible, setIsNotificationVisible, formContent} = useNotification()
    return (<div id={`notification`}
                 className={`notification-container ${isNotificationVisible ? 'visible' : 'hidden'}`}>
        <div className="notification-text">{formContent}</div>
        <div className="notification-button" onClick={() => setIsNotificationVisible(false)}>Закрыть</div>
    </div>);
}