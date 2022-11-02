export const initialState = {
    basket: []
}

export const priceCalculation = (getPrice) => 
getPrice.reduce((amount, currentAmout) => amount + currentAmout.price, 0)

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket, action.item]
            };
        case "REMOVE_BASKET" :
            const index = state.basket.findIndex((basketId) => basketId.key === action.key)
            console.log(index)
            let newbasket = [...state.basket]
            if(index >= 0) {
                newbasket.splice(index, 1)
            }else{
                console.log("product not found")
            }

            return {
                ...state,
                basket:newbasket,
            }
        default:
            return state
    }
}

export default reducer