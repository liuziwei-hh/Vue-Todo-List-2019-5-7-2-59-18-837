  <template>
  <div>
    <h2>{{msg}}</h2>
    <hr />
    <h3></h3>
    <div>
    </div>
    <div>
      <h3>{{$store.getters.sum}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
