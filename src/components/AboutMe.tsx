import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import '../css/App.css';
import ImageGallery from "./ImageGallery";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [aboutMe, setAboutMe] = useState('*Loading...*')

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/md/aboutme.md`)
            .then(res => res.text())
            .then(setAboutMe)
    }, [])

    return (
        <div style={{ display: 'flex' }}>
            <ReactMarkdown className={'page'}>
                {aboutMe}
            </ReactMarkdown>
            <ImageGallery/>
        </div>
    )

}