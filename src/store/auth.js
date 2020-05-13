import firebase from 'firebase/app'

export default {
  state: {
    user:{
      isAuthenticated:false
    }
  },
  mutations:{
    set_user(state){
      state.user.isAuthenticated = true
    }
  },
  actions: {
    async login({dispatch, commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        commit('set_user')
      } catch (e) {
        commit('setError', e);
        throw e
      }
    },
    async register({dispatch, commit}, {email, password, name}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('getUid');
        await firebase.database().ref(`/users/${uid}/info`).set({
          name
        })
      } catch (e) {
        commit('setError', e);
        throw e
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null
    },
    async logout({commit}) {
      await firebase.auth().signOut();
      commit('clearInfo')
    }
  },
   getters:{
      isUserAuthenticated: (state) => state.user.isAuthenticated
    }
}
