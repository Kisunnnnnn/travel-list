import { useState } from "react";

function Form({ onAddItems }) {
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)
    function handleSubmit(e) {
        e.preventDefault()
        if (!description) return;

        const newItem = {
            id: Date.now(),
            description,
            quantity,
            packed: false
        }
        onAddItems(newItem)
        setDescription("")
        setQuantity(1)
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select name="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {
                    Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                        <option value={n} key={n}>{n}</option>
                    ))
                }
            </select>
            <input type="text" placeholder="Item" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <button>ADD</button>
        </form>
    )
}
export default Form