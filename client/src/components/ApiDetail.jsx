import { useState } from 'react';
import { useParams } from "react-router-dom"

export default function ApiDetail() {
    const [ api, setApi] = useState({});
    const {id} = useParams();

    return (
        <div>
            
        </div>
    )
}
