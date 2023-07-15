<script setup>
import GridIcon from "./icons/GridIcon.vue";
import DateIcon from "./icons/DateIcon.vue";
import InboxIcon from "./icons/InboxIcon.vue";
import StockIcon from "./icons/StockIcon.vue";
import WalletIcon from "./icons/WalletIcon.vue";
import SettingIcon from "./icons/SettingIcon.vue";
</script>

<template>
    <nav>
        <section class="logo flex flex-center">
            <img width="100" height="100" class="no-select no-drag" src="../assets/images/logo.png" alt="Learngoal" srcset="">
        </section>

        <section class="navigation">
            <div class="list l-round flex flex-center active cursor-point">
                <div class="icon flex flex-center">
                    <GridIcon />
                </div>
            </div>
            <div class="list l-round flex flex-center">
                <div class="icon flex flex-center">
                    <DateIcon />
                </div>
            </div>
            <div class="list l-round flex flex-center">
                <div class="icon flex flex-center">
                    <InboxIcon />
                </div>
            </div>
            <div class="list l-round flex flex-center">
                <div class="icon flex flex-center">
                    <StockIcon />
                </div>
            </div>
            <div class="list l-round flex flex-center">
                <div class="icon flex flex-center">
                    <WalletIcon />
                </div>
            </div>
            <div class="list l-round flex flex-center">
                <div class="icon flex flex-center">
                    <SettingIcon />
                </div>
            </div>
        </section>
    </nav>
</template>
<style scoped>

.logo {
    width: 35px;
    height: 35px;
    margin-bottom: 95px !important;
}

.l-round .icon {
    width: 20px;
    height: 20px;
}

.l-round {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    margin-bottom: 36px;
}

.l-round.active {
    background: var(--blue);
}

.l-round.active svg {
    stroke: #ffffff;
}

</style>