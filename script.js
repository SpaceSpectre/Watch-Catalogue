const primaryNav = document.querySelector(".primary-navigation");
const navToggle =  document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibilty = primaryNav.getAttribute("data-visible");
    
    if(visibilty === "false")
    {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }
    else if(visibilty === "true")
    {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});



function pageLoader()
{
    const productsHead = document.getElementById('productsHead');
    const product = document.getElementById('products');
    const addProduct = document.getElementById('product-form');
    const updateProduct = document.getElementById('update-form');
    const deleteProduct = document.getElementById('delete-form');
    const searchProduct = document.getElementById('search-form');
    const banner = document.getElementById('bannerImg');

    productsHead.setAttribute("style","display:grid;");
    product.setAttribute("style","display:grid;");
    addProduct.setAttribute("style","display:none;");
    updateProduct.setAttribute("style","display:none;");
    deleteProduct.setAttribute("style","display:none;");
    searchProduct.setAttribute("style","display:none;");
    banner.setAttribute("style", "display:block");
    
}

function showAdd()
{
    const product = document.getElementById('products');
    const addProduct = document.getElementById('product-form');
    const updateProduct = document.getElementById('update-form');
    const deleteProduct = document.getElementById('delete-form');
    const searchProduct = document.getElementById('search-form');
    const banner = document.getElementById('bannerImg');
    const productsHead = document.getElementById('productsHead');

    productsHead.setAttribute("style","display:none;");
    product.setAttribute("style","display:none;");
    addProduct.setAttribute("style","display:grid;");
    updateProduct.setAttribute("style","display:none;");
    deleteProduct.setAttribute("style","display:none;");
    searchProduct.setAttribute("style","display:none;");
    banner.setAttribute("style", "display:none");
}

function showUpdate()
{
    const product = document.getElementById('products');
    const addProduct = document.getElementById('product-form');
    const updateProduct = document.getElementById('update-form');
    const deleteProduct = document.getElementById('delete-form');
    const searchProduct = document.getElementById('search-form');
    const banner = document.getElementById('bannerImg');
    const productsHead = document.getElementById('productsHead');

    productsHead.setAttribute("style","display:none;");
    product.setAttribute("style","display:none;");
    addProduct.setAttribute("style","display:none;");
    updateProduct.setAttribute("style","display:grid;");
    deleteProduct.setAttribute("style","display:none;");
    searchProduct.setAttribute("style","display:none;");
    banner.setAttribute("style", "display:none");
}
function showDelete()
{
    const product = document.getElementById('products');
    const addProduct = document.getElementById('product-form');
    const updateProduct = document.getElementById('update-form');
    const deleteProduct = document.getElementById('delete-form');
    const searchProduct = document.getElementById('search-form');
    const banner = document.getElementById('bannerImg');
    const productsHead = document.getElementById('productsHead');

    productsHead.setAttribute("style","display:none;");
    product.setAttribute("style","display:none;");
    addProduct.setAttribute("style","display:none;");
    updateProduct.setAttribute("style","display:none;");
    deleteProduct.setAttribute("style","display:grid;");
    searchProduct.setAttribute("style","display:none;");
    banner.setAttribute("style", "display:none");
}