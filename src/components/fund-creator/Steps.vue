<template>
    <div class="flex items-center -mx-2">
        <div v-for="(step, index) in steps"
             :key="index"
             class="step flex-1 mx-2"
             :class="{ 'active' : step.active }">

            <i :class="step.icon"></i>
            <span v-text="step.title"></span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            steps: {
                required: true,
            }
        }
    }
</script>