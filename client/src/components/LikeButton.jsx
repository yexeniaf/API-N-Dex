import { useState } from 'react'

export default function LikeButton() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount +1)
    }
    

    return (
        <div>
            <button onClick={increment}>Likes {count}</button>
        </div>
    )
}
