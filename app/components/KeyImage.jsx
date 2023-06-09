'use client'; // Client component

import Image from 'next/image';
import qwerty from '../../public/images/qwertyKeyboard.png';
import ortho from '../../public/images/orthoKeyboard.png';
import dvorak from '../../public/images/dvorak_layout.png';

function keyImage(option) {
    let imageSrc = option.image // convert state object into string
    if (imageSrc == "qwerty") {
        return (
            <Image 
            alt = "qwerty keyboard image"
            className = "img"
            id = "keyboardImage"
            width = {500}
            height = {170}
            priority = {true}
            src = {qwerty}
        />
        )
    } else if (imageSrc == "ortho") {
        return (
            <Image 
                alt = "qwerty keyboard image"
                className = "img"
                id = "keyboardImage"
                width = {500}
                height = {170}
                priority = {false}
                src = {ortho}
            />  
        )
    } else {
        return (
            <Image 
            alt = "qwerty keyboard image"
            className = "img"
            id = "keyboardImage"
            width = {500}
            height = {170}
            priority = {false}
            src = {dvorak}
        />  
        )
    }
}

export default keyImage