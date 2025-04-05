// --- Global Element Selectors (Using helper function) ---
const header = getElement('#main-header');
const hamburgerMenu = getElement('.hamburger-menu');
const sidebarMenu = getElement('#mobile-nav-panel');
const sidebarOverlay = getElement('#sidebar-overlay');
const searchContainer = getElement('.search-container');
const searchIcon = getElement('.search-toggle-btn'); // Check class if using updated CSS
const searchBox = getElement('.search-box');
const searchInput = searchBox ? searchBox.querySelector('input') : null;
const mainNav = getElement('.main-nav ul');
const sidebarNav = sidebarMenu ? sidebarMenu.querySelector('.sidebar-nav ul') : null;
const submenuToggles = getAllElements('.submenu-toggle');
const featuredProductGrid = getElement('#featured-product-grid');
const allProductGrid = getElement('#all-product-grid');
const cartCountElement = getElement('.cart-count');
const wishlistCountElement = getElement('.wishlist-count');
const priceRangeFilter = getElement('#price-range-filter');
const currentMaxPriceDisplay = getElement('#current-max-price');
const filterCheckboxes = getAllElements('.filter-sidebar input[type="checkbox"]');
const sortSelect = getElement('#sort-products');
const mobileFilterToggle = getElement('#mobile-filter-toggle');
const filterSidebar = getElement('.filter-sidebar');
const closeFiltersBtn = getElement('.close-filters-btn');
const applyFiltersBtn = getElement('#apply-filters-btn');
const clearFiltersBtn = getElement('#clear-filters-btn');
const productDetailContainer = getElement('#product-detail-container');
const relatedProductGrid = getElement('#related-product-grid');
const cartTableBody = getElement('#cart-table-body');
const cartEmptyRow = getElement('#cart-empty-row');
const summaryItemCount = getElement('#summary-item-count');
const summarySubtotal = getElement('#summary-subtotal');
const summaryDelivery = getElement('#summary-delivery');
const summaryTotal = getElement('#summary-total');
const checkoutForm = getElement('#checkout-form');
const shipToDifferentCheckbox = getElement('#ship-to-different-address');
const shippingAddressFields = getElement('#shipping-address-fields');
const orderSummaryBody = getElement('#order-summary-body');
const orderSubtotal = getElement('#order-subtotal');
const orderDelivery = getElement('#order-delivery');
const orderTotal = getElement('#order-total');
const accountNav = getElement('.account-nav');
const accountSections = getAllElements('.account-section');
const loginForm = getElement('#login-form');
const registerForm = getElement('#register-form');

const scrollThreshold = 50;
const deliveryCharge = 60; // Example, could be dynamic

// --- Dummy Product Data ---
const dummyProducts = [
    { id: 1, name: "স্টাইলিশ কটন শার্ট (লাল)", price: 1250, originalPrice: 1500, imageUrl: "images/product1.jpg", category: "পুরুষ", brand: "brandA", color: "red", rating: 4.5, dateAdded: "2023-10-26", description: "আরামদায়ক সুতি কাপড়ের তৈরি ক্লাসিক ফিট লাল শার্ট। যেকোনো অনুষ্ঠানে পরার জন্য উপযুক্ত। ১০০% প্রিমিয়াম কটন।", sizes: ["S", "M", "L", "XL"], colors: ["red", "blue", "black"] },
    { id: 2, name: "আরামদায়ক ডেনিম জিন্স (নীল)", price: 1850, imageUrl: "images/product2.jpg", category: "পুরুষ", brand: "brandB", color: "blue", rating: 4.7, dateAdded: "2023-10-20", description: "উচ্চ মানের ডেনিম ফেব্রিক দিয়ে তৈরি, আধুনিক স্টাইলের জিন্স প্যান্ট। দীর্ঘস্থায়ী এবং আরামদায়ক।", sizes: ["30", "32", "34", "36"], colors: ["blue", "black"] },
    { id: 3, name: "ফ্লোরাল প্রিন্ট কটন কুর্তি", price: 1500, originalPrice: 1800, imageUrl: "images/product3.jpg", category: "মহিলা", brand: "brandA", color: "white", rating: 4.2, dateAdded: "2023-11-01", description: "সুন্দর ফ্লোরাল প্রিন্টের আরামদায়ক কটন কুর্তি। গ্রীষ্মকালের জন্য সেরা পছন্দ।", sizes: ["M", "L", "XL"], colors: ["white", "pink", "yellow"] },
    { id: 4, name: "এলিগেন্ট সিল্ক শাড়ি (সবুজ)", price: 4500, imageUrl: "images/product4.jpg", category: "মহিলা", brand: "brandC", color: "green", rating: 4.9, dateAdded: "2023-09-15", description: "উৎসব বা অনুষ্ঠানের জন্য দারুণ একটি এলিগেন্ট সবুজ সিল্ক শাড়ি। আঁচলে সুন্দর কাজ করা।", sizes: ["Free Size"], colors: ["green", "red", "blue"] },
    { id: 5, name: "কিউট কার্টুন টি-শার্ট (হলুদ)", price: 650, imageUrl: "images/product5.jpg", category: "শিশু", brand: "brandB", color: "yellow", rating: 4.0, dateAdded: "2023-11-05", description: "শিশুদের জন্য নরম সুতির কাপড়ে তৈরি মজাদার কার্টুন প্রিন্টের টি-শার্ট।", sizes: ["2Y", "4Y", "6Y"], colors: ["yellow", "blue", "red"] },
    { id: 6, name: "আরামদায়ক বেবি রোম্পার (সাদা)", price: 800, originalPrice: 950, imageUrl: "images/product6.jpg", category: "শিশু", brand: "brandA", color: "white", rating: 4.6, dateAdded: "2023-10-10", description: "নরম ইন্টারলক কাপড়ে তৈরি, সহজে পরানো ও খোলার জন্য স্ন্যাপ বাটন সহ।", sizes: ["0-3M", "3-6M", "6-12M"], colors: ["white", "blue", "pink"] },
    { id: 7, name: "লেদার ওয়ালেট (কালো)", price: 950, imageUrl: "images/product7.jpg", category: "এক্সেসরিজ", brand: "brandC", color: "black", rating: 4.3, dateAdded: "2023-08-25", description: "জেনুইন লেদারের তৈরি ক্লাসিক ডিজাইনের ওয়ালেট। একাধিক কার্ড স্লট ও কয়েন পকেট সহ।", sizes: ["N/A"], colors: ["black", "brown"] },
    { id: 8, name: "ক্যানভাস ব্যাকপ্যাক (ধূসর)", price: 2200, imageUrl: "images/product8.jpg", category: "এক্সেসরিজ", brand: "brandB", color: "gray", rating: 4.8, dateAdded: "2023-11-10", description: "টেকসই ক্যানভাস কাপড়ের তৈরি, ল্যাপটপ কম্পার্টমেন্ট সহ প্রশস্ত ব্যাকপ্যাক।", sizes: ["N/A"], colors: ["gray", "black", "green"] },
    { id: 9, name: "স্পোর্টস স্নিকার্স (কালো)", price: 3200, imageUrl: "images/product9.jpg", category: "পুরুষ", brand: "brandB", color: "black", rating: 4.4, dateAdded: "2023-07-20", description: "দৌড়ানো বা ব্যায়ামের জন্য উপযুক্ত, হালকা ওজনের এবং শ্বাসপ্রশ্বাসযোগ্য স্নিকার্স।", sizes: ["40", "41", "42", "43", "44"], colors: ["black", "white", "blue"] },
    { id: 10, name: "ফর্মাল লেদার শু (বাদামী)", price: 4800, imageUrl: "images/product10.jpg", category: "পুরুষ", brand: "brandC", color: "brown", rating: 4.7, dateAdded: "2023-09-01", description: "অফিস বা ফর্মাল অনুষ্ঠানের জন্য প্রিমিয়াম লেদারের তৈরি ক্লাসিক জুতো।", sizes: ["40", "41", "42", "43"], colors: ["brown", "black"] },
    { id: 11, name: "ককটেল ড্রেস (কালো)", price: 3500, originalPrice: 4000, imageUrl: "images/product11.jpg", category: "মহিলা", brand: "brandA", color: "black", rating: 4.5, dateAdded: "2023-10-05", description: "পার্টি বা বিশেষ অনুষ্ঠানের জন্য ডিজাইন করা আকর্ষণীয় কালো ককটেল ড্রেস।", sizes: ["S", "M", "L"], colors: ["black", "red"] },
    { id: 12, name: "সামার স্যান্ডেল (নীল)", price: 1100, imageUrl: "images/product12.jpg", category: "মহিলা", brand: "brandB", color: "blue", rating: 4.1, dateAdded: "2023-06-15", description: "গরমের দিনের জন্য আরামদায়ক এবং স্টাইলিশ ফ্ল্যাট স্যান্ডেল।", sizes: ["36", "37", "38", "39"], colors: ["blue", "white", "pink"] }
];

// --- Cart & Wishlist Data (Load from localStorage) ---
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

// --- Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM লোড হয়েছে');
    setupEventListeners();
    loadInitialData();
    updateCartCount(calculateTotalCartItems());
    updateWishlistCount(wishlistItems.length);
    // Clone nav only if elements exist
    if(mainNav && sidebarNav) {
        cloneDesktopNavToSidebar();
    } else {
        console.warn("Navigation elements for cloning not found.");
    }
});

// --- Event Listeners Setup ---
function setupEventListeners() {
    console.log('ইভেন্ট লিসেনার সেটআপ হচ্ছে...');
    window.addEventListener('scroll', handleScrollEffect, { passive: true }); // Use passive listener for scroll
    if (hamburgerMenu) hamburgerMenu.addEventListener('click', toggleSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', toggleSidebar);
    if (searchIcon) searchIcon.addEventListener('click', toggleSearch);
    document.addEventListener('click', handleOutsideClicks);
    if (searchBox) searchBox.addEventListener('click', (e) => e.stopPropagation());
    submenuToggles.forEach(toggle => toggle.addEventListener('click', handleSubmenuToggle));
    if (sidebarNav) sidebarNav.addEventListener('click', handleSidebarLinkClick);
    if (document.body.contains(allProductGrid)) {
        if (priceRangeFilter) { priceRangeFilter.addEventListener('input', handlePriceRangeInput); priceRangeFilter.addEventListener('change', applyFiltersAndSort); }
        filterCheckboxes.forEach(checkbox => checkbox.addEventListener('change', applyFiltersAndSort));
        if (sortSelect) sortSelect.addEventListener('change', applyFiltersAndSort);
        if (mobileFilterToggle) mobileFilterToggle.addEventListener('click', toggleFilterSidebar);
        if (closeFiltersBtn) closeFiltersBtn.addEventListener('click', toggleFilterSidebar);
        if (applyFiltersBtn) applyFiltersBtn.addEventListener('click', applyFiltersAndSort); // If button exists
        if (clearFiltersBtn) clearFiltersBtn.addEventListener('click', clearFilters);
        allProductGrid.addEventListener('click', handleProductGridClicks);
    }
    if (document.body.contains(productDetailContainer)) { productDetailContainer.addEventListener('click', handleProductDetailClicks); }
    if (featuredProductGrid) { featuredProductGrid.addEventListener('click', handleProductGridClicks); }
    if (document.body.contains(cartTableBody)) { cartTableBody.addEventListener('click', handleCartTableClicks); cartTableBody.addEventListener('change', handleCartQuantityInputChange); }
    if (checkoutForm) { checkoutForm.addEventListener('submit', handlePlaceOrder); }
    if (shipToDifferentCheckbox) { shipToDifferentCheckbox.addEventListener('change', toggleShippingAddress); }
    if (accountNav) { accountNav.addEventListener('click', handleAccountNavClick); }
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (registerForm) registerForm.addEventListener('submit', handleRegister);
}

// --- Event Handler Functions ---
// Added null checks for elements inside handlers
function handleScrollEffect() { if (!header) return; window.scrollY > scrollThreshold ? header.classList.add('scrolled') : header.classList.remove('scrolled'); }
function toggleSidebar() { if (!sidebarMenu || !hamburgerMenu || !sidebarOverlay) return; const isOpening = !sidebarMenu.classList.contains('open'); hamburgerMenu.classList.toggle('open'); sidebarMenu.classList.toggle('open'); sidebarOverlay.classList.toggle('open'); document.body.classList.toggle('no-scroll', isOpening); if (isOpening && searchContainer?.classList.contains('active')) { searchContainer.classList.remove('active'); } }
function toggleSearch(e) { e.stopPropagation(); if (!searchContainer || !searchInput) return; const isActive = searchContainer.classList.contains('active'); searchContainer.classList.toggle('active'); if (!isActive) { setTimeout(() => searchInput.focus(), 100); } else { searchInput.value = ''; } if (!isActive && sidebarMenu?.classList.contains('open')) { toggleSidebar(); } }
function handleOutsideClicks(e) { if (searchContainer?.classList.contains('active') && !searchContainer.contains(e.target) && !searchIcon?.contains(e.target)) { searchContainer.classList.remove('active'); if(searchInput) searchInput.value = ''; } if (sidebarMenu?.classList.contains('open') && !sidebarMenu.contains(e.target) && !hamburgerMenu?.contains(e.target)) { toggleSidebar(); } }
function handleSubmenuToggle(e) { e.preventDefault(); const parentLi = e.target.closest('li.has-submenu'); if (parentLi) parentLi.classList.toggle('submenu-open'); }
function handleSidebarLinkClick(e) { const link = e.target.closest('a'); if (!link) return; const parentLi = link.closest('li'); const isSubmenuToggle = parentLi?.classList.contains('has-submenu') && (e.target.classList.contains('submenu-toggle') || e.target.closest('.submenu-toggle')); if (!isSubmenuToggle) { if (sidebarMenu?.classList.contains('open')) { console.log(`Navigating from sidebar: ${link.getAttribute('href')}`); toggleSidebar(); } } }
function handlePriceRangeInput() { if (currentMaxPriceDisplay && priceRangeFilter) currentMaxPriceDisplay.textContent = `সর্বোচ্চ: ৳${parseInt(priceRangeFilter.value).toLocaleString('bn-BD')}`; }
function toggleFilterSidebar() { if (filterSidebar) { filterSidebar.classList.toggle('open'); document.body.classList.toggle('filter-open'); document.body.classList.toggle('no-scroll', filterSidebar.classList.contains('open'));} } // Toggle no-scroll for filter
function handleProductGridClicks(event) { /* ... No changes needed here, relies on card having dataset.productId ... */ }
function handleProductDetailClicks(event) { /* ... No changes needed here ... */ }
function handleQuantityChange(event) { /* ... No changes needed here ... */ }
function handleCartTableClicks(event) { /* ... No changes needed here ... */ }
function handleCartQuantityInputChange(event) { /* ... No changes needed here ... */ }
function toggleShippingAddress() { if (shippingAddressFields && shipToDifferentCheckbox) shippingAddressFields.style.display = shipToDifferentCheckbox.checked ? 'block' : 'none'; }
function handlePlaceOrder(event) { /* ... No changes needed here ... */ }
function handleAccountNavClick(event) { /* ... No changes needed here ... */ }
function handleLogin(event) { /* ... No changes needed here ... */ }
function handleRegister(event) { /* ... No changes needed here ... */ }
function handleLogout() { /* ... No changes needed here ... */ }
function setupAccountPage() { /* ... No changes needed here ... */ }

// --- Data Loading / Display ---
function loadInitialData() { /* ... No changes needed here ... */ }
function displayProducts(productsToDisplay, container) { /* ... No changes needed here ... */ }
async function loadProductDetails() { /* ... No changes needed here ... */ }
function renderProductDetails(product) { /* ... No changes needed here ... */ }
function generateRatingStars(rating) { if (!rating || rating <= 0) return ''; let starsHTML = ''; const fullStars = Math.floor(rating); const halfStar = rating % 1 >= 0.5; const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); for (let i = 0; i < fullStars; i++) starsHTML += '<i class="fas fa-star"></i>'; if (halfStar) starsHTML += '<i class="fas fa-star-half-alt"></i>'; for (let i = 0; i < emptyStars; i++) starsHTML += '<i class="far fa-star"></i>'; return starsHTML; }
function loadRelatedProducts(category, currentProductId) { /* ... No changes needed here ... */ }

// --- Filter & Sort Logic ---
function applyFiltersAndSort() { /* ... No changes needed here ... */ }
function getCheckedValues(name) { /* ... No changes needed here ... */ }
function clearFilters() { /* ... No changes needed here ... */ }

// --- Cart Page Logic ---
function displayCartItems() { /* ... No changes needed here ... */ }
function updateCartItemQuantity(productId, newQuantity) { /* ... No changes needed here ... */ }
function removeCartItem(productId) { /* ... No changes needed here ... */ }
function updateCartSummary() { /* ... No changes needed here ... */ }
function calculateCartSubtotal() { /* ... No changes needed here ... */ }
function displayOrderSummary() { /* ... No changes needed here ... */ }
function updateOrderSummaryTotals(subtotal) { /* ... No changes needed here ... */ }

// --- Cart/Wishlist Actions & Storage ---
function handleAddToCart(event) { /* ... No changes needed here ... */ }
function handleAddToWishlist(event) { /* ... No changes needed here ... */ }
function calculateTotalCartItems() { return cartItems.reduce((total, item) => total + item.quantity, 0); }
function updateCartCount(count) { if (!cartCountElement) return; cartCountElement.textContent = count; cartCountElement.classList.toggle('visible', count > 0); }
function updateWishlistCount(count) { if (!wishlistCountElement) return; wishlistCountElement.textContent = count; wishlistCountElement.classList.toggle('visible', count > 0); }
function saveCart() { localStorage.setItem('cartItems', JSON.stringify(cartItems)); }
function saveWishlist() { localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems)); }
function updateWishlistButtonState(productId) { /* ... No changes needed here ... */ }

// --- Clone Desktop Nav to Sidebar ---
function cloneDesktopNavToSidebar() { /* ... No changes needed here ... */ }

// --- Utility Functions ---
function getElement(selector) { return document.querySelector(selector); }
function getAllElements(selector) { return document.querySelectorAll(selector); }
function showToastNotification(message) { /* ... No changes needed here ... */ }

console.log('script.js লোড এবং এক্সিকিউট হয়েছে - ফাইনাল');