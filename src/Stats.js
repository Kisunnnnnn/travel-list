function Stats({ items }) {

    const numItems = items.length
    const numOfPackedItems = items.filter((item) => item.packed === true).length
    const percentage = Math.round((numOfPackedItems / numItems) * 100)

    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? 'You got everything! Ready to go ✈️' : ` You have ${numItems} items on your list , and you already packed ${" "}${numOfPackedItems} (${percentage}%)`}

            </em>

        </footer>
    )
}
export default Stats;