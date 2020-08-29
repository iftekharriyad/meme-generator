import React, { Component } from 'react'

import MemeCont from './MemeCont'

import '../sass/MemeGenerator.scss'

import randomMeme from '../img/random-meme.jpeg'


export default  class MemeGenerator extends Component{

    constructor(props){
        super(props)
        this.state={
            topText:'',
            bottomText:'',
            randomImg:randomMeme,
            allMemeImgs:[],
            response:0
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    async componentDidMount(){
        try{
            let response = await fetch('https://api.imgflip.com/get_memes')
          
            if(!response.ok){
                throw Error(response.statusText)
            }
            let data= await response.json()
            
            let memes= await data.data.memes
            let r=response.status
            //console.log(memes)
            this.setState({
                allMemeImgs:memes,
                response:r
            })
        }
        catch(error){
            //console.log(response)
            this.setState({
               response:404
            })
        }
        //console.log(this.state)
  
    }
    handleChange(e){
       
        let {value,name}=e.target;
        this.setState({[name]:value})

    }
    handleSubmit(e){
        e.preventDefault()
 
            let length=this.state.allMemeImgs.length
            if(length>0){
                let random= Math.floor(Math.random()*(length))
                //console.log(random)
                let randomUrl= this.state.allMemeImgs[random].url
                this.setState({
                    randomImg:randomUrl
                })
            }
      
  
    }
    render(){
        return(
            <div className='container py-3 pb-1'>

                <form className='meme-form' onSubmit={this.handleSubmit}>
                    <div id='form-row' className='form-row'>
                        <div className='col'>
                            <input 
                                type='text'
                                name='topText'
                                onChange={this.handleChange}
                                value={this.state.topText}
                                className='form-control'
                                placeholder='Top Text'
                            />
                        </div>
                        <div className='col'>
                            <input 
                                type='text'
                                name='bottomText'
                                onChange={this.handleChange}
                                value={this.state.bottomText}
                                className='form-control'
                                placeholder='Bottom Text'
                            />
                        </div>
                        <div className='col-2'>
                        <button  className='btn btn-generate'>Generate</button>
                        </div>
                    </div>

                    
                </form>

              <MemeCont data={this.state}/>
               
            </div>
        )
    }
}