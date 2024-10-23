import './Bottle.css'
const Bottle = ({ bottle }) => {
    const {name, img, price} = bottle;
    return (
        <div className="bottle">
            <h3>Bottle: {name}</h3>
            <img src={img}/>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Bottle;