<script setup>
import NaveUI from "./components/NavUI.vue";
import ActivityUI from "./components/Activity.vue";
import DashboardUI from "./components/Dashboard.vue";
</script>
<template>
  <section class="flex">
    <nav class="nav_bar">
        <NaveUI />
    </nav>
    <section class="Activity_Container MT-65px">
        <ActivityUI />
    </section>
    <section class="Account_Container MT-65px">
      <DashboardUI />
    </section>
  </section>
</template>
<style scoped>
.nav_bar {
    width: 90px;
    padding: 25px;
    margin-top: 45px;
    margin-left: 15px;
    border-radius: 8px;
    background: #ffffff;
}

.Activity_Container {
  width: 65%;
  margin-left: 10px;
}

.Account_Container {
  width: 30%;
  margin-left: 10px;
  margin-right: 40px;
  padding: 0 20px;
}

</style>