import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import api from '../services/apiConfig';
import DeleteButton from './DeleteButton';


export default function ApiDetail() {
    const [ apiDetail, setApiDetail] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const fetchApi = async () => {
            const res = await api.get(`/${id}`)
            setApiDetail(res.data)
        }
        fetchApi();
    }, [])

    if (!apiDetail.fields) {
        return <div>LOADING</div>
    }

    return (
        <div className='detail-container'>
            <h2>{apiDetail.fields?.title}</h2>
            <br/>
            <br/>
            <img style={{width: "300px"}} src={apiDetail.fields.imageUrl} alt={apiDetail.fields.title}/>
            <br/>
            <br/>
            <h3>{apiDetail.fields?.description}</h3> 
            <br/>
            <br/>
            <h4>{apiDetail.fields?.link}</h4>
            <br/>
            <DeleteButton id={id}/>
        </div>
    )
}
