<script setup>
import { Calendar } from "v-calendar";
import "v-calendar/style.css";
import NavIcon from "./icons/NavIcon.vue";


const currentDate = new Date();
const futureDates = [];

// Calculate and add future dates
for (let i = 1; i <= 8; i += 2) {
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + Math.floor(Math.random(1) * 10));
  futureDates.push(nextDate);
}

const attributes = [
  {
    color: "purple",
    fillMode: "outline",
    dates: futureDates,

    content: {
      color: "purple",
      style: {
        fontStyle: "italic",
      },
    },
  },
  {
    key: "today",
    highlight: {
      fillMode: "solid",
    },
    dates: new Date(),
  },
];
</script>

<template>
  <section class="flex flex-y-down flex-x-left">
    <div class="header flex flex-y-center">
      <h5>Account</h5>
      <span class="T-blue ML-30px cursor-point">Edit</span>
    </div>

    <div
      class="student flex flex-y-center flex flex-y-center flex-x-between MT-15px"
    >
      <h3>$1234.00</h3>
      <span class="T-gray">Visa 1234</span>
    </div>

    <div class="MT-65px payments-container">
      <div class="flex flex-y-center MB">
        <h5>Payments</h5>
        <span class="T-blue cursor-point ML-30px">View all</span>
      </div>

      <div class="clients">
        <!-- This is for vue-for loop -->
        <div class="item flex flex-y-center flex-x-between" v-for="i in 3">
          <section class="flex flex-center">
            <div class="profile-S MR-15px">
              <img src="../assets/images/PRO5.jpg" alt="User" />
            </div>

            <div class="username">
              <h5>Gottfeld Asms</h5>
              <span class="T-gray">Math</span>
            </div>
          </section>

          <span class="T-blue">+$25.00</span>
        </div>
      </div>
    </div>

    <section class="calender">
        <div class="flex flex-y-center flex-x-between">
            <h5>Calender</h5>
            <div class="icon flex flex-center">
                <NavIcon />
            </div>
        </div>
      <Calendar :attributes="attributes" v-model="date" mode="date" />
    </section>
  </section>
</template>
<style scoped>
.MB {
  margin-bottom: 30px;
}
.profile-S {
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  overflow: hidden;
  border-radius: 50%;
}
.header {
  margin-top: 20px;
  margin-bottom: 10px;
}
.student {
  width: 95%;
  margin: 10px;
  padding: 25px 20px;
  border-radius: 20px;
  background: #ffffff;
  align-items: flex-start;
}
.payments-container {
  padding: 25px;
  border-radius: 20px;
  margin-top: 40px;
  background: #ffffff;
}
.item {
  margin: 10px 0;
  padding: 10px 0;
}
.calender {
    width: 100%;
    padding: 20px;
    margin-top: 30px;
    border-radius: 20px;
    background: #ffffff;
}
</style>
