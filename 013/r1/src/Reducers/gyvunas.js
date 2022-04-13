import { SVO, GYV } from "../Constants";

function kvadratelis(state, action) {

    const copy = [...state]; //10.2variantas.istrinam kvadrata

    switch (action.type) {
        case SVO:
            return [...state, 1]; //pridedam kvadrata
        case GYV:
             copy.shift();//10.2variantas.istrinam kvadrata
             return copy; //10.2variantas.istrinam kvadrata
            // return  state.filter((_, i) => i !== 0) //9.1-variantas.istrinam vis paskutini kvadrata //jei vietoje 0parasytumem 1 tai pirmo kvadrato neistrins
        default:
            return state;
    }
}

export default kvadratelis;