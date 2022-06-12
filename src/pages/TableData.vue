<template>
  <div class="hello">
    <table id="customers">
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
          <th>Quick contact</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="info in user" :key="info.company">
          <td>{{info.company}}</td>
          <td>{{info.contact}}</td>
          <td>{{info.country}}</td>
          <td>Contact with <strong>{{info.contact}}</strong> at <strong>{{info.company}}</strong> company in <strong>{{info.country}}</strong></td>
        </tr>
      </tbody> 
    </table>
  </div>
</template>

<script>
import userData from "../assets/customer.json"
export default {
  data(){
    return {
      user: userData.data,
    }
  }
}
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 80%;
  margin: 20px auto;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04AA6D;
  color: white;
}
</style>
