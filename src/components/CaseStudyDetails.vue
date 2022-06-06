<template>
    <div class="details-container mb-16">
        <h6 class="text-gray-500 font-semibold mb-3">Industry: <span class="font-light rfs-text-base">{{ industry }}</span></h6>
        <h6 class="text-gray-500 font-semibold mb-3">Business use cases: <span class="font-light rfs-text-base">{{ businessUseCase }}</span></h6>
        <h6 class="text-gray-500 font-semibold mb-3 border-">Technical use case: <span class="font-light rfs-text-base">{{ techUseCase }}</span></h6>
        <div class="accent-container relative">
            <span class="accent"></span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['industry', 'businessUseCase', 'techUseCase'],
}
</script>