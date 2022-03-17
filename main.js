function callback(entries, observer)
{
  entries.forEach(entry => {
    if (entry.isIntersecting) {
    	entry.target.style.opacity = 1.0;
    	entry.target.style.transform = "translateY(-10px)";
    }
  });
}

let options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.9
};

let observer = new IntersectionObserver(callback, options);


observer.observe(document.querySelector('#img_mudata'));
observer.observe(document.querySelector('#img_multimodal'));
observer.observe(document.querySelector('#img_unimodal'));


// Make showcase element draggable

const showcase = document.getElementById('showcase');

let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseMoveHandler = function(e) {
    const dx = e.clientX - pos.x;

    showcase.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function() {
    showcase.style.cursor = 'grab';
    showcase.style.removeProperty('user-select');
    showcase.removeEventListener('mousemove', mouseMoveHandler);
};

const mouseClickHandler = function() {
    showcase.style.removeProperty('user-select');
    showcase.removeEventListener('mousemove', mouseMoveHandler);
};


const mouseDownHandler = function(e) {
    showcase.style.cursor = 'grabbing';
    showcase.style.userSelect = 'none';

    pos = {
        left: showcase.scrollLeft,
        x: e.clientX,
    };

    showcase.addEventListener('mousemove', mouseMoveHandler);
    showcase.addEventListener('mouseup', mouseUpHandler);
    showcase.addEventListener('click', mouseClickHandler);
};

showcase.addEventListener('mousedown', mouseDownHandler);
