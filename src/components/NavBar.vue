<template>
    <div>
        <!-- Navbar -->
        <nav class="navbar">
            <div class="navbar-brand">
                <div class="brand-icon">✓</div>
                <span>rsvpify</span>
            </div>

            <div class="navbar-menu">
                <a href="#" class="nav-link active">Dashboard</a>
                <a href="#" class="nav-link">Events</a>
                <a href="#" class="nav-link">Analytics</a>
                <a href="#" class="nav-link">Settings</a>
            </div>

            <div class="navbar-actions">
                <img :src="userAvatar" alt="User" class="user-avatar">
                <button class="mobile-menu-btn" @click="toggleMobileMenu">
                    {{ mobileMenuOpen ? '✕' : '☰' }}
                </button>
            </div>
        </nav>

        <!-- Mobile Navigation -->
        <div class="mobile-nav" :class="{ active: mobileMenuOpen }">
            <a href="#" class="mobile-nav-link" @click="toggleMobileMenu">Dashboard</a>
            <a href="#" class="mobile-nav-link" @click="toggleMobileMenu">Events</a>
            <a href="#" class="mobile-nav-link" @click="toggleMobileMenu">Analytics</a>
            <a href="#" class="mobile-nav-link" @click="toggleMobileMenu">Settings</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            userName: 'Sarah',
            userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
            mobileMenuOpen: false,
            activeFilter: 'all',
            events: []
        };
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
    }
}
</script>

<style scoped>
/* Navbar */
.navbar {
    background: white;
    border-bottom: 1px solid #e2e8f0;
    padding: 0 40px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
}

.navbar-brand {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 24px;
    font-weight: bold;
    color: #1a202c;
}

.brand-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--primary-gold) 0%, var(--deep-gold) 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
}

.navbar-menu {
    display: flex;
    align-items: center;
    gap: 30px;
}

.nav-link {
    color: #4a5568;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    transition: color 0.2s;
}

.nav-link:hover {
    color: var(--primary-gold);
}

.nav-link.active {
    color: var(--primary-gold);
}

.navbar-actions {
    display: flex;
    align-items: center;
    gap: 16px;
}

.user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid #e2e8f0;
    transition: border-color 0.2s;
}

.user-avatar:hover {
    border-color: var(--primary-gold);
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #4a5568;
    padding: 8px;
    line-height: 1;
    transition: color 0.2s;
}

.mobile-menu-btn:hover {
    color: var(--primary-gold);
}

.mobile-nav {
    display: none;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    border-bottom: 1px solid #e2e8f0;
    padding: 20px 40px;
    z-index: 99;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.mobile-nav.active {
    display: block;
}

.mobile-nav-link {
    display: block;
    padding: 16px 0;
    color: #4a5568;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid #f7fafc;
    transition: color 0.2s;
}

.mobile-nav-link:hover,
.mobile-nav-link:active {
    color: var(--primary-gold);
}

.mobile-nav-link:last-child {
    border-bottom: none;
}

/* Responsive Styles */
@media (max-width: 1024px) {
    .events-grid {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }

    .container {
        padding: 30px;
    }
}

@media (max-width: 768px) {
    .navbar {
        padding: 0 20px;
    }

    .navbar-menu {
        display: none;
    }

    .mobile-menu-btn {
        display: block;
    }

    .navbar-actions {
        gap: 12px;
    }

    .mobile-nav {
        padding: 20px;
    }
}

@media (max-width: 480px) {
    .navbar {
        padding: 0 16px;
    }

    .navbar-brand {
        gap: 8px;
        font-size: 20px;
    }

    .brand-icon {
        width: 36px;
        height: 36px;
        font-size: 20px;
    }

    .user-avatar {
        width: 36px;
        height: 36px;
    }

    .mobile-nav {
        padding: 16px;
    }

    .mobile-nav-link {
        padding: 14px 0;
        font-size: 15px;
    }
}
</style>