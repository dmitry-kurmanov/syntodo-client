export const ItemFactory = (function () {

    var lastIndex = 0

    function generateRandomItems (count) {
        var items = [], i
        for (i = 0; i < count; i++) {
            items[i] = {
                id: lastIndex++,
                isDone: false,
                text: 'todo_' + lastIndex,
                date: getRandomDate(),
                style: {
                    background: getRandomColor(),
                    width: "200px",
                    height: "200px"
                },
                width: 100,
                height: 100
            }
        }
        return items
    }

    function getRandomDate () {
        var dates = [
            '2017-04-01',
            '2017-04-02',
            '2017-04-03',
            '2017-04-04',
            '2017-04-05'
        ]
        return dates[~~(Math.random() * dates.length)]
    }

    function getRandomColor () {
        var colors = [
            'rgba(21,174,103,.5)',
            'rgba(245,163,59,.5)',
            'rgba(255,230,135,.5)',
            'rgba(194,217,78,.5)',
            'rgba(195,123,177,.5)',
            'rgba(125,205,244,.5)'
        ]
        return colors[~~(Math.random() * colors.length)]
    }

    return {
        get: generateRandomItems
    }

})()