<template>
  <div>
    <section>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-12">
            <ul class="list-group">
              <li class="list-group-item">Name : {{ user.firstName }}</li>
              <li class="list-group-item">Email : {{ user.email }}</li>
              <li class="list-group-item">Foto
                <img :src="'http://localhost:3000/'+user.image" height="100" width="100">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode"

export default {
  data: () =>({
    user: {}
  }),
  methods: {
    getUserDetails() {
      try {
        const token = localStorage.getItem("jwt")
        let decoded = VueJwtDecode.decode(token)
        this.user = decoded        
      } catch (e) {
        console.log({message: e})        
      }
    },
    logUserOut() {
      localStorage.removeItem("jwt")
      this.$router.push("/")
    }
  },
  created() {
    this.getUserDetails();
  }
}
</script>