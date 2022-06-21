<template>
    <div class="news">
        <h1 class="news-title">Цікаві статті</h1>

        <div class="news-wrapper">
            <aside-menu></aside-menu>
            <div class="articles-wrapper">
                <article-short
                    v-for="(article, articleId) in articles"
                    :key="articleId"
                    :path="article.thumb"
                    :title="article.title"
                    :content="article.content"
                ></article-short>
            </div>
        </div>

        <div class="news-show-more">More News</div>
    </div>
</template>

<script>
import image3 from "../../../../public/images/image3.jpg";
import articleShort from "../../components/articles/article-short.vue";
import asideMenu from "../pageElement/aside-menu.vue";

export default {
    name: "news",
    components: {
        articleShort,
        asideMenu,
    },
    data() {
        return {
            image3,
            articles: [
                {
                    thumb: image3,
                    title: "Title 1",
                    content: "Text article 1",
                    link: "",
                },
                {
                    thumb: image3,
                    title: "Title 1",
                    content: "Text article 1",
                    link: "",
                },
                {
                    thumb: image3,
                    title: "Title 1",
                    content: "Text article 1",
                    link: "",
                },
                {
                    thumb: image3,
                    title: "Title 1",
                    content: "Text article 1",
                    link: "",
                },
                {
                    thumb: image3,
                    title: "Title 1",
                    content: "Text article 1",
                    link: "",
                },
            ],
        };
    },
    mounted() {
        console.log("Component mounted.");
    },
};
</script>

<style lang="scss">
@import "../../../sass/_mixins";
@import "../../../sass/_variables";

.news {
    width: 100%;
    padding: 30px 15px;
    margin: 30px 0;
    @include flexColumn;

    .news-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        padding: 20px 0 0 0;

        .articles-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            flex-basis: 80%;

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
                        font-size: $titleFontSize;
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

        .aside {
            flex-grow: 1;
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
