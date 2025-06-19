import '../css/App.css';

export enum TagColour {
    Yellow = 0, //Software
    Blue = 1, //Cybersecurity
    Red = 2, //Research
    Green = 3, //ML
    Purple = 4, //Computer Architecture
    Gray = 5 //Other
}

export default ({children, colour}: any) => {

    const style = {
        border: '1px solid var(--yellow)',
        backgroundColor: `var(--yellow-light)`,
        borderRadius: '15%',
        display: 'inline-block',  // Don't stretch like block-level elements
        color: `black`,
        fontSize: '12px',
        padding: '0.1rem 0.3rem '
    }

    switch (colour){
        case TagColour.Yellow:
            style.border = '1px solid var(--yellow)'
            style.backgroundColor = `var(--yellow-light)`
            break;
        case TagColour.Blue:
            style.border = '1px solid var(--blue)'
            style.backgroundColor = `var(--blue-light)`
            break;
        case TagColour.Red:
            style.border = '1px solid var(--red)'
            style.backgroundColor = `var(--red-light)`
            break;
        case TagColour.Green:
            style.border = '1px solid var(--green)'
            style.backgroundColor = `var(--green-light)`
            break;
        case TagColour.Purple:
            style.border = '1px solid var(--purple)'
            style.backgroundColor = `var(--purple-light)`
            break;
        default:
            style.border = '1px solid var(--gray)'
            style.backgroundColor = `var(--gray-light)`
            break;
    }


    return (
        <div style={style}>
            {children}
        </div>
    )
}