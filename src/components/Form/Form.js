import React, {useEffect, useState} from 'react';
import './Form.scss';
import {sendMessage} from "../../http/formAPI";
import useNotification from "../../hooks/useNotification";

function Form(props) {
    const [toSend, setToSend] = React.useState({
        from_name: '', from_number: ''
    });

    const [isRequestWithError, setIsRequestWithError] = useState(false)

    const {setIsNotificationVisible, isFormAvailable, setIsFormAvailable, setFormContent} = useNotification()

    const completeForm = async (e) => {
        e.preventDefault()
        if (isFormAvailable) {
            setIsFormAvailable(false)
            setFormContent("Ваша заявка получена")
            setIsNotificationVisible(true)

            await sendMessage(toSend.from_name, "+7 " + toSend.from_number).then(() => {
            }).catch((err) => {
                setFormContent("Не удалось отправить заявку")
                setIsNotificationVisible(true)
                setIsFormAvailable(false)
                setIsRequestWithError(true)
                setDisabilityTimer()
            })
        }
    }
    const BAN_TIME = 10
    const [banTimer, setBanTimer] = useState(BAN_TIME)

    useEffect(() => {
        if (isRequestWithError) {
            if (banTimer === 0) {
                setIsRequestWithError(false)
                setBanTimer(BAN_TIME)
                setIsFormAvailable(true)
            }
            const timer = setInterval(() => {
                setBanTimer(banTimer - 1)
            }, 1000)
            return () => clearInterval(timer)
        }
    }, [banTimer])

    const setDisabilityTimer = () => {
        setBanTimer(banTimer - 1)
    }

    const handleNameChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    }

    const handlePhoneChange = (e) => {
        const input = e.target.value.replace(/\D/g, '').substring(1, 11); // First ten digits of input only
        const areaCode = input.substring(0, 3);
        const middle = input.substring(3, 6);
        const number6_8 = input.substring(6, 8);
        const number8_10 = input.substring(8, 10);
        let number = ''
        if (input.length > 8) {
            number = `(${areaCode}) ${middle} - ${number6_8} - ${number8_10}`;
        } else if (input.length > 6) {
            number = `(${areaCode}) ${middle} - ${number6_8}`;
        } else if (input.length > 3) {
            number = `(${areaCode}) ${middle}`;
        } else if (input.length > 0) {
            number = `(${areaCode}`;
        }
        setToSend({...toSend, [e.target.name]: number});
    }


    const pageRoute = window.location.pathname
    return (
        <div id={'callback-form'} className={'section-form'}>
            <div className={'section-form-title'}>
                {(pageRoute === "/") ?
                    "Закажите обратный звонок"
                    :
                    "Задайте вопрос или оставьте заявку на расчет"
                }
            </div>
            <form className={'section-form-inputs'} onSubmit={completeForm}>
                <div className={'section-form-item'}>
                    <input className={'section-form-item-form'}
                           required
                           name={'from_name'} type={'text'} placeholder={'Имя'}
                           value={toSend.from_name}
                           onChange={handleNameChange}/>
                </div>
                <div className={'section-form-item'}>
                    <input className={'section-form-item-form'}
                           id={'phoneNumberInput'}
                           required
                           name={'from_number'}
                           value={"+7 " + toSend.from_number}
                           pattern="\+7 \([0-9]{3}\) [0-9]{3} - [0-9]{2} - [0-9]{2}"
                           onChange={handlePhoneChange}
                           placeholder={'Телефон'}
                           type="tel"/>
                </div>
                <button className={'section-form-button'} type='submit' id={'form-button'}>
                    {!isFormAvailable && !isRequestWithError && "Форма отправлена"}
                    {!isFormAvailable && isRequestWithError && "Форма недоступна"}
                    {isFormAvailable && !isRequestWithError && "Отправить"}
                </button>
            </form>
            <div className={`form-ban-message ${isRequestWithError ? 'visible' : 'hidden'}`}>
                Отправка формы будет доступна через <span>{banTimer}</span> секунд
            </div>
            <div className={'section-form-text'}>
                Нажимая кнопку «Отправить» вы даёте своё согласие на обработку персональных данных.
            </div>
        </div>
    );
}

export default Form;