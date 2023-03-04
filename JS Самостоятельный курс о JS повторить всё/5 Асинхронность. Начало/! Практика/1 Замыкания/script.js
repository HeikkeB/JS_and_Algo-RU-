'use strict';

const badResult = () => {
	for (var i = 0; i < 10; i++) {
	    setTimeout(function() {
	        console.log(i);
	    }, 10);
	}
};

const iifeSolution = () => {
  // Предложите вариант через IIFE
};

function es6Solution() {
  // ...
}

const bindSolution = function () {
  // ...
};

badResult()