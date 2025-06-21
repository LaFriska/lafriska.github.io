import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import '../css/App.css';
import ImageGallery from "./ImageGallery";
import SocialLink from "./SocialLink";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [aboutMe, setAboutMe] = useState('*Loading...*')

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/md/aboutme.md`)
            .then(res => res.text())
            .then(setAboutMe)
    }, [])

    const paths: string[] = [
        "img/rijndael.PNG",
        "img/graph.png",
        "img/algebra.jpg",
        "img/neural.png"
    ];


    return (
        <div style={{ display: 'flex' }}>
            <div className={'page'}>
                <ReactMarkdown>
                    {aboutMe}
                </ReactMarkdown>
                <ReactMarkdown>
                    {'## Connect With Me'}
                </ReactMarkdown>
                <div>
                    <SocialLink logoFile={'github.png'} text={'LaFriska'} link={'https://github.com/LaFriska'} />
                    <SocialLink logoFile={'linkedin.png'} text={'Harold Gao'} link={'https://www.linkedin.com/in/harold-gao-4549342b8/'} />
                    <SocialLink logoFile={'researchgate.png'} text={'Harold Gao'} link={'https://www.researchgate.net/profile/Harold-Gao?ev=hdr_xprf'} />
                    <SocialLink logoFile={'mail.png'} text={'harold.gao205@gmail.com'} link={'harold.gao205@gmail.com'} />
                </div>
            </div>
            <ImageGallery paths={paths}/>
        </div>
    )

}