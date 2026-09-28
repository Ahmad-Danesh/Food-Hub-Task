import { useState } from "react";
import Header from "./Header";
import FoodList from "./FoodList";
import Order from "./Order";

const foods = [
    {
        id: 1,
        name: "Burger",
        price: 8,
        category: "Fast Food",
        emoji: "🍔"
    },
    {
        id: 2,
        name: "Pizza",
        price: 12,
        category: "Italian",
        emoji: "🍕"
    },
    {
        id: 3,
        name: "Fried Chicken",
        price: 10,
        category: "Chicken",
        emoji: "🍗"
    },
    {
        id: 4,
        name: "Taco",
        price: 7,
        category: "Mexican",
        emoji: "🌮"
    },
    {
        id: 5,
        name: "Pasta",
        price: 9,
        category: "Italian",
        emoji: "🍝"
    },
    {
        id: 6,
        name: "Salad",
        price: 6,
        category: "Healthy",
        emoji: "🥗"
    }
];

export default function App() {
    const [order, setOrder] = useState([]);

    function addToOrder(food) {
        setOrder((order) => [...order, food]);
    }

    function removeFromOrder(id) {
        setOrder((order) =>
            order.filter((food) => food.id !== id)
        );
    }

    const totalPrice = order.reduce(
        (total, food) => total + food.price,
        0
    );

    return (
        <div className="app">
            <Header orderCount={order.length} />

            <main className="main">
                <FoodList
                    foods={foods}
                    addToOrder={addToOrder}
                />

                <Order
                    order={order}
                    removeFromOrder={removeFromOrder}
                    totalPrice={totalPrice}
                />
            </main>
        </div>
    );
}