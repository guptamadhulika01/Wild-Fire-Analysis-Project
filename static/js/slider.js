// This isn't necessary but it keeps the editor from thinking L and carto are typos
/* global L, carto, noUiSlider */
//to create slider
//npm install nouislider;
//yarn add nouislider;

var slider = document.getElementById('slider');

var uniqueYear=[1992,1993,1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,2008, 2009, 2010, 2011, 2012, 2013]
 
    // to create slider handles
var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: uniqueYear[0],
    behaviour: 'drag',
    range: {
        'min': uniqueYear[0],
        'max': UniqueYear[21]
    }
});
    // 
    slider.noUiSlider.set(1993);
    slider.noUiSlider.set([2015]);

// to create tooltips for the slider

var tooltipSlider = document.getElementById('slider-tooltips');

noUiSlider.create(tooltipSlider, {
    start: [1992, 2000, 2013],
    tooltips: [false, wNumb({ decimals: 1 }), true],
    range: {
        'min': uniqueYear[0],
        'max': UniqueYear[21]
    }
});

sliderlider.noUiSlider.on('change', function (uniqueYear) {
    var uniqueYear = sliderlider.noUiSlider.get();
    //source.setQuery('SELECT * FROM burn25.csv WHERE Year >= ' + priceValues[0] + ' AND price <= ' + priceValues[1]);
});





