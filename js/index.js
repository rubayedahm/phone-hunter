const loadData = async (searchText = 12) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};

loadData();

const displayPhones = (phones) => {
  const cardContainer = document.getElementById("phone-container");
  cardContainer.textContent = '';

  const showAllBtn = document.getElementById('show-all-btn');
  if(phones.length > 12) {
    showAllBtn.classList.remove('hidden')
  }
  else {
    showAllBtn.classList.add('hidden');
  }

  phones = phones.slice(0, 12)
  

  phones.forEach((phone) => {
    console.log(phone)
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 w-80 border`;
    phoneCard.innerHTML = `
        <figure class="bg-[#0d6dfd1b] m-4">
            <img class="py-4"
            src="${phone.image}"
            alt="" />
        </figure>
        <div class="card-body text-center">
            <h2 class="card-title justify-center">${phone.phone_name}</h2>
            <p>${phone.brand}</p>
            <div class="card-actions justify-center">
            <button class="btn bg-[#0D6EFD] text-white mt-4">Show Details</button>
            </div>
        </div>`;
    cardContainer.appendChild(phoneCard);
  });
};

const searchBtn = () => {
    const searchInputValue = document.getElementById('search-input')
    const searchText = searchInputValue.value;
    loadData(searchText);
}
