<template>
    <!-- Navbar -->
    <nav class="navbar">
        <div class="navbar-brand">
            <span>Peppu E-invite</span>
        </div>

        <div class="navbar-menu">
            <a href="#" class="nav-link active">Dashboard</a>
            <a href="#" class="nav-link">Pricing</a>
            <a href="#" class="nav-link">Features</a>
        </div>
    </nav>

    <!-- Mobile Navigation -->
    <div class="mobile-nav" :class="{ active: mobileMenuOpen }">
        <a href="#" class="mobile-nav-link">Dashboard</a>
    </div>
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1 class="logo">peppu e-invite</h1>
            <p class="tagline">Smart Guest List Management Made Simple</p>
            <p class="subtitle">From RSVP to check-in, manage every detail of your event with ease. Track responses,
                organize seating, handle plus ones, and communicate seamlessly.</p>
            <div class="cta-buttons">
                <a href="/scanner.html" class="btn btn-primary">Start Managing Invites</a>
                <a href="#features" class="btn btn-secondary">Learn More</a>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">2,500+</div>
                    <div class="stat-label">Guests Managed</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">3+</div>
                    <div class="stat-label">Successful Events</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Happy Planners</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Showcase Section -->
    <section class="showcase-section">
        <div class="container">
            <img src="../assets/peppu-feature1.png" alt="Peppu E-Invite Platform Interface" class="showcase-image">
        </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
        <div class="container">
            <h2 class="section-title">Everything You Need to Manage Your Event</h2>
            <p class="section-subtitle">Powerful features designed to make event planning effortless and stress-free</p>

            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">✉️</div>
                    <h3>RSVP Management</h3>
                    <p>Collect and track guest responses effortlessly. Know exactly who's coming and who's not in real-time.
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">✅</div>
                    <h3>Quick Check-In</h3>
                    <p>Speed up event entry with our instant check-in system. Scan invites and verify guests in seconds.</p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">👥</div>
                    <h3>Plus One Tracking</h3>
                    <p>Manage guest companions with ease. Track who's bringing a plus one and update counts automatically.
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">🪑</div>
                    <h3>Seating Arrangement</h3>
                    <p>Organize your event layout perfectly. Create seating charts and assign tables with drag-and-drop
                        simplicity.</p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>Real-Time Analytics</h3>
                    <p>Get instant insights on attendance, response rates, and guest preferences to make informed decisions.
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">🔔</div>
                    <h3>Smart Notifications</h3>
                    <p>Send automated reminders and updates to keep your guests informed and engaged throughout.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Communication Section -->
    <section class="communication">
        <div class="container">
            <h2 class="section-title">Multi-Channel Communication</h2>
            <p class="section-subtitle">Reach your guests wherever they are. Track responses and communicate effortlessly
                through their preferred channels.</p>

            <div class="comm-grid">
                <div class="comm-card">
                    <div class="comm-icon">💬</div>
                    <h3>WhatsApp</h3>
                    <p>Send instant invites and reminders. Track message delivery and responses in real-time with the
                        world's most popular messaging platform.</p>
                </div>

                <div class="comm-card">
                    <div class="comm-icon">📱</div>
                    <h3>SMS</h3>
                    <p>Reach guests instantly with text messages. Perfect for time-sensitive updates and confirmations with
                        guaranteed delivery.</p>
                </div>

                <div class="comm-card">
                    <div class="comm-icon">📧</div>
                    <h3>Email</h3>
                    <p>Send beautiful, branded invitations and updates. Track opens, clicks, and responses with detailed
                        analytics.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits">
        <div class="container">
            <h2 class="section-title">Why Event Planners Love Peppu</h2>
            <p class="section-subtitle">Join thousands of planners who've streamlined their event management</p>

            <div class="benefits-list">
                <div class="benefit-item">
                    <div class="benefit-check">✓</div>
                    <div>
                        <h4>Save Hours of Work</h4>
                        <p>Automate repetitive tasks and focus on creating memorable experiences instead of managing
                            spreadsheets.</p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-check">✓</div>
                    <div>
                        <h4>Zero Confusion</h4>
                        <p>Keep all guest information in one place. No more lost RSVPs or miscommunication with your team.
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-check">✓</div>
                    <div>
                        <h4>Professional Results</h4>
                        <p>Impress clients and guests with polished communication and seamless event execution every time.
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-check">✓</div>
                    <div>
                        <h4>Mobile-Friendly</h4>
                        <p>Manage your event on the go. Access all features from any device, anywhere, anytime.</p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-check">✓</div>
                    <div>
                        <h4>Instant Updates</h4>
                        <p>Changes sync in real-time across all channels. Your entire team stays on the same page
                            automatically.</p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-check">✓</div>
                    <div>
                        <h4>Scalable Solution</h4>
                        <p>From intimate gatherings to large conferences, peppu adapts to events of any size effortlessly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <h2>Ready to Transform Your Event Planning?</h2>
            <p>Join event planners who trust peppu e-invite for their guest management needs</p>
            <div class="cta-buttons">
                <a href="/scanner.html" class="btn btn-primary">Get Started Now</a>
                <a href="#" class="btn btn-secondary">Schedule a Demo</a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Peppu E-Invite. Making event planning beautiful and effortless.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'HomeView',
    data() {
        return {
            mobileMenuOpen: false,
        }
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
    color: white;
    padding: 120px 20px 100px;
    text-align: center;
    position: relative;
    overflow: hidden;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('../assets/peppu-hero.jpg') center/cover no-repeat;
    opacity: 0.15;
    z-index: 0;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.3;
}

.hero-content {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.logo {
    font-size: 3.5em;
    font-weight: 800;
    margin-bottom: 20px;
    color: white;
    text-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    letter-spacing: -1px;
}

.tagline {
    font-size: 1.5em;
    margin-bottom: 15px;
    font-weight: 300;
    opacity: 0.95;
}

.subtitle {
    font-size: 1.1em;
    margin-bottom: 40px;
    opacity: 0.9;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.cta-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 16px 40px;
    border: none;
    border-radius: 50px;
    font-size: 1.1em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
}

.btn-primary {
    background: white;
    color: var(--primary);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    background: hsl(0, 0%, 98%);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 2px solid white;
    backdrop-filter: blur(10px);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-3px);
}

/* Features Section */
.features {
    padding: 80px 20px;
    background: white;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    text-align: center;
    font-size: 2.8em;
    margin-bottom: 20px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
}

.section-subtitle {
    text-align: center;
    font-size: 1.2em;
    color: var(--text-light);
    margin-bottom: 60px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
}

.feature-card {
    background: white;
    border-radius: 24px;
    padding: 40px 30px;
    text-align: center;
    transition: all 0.4s ease;
    border: 2px solid hsl(0, 0%, 92%);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    border-color: var(--primary);
}

.feature-icon {
    width: 90px;
    height: 90px;
    margin: 0 auto 25px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--gradient-end) 100%);
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.8em;
    box-shadow: 0 10px 30px rgba(0, 180, 180, 0.25);
}

.feature-card h3 {
    font-size: 1.4em;
    margin-bottom: 15px;
    color: var(--text);
}

.feature-card p {
    color: var(--text-light);
    font-size: 1.05em;
    line-height: 1.7;
}

/* Stats Section */
.stats-section {
    padding: 80px 20px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--gradient-end) 100%);
    position: relative;
    overflow: hidden;
}

.stats-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.4;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.stat-card {
    background: white;
    border-radius: 20px;
    padding: 40px 30px;
    text-align: center;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    transform: translateY(0);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    animation: float-card 3s ease-in-out infinite;
    position: relative;
    overflow: hidden;
}

.stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 120px;
    background-size: cover;
    background-position: center;
    border-radius: 20px 20px 0 0;
}

.stat-card:nth-child(1)::before {
    background-image: url('../assets/messages.png');
}

.stat-card:nth-child(2)::before {
    background-image: url('/peppu-feature1.jpg');
}

.stat-card:nth-child(3)::before {
    background-image: url('../assets/peppu-feature2.jpg');
}

.stat-card:nth-child(1) {
    animation-delay: 0s;
}

.stat-card:nth-child(2) {
    animation-delay: 0.3s;
}

.stat-card:nth-child(3) {
    animation-delay: 0.6s;
}

.stat-card:hover {
    transform: translateY(-15px) scale(1.05);
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.25);
}

.stat-number {
    font-size: 3.5em;
    font-weight: 800;
    background: linear-gradient(135deg, var(--primary) 0%, var(--gradient-end) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 10px;
    line-height: 1;
    position: relative;
    z-index: 1;
}

.stat-label {
    font-size: 1.2em;
    color: var(--text-light);
    font-weight: 500;
    position: relative;
    z-index: 1;
}

@keyframes float-card {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

/* Showcase Section */
.showcase-section {
    padding: 100px 20px;
    background: white;
    position: relative;
    overflow: hidden;
}

.showcase-image {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    border-radius: 30px;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
    display: block;
    position: relative;
    z-index: 1;
    transform: perspective(1000px) rotateX(2deg);
    transition: all 0.5s ease;
}

.showcase-image:hover {
    transform: perspective(1000px) rotateX(0deg) scale(1.02);
    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.25);
}

.showcase-section::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
    opacity: 0.08;
    z-index: 0;
}

/* Communication Section */
.communication {
    padding: 80px 20px;
    background: hsl(180, 65%, 98%);
}

.comm-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.comm-card {
    background: white;
    border-radius: 24px;
    padding: 40px 35px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 2px solid hsl(0, 0%, 92%);
    overflow: hidden;
    position: relative;
}

.comm-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary) 0%, var(--gradient-end) 100%);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.comm-card:hover::before {
    transform: scaleX(1);
}

.comm-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
    border-color: var(--primary);
}

.comm-icon {
    font-size: 3.5em;
    margin-bottom: 20px;
}

.comm-card h3 {
    font-size: 1.5em;
    margin-bottom: 12px;
}

.comm-card p {
    color: var(--text-light);
    font-size: 1.05em;
}

/* Benefits Section */
.benefits {
    padding: 80px 20px;
    background: white;
}

.benefits-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 50px;
}

.benefit-item {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    padding: 25px;
    background: hsl(240, 20%, 99%);
    border-radius: 15px;
    border-left: 4px solid var(--primary);
    transition: all 0.3s ease;
}

.benefit-item:hover {
    background: hsl(280, 70%, 98%);
    transform: translateX(5px);
}

.benefit-check {
    font-size: 1.8em;
    color: var(--primary);
    flex-shrink: 0;
}

.benefit-item h4 {
    font-size: 1.2em;
    margin-bottom: 8px;
}

.benefit-item p {
    color: var(--text-light);
    font-size: 1.05em;
}

/* CTA Section */
.cta-section {
    padding: 100px 20px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--gradient-end) 100%);
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.cta-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/peppu-feature2.jpg') center/cover no-repeat;
    opacity: 0.1;
}

.cta-section h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
}

.cta-section p {
    font-size: 1.3em;
    margin-bottom: 40px;
    opacity: 0.95;
}

/* Footer */
.footer {
    background: hsl(240, 20%, 15%);
    color: white;
    padding: 40px 20px;
    text-align: center;
}

.footer p {
    opacity: 0.8;
}

/* Animations */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
    }
}

.feature-icon {
    animation: float 3s ease-in-out infinite;
}

.feature-card:nth-child(1) .feature-icon {
    animation-delay: 0s;
}

.feature-card:nth-child(2) .feature-icon {
    animation-delay: 0.2s;
}

.feature-card:nth-child(3) .feature-icon {
    animation-delay: 0.4s;
}

.feature-card:nth-child(4) .feature-icon {
    animation-delay: 0.6s;
}

/* Responsive */
@media (max-width: 768px) {
    .logo {
        font-size: 2.2em;
    }

    .tagline {
        font-size: 1.2em;
    }

    .subtitle {
        font-size: 1em;
    }

    .section-title {
        font-size: 2em;
    }

    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }

    .btn {
        width: 100%;
        max-width: 300px;
    }

    .navbar {
        padding: 0 20px;
    }

    .navbar-menu {
        display: none;
    }

    .mobile-menu-btn {
        display: block;
    }
}

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
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
    color: #667eea;
}

.nav-link.active {
    color: #667eea;
}

.navbar-actions {
    display: flex;
    align-items: center;
    gap: 20px;
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
    border-color: #667eea;
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #4a5568;
}

.mobile-nav {
    display: none;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    border-bottom: 1px solid #e2e8f0;
    padding: 20px;
    z-index: 99;
}

.mobile-nav.active {
    display: block;
}

.mobile-nav-link {
    display: block;
    padding: 12px 0;
    color: #4a5568;
    text-decoration: none;
    font-size: 16px;
    border-bottom: 1px solid #f7fafc;
}

@media (max-width: 480px) {
    .navbar-brand span {
        display: none;
    }
}
</style>