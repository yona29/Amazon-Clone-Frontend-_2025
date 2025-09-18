
import {Type} from "./action.type"



export const initialState ={
    basket:[]
}



export const reducer =(state,action)=>{

switch (action.type) {
    case Type.ADD_To_BASKET:
        return{

...state,basket:[...state.basket,action.item]

        }
      

    default:
        return state;
}


}

