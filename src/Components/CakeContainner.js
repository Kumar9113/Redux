import React from 'react'
import {buyCake} from '../redux'
import {  connect } from 'react-redux'
function CakeContainner(props) {
  return (
    <div>
        <h2>Number of Cakes-{props.numOfCakes}</h2>
        <button>Buy cake</button>
      
    </div>
  )
}
const mapStateToProps=state=>
{
    return{
        numOfCakes:state.numOfCakes
    }
}
const mapDispatchToProps=dispatch=>
{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainner)
