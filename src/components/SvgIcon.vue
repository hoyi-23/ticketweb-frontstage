<template>
    <svg class="svg-icon">
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
        width: 2rem;
        height: 2rem;
        fill: currentColor !important;
        overflow: hidden;
        @media (min-width: 1023px){
            width: 4rem;
            height: 4rem;
        }
    }
</style>