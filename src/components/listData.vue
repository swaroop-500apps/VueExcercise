<template>
  <div class="listData">
    <div class="id"> 
      <table border="1px" >
        <tr>
          <td>{{source.API}}</td>&nbsp;&nbsp;
          <td>{{source.Description}}</td>&nbsp;&nbsp;
          <td>{{source.Auth}}</td>&nbsp;&nbsp;
          <td>{{source.HTTPS}}</td>&nbsp;&nbsp;
          <td>{{source.Cors}}</td>&nbsp;&nbsp;
          <td>{{source.Link}}</td>&nbsp;&nbsp;
        </tr>
      </table>
    </div> 
  </div>
</template>
     
<script>
  export default {
    name: 'listData',
    props: {
        source: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .source {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgrey;
    padding: 1em;
  }
  </style>
  