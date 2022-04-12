import {ADD_1, DIF_1, ADD_11, DIF_11, ADD_RAND, DIF_RAND, CC, KK } from "../Constants";
export function add1() { //1.cia grazinam action objektus
    return {
        type: ADD_1
    }
}

export function dif1() { //2.cia grazinam action objektus
    return {
        type: DIF_1
    }
}

export function add11() { //3.cia grazinam action objektus
    return {
        type: ADD_11
    }
}

export function dif11() { //4.cia grazinam action objektus
    return {
        type: DIF_11
    }
}



export function addRand(payload) { //5.cia grazinam action objektus
    return {
        type: ADD_RAND,
        payload : payload
    }
}


export function difRand(payload) { //6.cia grazinam action objektus
    return {
        type: DIF_RAND,
        payload : payload
    }
}

export function cc() { //7
    return {
        type: CC
    }
}

