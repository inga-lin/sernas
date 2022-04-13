import { ADD_KV, DEL_KV } from "../Constants";

function kvadratelis(state, action) {

    const copy = [...state]; //10.2variantas.istrinam kvadrata

    switch (action.type) {
        case ADD_KV:
            return [...state, 1]; //pridedam kvadrata
        case DEL_KV:
             copy.shift();//10.2variantas.istrinam kvadrata
             return copy; //10.2variantas.istrinam kvadrata
            // return  state.filter((_, i) => i !== 0) //9.1-variantas.istrinam vis paskutini kvadrata //jei vietoje 0parasytumem 1 tai pirmo kvadrato neistrins
        default:
            return state;
    }
}

export default kvadratelis;

/* dar 3variantas

import { ADD_KV, DEL_KV } from "../Constants";

function kvadratelis(state, action) {

    const copy = [...state]; //10.2variantas.istrinam kvadrata

    switch (action.type) {
        case ADD_KV:
            copy.push(1);
            break;
        case DEL_KV:
             copy.shift();//10.2variantas.istrinam kvadrata
            break;
        default:
            return copy;
    }

export default kvadratelis;
*/

//9.Dadėti mygtuką. kuris ištrina vieną kvadratą. DONE!