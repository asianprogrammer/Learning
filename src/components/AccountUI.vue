<script setup>
import NotificationIcon from "./icons/NotificationIcon.vue";
import SearchIcon from "./icons/SearchIcon.vue";
</script>
<template>
  <section>
    <div class="account flex flex-x-right">
      <div class="icons flex flex-center">
        <div class="icon flex flex-center cursor-point">
          <SearchIcon />
        </div>
        <div class="icon flex flex-center cursor-point">
          <NotificationIcon />
        </div>
      </div>
      <div class="profile">
        <img width="100" height="100" class="image" src="../assets/images/PRO7.jpg" alt="Supper User"  />
      </div>
    </div>
  </section>
</template>
<style scoped>
.icon {
  width: 25px;
  height: 25px;
  margin: 0 10px;
}

.icons {
    margin-right: 20px;
}
.icon:nth-child(2) {
    position: relative;
}
.icon:nth-child(2)::before {
    top: -4px;
    right: -4px;
    content: '';
    width: 8px;
    height: 8px;
    background: red;
    border-radius: 50%;
    position: absolute;
}

.icons svg {
    stroke: black;
}

</style>
