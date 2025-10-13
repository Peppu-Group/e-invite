<template>
    <nav class="navbar">
        <div class="container">
            <a class="navbar-brand">
                <i class="fas fa-gift" style="font-size: 1.5rem; color: #333;"></i>
            </a>
            <button class="btn position-relative" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas">
                <i class="fas fa-shopping-cart" style="font-size: 1.5rem; color: #333;"></i>
                <span class="cart-badge">{{ cart.length }}</span>
            </button>
        </div>
    </nav>

    <div class="container">
        <div class="header-section">
            <h1>Ebubedike's Gift Registry</h1>
            <p>Browse through the curated list of birthday gifts</p>
        </div>

        <!-- Filter Dropdown -->
        <div class="dropdown" style="margin-bottom: 2rem;">
            <button class="filter-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-filter"></i>
                {{ selectedCategory === 'all' ? 'Filter by Category' : categories.find(c => c.value ===
                    selectedCategory)?.label }}
            </button>
            <ul class="dropdown-menu">
                <li>
                    <a class="dropdown-item" :class="{ active: selectedCategory === 'all' }"
                        @click="filterByCategory('all')" href="javascript:void(0)">
                        All Categories
                    </a>
                </li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li v-for="category in categories" :key="category.value">
                    <a class="dropdown-item" :class="{ active: selectedCategory === category.value }"
                        @click="filterByCategory(category.value)" href="javascript:void(0)">
                        {{ category.label }}
                    </a>
                </li>
            </ul>
        </div>

        <div class="row g-4">
            <!-- Cash Gift Card -->
            <div class="col-md-6 col-lg-3" v-if="selectedCategory === 'all' || selectedCategory === 'cash'">
                <div class="card gift-card cash-gift">
                    <div class="card-body text-center">
                        <i class="fas fa-heart card-icon"></i>
                        <h5 class="card-title">Cash Gift</h5>
                        <p class="card-text text-muted">Bless My Next Chapter / Celebration Fund</p>
                        <input type="number" class="cash-gift-input" v-model="cashAmount" placeholder="Enter amount (₦)">
                        <small class="d-block text-muted mb-3">Amount in Nigerian Naira (₦)</small>
                        <button class="btn btn-add-cart" @click="addCashGift">
                            <i class="fas fa-heart me-2"></i> Add Gift to Cart
                        </button>
                    </div>
                </div>
            </div>

            <!-- Dynamic Gift Cards -->
            <div class="col-md-6 col-lg-3" v-for="gift in filteredGifts" :key="gift.title">
                <div class="card gift-card">
                    <img :src="gift.img" :alt="gift.title">
                    <div class="card-body">
                        <h5 class="card-title">{{ gift.title }}</h5>
                        <p class="card-text text-muted">{{ gift.description }}</p>
                        <p class="gift-price">₦{{ gift.price.toLocaleString() }}</p>
                        <button class="btn btn-add-cart" @click="addToCart(gift.title, gift.title, gift.price, gift.img)">
                            <i class="fas fa-shopping-cart me-2"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Cart Offcanvas -->
    <div class="offcanvas offcanvas-end cart-offcanvas" tabindex="-1" id="cartOffcanvas">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title">Your Cart</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas">
                <i class="fas fa-times remove-btn"></i>
            </button>
        </div>
        <div class="offcanvas-body">
            <!-- Empty Cart -->
            <div v-if="cart.length === 0" class="empty-cart">
                <i class="fas fa-shopping-cart" style="font-size: 4rem;"></i>
                <p class="mt-3">Your cart is empty</p>
            </div>

            <!-- Cart Items -->
            <div v-else>
                <div v-for="(item, index) in cart" :key="index" class="cart-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex gap-3">
                            <img :src="item.image" :alt="item.name">
                            <div>
                                <h6 class="mb-1">{{ item.name }}</h6>
                                <p class="text-muted mb-0" style="font-size: 0.9rem;">
                                    ₦{{ item.price.toLocaleString() }}
                                </p>
                            </div>
                        </div>
                        <i class="fas fa-times remove-btn" @click="removeFromCart(index)"></i>
                    </div>
                </div>
            </div>

            <div class="cart-total">
                <div class="d-flex justify-content-between mb-2">
                    <strong>Total:</strong>
                    <strong class="gift-price">₦{{ cartTotal.toLocaleString() }}</strong>
                </div>
            </div>
            <button class="btn btn-checkout" @click="checkout">
                <i class="fas fa-check me-2"></i> Proceed to Checkout
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GiftView',
    data() {
        return {
            cart: [],
            cashAmount: '',
            selectedCategory: 'all',
            allGifts: [
                {
                    img: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/58/660869/1.jpg?1766',
                    title: 'Martell',
                    description: 'Martell Cognac XO 70cl',
                    price: 245000,
                    category: 'drinks'
                },
                {
                    img: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/183877/1.jpg?7709',
                    title: 'Executive Suite',
                    description: `Executive Men's Suit`,
                    price: 690000,
                    category: 'suite'
                },
                {
                    img: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/2226814/1.jpg?0383',
                    title: 'Mens Suede',
                    description: `UGG's Men's Suede Cross Leather Slippers`,
                    price: 100000,
                    category: 'shoes'
                },
                {
                    img: 'https://fragrances.com.ng/media/catalog/product/cache/0daeb07bb1d294c1f281fab47369d56a/c/h/christian_dior_sauvage_parfum_200ml_large_size_for_men2.jpg',
                    title: 'Christian Dior Sauvage',
                    description: 'Christian Dior Sauvage Parfum 200ml (Large Size) For Men',
                    price: 474999,
                    category: 'perfume'
                },
                {
                    img: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/1028722/1.jpg?7362',
                    title: 'The Macallan',
                    description: 'The Macallan Rare Cask 70cl',
                    price: 314000,
                    category: 'drinks'
                },
                {
                    img: 'https://fragrances.com.ng/media/catalog/product/cache/0daeb07bb1d294c1f281fab47369d56a/t/o/tom_ford_ombre_leather_edp_100ml_for_men.jpeg',
                    title: 'Tom Ford Ombre Leather',
                    description: `Tom Ford Ombre Leather EDP 100ml Perfume For Men`,
                    price: 349999,
                    category: 'perfume'
                },
                {
                    img: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/98/3567814/1.jpg?2625',
                    title: 'iPhone 17 Pro Max',
                    description: `Apple iPhone 17 Pro Max`,
                    price: 3000000,
                    category: 'gadget'
                },
                {
                    img: 'https://fragrances.com.ng/media/catalog/product/cache/0daeb07bb1d294c1f281fab47369d56a/l/o/louis_vuitton_ombre_nomade_edp_100ml.jpeg',
                    title: 'Ombre Nomade',
                    description: `louis Vuitton Ombre Nomade EDP 100ml`,
                    price: 1199999,
                    category: 'perfume'
                },
                {
                    img: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/27/7851072/1.jpg?7914',
                    title: 'Corporate Gift Set',
                    description: `Notebook Pen Flash Drive Water Flask`,
                    price: 42500,
                    category: 'gift set'
                },
                {
                    img: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/89/8361583/1.jpg?9271',
                    title: 'Callaway',
                    description: `Men's 2024 Chev Star Spikeless`,
                    price: 250000,
                    category: 'shoes'
                },
                {
                    img: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/95/2104962/1.jpg?6313',
                    title: 'Mister',
                    description: `Mister Exotic Men's Patterned Shoes`,
                    price: 256000,
                    category: 'shoes'
                },
                {
                    img: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/47/6996704/1.jpg?7284',
                    title: 'Leather Bag',
                    description: `Men's Leather Bag`,
                    price: 70000,
                    category: 'bag'
                },
                {
                    img: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/84/5436814/1.jpg?7484',
                    title: 'OEDAGAR',
                    description: `OEDAGAR Super Premium Men's Black Valenzo Wristwatch`,
                    price: 590000,
                    category: 'watch'
                },
                {
                    img: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/412838/1.jpg?5417',
                    title: 'Johnnie Walker',
                    description: 'Johnnie Walker Blue Label 70cl',
                    price: 320000,
                    category: 'drinks'
                },
                {
                    img: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/31/2424314/1.jpg?9972',
                    title: 'Turkey Suite',
                    description: `Chief Turkey 3 Piece Executive Suit`,
                    price: 250000,
                    category: 'suite'
                },
                {
                    img: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/07/9159863/1.jpg?3105',
                    title: 'Spa Sessions',
                    description: `Spa / Massage Gift Voucher`,
                    price: 300000,
                    category: 'adventure'
                },
                {
                    img: 'https://fragrances.com.ng/media/catalog/product/cache/0daeb07bb1d294c1f281fab47369d56a/b/o/boadicea_the_victorious_nebulous_edp_100ml_perfume.jpg',
                    title: 'The Victorious Nebulous',
                    description: `Boadicea The Victorious Nebulous EDP 100ml Perfume`,
                    price: 3699999,
                    category: 'perfume'
                },
                {
                    img: 'https://images.unsplash.com/photo-1614350391736-ed8619d63c06?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'Dinner Cruise',
                    description: `Dinner Cruise Adventure`,
                    price: 1000000,
                    category: 'adventure'
                },
                {
                    img: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/34/8616942/1.jpg?5042',
                    title: 'Macbook Air',
                    description: `Apple 13.6" MacBook Air (M2, Midnight) `,
                    price: 1550000,
                    category: 'gadget'
                },
                {
                    img: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/760869/1.jpg?2255',
                    title: 'The Chivas',
                    description: 'Chivas Scotch Whiskey Regal Ultra 25YO 70cl',
                    price: 355000,
                    category: 'drinks'
                },
                {
                    img: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/27/9682814/1.jpg?4533',
                    title: 'iPad Pro',
                    description: `Apple iPad Pro 11" M4`,
                    price: 1771000,
                    category: 'gadget'
                },
            ]
        }
    },

    computed: {
        cartTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        },

        filteredGifts() {
            if (this.selectedCategory === 'all') {
                return this.allGifts;
            }
            return this.allGifts.filter(gift => gift.category === this.selectedCategory);
        },

        categories() {
            // Get unique categories from gifts
            const uniqueCategories = [...new Set(this.allGifts.map(gift => gift.category))];
            return uniqueCategories.map(cat => ({
                value: cat,
                label: this.formatCategoryLabel(cat)
            }));
        }
    },

    methods: {
        formatCategoryLabel(category) {
            // Capitalize first letter of each word
            return category
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        },

        filterByCategory(category) {
            this.selectedCategory = category;
        },

        addToCart(id, name, price, image) {
            this.cart.push({ id, name, price, image });

            const offcanvas = new bootstrap.Offcanvas(document.getElementById('cartOffcanvas'));
            offcanvas.show();
        },

        addCashGift() {
            const amount = parseFloat(this.cashAmount);

            if (!amount || amount <= 0) {
                alert('Please enter a valid amount');
                return;
            }

            this.addToCart('cash', `Cash Gift (₦${amount.toLocaleString()})`, amount,
                'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=400&h=300&fit=crop');
            this.cashAmount = '';
        },

        removeFromCart(index) {
            this.cart.splice(index, 1);
        },

        checkout() {
            if (this.cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }

            this.payWithPaystack(this.cartTotal)
        },

        payWithPaystack(amount) {
            let handler = PaystackPop.setup({
                key: import.meta.env.VITE_APP_PAYSTACK, // your public key
                email: 'users@peppubuild.com',
                amount: amount * 100, // convert to kobo
                currency: 'NGN',
                callback: function (response) {
                    Swal.fire('Success', `Payment successful. Ref: ${response.reference}`, 'success')
                    this.cart = [];

                    const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('cartOffcanvas'));
                    offcanvas.hide();
                },
                onClose: function () {
                    Swal.fire('Error', 'Transaction was not completed', 'error');
                }
            });
            handler.openIframe();
        }
    }
}
</script>

<style scoped>
body {
    background-color: var(--secondary-color);
    font-family: 'Georgia', serif;
}

.navbar {
    background-color: var(--secondary-color);
    padding: 1.5rem 0;
}

.cart-badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: var(--primary-color);
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
}

.header-section {
    text-align: center;
    padding: 3rem 0;
}

.header-section h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 0.5rem;
}

.header-section p {
    color: #666;
    font-size: 1.1rem;
}

.filter-btn {
    background-color: white;
    border: 1px solid #ddd;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
}

.gift-card {
    border: none;
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s;
    height: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.gift-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.gift-card.cash-gift {
    background: linear-gradient(135deg, #FFE5EC 0%, #FFF0F5 100%);
}

.gift-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.card-icon {
    font-size: 3rem;
    color: var(--primary-color);
    margin: 2rem 0 1rem;
}

.gift-price {
    color: var(--primary-color);
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 0;
}

.btn-add-cart {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 8px;
    width: 100%;
    font-weight: 500;
    transition: all 0.3s;
}

.btn-add-cart:hover {
    background-color: #C2185B;
    color: white;
}

.btn-add-cart:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.cart-offcanvas {
    width: 400px !important;
}

.cart-item {
    border-bottom: 1px solid #eee;
    padding: 1rem 0;
}

.cart-item img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
}

.cart-total {
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
}

.btn-checkout {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 8px;
    width: 100%;
    font-weight: 600;
    margin-top: 1rem;
}

.btn-checkout:hover {
    background-color: #C2185B;
}

.cash-gift-input {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 0.5rem;
    width: 100%;
    margin: 1rem 0;
}

.empty-cart {
    text-align: center;
    padding: 3rem 1rem;
    color: #999;
}

.remove-btn {
    color: #dc3545;
    cursor: pointer;
    font-size: 1.2rem;
}

.remove-btn:hover {
    color: #c82333;
}
</style>