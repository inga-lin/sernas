import { ADD_1, DIF_1, ADD_11, DIF_11, DIF_RAND, ADD_RAND, CC, KK } from "../Constants"
function countReducer(state, action) { //(action) objektas-nusako ka reikia daryti ir kaip daryti ir su kuo daaryti. privalo tureti type ir payload
    switch (action.type) {
        case ADD_1:
            return state + 1;//1.prideda 1
        case ADD_11:
            return state + 11;//3.prideda 11
        case DIF_1:
            return state - 1;//2.atema 1
        case DIF_11:
            return state - 11;//4.atema 11 
        case ADD_RAND:
            return state + action.payload;//5.prideda rand skaiciu
        case DIF_RAND:
            return state - action.payload;//6. atema rand skaiciu
        case CC:
            return state === 'blue' ? 'pink' : 'blue';//7.jeigu spalva melyna paversk rozine ir atvirksciai
        case KK:
            return state + [];
        default:
            return state;
    }


}
export default countReducer