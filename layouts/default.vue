<template>
  <v-app app dark>
    <v-navigation-drawer mobile-break-point="560" app v-model="drawer"
      ><v-list subheader>
        <v-subheader>List of users in chat</v-subheader>
        <v-list-tile v-for="user in users" :key="user.id" @click.prevent="">
          <v-list-tile-content>
            <v-list-tile-title>{{ user.name }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon :color="user.id === 2 ? 'primary' : 'grey'"
              >chat_bubble</v-icon
            >
          </v-list-tile-action>
        </v-list-tile>
      </v-list></v-navigation-drawer
    >
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click="exit"><v-icon>arrow_back</v-icon></v-btn>
      <v-toolbar-title>Chat Room {{ user.room }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <div style="height: 100%">
        <nuxt />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: () => {
    return {
      drawer: true,
      users: [
        { id: 1, name: "Rodion" },
        { id: 2, name: "Ira" },
      ],
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapMutations(["clearData"]),

    exit() {
      this.$router.push("/?message=leftChat");
      this.clearData();
    },
  },
};
</script>
