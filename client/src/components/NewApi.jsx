import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import api from "../services/apiConfig";

const default_input = {
    title: "",
    imageUrl: "",
    description: "",
    link: "",
    key: false,
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

    const handleTextInput = (e) => {
        const {name, value} = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }))
    };

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        setInput ((prevInput) => ({
            ...prevInput, 
            [name]: checked,
        }))
    }


    return (
        <div> Add New API
            <br/>
            <br/>
            <Form
                input={input}
                handleTextInput={handleTextInput}
                handleSubmit={handleSubmit}
                handleCheckbox={handleCheckbox}
                type={"Create"} 
            />
            
        </div>
    )
}
