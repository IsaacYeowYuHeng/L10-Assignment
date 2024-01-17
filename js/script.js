
$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#000000', '#000000', '#000000'],
        navigation: true,
        navigationPosition: 'right',
        afterLoad: function (origin, destination, direction) {

            if (destination.index == 0) {
                anime({
                    targets: '.section1 *',
                    translateY: [20, 0],
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 800,
                    delay: anime.stagger(100),
                });
            }

            if (destination.index == 1) {
                anime({
                    targets: '.section2 *',
                    translateY: [20, 0],
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 800,
                    delay: anime.stagger(100),
                });
            }

            if (destination.index == 2) {
                anime({
                    targets: '.section3 *',
                    translateY: [20, 0],
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 800,
                    delay: anime.stagger(100),
                });
            }
        },
    });

    anime({
        targets: '.cases-count',
        innerHTML: [0, 257510],
        easing: 'linear',
        round: 1,
        duration: 10000
    });

    anime({
        targets: '.new-count',
        innerHTML: [0, 2030],
        easing: 'linear',
        round: 1,
        duration: 10000
    });

    anime({
        targets: '.discharged-count',
        innerHTML: [0, 2275],
        easing: 'linear',
        round: 1,
        duration: 10000
    })

});


$('#polyTable').DataTable({
    pageLength: 5,
});

const labels = [
    'Dec 1',
    'Dec 2',
    'Dec 3',
    'Dec 4',
    'Dec 5',
    'Dec 6',
    'Dec 7',
    'Dec 8',
    'Dec 9',
    'Dec 10',
    'Dec 11',
    'Dec 12',
    'Dec 13',
    'Dec 14',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Daily Cases (past 2 weeks)',
        backgroundColor: '#ADD8E6',
        borderColor: '#ADD8E6',
        data: [1134, 1056, 986, 771, 756, 721, 654,
            742, 689, 512, 455, 376, 244, 103],
        color: '#ADD8E6'
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                ticks: {
                    color: '#ADD8E6'
                }
            },
            y: {
                ticks: {
                    color: '#ADD8E6'
                }
            }
        }
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

tippy('.hotspot', {
    content: function (reference) {
    },
});

tippy('.hotspot', {
    placement: 'right', //place tippy to the right
    trigger: 'click', //trigger tippy on click
    interactive: true, //allow interaction in tippy (e.g. click and select text)
    content: '<strong>Bolded <span style="color: aqua;">content</span></strong>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds)
    followCursor: true //get tippy to follow mouse cursor
});
