<template>
  <div class="pageCard">
      <div class="title">
         {{title}}
      </div>
      <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
    props:{
        title: String
    }
})
export default class PageCard extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pageCard{
    border: 2px solid red;
    padding: 20px;
    .title{
        border-bottom: 2px solid black;
        margin: 10px;
    }
}
</style>
