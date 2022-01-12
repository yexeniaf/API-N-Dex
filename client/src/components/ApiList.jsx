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


    return <div className="row">
            <div className='col-sm-6'>                
                {apis.map((api) => {
                    return (
                        <div className= "card" key={api.id}>
                            <Link to={`/apis/${api.id}`}>
                                <div className='card-body'>
                                    <img 
                                        className='card-img-top'
                                        style={{width: '200px'}}
                                        src={api.fields.imageUrl}
                                        alt={api.fields.title} />  
                                        <br/>
                                        <br/>  
                                    <h4 className='titles'>{api.fields.title} </h4>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div >
        </div>    
}
