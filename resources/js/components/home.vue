<template>
    <div class="home-wrapper">
        <VueSlickCarousel v-bind="carouselConfig" class="carousel">
            <div class="slide">
                <div class="img-placeholder"></div>
                <img :src="image1" alt="Image 1" />
            </div>
            <div class="slide">
                <div class="img-placeholder"></div>
                <img :src="image2" alt="Image 2" />
            </div>
            <div class="slide">
                <div class="img-placeholder"></div>
                <img :src="image3" alt="Image 3" />
            </div>
        </VueSlickCarousel>

        <div class="home-content-block about-us">
            <h2 class="home-content-title">Наші віддмінності</h2>

            <section class="article">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis, distinctio voluptas? Pariatur culpa sunt doloribus
                molestiae officia aut ducimus incidunt illum ratione veniam vero
                quaerat assumenda vitae, error sequi aliquid.
            </section>
        </div>

        <div class="home-content-block news">
            <VueSlickCarousel v-bind="carouselConfig2" class="carousel">
                <div class="slide">
                    <a class="news-link">
                        <img :src="image1" alt="Image 1" />

                        <div class="news-info-wrapper">
                            <time datetime="2001-05-15 19:00">15 мая</time>
                            <h5 class="news-title">Title 1</h5>
                            <span class="news-short"
                                >Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Adipisci voluptates rem ea sit
                                sequi esse? Cumque labore quia neque eligendi
                                repellendus enim pariatur, amet adipisci
                                accusantium fugiat asperiores provident
                                sed?</span
                            >
                        </div>
                    </a>
                </div>
                <div class="slide">
                    <a class="news-link">
                        <img :src="image1" alt="Image 1" />
                        <time datetime="2001-05-15 19:00">15 мая</time>
                        <h5 class="news-title">Title 1</h5>
                        <span class="news-short"
                            >Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci voluptates rem ea sit sequi esse?
                            Cumque labore quia neque eligendi repellendus enim
                            pariatur, amet adipisci accusantium fugiat
                            asperiores provident sed?</span
                        >
                    </a>
                </div>
                <div class="slide">
                    <a class="news-link">
                        <img :src="image1" alt="Image 1" />
                        <time datetime="2001-05-15 19:00">15 мая</time>
                        <h5 class="news-title">Title 1</h5>
                        <span class="news-short"
                            >Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci voluptates rem ea sit sequi esse?
                            Cumque labore quia neque eligendi repellendus enim
                            pariatur, amet adipisci accusantium fugiat
                            asperiores provident sed?</span
                        >
                    </a>
                </div>
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import image1 from "../../../public/images/image1.jpg";
import image2 from "../../../public/images/image2.jpg";
import image3 from "../../../public/images/image3.jpg";

export default {
    name: "home",
    components: {
        VueSlickCarousel,
    },
    data() {
        return {
            image1,
            image2,
            image3,
            carouselConfig: {
                autoplaySpeed: 2000,
                arrows: true,
                dots: true,
                autoplay: false,
                variableWidth: false,
                adaptiveHeight: false,
            },
            carouselConfig2: {
                autoplaySpeed: 2000,
                arrows: true,
                dots: true,
            },
        };
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
@import '../../sass/_variables';
.home-wrapper {
    width: 100%;

    .carousel {
        width: 100%;
        max-height: $maxHeightSLider1;

        ::v-deep .slick-slide {
            max-height: $maxHeightSLider1;

            .slide {
                position: relative;
                border: red 1px;
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

    .home-content-block {
        width: 100%;
        padding: 30px 15px;
        margin: 30px 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        .home-content-title {
            font-size: 2rem;
            font-weight: bold;
        }

        &.about-us {
            .article {
                font-size: 1.2rem;
                max-width: 80%;
                padding-top: 20px;
            }
        }
        &.news {
            .news-wrapper {
                .news-link {
                    text-decoration: none;
                    display: flex;
                    flex-direction: column;
                    width: 100%;

                    .news-info-wrapper {
                        width: 100%;
                        display: flex;
                    }
                }
            }
        }
    }
}
</style>
