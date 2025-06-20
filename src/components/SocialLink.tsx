
export default ({logoFile, text, link}: {logoFile: string, text: string, link:string}) => {

    const linkStyle = {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'inherit',
        width: '25%'
    };

    const imageStyle = {
        width: '30px',
        height: '30px',
        margin: '0.5rem'
    }

    const textStyle = {
        marginLeft: '0.3rem'
    }

    return (
        <a href={link} style={linkStyle} target="_blank" rel="noopener noreferrer">
            <img src={"img/" + logoFile} style={imageStyle} />
            <p style={textStyle}>{text}</p>
        </a>
    )

}