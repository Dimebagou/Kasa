import './index.css'

const Tag = (props) => {
    const { tag } = props
    return (
        <div className="tag">{tag}</div>
    )
}

export default Tag