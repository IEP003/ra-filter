import './card.css'

export const Card = ({ card }) => (
    <main className="card">
        {card.map((item, index) => (
            <img 
                className="card-item"
                key={index}
                src={item.img}
                data-category={item.category}
            /> 
        ))}
    </main>
)