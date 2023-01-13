import {createContext, useState} from "react";

export const NotificationContext = createContext({isNotificationVisible: false});

export default function NotificationProvider({children}) {
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);
    const [isFormAvailable, setIsFormAvailable] = useState(true);
    const [formContent, setFormContent] = useState("")
    return (<NotificationContext.Provider
        value={{
            isNotificationVisible,
            setIsNotificationVisible,
            isFormAvailable,
            setIsFormAvailable,
            formContent,
            setFormContent
        }}>
        {children}
    </NotificationContext.Provider>);
}