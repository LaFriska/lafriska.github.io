import '../css/App.css';
import Projects from "./Projects";
import Project from "./Project";

export default () => {

    const style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem'

    }

    return (
        <div className={'page'} style={style}>
            <Project name={'Kompakt'}
                     description={'A compact and convenient JSON serialiser for Java, aimed to resolve verbosity of libraries such as Gson.'}
                     date={'November 2024'}
                     tags={['ml', 'cs', 'ca', 'se', 'asda']} />
        </div>
    )
}