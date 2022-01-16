<template>
    <div class="home-wrapper">
        <carousel class="carousel" v-bind="carouselConfig">
            <slide class="slide">
                <div class="img-placeholder"></div>
               
                <img
                    :src="image1"
                    alt="Image 1"
                />
            </slide>
            <slide class="slide">
                 <div class="img-placeholder"></div>
                <div class="img-placeholder"></div>
                <img
                    :src="image2"
                    alt="Image 2"/>
            </slide>
            <slide class="slide">
                 <div class="img-placeholder"></div>
                <div class="img-placeholder"></div>
                <img
                    :src="image3"
                    alt="Image 3"/>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import image1 from '../../../public/images/image1.jpg';
import image2 from '../../../public/images/image2.jpg';
import image3 from '../../../public/images/image3.jpg';

export default {
    name: "home",
    components: {
        Carousel,
        Slide,
    },
    data() {
        return {
            image1,
            image2,
            image3,
            carouselConfig: {
                perPage: 1,
                mouseDrag: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2000
            },
        };
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>

.home-wrapper {
    width: 100%;

    .carousel {
        width: 100%;
        max-height: 600px;

        .slide {
            width: 100%;

            .img-placeholder {
                padding-top: 100%;
                width: 100%;
                position: absolute;
            }

            img {
                width: 100%;
                height: auto;
            }
        }
    }
}

</style>
