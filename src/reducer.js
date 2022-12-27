
export const initialState = {
    basket: [],
    totalPrice:0,
};


export const getBasketTotal = (basket) => {
    return(basket?.reduce((quantity, item) => item.price + quantity, 0));
}

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
            
            const item = state.basket.find(
                basket => basket.id===action.id
                
            );
            if(item){
                return {
                    ...state,
                    basket: state.basket.map(item => item.id === action.id
                      ? {
                        ...item,
                        quantity: item.quantity + 1,
                      }
                      : item
                    ),
                    totalPrice: state.totalPrice + action.price,
                  };
            }
            return {
                ...state,
                basket: [...state.basket, action.item],
                totalPrice: state.totalPrice + action.price,
                
            }
        
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index>=-1) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product(id: ${action.id}) as its not in the basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }
        case "INCREMENT":
            const indexI = state.basket.findIndex((basketItem)=>basketItem.id===action.id);
            let newBasketI = [...state.basket];
                if(indexI){
                    newBasketI[indexI] = {
                       ...newBasketI[indexI],
                        quantity: newBasketI[indexI].quantity + 1

                    }
                }
       
        default:
            return state;
    }
}

export default reducer;