<template>
    <div class="news">
        <h1 class="news-title">Новини</h1>

        <div class="news-wrapper">
            <a class="news-link">
                <img class="news-thumb" :src="image3" alt="Image 1" />

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
                <img class="news-thumb" :src="image3" alt="Image 1" />

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
                <img class="news-thumb" :src="image3" alt="Image 1" />

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
                <img class="news-thumb" :src="image3" alt="Image 1" />

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
                <img class="news-thumb" :src="image3" alt="Image 1" />

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
                <img class="news-thumb" :src="image3" alt="Image 1" />

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

        <div class="news-show-more">More News</div>
    </div>
</template>

<script>
import image3 from "../../../public/images/image3.jpg";

export default {
    name: "news",
    data() {
        return {
            image3,
        };
    },
    mounted() {
        console.log("Component mounted.");
    },
};
</script>

<style lang="scss">
@import "../../sass/_variables";

.news {
    width: 100%;
    padding: 30px 15px;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

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

    .news-show-more {
        background: #000;
        margin: 40px 0;
        padding: 10px;
        font-size: 1rem;
        color: #fff;

        &:hover {
            cursor: pointer;
        }
    }
}
</style>
