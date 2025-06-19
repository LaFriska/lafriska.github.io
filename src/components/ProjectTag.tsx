import '../css/App.css';

export default ({children}: any) => {

    const style = {
        border: '1px solid var(--yellow)',
        backgroundColor: `var(--yellow-light)`,
        borderRadius: '15%',
        display: 'inline-block',  // Don't stretch like block-level elements
        color: `black`,
        fontSize: '12px',
        padding: '0.1rem 0.3rem '
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}