export default function Form(props) {
    const { title, description, link, imageUrl } = props.input


    return (
        <form >
            <label>Title</label>
            <input 
                name="title"
                value={title}
                placeholder="Add API Title"
            />   
            <label>Description</label>
            <input 
                name="description"
                value={description}
                placeholder="Add API Description"
            />   
            <label>Link</label>
            <input 
                name="link"
                value={link}
                placeholder="Add API Link"
            />   
            <label>API Image Url</label>
            <input 
                name="imageUrl"
                value={imageUrl}
                placeholder="Add the API's image URL"
            />     
        </form>
    )
}
