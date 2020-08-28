import React, { Component } from 'react'

import '../sass/MemeGenerator.scss'


export default  class MemeGenerator extends Component{
    constructor(props){
        super(props)
        this.state={
            topText:'',
            bottomText:'',
            randomImg:'http://i.imgflip.com/1bij.jpg',
            allMemeImgs:[]
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
            //console.log(memes)
            this.setState({
                allMemeImgs:memes
            })
        }
        catch(error){
            console.log(error)
        }
  
    }
    handleChange(e){
       
        let {value,name}=e.target;
        this.setState({[name]:value})

    }
    handleSubmit(e){
        e.preventDefault()
    
        let random= Math.floor(Math.random()*(this.state.allMemeImgs.length+1))
        let randomUrl= this.state.allMemeImgs[random].url
        this.setState({
            randomImg:randomUrl
        })
    }
    render(){
        return(
            <div className='container py-3'>

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
                        <button className='btn btn-primary'>Generate</button>
                        </div>
                    </div>

                    
                </form>
                <div id='memeCont' className='d-relative my-3'>
                    <img src={this.state.randomImg} alt='random meme'></img>
                    <p id='top-text' className=''>{this.state.topText}</p>
                    <p id='bottom-text' className=''>{this.state.bottomText}</p>
                </div>
               
            </div>
        )
    }
}