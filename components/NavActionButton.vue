<script setup>
    const props = defineProps({
        message: String,
        count: Number,
        icon: String,
    });
</script>

<template>
    <div class="nav-action-button">
        <div class="nav-action-section">
            <span v-html="icon" class="nav-action-icon"></span>
            <span class="text">{{message}}</span>
        </div>
        <div class="nav-action-button-count">{{count}}</div>
    </div>
</template>