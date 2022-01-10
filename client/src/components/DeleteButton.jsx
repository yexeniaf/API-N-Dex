import api from "../services/apiConfig";
import { useNavigate } from "react-router-dom";


export default function DeleteButton(props) {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const res = await api.delete(`/${props.id}`)
        navigate("/apis")
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete API</button>
        </div>
    )
}
