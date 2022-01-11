import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import api from "../services/apiConfig";

const default_input = {
    title: "",
    imageUrl: "",
    description: "",
    link: "",
}

export default function NewApi() {
    const [input, setInput] = useState(default_input)

    const navigate = useNavigate();

    return (
        <div>
            
        </div>
    )
}
