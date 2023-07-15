<script setup>
import { useStudents } from '../stores/counter';
const students = useStudents();
</script>

<template>
    <section class="container">
        <h3>Welcome, Nadia!</h3>
        <div>My Status <span class="T-blue">View All</span></div>
    </section>

    <div class="students flex">
        <div v-for="student in students.students" class="student flex flex-y-center" >
            <div class="profile flex flex-center">
                <img width="100" height="100" class="no-select no-drag" :src="`./src/assets/images/${student.profile}`" :alt="student.name" :srcset="`./src/assets/images/${student.profile}`">
            </div>
            <div class="info">
                <h5>{{ student.name }}</h5>
                <span>{{ student.status }}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>

.container {
    margin-left: 20px;
}

.container h3 {
    margin-bottom: 30px;
}

.container div {
    margin-bottom: 10px;
}

.students {
    flex-wrap: wrap;
}

.student {
    width: 100%;
    margin: 10px;
    max-width: 350px;
    padding: 25px 15px;
    border-radius: 20px;
    background: #ffffff;
    align-items: flex-start;
}

.student span {
    color: var(--gray);
}

.profile {
    width: 40px;
    height: 40px;
    max-width: 40px;
    min-width: 40px;
    max-height: 40px;
    min-height: 40px;
    aspect-ratio: 1/1;
    margin-right: 15px;
}

.profile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>