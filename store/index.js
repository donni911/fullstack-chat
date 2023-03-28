export const state = () => ({
  user: {},
  messages: [],
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  
  clearData(state) {
    state.name = {};
    state.messages = {};
  },

  SOCKET_newMessage(state, message) {
    state.messages.push(message);
  },
};

export const actions = {
  SOCKET_newMessage(ctx, data) {
    console.log("Message received", data);
  },
};
