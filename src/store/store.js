 
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        entrys: [ ]
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
        initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		},
        addEntry (state, entry) {
            state.entrys = [...state.entrys, entry]
          }
    }
});
