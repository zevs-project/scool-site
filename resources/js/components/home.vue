<template>
    <div class="home-wrapper">
        <carousel id="carousel1" class="carousel" v-bind="carouselConfig1">
            <slide class="slide">
                <div class="img-placeholder"></div>
                <img :src="image1" alt="Image 1" />
            </slide>
            <slide class="slide">
                <div class="img-placeholder"></div>
                <img :src="image2" alt="Image 2" />
            </slide>
            <slide class="slide">
                <div class="img-placeholder"></div>
                <img :src="image3" alt="Image 3" />
            </slide>
        </carousel>

        <div class="home-content-block about-us">
            <h2 class="home-content-title about-us-title">Наші віддмінності</h2>

            <section class="article">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis, distinctio voluptas? Pariatur culpa sunt doloribus
                molestiae officia aut ducimus incidunt illum ratione veniam vero
                quaerat assumenda vitae, error sequi aliquid.
            </section>
        </div>

        <div class="home-content-block news">
            <h2 class="home-content-title news-title">Новини</h2>
            <div class="news-wrapper">
                <a class="news-link">
                    <img class="news-thumb" :src="image1" alt="Image 1" />

                    <div class="news-info-wrapper">
                        <h5 class="news-title">Title 1</h5>
                        <span class="news-short"
                            >Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.</span
                        >
                        <time datetime="2001-05-15 19:00">15 мая</time>
                    </div>
                </a>
                <a class="news-link">
                    <img class="news-thumb" :src="image1" alt="Image 1" />

                    <div class="news-info-wrapper">
                        <h5 class="news-title">Title 1</h5>
                        <span class="news-short"
                            >Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.</span
                        >
                        <time datetime="2001-05-15 19:00">15 мая</time>
                    </div>
                </a>
                <a class="news-link">
                    <img class="news-thumb" :src="image1" alt="Image 1" />

                    <div class="news-info-wrapper">
                        <h5 class="news-title">Title 1</h5>
                        <span class="news-short"
                            >Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.</span
                        >
                        <time datetime="2001-05-15 19:00">15 мая</time>
                    </div>
                </a>
                <a class="news-link">
                    <img class="news-thumb" :src="image1" alt="Image 1" />

                    <div class="news-info-wrapper">
                        <h5 class="news-title">Title 1</h5>
                        <span class="news-short"
                            >Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.</span
                        >
                        <time datetime="2001-05-15 19:00">15 мая</time>
                    </div>
                </a>
                <a class="news-link">
                    <img class="news-thumb" :src="image1" alt="Image 1" />

                    <div class="news-info-wrapper">
                        <h5 class="news-title">Title 1</h5>
                        <span class="news-short"
                            >Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.</span
                        >
                        <time datetime="2001-05-15 19:00">15 мая</time>
                    </div>
                </a>
                <a class="news-link">
                    <img class="news-thumb" :src="image1" alt="Image 1" />

                    <div class="news-info-wrapper">
                        <h5 class="news-title">Title 1</h5>
                        <span class="news-short"
                            >Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.</span
                        >
                        <time datetime="2001-05-15 19:00">15 мая</time>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import image1 from "../../../public/images/image1.jpg";
import image2 from "../../../public/images/image2.jpg";
import image3 from "../../../public/images/image3.jpg";

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
            carouselConfig1: {
                centerMode: true,
                autoplay: true,
                autoplayTimeout: 2500,
                loop: true,
                perPage: 1,
                navigationEnabled: true,
                navigationPrevLabel: "",
                navigationNextLabel: "",
            },
        };
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
@import "../../sass/_variables";
.home-wrapper {
    width: 100%;

    #carousel1 {
        width: 100%;
        max-height: $maxHeightSLider1;

        .slide {
            width: 100%;

            .img-placeholder {
                padding-top: 100%;
                width: 100%;
                position: absolute;
            }

            img {
                height: auto;
                width: 100%;
            }
        }

        ::v-deep .VueCarousel-navigation-button {
            border-radius: 50%;
            background: #fff;
            width: 30px;
            height: 30px;

            &::before {
                position: absolute;
                display: block;
                font-size: 25px;
                font-weight: 700;
                line-height: 1;
                height: 100%;
                width: 100%;
                left: 0;
                top: 0;
                text-align: center;
            }

            &.VueCarousel-navigation-prev {
                transform: translateY(-50%) translateX(10%);
                &::before {
                    content: "<";
                }
            }

            &.VueCarousel-navigation-next {
                transform: translateY(-50%) translateX(-10%);
                &::before {
                    content: ">";
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
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                width: 70%;
                padding: 20px 0 0 0;

                .news-link {
                    text-decoration: none;
                    display: flex;
                    flex-direction: column;
                    flex-basis: 25%;
                    padding: 20px 10px;
                    color: inherit;

                    &:visited,
                    &:active {
                        color: inherit;
                    }

                    &:hover {
                        cursor: pointer;
                    }

                    .news-thumb {
                        width: 100%;
                    }

                    .news-info-wrapper {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        padding-top: 10px;

                        .news-title {
                            text-align: center;
                            font-size: 1.2rem;
                        }

                        .news-short {
                            font-size: 1rem;
                            padding-bottom: 10px;
                        }

                        time {
                            font-size: 0.8rem;
                            color: $colorTime;
                        }
                    }
                }
            }
        }
    }
}
</style>
