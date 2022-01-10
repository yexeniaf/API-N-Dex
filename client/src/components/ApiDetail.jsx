import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

export default function ApiDetail() {
    const [ api, setApi] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const fetchApi = async () => {
            const res = await api.get(`/${id}`)
            setApi(res.data)
        }
        fetchApi();
    }, [])

    return (
        <div>
            
        </div>
    )
}
