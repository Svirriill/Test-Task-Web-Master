import './Card.css';
import img from '../../images/img.jpg';

function Card({isOpen}) {
    return (
    <div className="card">
        <img className="card__image" src={img} alt="фотография продаваемого продукта" />
        <h4 className="card__title">Парикмахерское кресло "Норм" гидравлическое</h4>
        <p className="card__price">9900 ₽</p>
        <button className="card__button" onClick={isOpen}>Купить</button>
    </div>
    );
}

export default Card;