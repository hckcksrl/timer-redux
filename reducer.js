// Import

// InitialState 설정 , Action 설정 , Action Creator 생성
// Reducer 생성 Action Export , Reducer Export(Default)

// Actions

const START = "START"
const RESTART = "RESTART"
const ADD = "ADD"

// Action Creators

function Start() {
    return{
        type : START
    }
}

function Restart() {
    return{
        type : RESTART
    }
}

function Add() {
    return{
        type : ADD
    }
}

// Reducer

const Time = 3000;

const InitialState = {
    Play : false,
    Elapse : 0,
    Timer : Time
}

function reducer(state=InitialState , action) {
    switch(action.type){
        case START :
            return Start_Timer(state , action)
        case RESTART :
            return Restart_Timer(state , action)
        case ADD :
            return Add_Second(state , action)
        default :
            return state
    }
}

// Reducer Functions 

function Start_Timer(state , action) {
    return {
        ...state,
        Play : true,
        Elapse : 0
    }
}

function Restart_Timer(state , action) {
    return {
        ...state,
        Play : false,
        Elapse : 0
    }
}

function Add_Second(state, action) {
    const {Elapse} = state
    if(Elapse < Time){
        return {
            ...state,
            Elapse : Elapse + 1
        }
    }else {
        return {
            ...state,
            Play : false
        }
    }
}

// Exports

const Action_Creator = {
    Start,
    Restart,
    Add
}

export {Action_Creator}

// Export Reducer

export default reducer




