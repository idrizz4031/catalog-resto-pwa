import CONFIG from "../../globals/config";

const createUIItemResto = (resto) => `
    <div class="catalog" id="">
  <img 
    class="catalog-item" 
    src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : "https://picsum.photos/id/666/800/450?grayscale"}"
    alt="${resto.name}"
    title="${resto.name}"
    >
    <div tabindex="0" class="rate" aria-label="result">
      <i class="rate-star"></i>
        ${resto.rating}
    </div>
    <div class="list-catalog">
      <p class="resto-city">
        <a href="#" class="catalog-value" aria-label="Alamat">
          <i class="reveal-star"></i>
          ${resto.city}
        </a>
      </p>
      <h1 class="title-catalog">
        <a href="${`/#/detail/${resto.id}`}" aria-label="${resto.name}">
          ${resto.name}
        </a>
      </h1>
      <div tabindex="0" class="desc-catalog">
        ${resto.description.slice(0, 180)}...
      </div>
    </div>
</div>
`;


const createUIDetailItemResto = (resto) => `
    <div class="detail-list">
  <div>
    <img 
      class="pic-detail" 
      src="${CONFIF.BASE_IMAGE_URL + resto.results.picrureid}" 
      alt="${resto.results}">
  </div>
  <div class="info-detail">
      <h2 tabindex="0" class="info-name">${resto.results.name}</h2>
      <p>${resto.results.address}</p>
        <div class="city-rating">
          <div tabindex="0" class="city-exp">
            <p class="exp-city"><i class="to-city">${resto.results.city}</i></p>
          </div>
          <div tabindex="0" class="score-detail">
            <p class="exp-detail"><i class="to-score">${resto.results.rating}</i></p>
          </div>
        </div>
  
      <div class="category">
        <h4>Category:</h4>
          <div class="this.category">
            ${resto.results.categories.map((categorie) => `
              <span tabindex="0" class="restaurant-categorie">${categorie.name}</span>
            `).join("")}
          </div>
      </div>

    <h3 tabindex="0" class="menu-title">Menu Makanan:</h3>
    <div class="menu-list">
        ${resto.results.menus.foods.map
        ((food) => `
          <li>${food.name}</li>
        `).join('')}
    </div>

    <h3 tabindex="0" class="menu-title">Menu Minuman:></h3>
    <div class="menu-list">
        ${resto.results.menus.drinks.map
        ((drink) => `
          <li>${drink.name}</li>
        `).join('')}
    </div>
  </div>
</div>

<div class="desc-part">
  <h2 tabindex="0" class="title-part">Description:</h2>
  <p tabindex="0" class="pad-part">${resto.results.description}</p>
  <h2 tabindex="0" class="judul-review">Review:</h2>
  <div class="review-resto">
    ${resto.results.customerReviews.map((review) => `
      <div class="get-review">
        <div class="all-review">
          <p tabindex="0">${review.name}</p>
          <h5 tabindex="0" class="exp-city">${review.date}</h5>
        </div>
        <div class="all-review">
          <p tabindex="0" class="exp-review">${review.review}</p>
        </div>
      </div>
    `).join('')}
  </div>
</div>
`;

export { createUIItemResto, createUIDetailItemResto };