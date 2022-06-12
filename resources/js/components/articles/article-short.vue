<template>
    <a class="article-short-wrapper">
        <img class="article-thumb" :src="getPath" alt="Article thumbnail" />

        <div class="article-info-wrapper">
            <h5 class="article-title">{{ title }}</h5>
            <span class="article-content">{{ content }}</span>
            <time class="article-time-created" datetime="2001-05-15 19:00"
                >15 мая</time
            >
        </div>
    </a>
</template>

<script>
import thumb from "./thumb.jpg";

export default {
    name: "article-short",
    components: {},
    props: {
        path: {
            type: String,
            default: thumb,
        },
        title: {
            type: String,
            default: "Article title",
        },
        content: {
            type: String,
            default: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
    },
    data() {
        return {};
    },
    computed: {
        getPath() {
            return this.path ? this.path : thumb;
        },
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
@import "../../../sass/mixins";
@import "../../../sass/_variables";
@import "../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
.article-short-wrapper {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    flex-basis: 32%;
    min-width: 250px;
    padding: 20px 10px;
    color: inherit;

    &:visited,
    &:active {
        color: inherit;
    }

    &:hover {
        cursor: pointer;
    }

    .article-thumb {
        width: 100%;
    }

    .article-info-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 10px;

        .article-title {
            text-align: center;
            font-size: 1.2rem;
        }

        .article-content {
            font-size: 1rem;
            padding-bottom: 10px;
        }

        .article-time-created {
            font-size: 0.8rem;
            color: $colorTime;
        }
    }
}
</style>
