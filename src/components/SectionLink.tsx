import {useState} from "react";
import '../css/App.css';

export default ({text, onClick}: {text:string, onClick:(event: React.MouseEvent<HTMLDivElement>) => void}) => {

    const [isHovering, setHovering] = useState(false)

    const style = {
        textDecoration: 'none',
        fontSize: '1.25rem',
        cursor: 'pointer',
        transform: isHovering ? 'scale(1.05)' : 'scale(1)',
        color: isHovering ? 'var(--nice-red)' : 'black'
    }

    return (
        <p onClick={onClick}
           onMouseEnter={() => setHovering(true)}
           onMouseLeave={() => setHovering(false)}
           style={style}>

            {text}

        </p>
    )

}