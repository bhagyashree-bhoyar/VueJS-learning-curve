 
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        entrys: [
            {name: 'Banana Skin', email: 'abc@gmail.com'},
            {name: 'Shiny Star', email: 'xyz@gmail.com'},
            {name: 'Green Shells', email: 'aaa@@gmail.com'},
            {name: 'Red Shells', email: 'bbb@gmail.com'}
        ]
    },
    getters: {
        getEntrys: (state) => {
            var getEntrys = state.entrys.map( entry => {
                return entry;
            });
            return getEntrys;
        }
    },
    actions: {
        addEntry({ commit }, entry) {
            commit('addEntry', entry)
        }
    },

    mutations: {
        addEntry (state, entry) {
            state.entrys = [...state.entrys, entry]
          }
    }
});
