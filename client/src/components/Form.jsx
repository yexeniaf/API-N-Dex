export default function Form(props) {
    const { title, description, link, imageUrl } = props.input


    return (
        <form onSubmit={props.handleSubmit} >
            <label>Title</label>
            <input 
                name="title"
                value={title}
                placeholder="Add API Title"
                onChange={props.handleTextInput}
            />   
            <br/>
            <label>Description</label>
            <input 
                name="description"
                value={description}
                placeholder="Add API Description"
                onChange={props.handleTextInput}
            />   
            <br/>
            <label>Link</label>
            <input 
                name="link"
                value={link}
                placeholder="Add API Link"
                onChange={props.handleTextInput}
            />   
            <br/>
            <label>API Image Url</label>
            <input 
                name="imageUrl"
                value={imageUrl}
                placeholder="Add the API's image URL"
                onChange={props.handleTextInput}
            />  
            <br/>
            <button>{props.type}</button>   
        </form>
    )
}
