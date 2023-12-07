import { BUY_CAKE } from "./CakeTypes"
const intialState={
    numberOfCakes:10
}
const cakeReducer=(state=intialState,action)=>
{
    switch(action.type)
    {
        case BUY_CAKE:return{
            ...state,
            numberOfCakes:state.numberOfCakes-1
        }
        default:return state

    }
}
export default cakeReducer