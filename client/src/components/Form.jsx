export default function Form(props) {
    const { title, description, link, imageUrl } = props.input


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
            <label for="exampleFormControlTextarea1">Description</label>
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
            <label>Key</label>
            <br/>
            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Choose...</option>
                <option value="1">No API Key Needed</option>
                <option value="2">API Key Needed</option>
            </select>
            <br/>
            <br/>
            <button>{props.type}</button>   
        </form>
    )
}
