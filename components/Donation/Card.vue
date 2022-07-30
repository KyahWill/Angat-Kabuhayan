<script setup lang="ts">
    defineProps({
        Title: {
            type: String,
            default: '',
        },
        Description: {
            type: String,
            default: '',
        },
        imgUrl: {
            type: String,
            default: '',
        }
    })
</script>
<template>
    <div class="inline-flex flex-col space-y-7 items-center justify-end pl-6 pr-4 pt-9 pb-4 bg-neutral m-4" style="width: 478px; height: 621px;">
        <p class="text-2xl font-bold leading-none text-center text-white" style="width: 439px; height: 22px;">{{ Title }}</p>
        <p class="text-xl font-light leading-3 text-white">{{ Description }}</p>
        <div class="w-1/2 h-14">
            <div class="flex items-center justify-center flex-1 h-full px-20 py-4 bg-white rounded-lg">
                <p class="flex-1 h-full text-xl font-light leading-none text-center">VIEW</p>
            </div>
        </div>
    </div>
</template>
<style>
</style>