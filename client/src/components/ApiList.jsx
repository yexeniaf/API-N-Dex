import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import api from "../services/apiConfig";

export default function ApiList() {
    const [apis, setApis] = useState([]);

    useEffect(() => {
        const fetchApis = async() => {
            const res = await api.get();
            console.log(res.data.records);
            setApis(res.data.records)
        }
        fetchApis()
    }, [])


    return <div className="card-group">
            <div>                
                {apis.map((api) => {
                    return (
                        <div className ="card-body" key={api.id}>
                            <Link to={`/apis/${api.id}`}>
                                <div>
                                    <img 
                                        className='card-img-top'
                                        style={{width: '200px'}}
                                        src={api.fields.imageUrl}
                                        alt={api.fields.title} />    
                                    <h4 className='titles'>{api.fields.title} </h4>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div >
        </div>    
}
