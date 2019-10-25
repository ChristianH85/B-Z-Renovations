import React  from 'react'
import ModalImage from "react-modal-image";
// import PropTypes from 'prop-types'
// import PreviewCompatibleImage from '../component/PreviewCompatibleImage'

class Photos extends React.Component{
    state={
        pics:[],
        feature:{
            src:'',
            text:'select picture on left'
        }
    }
    componentDidMount(){
        console.log(this.props)
        let pics=this.props
        // if(this.state.pics===''){
            // let featureDefault= {
            //     src:pics.gridItems[0].image.childImageSharp.fluid.src,
            //     text:pics.gridItems[0].text
            //     }
                this.setState({
                    pics:pics.gridItems,
                    // feature:featureDefault
                })
        // }

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
        //   console.log(this.state.feature)
        //   console.log("BOOOOOOOOOOO"+img)
    //       this.setState({})
          
          let list=this.state.pics
          list.map(data=>{
            // console.log(data.image.childImageSharp.fluid.src)
            // console.log(img)
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
          <div className='card'style={{height:'100vh'}}>
        <div className='row'>
        {/* <div className='col s2' style={{ height:'90vh',overflow:'auto', marginTop:'5vh'}}>
        <div className='row'>
          {this.state.pics.length>0?
          this.state.pics.map(item=>{
            let text=item.text  
            let img=item.image.childImageSharp.fluid.src
            // console.log(this.props)
            return(
                
                    <ModalImage
                    className='col s3'
                style={{ width:'10vw',height:'10vh',margin:'0px', border: 'solid 1px #fff'}}
                small={img}
                large={img}
                hideDownload='false'
                alt={<div>{text}</div>}
                ><p>{text}</p></ModalImage>
               
                // <button type='button' key={img} onClick={this.handleClick} name={img} style={{ height:'10vh',margin:'0px'}}>
                // <ModalImage
                // style={{ width:'10vw',height:'10vh',margin:'0px', border: 'solid 1px #fff'}}
                // small={img}
                // large={img}
                // hideDownload='false'
                // alt={text}
                // ><p>{text}</p></ModalImage>
                // <img src={img} alt="img missing"name={img} style={{ width:'10vw',height:'10vh',margin:'0px', border: 'solid 1px #fff'}}></img>
                // </button>
                )
                }):
                <div style={{ height:'10vh',margin:'0px'}}></div>
        }
        </div>
        </div> */}
        {/* {this.state.feature? */}
        <div className=' col s10 offset-s1'style={{height:'100%',overflow:'auto', paddingBottom:'1em',paddingLeft:'0em',marginTop:'5vh'}}>
           <div className='card-title'>
           <h5 style={{color:'#eb4034', marginBottom:'.5em'}}>{this.props.heading}</h5> 
           <h6 style={{marginBottom:'.5em'}}>Available:{this.props.available}</h6><h6>Asking Price:{this.props.askingPrice}</h6><h6>{this.props.description}</h6>
        </div>
           <div className='row' style={{ height: '40vh', overflow: 'auto', margin:'0px', border: 'solid 1px #fff'}}>
           {this.state.pics?
           
          this.state.pics.map(item=>{
            let text=item.text  
            let img=item.image.childImageSharp.fluid.src
            console.log(this.item)
            return(
                <div className='col s4 offset-s2'style={{ overflow: 'auto', margin:'0px',padding: '0px', border: 'solid 1px #fff'}}>
                    <ModalImage
                //     className='col s4'
                // style={{ width:'10vw',height:'10vh',margin:'0px', border: 'solid 1px #fff'}}
                small={img}
                large={img}
                hideDownload='false'
                alt={<div>{text}</div>}
                />
               </div>
                )
                }):<div style={{ height:'0vh',margin:'0px'}}>no image</div>
                
        }
            
           </div>
           <div className='hide-on-large-only'>
      <div>
        <button style={{height:'10vh', width:'25vw', borderRadius:'100px',position:'fixed', bottom:'30px', right:'30px',backgroundColor:'rgba(0, 0, 0, 0.74)'}}>
          <a href="mailto:bandzrenovations@gmail.com?" style={{color:'rgba(247, 248, 247, 1)',fontWeight:'600',fontSize:'1.25em'}}>Contact</a>
        </button>
      </div>
    </div>
            {/* <img src={this.state.feature.src} alt='feature image missing'style={{width: '100vw', height:'60vh', marginTop:'0vh', padding:'0em'}}></img> */}
            {/* <div className="card-content" style={{height:'15vh', overflow: 'auto'}}>
            <p>{this.state.feature.text}</p>
            </div> */}
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