export default function Order({
    order,
    removeFromOrder,
    totalPrice
}) {
    return (
        <section className="order-section">
            <div className="order-heading">
                <div>
                    <span className="small-title">
                        YOUR CART
                    </span>

                    <h2>Your Order</h2>
                </div>

                <div className="item-count">
                    {order.length} items
                </div>
            </div>

            {order.length === 0 ? (
                <div className="empty-order">
                    <div className="empty-icon">
                        🛒
                    </div>

                    <h3>Your order is empty</h3>

                    <p>
                        Choose something delicious from
                        the menu.
                    </p>
                </div>
            ) : (
                <>
                    <div className="order-list">
                        {order.map((food, index) => (
                            <div
                                className="order-item"
                                key={`${food.id}-${index}`}
                            >
                                <div className="order-food-icon">
                                    {food.emoji}
                                </div>

                                <div className="order-info">
                                    <h3>{food.name}</h3>
                                    <p>
                                        ${food.price}
                                    </p>
                                </div>

                                <button
                                    className="remove-button"
                                    onClick={() =>
                                        removeFromOrder(
                                            food.id
                                        )
                                    }
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="order-total">
                        <span>Total</span>
                        <strong>
                            ${totalPrice}
                        </strong>
                    </div>

                    <button className="checkout-button">
                        Proceed to Checkout →
                    </button>
                </>
            )}
        </section>
    );
}