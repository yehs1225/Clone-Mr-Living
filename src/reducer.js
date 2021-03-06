export const initialState={
    basket:[],
    product:[],
    user:null,
    userName:null
};

const reducer =(state,action)=>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            //find if the item is already in the cart
            const index1 = state.basket.findIndex(
                (basketItem) => basketItem.id===action.item.id
            );
            //copy the array of items
            let newBasket1 = [...state.basket];
            //condition : whether the array is empty or not
            if(index1>=0){
                // already exist ,add quantity
                newBasket1[index1].quantity+=1;
            }else{//add a new item
                newBasket1 =[...state.basket,action.item]; 
            }
            return {
                ...state,
                basket:newBasket1,
            };
        case 'REDUCE_FROM_BASKET':
            //find if the item is already in the cart
            const index2 = state.basket.findIndex(
                (basketItem) => basketItem.id===action.item.id
            );
            //copy the array of items
            let newBasket2 = [...state.basket];
            //condition : whether the array is empty or not
            if(index2>=0){
                // already exist ,add quantity
                newBasket2[index2].quantity-=1;
            }
            return {
                ...state,
                basket:newBasket2,
            };
        case 'CLEAR_ALL_BASKET':
            return{
                ...state,
                basket:action.basket
            }
        case 'REMOVE_FROM_BASKET':
            //find index of the item we want to remove
            const index3 = state.basket.findIndex(
                (basketItem) => basketItem.id===action.id
            );
            //copy the array of items
            let newBasket3 = [...state.basket];
            //condition : whether the array is empty or not
            if(index3>=0){
                //remove the item
                newBasket3.splice(index3,1);
            }else{
                console.warn(
                    `Cant remove product (id:${action.id}) as its not in the basket!`
                )
            }
            return{
                ...state,
                basket:newBasket3
            }
        case 'GET_PRODUCT':
            return{
                ...state,
                product:[...state.product,action.item]
            };
        case 'SET_USER':
            return{
                ...state,
                user:action.user,
                userName:action.userName
            }
        default:
            return state;
    }
}
export default reducer;