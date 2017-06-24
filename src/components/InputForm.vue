<template>
    <div>
        <input type="text" v-model="text">
        <p>
            <button @click="addTodo">add</button>
        </p>
    </div>
</template>

<script>
export default {
  name: 'input-form',
  data: function () {
    return {
      text: ''
    }
  },
  methods: {
    addTodo: function () {
      // TODO: actionを介して読んだほうが本当は良いんだろうな
      this.$store.commit('ADD', this.text)
      this.text = ''
    }
  }
}
</script>

