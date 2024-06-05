document.addEventListener('DOMContentLoaded', function() {
    var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');

    var el = document.querySelector('.button');

    // mo.js timeline obj
    var timeline = new mojs.Timeline();

    // Burst animation
    var tween1 = new mojs.Burst({
        parent: el,
        radius: { 0: 100 },
        angle: { 0: 45 },
        y: -10,
        count: 10,
        radius: 100,
        children: {
            shape: 'circle',
            radius: 30,
            fill: [ 'red', 'white' ],
            strokeWidth: 15,
            duration: 500,
        }
    });

    var tween2 = new mojs.Tween({
        duration : 900,
        onUpdate: function(progress) {
            var scaleProgress = scaleCurve(progress);
            el.style.WebkitTransform = el.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
        }
    });

    var tween3 = new mojs.Burst({
        parent: el,
        radius: { 0: 100 },
        angle: { 0: -45 },
        y: -10,
        count: 10,
        radius: 125,
        children: {
            shape: 'circle',
            radius: 30,
            fill: [ 'white', 'red' ],
            strokeWidth: 15,
            duration: 400,
        }
    });

    // Add tweens to timeline
    timeline.add(tween1, tween2, tween3);

    // When clicking the button start the timeline/animation
    document.querySelector(".button").addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            timeline.play();
            this.classList.add('active');
        }
    });
});


document.getElementById('overlay').addEventListener('click', function() {
    window.location.href = './index.html'; // Cambia 'index.html' por la URL a la que quieres redirigir
  });
  
