const mobileFind = () => {
	const searchValue = document.getElementById("search-box").value;
	const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;

	fetch(url)
		.then((res) => res.json())
		.then((data) => phoneList(data.data));
};

const phoneList = (phones) => {
	for (const phone of phones) {
		const main = document.getElementById("phones-container");
		const div = document.createElement("div");
		div.innerHTML = `  <div class="card border">
        <div class="phone-details">
            <img  class=" mt-3 w-25" src="${phone.image}" alt="">
            <h5 class=" mt-3">Brand: ${phone.brand}</h5>
            <h5 class=" mt-3">Phone: ${phone.phone_name}</h5>
            <button class="btn btn-success mb-4" onclick="phoneInfo('${phone.slug}')">Details</button>
        </div>
    </div>`;
		main.appendChild(div);
	}
};
const phoneInfo = (phoneId) => {
	const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => phoneValueLoaded(data.data));
};

const phoneValueLoaded = (info) => {
	document.getElementById("phone-Container").innerHTML = `
    <div>
    <img class="w-25" src="${info.image}" alt="">
    <h3><span class="text-primary"> Name:</span> ${info.name}</h3>
    <h5><span class="text-primary"> Release-Date:</span> ${info.releaseDate}</h5>
    <h5><span class="text-primary"> ChipSet:</span> ${info.mainFeatures.chipSet}</h5>
    <h5><span class="text-primary">Memory:</span> ${info.mainFeatures.memory}</h5>
    <h5><span class="text-primary"> Display-Size:</span> ${info.mainFeatures.displaySize}</h5>
    <h5><span class="text-primary"> Other:</span> ${info.others.WALN}</h5>
    
    </div>
    `;
	console.log(info);
};
