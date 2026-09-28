export default function FoodList({ foods, addToOrder }) {
    return (
        <section className="food-section">
            <div className="section-heading">
                <div>
                    <span className="small-title">
                        OUR MENU
                    </span>

                    <h2>Choose Your Food</h2>

                    <p>
                        Fresh and delicious meals waiting
                        for you.
                    </p>
                </div>
            </div>

            <div className="food-grid">
                {foods.map((food) => (
                    <div className="food-card" key={food.id}>
                        <div className="food-image">
                            {food.emoji}
                        </div>

                        <div className="food-content">
                            <span className="category">
                                {food.category}
                            </span>

                            <h3>{food.name}</h3>

                            <div className="food-bottom">
                                <strong>
                                    ${food.price}
                                </strong>

                                <button
                                    className="add-button"
                                    onClick={() =>
                                        addToOrder(food)
                                    }
                                >
                                    + Add
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}