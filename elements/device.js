


window.onload = (event) => {


	let result = document.getElementById("result");

	const isTouchDevice = () => {
	try {
		document.createEvent("TouchEvent");
		result.innerHTML= `It is a <span>Touch </span> <i class="fas fa-mobile-alt"></i> device`;
	
	} catch (e) {
		result.innerHTML = `It is a <span>Mouse </span> <i class="fas fa-mouse"></i> </span> device`;
	}
	};
  isTouchDevice();
};

//`It is a <span>Touch </span> <i class="fa-solid fa-mobile-screen"></i> device`;
//`It is a <span>Mouse </span> <i class="fa-solid fa-computer-mouse"></i> device`;
	