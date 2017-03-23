<template>
    <div>
        <waterfall :line-gap="200" :watch="items">
            <!-- each component is wrapped by a waterfall slot -->
            <waterfall-slot
                    v-for="(item, index) in items"
                    :width="item.width"
                    :height="item.height"
                    :order="index"
                    :key="item.id"
                    :style="item.style"
            >
                <div>{{item.text}}</div>
            </waterfall-slot>
        </waterfall>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'
    import Waterfall from 'vue-waterfall/lib/waterfall'
    import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

    @Component({
        components: {
            Waterfall,
            WaterfallSlot
        }
    })
    export default class Todo extends Vue {
        items = [
            {
                id: 1,
                width: 50,
                height: 50,
                style: {
                    background: this.getRandomColor()
                },
                text: "1"
            },
            {
                id: 2,
                width: 20,
                height: 20,
                style: {
                    background: this.getRandomColor()
                },
                text: "2"
            }
        ]

        getRandomColor () {
            var colors = [
                'rgba(21,174,103,.5)',
                'rgba(245,163,59,.5)',
                'rgba(255,230,135,.5)',
                'rgba(194,217,78,.5)',
                'rgba(195,123,177,.5)',
                'rgba(125,205,244,.5)'
            ]
            return colors[Math.floor(Math.random() * colors.length)]
        }
    }
</script>