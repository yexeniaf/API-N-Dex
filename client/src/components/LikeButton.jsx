import { useState } from 'react';
import api from '../services/apiConfig';

export default function LikeButton(props) {
    const [count, setCount] = useState(props.likes);

    const increment = async () => { 
        let currentCount = count + 1;
        let fields = {likes: currentCount}

        await api.patch(`/${props.id}`, {fields})
        setCount((prevCount) => prevCount +1)
    }
    

    return (
        <div>
            <button type="like-button" className="btn btn-light" onClick={increment}>Likes: {count}</button>
        </div>
    )
}
