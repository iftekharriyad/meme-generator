import React from 'react'

import '../sass/Header.scss'

import trollFace from '../img/trollface.png'

export default function Header(){
    return(
        <header className='d-flex px-3 py-3 justify-content-center align-items-center'>
            <img className='d-block' src={trollFace} alt='trollface icon'></img>
            <h1 className='d-block ml-5'>Meme Generator</h1>
        </header>
    )
}