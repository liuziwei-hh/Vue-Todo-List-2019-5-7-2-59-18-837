import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const initState = {
    messages: [],
    buttons: []
};

const store = new Vuex.Store({
    state: initState,
    getters: {
        getMessages(state){
            return function () {
                return state.messages;
            };
        },
    mutations:{
        pushMessages(state,message){
            state.messages.push(message);
        }
    }
}) ;

export default store;
 