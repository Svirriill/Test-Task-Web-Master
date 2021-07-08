import esc from "../../images/Close_Icon.png";
import './Popup.css';

function Popup({isOpen, onClose}) {
    return (
        <div className={`popup ${isOpen && "popup_opened"}`}>
            <div className="popup__container">
                <form action="mail.php" method="post" className="popup__form">
                    <h3 className="popup__title">Подать заявку</h3>
                    <input 
                    className="popup__input"
                    type="text"
                    name="name"
                    placeholder="Имя"
                    />
                    <input 
                    className="popup__input"
                    type="text"
                    name="phone"
                    placeholder="Номер телефона"
                    />
                    <input 
                    className="popup__input"
                    type="text"
                    name="email"
                    placeholder="Email"
                    />
                    <input 
                    className="popup__input"
                    type="text"
                    name="product"
                    placeholder="Наименование продукта"
                    />
                    <button type="submit" className="popup__button">Отправить</button>
                    <button className="popup__button-esc" type="button">
                        <img src={esc} 
                        alt="кнопка закрытия окна редиктирования" 
                        onClick={onClose} 
                        className="popup__esc" />
          </button>
                </form>
            </div>
        </div>
    );
}

export default Popup;