import '../css/App.css';

const imageStyle = {
    width: '60%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    border: '1px solid #000000'
};

export default function Gallery({paths}: {paths:string[]}) {
    const containerStyle = {
        marginTop: '50px',
        gap: '1rem',
        width: '100%',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
    };

    return (
        <div style={containerStyle}>
            {getImages(paths)}
        </div>
    );
}

function getImages(paths: string[]){
    return paths.map((value, index) => {
        return <span key={index}> <img className="galleryimage" style={imageStyle} src={value} alt={"Image showing off my works"}/> </span>
    })
}
