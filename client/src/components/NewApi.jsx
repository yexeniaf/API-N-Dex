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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fields = input;
        const res = await api.post("/", {fields});
        setInput(default_input);
        navigate("/apis")
    }

    const handleTextInput = (event) => {
        const {name, value} = event.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }))
    };


    return (
        <div> Add New API
            <Form
                input={input}
                handleTextInput={handleTextInput}
                handleSubmit={handleSubmit}
                type={"Create"} 
            />
            
        </div>
    )
}
