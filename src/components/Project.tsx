import '../css/App.css';

export default () => {

    const containerStyle = {
        backgroundColor: 'var(--embed-gray)',
        borderLeft: '4px solid var(--text-colour)',
        borderRadius: '3px',
        padding: '10px 15px',
        margin: '1rem 0',
        gap: '10px'
    }

    const textContainerStyle = {
        marginLeft: '15px'
    }

    const footerStyle = {
        marginLeft: '15px',
        fontSize: '0.75rem',
        color: 'var(--border-gray)'
    }

    return (
        <div style={containerStyle}>
            <div style={textContainerStyle}>
                <h3 className={'projectText'}>Kompakt</h3>
                <p>A compact and convenient JSON serialiser for Java, aimed to resolve verbosity of libraries such as Gson.</p>
            </div>
            <div style={footerStyle}>
                01/12/2024
            </div>
        </div>
    )
}
