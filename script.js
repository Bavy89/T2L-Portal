//sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

//Smooth anchor link

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


//slide
let currentSlide = 1;
const totalSlides = 2;

function showSlide(slideNum) {
    document.querySelectorAll('.slide').forEach((slide, index) => {
        slide.style.opacity = index + 1 === slideNum ? '1' : '0';
    });
}

document.getElementById('next').addEventListener('click', () => {
    currentSlide = currentSlide % totalSlides + 1;
    showSlide(currentSlide);
});

document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 2 + totalSlides) % totalSlides + 1;
    showSlide(currentSlide);
});

function openUrl(form, url) {
  var inputValue = form.T1.value.trim();
  if(inputValue === "") {
      alert("Vennligst skriv noe i søkefeltet før du søker.");
      return false;
  }
  window.open(url + inputValue);
  return false; // Prevent form submission
}

function formatText(command, button) {
  document.execCommand(command, false, '');
  updateToolbar();
}

function updateToolbar() {
  document.getElementById('bold').classList.toggle('active', document.queryCommandState('bold'));
  document.getElementById('italic').classList.toggle('active', document.queryCommandState('italic'));
  document.getElementById('underline').classList.toggle('active', document.queryCommandState('underline'));
}

//Show more button
document.addEventListener("DOMContentLoaded", function () {
  const showMoreButton = document.getElementById("show-more-button");
  const hiddenList = document.querySelector(".hidden-list");

  showMoreButton.addEventListener("click", function () {
    // Toggle the 'visible' class to control visibility
    if (hiddenList.classList.contains("visible")) {
      hiddenList.classList.remove("visible");
      showMoreButton.textContent = "Klikk her for å se";
    } else {
      hiddenList.classList.add("visible");
      showMoreButton.textContent = "Vis mindre";
    }
  });
});


//flip website
document.querySelector('.SMN_effect-67 a').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the default anchor link behavior
  document.body.classList.toggle('flip');
});


// clock
window.addEventListener("DOMContentLoaded",() => {
	const c = new Clock28(".clock");
});

class Clock28 {
	activeClass = "clock__unit--active";
	pristineClass = "clock__unit--pristine";
	lastTime = null;

	constructor(el) {
		this.el = document.querySelector(el);

		this.init();
	}
	init() {
		this.makePristine();
		this.timeUpdate();
	}
	get timeAsObject() {
		const date = new Date();
		const h = Utils.digits(date.getHours());
		const m = Utils.digits(date.getMinutes());
		const s = Utils.digits(date.getSeconds());

		return {h,m,s};
	}
	get timeAsString() {
		const {h,m,s} = this.timeAsObject;

		return [h,m,s].join(":");
	}
	makePristine() {
		// clear animations
		const unitEls = Array.from(this.el?.querySelectorAll('[data-unit]'));
		for (let unitEl of unitEls) {
			unitEl.classList.add(this.pristineClass);
		}
	}
	removeAnimations() {
		// clear animations
		const unitEls = Array.from(this.el?.querySelectorAll('[data-unit]'));
		for (let unitEl of unitEls) {
			unitEl.classList.remove(this.activeClass,this.pristineClass);
		}
	}
	timeUpdate() {
		// update the `aria-label`
		this.el?.setAttribute("aria-label", this.timeAsString);
		// update the units
		const time = this.timeAsObject;
		for (let unit in time) {
			const unitEl = this.el?.querySelector(`[data-unit="${unit}"]`);
			const prev = Array.from(unitEl?.querySelectorAll("[data-prev]"));
			const next = Array.from(unitEl?.querySelectorAll("[data-next]"));

			for (let p of prev) {
				let prevDigits = +time[unit] - 1;
				if (prevDigits < 0) prevDigits += 60;

				p.innerText = Utils.digits(prevDigits);
			}
			for (let n of next) {
				n.innerText = time[unit];
			}
			// animate the flip
			if (+time[unit] !== +this.lastTime?.[unit]) {
				unitEl.classList.add(this.activeClass);
			}
		}
		this.lastTime = time;
		// loop
		clearTimeout(this.animationLoop);
		this.animationLoop = setTimeout(this.removeAnimations.bind(this),500);
		clearTimeout(this.timeUpdateLoop);
		this.timeUpdateLoop = setTimeout(this.timeUpdate.bind(this),1e3);
	}
}
class Utils {
	static digits(n) {
		if (n < 10) return `0${n}`;
		return `${n}`;
	}
}


