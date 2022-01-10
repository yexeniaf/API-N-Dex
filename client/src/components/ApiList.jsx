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


    return <div class="container">
            <ul>
                {apis.map((api) => {
                    return (
                        <li key={api.id}>
                            <Link to={`/apis/${api.id}`}>
                                <div>
                                    <h2>{api.fields.title} </h2>
                                    <img 
                                        style={{width: '300px'}}
                                        src={api.fields.image}
                                        alt={api.fields.title} />
                                </div>
                            </Link>
                        </li>
                    )

                })}
            </ul>
        </div>
    
}
