<template>
    <svg class="svg-icon" :class="iconName">
        <use :xlink:href="`#${iconName}`"></use>
    </svg>
</template>

<script>
export default {
    name: 'SvgIcon',
    props:{
        iconName:{
            type: String,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
    .svg-icon{
        width: 2.5rem;
        height: 2.5rem;
        overflow: hidden;
        transition: all .15s ease-in-out;
        fill: currentColor !important;
        @media (min-width: 1023px){
            width: 4rem;
            height: 4rem;
        }
    }
</style>