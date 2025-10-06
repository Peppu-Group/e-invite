<template>
    <nav class="navbar">
        <div class="container">
            <a class="navbar-brand">
                <i class="fas fa-gift" style="font-size: 1.5rem; color: #333;"></i>
            </a>
            <button class="btn position-relative" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas">
                <i class="fas fa-shopping-cart" style="font-size: 1.5rem; color: #333;"></i>
                <!-- Replace id with Vue binding -->
                <span class="cart-badge">{{ cart.length }}</span>
            </button>
        </div>
    </nav>

    <div class="container">
        <div class="header-section">
            <h1>EDEH's Gift Registry</h1>
            <p>Browse through the curated list of birthday gifts</p>
        </div>

        <button class="filter-btn">
            <i class="fas fa-filter"></i> Filter by Category
        </button>

        <div class="row g-4">
            <!-- Cash Gift Card -->
            

            <!-- Cushion Cover -->
            <div class="col-md-6 col-lg-3" v-for="gift in gifts">
                <div class="card gift-card">
                    <img :src="gift.img"
                        alt="Cushion Cover">
                    <div class="card-body">
                        <h5 class="card-title">{{gift.title}}</h5>
                        <p class="card-text text-muted">{{ gift.description }}</p>
                        <p class="gift-price">₦{{ gift.price }}</p>
                        <button class="btn btn-add-cart"
                            @click="addToCart(gift.title, gift.title, gift.price, gift.img)">
                            <i class="fas fa-shopping-cart me-2"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <!-- African Luxury Fabrics -->

            <!-- Spa Voucher -->
            
        </div>
    </div>

    <!-- Cart Offcanvas -->
    <div class="offcanvas offcanvas-end cart-offcanvas" tabindex="-1" id="cartOffcanvas">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title">Your Cart</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
            <!-- Replace innerHTML with Vue template -->
            <div v-if="cart.length === 0" class="empty-cart">
                <i class="fas fa-shopping-cart" style="font-size: 4rem;"></i>
                <p class="mt-3">Your cart is empty</p>
            </div>

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
            gifts: [
                {
                    img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=300&fit=crop',
                    title: 'Cushion Cover',
                    description: 'Contemporary Geometric Cushion Cover x 12pcs',
                    price: 50000
                },
                {
                    img: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=400&h=300&fit=crop',
                    title: 'African Luxury Fabrics (Singles)',
                    description: 'Dutch Wax Ankara Singles',
                    price: 60000
                },
            ]
        }
    },

    computed: {
        cartTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    },

    methods: {
        addToCart(id, name, price, image) {
            this.cart.push({ id, name, price, image });

            const offcanvas = new bootstrap.Offcanvas(document.getElementById('cartOffcanvas'));
            offcanvas.show();
        },

        addCashGift() {
            const amount = parseFloat(document.getElementById('cashAmount').value);

            if (!amount || amount <= 0) {
                alert('Please enter a valid amount');
                return;
            }

            this.addToCart('cash', `Cash Gift (₦${amount.toLocaleString()})`, amount, 'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=400&h=300&fit=crop');
            document.getElementById('cashAmount').value = '';
        },

        removeFromCart(index) {
            this.cart.splice(index, 1);
        },

        checkout() {
            if (this.cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }

            alert('Thank you for your generous gift! Total: ₦' + this.cartTotal.toLocaleString());
            this.cart = [];

            const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('cartOffcanvas'));
            offcanvas.hide();
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