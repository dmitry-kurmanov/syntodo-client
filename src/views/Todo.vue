<template>
    <div>
        <waterfall
                :line="line"
                :line-gap="250"
                :watch="items"
                @reflowed="reflowed"
                ref="waterfall"
        >
            <!-- each component is wrapped by a waterfall slot -->
            <waterfall-slot
                    v-for="(item, index) in items"
                    :width="item.width"
                    :height="item.height"
                    :order="index"
                    :key="item.index"
                    move-class="item-move"
            >
                <div class="item" :style="item.style" :index="item.index"></div>
            </waterfall-slot>
        </waterfall>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'
    import Waterfall from 'vue-waterfall/lib/waterfall'
    import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
    import {ItemFactory} from './item-factory'

    @Component({
        components: {
            Waterfall,
            WaterfallSlot
        }
    })
    export default class Todo extends Vue {
        line = 'h'
        items = ItemFactory.get(100)
        isBusy = false

        addItems() {
            if (!this.isBusy && this.items.length < 500) {
                this.isBusy = true
                this.items.push.apply(this.items, ItemFactory.get(50))
            }
        }
        shuffle() {
            this.items.sort(function () {
                return Math.random() - 0.5
            })
        }
        reflowed() {
            this.isBusy = false
        }
    }
</script>

<style>
    .item-move {
        transition: all .5s cubic-bezier(.55,0,.1,1);
        -webkit-transition: all .5s cubic-bezier(.55,0,.1,1);
    }
    body {
        margin: 5px;
        font-family: Helvetica, sans-serif;
    }
    .item {
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        font-size: 1.2em;
        color: rgb(0,158,107);
    }
    .item:after {
        content: attr(index);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
    }
    .wf-transition {
        transition: opacity .3s ease;
        -webkit-transition: opacity .3s ease;
    }
    .wf-enter {
        opacity: 0;
    }
</style>