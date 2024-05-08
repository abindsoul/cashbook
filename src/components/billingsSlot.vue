<!--  -->
<template>
    <div class="billings-card">
        <div class="billings-list">

            <div class="billings-search">
                <slot name="title"></slot>
            </div>
            <ul>
                <slot name="list"></slot>
            </ul>
        </div>
    </div>
</template>

<script >
</script>
<style scoped  lang="scss">
.billings-card {
    margin-top: 15px;
    max-height: 530px;
    overflow-y: auto;
    scrollbar-width: none;

    .billings-list {
        margin-top: 15px;
        min-height: 500px;

        .billings-search {
            display: flex;
            justify-content: space-between;
            padding-bottom: 10px;

            h2 {
                display: inline-block;
            }

            input {
                outline: none;

                padding: 0 5px;
                border: 1px solid #ccc;

                @media screen and (max-width: 640px) {
                    width: 40%;
                }
            }
        }

        ul {
            list-style: none;

            li {
                position: relative;
                display: flex;
                justify-content: space-between;
                margin: 10px 0;
                padding: 10px 0;
                background-color: #fff;
                box-shadow: 1px 1px 3px #ccc;
                transition: all 0.3s;

                &:hover {
                    box-shadow: 3px 3px 3px 1px #ccc;

                }

                &::after {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 5px;
                    height: 100%;
                    background-color: green;
                }

                span {
                    position: relative;
                    display: block;
                    padding: 10px;
                    word-wrap: break-word;

                    input {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 10px;
                        top: 0;
                        padding: 0 5px;
                        border: 1px solid #ccc;
                    }
                }

                & span:first-child {
                    max-width: 65%;
                }

                & span:last-child {
                    & small:last-child {
                        cursor: pointer;
                    }
                }
            }

            .green-bac {
                &::after {
                    background-color: red;
                }
            }
        }
    }
}
</style>