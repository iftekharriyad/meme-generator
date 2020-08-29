import React from 'react'

import wentWrongMeme from '../img/went-wrong-meme.png'


export default function MemeCont(props){
    //console.log(props.data.response,'1')
    if(props.data.response<200){
        return(
            <div className='d-flex justify-content-center p-5'>
                  <div className="spinner-border" role="status">
               <span className="sr-only">Loading...</span>
           </div>
            </div>
         
        )
    }
    else if(props.data.response===200 || props.data.response===201 || props.data.response===203 || props.data.response===204 ){
            return(
                <div id='memeCont' className='d-relative my-3'>
                    <img src={props.data.randomImg} alt='random meme'></img>
                    <p id='top-text' className=''>{props.data.topText}</p>
                    <p id='bottom-text' className=''>{props.data.bottomText}</p>
                </div>
            )
        }
   
     else {

        return(
            <div id='memeCont' className='d-relative my-3'>
                <h2 className='text-center'>Oops!</h2>
                <img className='d-block' src={wentWrongMeme} alt='something went terribly wrong meme'></img>
                <a href='/index.html' className='btn btn-warning d-block mx-auto mt-2'>Refresh</a>
            </div>
        )
         
      

    }

}