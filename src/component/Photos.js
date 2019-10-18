import React  from 'react'
// import PropTypes from 'prop-types'
// import PreviewCompatibleImage from '../component/PreviewCompatibleImage'

class Photos extends React.Component{
    state={
        pics:'',
        feature:{
            src:'',
            text:'select picture on left'
        }
    }
    componentDidMount(){
        console.log(this.props)
        let pics=this.props
        if(this.state.feature.src===''){
            let featureDefault= {
                src:pics.gridItems[0].image.childImageSharp.fluid.src,
                text:pics.gridItems[0].text
                }
                this.setState({
                    pics:pics.gridItems,
                    feature:featureDefault
                })
        }

        // console.log(pics)
        // console.log(this.state)
        // this.setState({
        //     pics:pics.gridItems,
        //     feature:featureDefault
        // })
    }
    componentDidUpdate(){
        // console.log (this.state.feature)
    }
    // const [feature, setFeature] = useState({
    //     src:'',
    //     text:''
    //   });
    //   const [pics, setPics] = useState('')
    //   setPics(data.gridItems)
       handleClick =(e)=>{
           let img= e.target.name
          console.log(this.state.feature)
          console.log("BOOOOOOOOOOO"+img)
    //       this.setState({})
          
          let list=this.state.pics
          list.map(data=>{
            // console.log(data.image.childImageSharp.fluid.src)
            console.log(img)
          if(data.image.childImageSharp.fluid.src===img){
            this.setState({feature:{
                src:img,
                text: data.text
            }
        })
            // console.log(list)
            // this.setState({ text:text})
        //   }else{
        //       console.log(pics)
    // }
          }
    }) 
        }
    render(){
      return(
          <div className='card'>
        <div className='row'>
        <div className='col s2' style={{ height:'80vh',overflow:'auto', marginTop:'10vh'}}>
        
          {this.state.pics.length>0?
          this.state.pics.map(item=>{
            let img=item.image.childImageSharp.fluid.src
            // console.log(this.props)
            return(
                <button type='button' key={img} onClick={this.handleClick} name={img} style={{ height:'10vh',margin:'0px'}}>
                <img src={img} alt="img missing"name={img} style={{ width:'10vw',height:'10vh',margin:'0px', border: 'solid 1px #fff'}}></img>
                </button>
                )
                }):
                <div style={{ height:'10vh',margin:'0px'}}></div>
        }
        </div>
        {/* {this.state.feature? */}
        <div className='col s8 offset-s1'style={{height:'100vh',overflow:'auto'}}>
            <div className='row'>
            <span className="col s10"><h6>Available:{this.props.available}</h6><div>Asking Price:{this.props.askingPrice}</div></span> 
            </div> 
            <h5 style={{color:'#eb4034', margin:'0em'}}>{this.props.heading}</h5>
           
           <span><h6>Available:{this.props.available}</h6><div>Asking Price:{this.props.askingPrice}</div><p>{this.props.description}</p></span> 
            <img src={this.state.feature.src} alt='feature image missing'style={{width: '100vw', height:'60vh', marginTop:'0vh', padding:'2em'}}></img>
            <p>{this.state.feature.text}</p>
        </div>
         {/* <div className='col s8 offset-s1'>
         <img src={this.state.feature.src} style={{width: '80vw', height:'60vh', marginTop:'20vh'}}></img>
         <p>{this.state.feature.text}</p>
      </div> */}
    {/* //   } */}
      </div>
      </div>
      )
}
}
export default Photos