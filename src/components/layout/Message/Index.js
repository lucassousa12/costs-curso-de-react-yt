import {useState, useEffect} from 'react';

import MessageDiv from './Style'

export default function Message({type, text}) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(!text) {
            setVisible(false);
            return;
        } else {
            setVisible(true);
        } 

        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000)

        return() => clearTimeout(timer);

    }, [text])

    return (
        <MessageDiv>
            {
                visible && (
                    <div className={type}>
                        <p >{text}</p>
                    </div>
                )
            }
        </MessageDiv>
    )
}