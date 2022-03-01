const main = document.getElementById("phones-container");
const mobileFind = () => {
	document.getElementById("phones-container").innerHTML = "";
	document.getElementById("spinner").style.display = "block";
	const input = document.getElementById("search-box");
	const searchValue = input.value;
	input.value = "";
	// error handling

	const error = document.getElementById("error");
	if (searchValue == "") {
		error.innerText = "please input a brand name!!";
		input.value = "";
		main.innerHTML = "";
	}
	//   fetch data from the API
	else {
		const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => phoneList(data.data));

		document.getElementById("spinner").style.display = "none";
		// clear the errors message
		error.innerHTML = "";
	}
};

const phoneList = (phones) => {
	const first20Data = phones.slice(0, 20);
	for (const phone of first20Data) {
		const div = document.createElement("div");
		div.className = "col-lg-4 mb-3";
		div.innerHTML = `  <div class="card border">
        <div class="phone-details">
            <img  class=" mt-3 w-50 mb-2" src="${phone.image}" alt="">
            <h5 class=" mt-3">Brand: ${phone.brand}</h5>
            <h5 class=" mt-3">Phone: ${phone.phone_name}</h5>
            <button class="btn btn-success mb-4" onclick="phoneInfo('${phone.slug}')">See Details</button>
        </div>
    </div>`;
		main.appendChild(div);
	}
};

// see details by using phone id
const phoneInfo = (phoneId) => {
	const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => phoneValueLoaded(data.data));
};

const phoneValueLoaded = (info) => {
	document.getElementById("phone-Container").innerHTML = `
    <div>
    <img class="w-25 mb-3" src="${info.image}" alt="">
    <h3><span class="text-primary"> Name:</span> ${info.name}</h3>
    <h5><span class="text-primary"> Release-Date:</span> ${info.releaseDate}</h5>
    <h5><span class="text-primary"> ChipSet:</span> ${info.mainFeatures.chipSet}</h5>
    <h5><span class="text-primary">Memory:</span> ${info.mainFeatures.memory}</h5>
    <h5><span class="text-primary"> Display-Size:</span> ${info.mainFeatures.displaySize}</h5>
    <h5><span class="text-primary"> Others:</span> ${info.others.WLAN}</h5>
    <h5><span class="text-primary"> Sensor:</span> ${info.mainFeatures.sensors}</h5>
    
    </div>
    `;
	console.log(info);
};
