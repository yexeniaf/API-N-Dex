export default function Form(props) {
    const { title, description, link, imageUrl } = props.input


    return (
        <form >
            <label>Title</label>
            <input 
                name="title"
                value={title}
                placeholder="Add API Title"
                onChange={props.handleTextInput}
            />   
            <label>Description</label>
            <input 
                name="description"
                value={description}
                placeholder="Add API Description"
                onChange={props.handleTextInput}
            />   
            <label>Link</label>
            <input 
                name="link"
                value={link}
                placeholder="Add API Link"
                onChange={props.handleTextInput}
            />   
            <label>API Image Url</label>
            <input 
                name="imageUrl"
                value={imageUrl}
                placeholder="Add the API's image URL"
                onChange={props.handleTextInput}
            />     
        </form>
    )
}
