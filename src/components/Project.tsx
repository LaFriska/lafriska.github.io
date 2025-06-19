import '../css/App.css';

export default () => {

    const containerStyle = {
        backgroundColor: 'var(--embed-gray)',
        borderLeft: '4px solid var(--text-colour)',
        borderRadius: '3px',
        padding: '10px 15px',
        margin: '1rem 0',

    }

    const textContainerStyle = {
        marginLeft: '15px'
    }

    return (
        <div style={containerStyle}>
            <div style={textContainerStyle}>
                <h3 className={'projectText'}>Hello</h3>
            </div>
        </div>
    )
}