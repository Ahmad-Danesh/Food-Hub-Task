export default function Header({ orderCount }) {
    return (
        <header className="header">
            <div className="brand">
                <div className="logo">🍴</div>

                <div>
                    <h1>FoodHub</h1>
                    <p>Delicious food, simple ordering</p>
                </div>
            </div>

            <div className="order-badge">
                🛒 {orderCount}
            </div>
        </header>
    );
}