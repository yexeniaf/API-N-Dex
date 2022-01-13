export default function Form(props) {
    const { title, description, link, imageUrl } = props.input


    return (
        <form className="form-container" onSubmit={props.handleSubmit} >
            <label>Title</label>
            <br/>
            <input 
                name="title"
                style={{ width: '600px'}}
                value={title}
                placeholder="Add API Title"
                onChange={props.handleTextInput}
            />   
            <br/>
            <label for="exampleFormControlTextarea1">Description</label>
            <br/>
            <textarea 
                name="description"
                style={{ width: '600px'}}
                value={description}
                placeholder="Add API Description"
                onChange={props.handleTextInput}
            />   
            <br/>
            <label>Link</label>
            <br/>
            <input 
                name="link"
                style={{ width: '600px'}}
                value={link}
                placeholder="Add API Link"
                onChange={props.handleTextInput}
            />   
            <br/>
            <label>API Image Url</label>
            <br/>
            <input 
                name="imageUrl"
                style={{ width: '600px'}}
                value={imageUrl}
                placeholder="Add the API's image URL"
                onChange={props.handleTextInput}
            />  
            <br/>
            <br/>
            <button class>{props.type}</button>   
        </form>
    )
}
