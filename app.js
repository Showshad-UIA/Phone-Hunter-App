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
            <img  class=" w-25" src="${phone.image}" alt="">
            <h5>Brand:${phone.brand}</h5>
            <h5>Phone Name: ${phone.phone_name}</h5>
            <button class="btn btn-success mb-4">Details</button>

        </div>
    </div>`;
		main.appendChild(div);
		console.log(phone);
	}

	// console.log(phones);
};
