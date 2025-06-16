
const style = {
    textDecoration: 'none',
    fontSize: '1rem',
    color: 'var(--text-colour)',
    cursor: 'pointer'
}

export default ({text, onClick}) => {

    return (
        <p onClick={onClick} style={style}>{text}</p>
    )

}