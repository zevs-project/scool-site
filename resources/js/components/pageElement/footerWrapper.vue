<template>
    <div class="footer-wrapper">
        <footer>
            <div class="footer-column">
                <div class="logo">Мотовилівська <br />ЗОШ</div>
            </div>
            <div class="footer-column info">
                <span class="footer-column-title">Наше розташування</span>

                <div class="info-wrapper">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Omnis amet corporis reprehenderit reiciendis sint inventore
                    delectus cumque enim veritatis adipisci fuga minus obcaecati
                    maiores, corrupti ex molestias voluptatem? Eum, maiores.
                </div>
            </div>
            <div class="footer-column social">
                <span class="footer-column-title">Ми в соціальних мережах</span>

                <div class="social-wrapper">
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-google-plus-g"></i>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "footerWrapper",
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
@import "../../../sass/_mixins";
@import "../../../sass/_variables";

.footer-wrapper {
    width: 100%;
    background: #000;

    footer {
        width: 100%;
        max-width: $maxWidth;
        padding: 10px 0;
        color: #fff;
        font-size: 0.8rem;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;

        .footer-column {
            flex-grow: 1;
            flex-basis: 40%;
            @include flexColumn;


            &:first-of-type {
                flex-basis: 20%;
                align-self: center;
            }


            .logo {
                font-family: $fontPacifico;
                font-size: 1rem;
                text-align: center;
                align-self: center;
            }

            .footer-column-title {
                padding: 10px 0;
                font-size: 0.9rem;
                font-weight: 700;
            }

            .social-wrapper {
                .fab {
                    padding: 5px;
                    font-size: 1.1rem;
                }
            }
        }
    }
}
</style>
