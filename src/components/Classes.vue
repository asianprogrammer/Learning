<script setup>
import { useStudents } from "../stores/counter";
import FilterIcon from "./icons/FilterIcon.vue";
import SearchIcon from "./icons/SearchIcon.vue";
import CalenderIcon from "./icons/DateIcon.vue";
import LocationIcon from "./icons/LocationIcon.vue";

const store = useStudents();
const teachers = store.classes;
const finders = store.finders;
</script>
<template>
  <section class="flex flex-x-even">
    <!-- Classes -->
    <div class="classes-container w-50p PM">
      <div class="flex flex-x-between MY-10px">
        <h4>My Classes</h4>
        <div class="icons flex flex-center">
          <div class="icon-S cursor-point flex flex-center">
            <SearchIcon />
          </div>
          <div class="icon-S cursor-point flex flex-center">
            <FilterIcon />
          </div>
        </div>
      </div>

      <div
        class="main-class"
        v-for="teacher in teachers"
        :key="teacher.profile"
      >
        <div class="top flex flex-y-center flex-x-between">
          <h5 class="title">{{ teacher.title }}</h5>
          <div class="flex flex-center T-gray">
            <div class="icon-ES flex flex-center">
              <CalenderIcon />
            </div>
            <span>&nbsp; {{ teacher.date }}</span>
          </div>
        </div>

        <p class="T-gray" v-html="teacher.about.replace(/\n/g, '<br>')"></p>

        <div class="location flex flex-center flex-x-left MT-15px">
          <div class="icon-ES flex flex-center">
            <LocationIcon />
          </div>
          <span class="T-gray">{{ teacher.location }}</span>
        </div>

        <div class="flex flex-y-center flex-x-between author">
          <div class="flex flex-center flex-x-left">
            <div class="profile smallProfile">
              <img
                width="100"
                height="100"
                class="image"
                :src="`./src/assets/images/${teacher.profile}`"
                :alt="teacher.teacher"
              />
            </div>
            <div class="FW-400 T-Bold ML-10px">
              <h6>{{ teacher.teacher }}</h6>
            </div>
          </div>

          <button class="btn cursor-point">New</button>
        </div>
      </div>
    </div>

    <!-- Jobs -->
    <section class="finder w-50p PM">
      <div class="flex flex-x-between MY-10px">
        <h4>Jobs</h4>
        <div class="icons flex flex-center">
          <div class="icon-S cursor-point flex flex-center">
            <SearchIcon />
          </div>
          <div class="icon-S cursor-point flex flex-center">
            <FilterIcon />
          </div>
        </div>
      </div>

      <div class="cover flex flex-center">
        <img
          class="image no-select no-drag"
          width="100"
          height="100"
          src="../assets/images/MATH.jpg"
          alt="Mathematics"
          srcset="../assets/images/MATH.jpg"
        />
      </div>

      <div class="finders">
        <div class="main-class" v-for="finder in finders" :key="finder.profile">
          <div class="top flex flex-y-center flex-x-between">
            <h5 class="title">{{ finder.title }}</h5>
          </div>

          <p class="T-gray" v-html="finder.about.replace(/\n/g, '<br>')"></p>

          <div class="location flex flex-center flex-x-left MT-15px">
            <div class="icon-ES flex flex-center">
              <LocationIcon />
            </div>
            <span class="T-gray">{{ finder.location }}</span>
          </div>

          <div class="flex flex-y-center flex-x-between author">
            <div class="flex flex-center flex-x-left">
              <div class="profile smallProfile">
                <img
                  width="100"
                  height="100"
                  class="image no-select no-drag"
                  :src="`./src/assets/images/${finder.profile}`"
                  :alt="finder.name"
                />
              </div>
              <div class="FW-400 T-Bold ML-10px">
                <h6>{{ finder.name }}</h6>
              </div>
            </div>

            <div class="btn cursor-point">New</div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<style scoped>
.w-50p {
  width: 45%;
}
.PM {
  margin: 0 10px;
  padding: 0 10px;
}
.main-class {
  width: 95%;
  padding: 10px;
  overflow: hidden;
  margin: 30px auto;
  border-radius: 12px;
}
.main-class:hover {
  background: #f0f6ff;
}
.author {
  margin: 20px 0;
  margin-bottom: 10px;
}
.btn {
  opacity: 0;
  -webkit-transform: translateY(20px);
  -ms-transform: translateY(20px);
  transform: translateY(20px);
  -webkit-transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  -o-transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.main-class:hover .btn {
  opacity: 1;
  -webkit-transform: translateY(0px);
  -ms-transform: translateY(0px);
  transform: translateY(0px);
}
.icon-ES {
  width: 20px;
  height: 20px;
}
.icons .icon-S {
  width: 28px;
  height: 28px;
  margin: 0 10px;
}
.icons .icon-S svg {
  stroke: var(--blue);
}

.smallProfile {
  width: 30px;
  height: 30px;
}
.cover {
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 25px;
}
.cover img {
  object-fit: cover;
}
</style>
