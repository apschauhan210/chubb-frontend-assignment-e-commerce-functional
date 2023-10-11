

const queryParams = window.location.search.slice(1).split("=");
const queryPairs = {};
for(let i = 0; i < queryParams.length; i+=2) {
    queryPairs[queryParams[i]] = queryParams[i+1];
}

const category = queryPairs.category

document.getElementById("category-title").innerHTML = category[0].toUpperCase() + category.slice(1);
document.getElementById("header-img").src = `assets/images/header/${category}.jpg`;

const loadData = async () => {
    const products = await getProductsCategoryWise(category);
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        console.log(product);
        const outerDiv = document.createElement("div");
        outerDiv.classList.add("xl:w-1/3", "md:w-1/2", "p-4");
        outerDiv.innerHTML = `<div class="bg-gray-100 p-6 rounded-lg">
                                <img
                                    class="h-92 rounded w-full object-cover object-center mb-6"
                                    src=${product.image}
                                    alt="content"
                                />
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                                    ${product.title.substring(0, 50) + "..."}
                                </h2>
                                <h5 style="font-weight: bold">$ ${product.price}</h5>
                                <p>
                                    Frame with poster, set of 8, Countryside living 
                                </p>
                                <div class="flex space-x-3 mb-4 text-sm font-medium">
                                    <div class="flex-auto flex space-x-3">
                                    <button
                                        class="
                                        w-1/2
                                        flex
                                        items-center
                                        justify-center
                                        rounded-md
                                        bg-black
                                        text-white
                                        "
                                        type="submit"
                                    >
                                        Buy now
                                    </button>
                                    <button
                                        class="
                                        w-1/2
                                        flex
                                        items-center
                                        justify-center
                                        rounded-md
                                        border border-gray-300
                                        hover:bg-gray-300
                                        "
                                        type="button"
                                    >
                                        Add to bag
                                    </button>
                                    </div>
                                    <button
                                    class="
                                        flex-none flex
                                        items-center
                                        justify-center
                                        w-9
                                        h-9
                                        rounded-md
                                        text-gray-400
                                        border border-gray-300
                                        hover:bg-gray-300
                                    "
                                    type="button"
                                    aria-label="like"
                                    >
                                    <svg width="20" height="20" fill="currentColor">
                                        <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                        />
                                    </svg>
                                    </button>
                                </div>
                                </div>`
        productList.appendChild(outerDiv);
    })
}
loadData();

const loadCategories = async () => {
    const categories = await getCategories();
    const categoryDropdown = document.getElementById("category-droptdown");
    categories.forEach(category => {
    var a = document.createElement('a');
    a.innerHTML = category[0].toUpperCase() + category.slice(1);
    a.href = 'category.html?category=' + category;
    categoryDropdown.appendChild(a);
    });
}
loadCategories();
