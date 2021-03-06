import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import api from '../services/apiConfig';
import DeleteButton from './DeleteButton';
import LikeButton from './LikeButton';



export default function ApiDetail() {
    const [ apiDetail, setApiDetail] = useState({});
    const {id} = useParams();


    useEffect(() => {
        const fetchApi = async () => {
            const res = await api.get(`/${id}`)
            setApiDetail(res.data)
        }
        // eslint-disable-next-line
        fetchApi();
    }, [id])

    if (!apiDetail.fields) {
        return <div>LOADING</div>
    }

    return (
        <div>
        <div className='detail-container'>
            <h2 className='detail-title'>{apiDetail.fields?.title}</h2>
            <br/>
            <img style={{width: '50%'}} src={apiDetail.fields.imageUrl} alt={apiDetail.fields.title}/>
            <br/>
            <br/>
            <h3 className="description">{apiDetail.fields?.description}</h3> 
            <br/>
            <br/>
            <h4 className='link' >{apiDetail.fields?.link}</h4>
            <br/>
            {apiDetail.fields.key ? <p>Key Is Needed</p> : <p>No Key Is Needed</p>}
            <br/>
            <DeleteButton id={id}/>
            <br/>
            <LikeButton id={id} likes={apiDetail.fields?.likes}/>
            </div>
            <div>
                <h3> This will be a comment section</h3>
            </div>
        </div>
    )
}