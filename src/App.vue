<template>
  <div id="app">
    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
        <table class="table">
          <thead>
            <tr>
              <th><abbr title="Turn">Turn</abbr></th>
              <th title="Seq q">Seq 1</th>
              <th><abbr title="Seq 2">Seq 2</abbr></th>
              <th><abbr title="Seq 3">Seq 3</abbr></th>
              <th><abbr title="Seq 4">Seq 4</abbr></th>
              <th><abbr title="Lost">Hint</abbr></th>
            </tr>
          </thead>
          <tbody>
            <input-row></input-row>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import InputRow from './components/InputRow.vue';
export default {
  name: "App",
  components: {InputRow},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
