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
        </form>
    )
}
