import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import DeleteButton from './DeleteButton';

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
            <h2>{api.fields.title}</h2>
            <img style={{width: "300px"}} src={api.fields.image} alt={api.fields.title}/>
            <h3>{api.fields.description}</h3> 
            <DeleteButton id={id}/>
        </div>
    )
}
