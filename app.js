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

const phoneInfo = (info) => {
	console.log(info);
};
