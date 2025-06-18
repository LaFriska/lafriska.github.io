import '../css/App.css';

export default function Gallery() {
    const containerStyle = {
        marginTop: '50px',
        gap: '1rem',
        width: '100%',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
    };

    const imageStyle = {
        width: '60%',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        border: '1px solid #000000'
    };

    return (
        <div style={containerStyle}>
            <img className="galleryimage" style={imageStyle} src="img/circuits.jpg" alt="Circuits"/>
            <img className="galleryimage" style={imageStyle} src="img/linalg.jpg" alt="Linear Algebra" />
            <img className="galleryimage" style={imageStyle} src="img/neural.png" alt="Java" />
            <img className="galleryimage" style={imageStyle} src="img/algebra.jpg" alt="Algebra" />
        </div>
    );
}
