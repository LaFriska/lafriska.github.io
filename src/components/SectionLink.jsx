
const style = {
    textDecoration: 'none',
    fontSize: '1.25rem',
    cursor: 'pointer'
}

export default ({text, onClick}) => {

    return (
        <p onClick={onClick} style={style}>{text}</p>
    )

}