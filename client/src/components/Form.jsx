export default function Form(props) {
    const { title, description, link, imageUrl, key } = props.input


    return (
        <form className="form-container" onSubmit={props.handleSubmit} >
            <label>Title</label>
            <br/>
            <input 
                name="title"
                style={{ width: '70%'}}
                value={title}
                placeholder="Add API Title"
                onChange={props.handleTextInput}
            />   
            <br/>
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <br/>
            <textarea 
                name="description"
                style={{ width: '70%'}}
                value={description}
                placeholder="Add API Description"
                onChange={props.handleTextInput}
            />   
            <br/>
            <label>Link</label>
            <br/>
            <input 
                name="link"
                style={{ width: '70%'}}
                value={link}
                placeholder="Add API Link"
                onChange={props.handleTextInput}
            />   
            <br/>
            <label>API Image Url</label>
            <br/>
            <input 
                name="imageUrl"
                style={{ width: '70%'}}
                value={imageUrl}
                placeholder="Add the API's image URL"
                onChange={props.handleTextInput}
            />  
            <br/>
            <label>Click if a need is needed key:</label>
            <br/>
            <input 
            type="checkbox"
            name="key"
            checked={key}
            onChange={props.handleCheckbox}
            />
            <br/>
            <br/>
            <button>{props.type}</button>   
        </form>
    )
}