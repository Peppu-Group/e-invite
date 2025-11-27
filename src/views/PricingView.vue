<template>
    <!-- Navbar -->
    <NavBar :showAvatar="false"/>
    
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1 class="page-title">Simple, Transparent Pricing</h1>
            <p class="tagline">Choose the perfect plan for your event management needs</p>
            <p class="subtitle">No hidden fees. No surprises. Cancel anytime.</p>
            
            <!-- Billing Toggle -->
            <div class="billing-toggle">
                <span :class="{ active: billingCycle === 'monthly' }">Monthly</span>
                <button class="toggle-switch" @click="toggleBilling">
                    <span class="toggle-slider" :class="{ annual: billingCycle === 'annual' }"></span>
                </button>
                <span :class="{ active: billingCycle === 'annual' }">
                    Annual <span class="save-badge">Save 20%</span>
                </span>
            </div>
        </div>
    </section>

    <!-- Pricing Cards Section -->
    <section class="pricing-section">
        <div class="container">
            <div class="pricing-grid">
                <!-- Starter Plan -->
                <div class="pricing-card">
                    <div class="plan-header">
                        <h3 class="plan-name">Starter</h3>
                        <p class="plan-description">Perfect for small events and personal celebrations</p>
                    </div>
                    <div class="plan-price">
                        <span class="currency">$</span>
                        <span class="amount">{{ billingCycle === 'monthly' ? '19' : '15' }}</span>
                        <span class="period">/month</span>
                    </div>
                    <p class="billing-note" v-if="billingCycle === 'annual'">Billed annually at $180</p>
                    <ul class="plan-features">
                        <li><span class="check">✓</span> Up to 100 guests</li>
                        <li><span class="check">✓</span> 5 events per year</li>
                        <li><span class="check">✓</span> RSVP management</li>
                        <li><span class="check">✓</span> Email invitations</li>
                        <li><span class="check">✓</span> Basic analytics</li>
                        <li><span class="check">✓</span> Mobile check-in</li>
                        <li><span class="check">✓</span> Email support</li>
                    </ul>
                    <a href="/signup" class="btn btn-secondary">Get Started</a>
                </div>

                <!-- Professional Plan (Popular) -->
                <div class="pricing-card popular">
                    <div class="popular-badge">Most Popular</div>
                    <div class="plan-header">
                        <h3 class="plan-name">Professional</h3>
                        <p class="plan-description">Ideal for professional event planners and agencies</p>
                    </div>
                    <div class="plan-price">
                        <span class="currency">$</span>
                        <span class="amount">{{ billingCycle === 'monthly' ? '49' : '39' }}</span>
                        <span class="period">/month</span>
                    </div>
                    <p class="billing-note" v-if="billingCycle === 'annual'">Billed annually at $468</p>
                    <ul class="plan-features">
                        <li><span class="check">✓</span> Up to 500 guests</li>
                        <li><span class="check">✓</span> Unlimited events</li>
                        <li><span class="check">✓</span> All Starter features</li>
                        <li><span class="check">✓</span> SMS & WhatsApp invites</li>
                        <li><span class="check">✓</span> Seating arrangements</li>
                        <li><span class="check">✓</span> Plus one tracking</li>
                        <li><span class="check">✓</span> Advanced analytics</li>
                        <li><span class="check">✓</span> Custom branding</li>
                        <li><span class="check">✓</span> Priority support</li>
                    </ul>
                    <a href="/signup" class="btn btn-primary">Get Started</a>
                </div>

                <!-- Enterprise Plan -->
                <div class="pricing-card">
                    <div class="plan-header">
                        <h3 class="plan-name">Enterprise</h3>
                        <p class="plan-description">For large organizations and high-volume events</p>
                    </div>
                    <div class="plan-price">
                        <span class="amount custom">Custom</span>
                    </div>
                    <p class="billing-note">Let's discuss your needs</p>
                    <ul class="plan-features">
                        <li><span class="check">✓</span> Unlimited guests</li>
                        <li><span class="check">✓</span> Unlimited events</li>
                        <li><span class="check">✓</span> All Professional features</li>
                        <li><span class="check">✓</span> Dedicated account manager</li>
                        <li><span class="check">✓</span> Custom integrations</li>
                        <li><span class="check">✓</span> API access</li>
                        <li><span class="check">✓</span> White-label solution</li>
                        <li><span class="check">✓</span> Training & onboarding</li>
                        <li><span class="check">✓</span> 24/7 phone support</li>
                        <li><span class="check">✓</span> SLA guarantee</li>
                    </ul>
                    <a href="/contact" class="btn btn-secondary">Contact Sales</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Comparison Table -->
    <section class="comparison-section">
        <div class="container">
            <h2 class="section-title">Compare All Features</h2>
            <p class="section-subtitle">See what's included in each plan</p>
            
            <div class="comparison-table-wrapper">
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th class="feature-column">Features</th>
                            <th>Starter</th>
                            <th class="popular-column">Professional</th>
                            <th>Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="feature-name">Guest Capacity</td>
                            <td>100</td>
                            <td class="popular-column">500</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr>
                            <td class="feature-name">Events per Year</td>
                            <td>5</td>
                            <td class="popular-column">Unlimited</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr>
                            <td class="feature-name">RSVP Management</td>
                            <td>✓</td>
                            <td class="popular-column">✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td class="feature-name">Email Invitations</td>
                            <td>✓</td>
                            <td class="popular-column">✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td class="feature-name">SMS Invitations</td>
                            <td>—</td>
                            <td class="popular-column">✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td class="feature-name">WhatsApp Integration</td>
                            <td>—</td>
                            <td class="popular-column">✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td class="feature-name">Mobile Check-in</td>
                            <td>✓</td>
                            <td class="popular-column">✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td class="feature-name">Seating Arrangements</td>
                            <td>—</td>
                            <td class="popular-column">✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td class="feature-name">Plus One Tracking</td>
                            <td>—</td>
                            <td class="popular-column">✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td class="feature-name">Analytics & Reports</td>
                            <td>Basic</td>
                            <td class="popular-column">Advanced</td>
                            <td>Enterprise</td>
                        </tr>
                        <tr>
                            <td class="feature-name">Custom Branding</td>
                            <td>—</td>
                            <td class="popular-column">✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td class="feature-name">API Access</td>
                            <td>—</td>
                            <td class="popular-column">—</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td class="feature-name">White-label Solution</td>
                            <td>—</td>
                            <td class="popular-column">—</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td class="feature-name">Support</td>
                            <td>Email</td>
                            <td class="popular-column">Priority</td>
                            <td>24/7 Phone</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
        <div class="container">
            <h2 class="section-title">Frequently Asked Questions</h2>
            <p class="section-subtitle">Everything you need to know about our pricing</p>
            
            <div class="faq-grid">
                <div class="faq-item">
                    <h3 class="faq-question">Can I change plans later?</h3>
                    <p class="faq-answer">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences.</p>
                </div>
                
                <div class="faq-item">
                    <h3 class="faq-question">What happens if I exceed my guest limit?</h3>
                    <p class="faq-answer">We'll notify you when you're approaching your limit. You can upgrade your plan or pay a small per-guest fee for additional attendees.</p>
                </div>
                
                <div class="faq-item">
                    <h3 class="faq-question">Is there a free trial?</h3>
                    <p class="faq-answer">Absolutely! All plans come with a 14-day free trial. No credit card required to start.</p>
                </div>
                
                <div class="faq-item">
                    <h3 class="faq-question">What payment methods do you accept?</h3>
                    <p class="faq-answer">We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for Enterprise customers.</p>
                </div>
                
                <div class="faq-item">
                    <h3 class="faq-question">Can I cancel anytime?</h3>
                    <p class="faq-answer">Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees.</p>
                </div>
                
                <div class="faq-item">
                    <h3 class="faq-question">Do you offer discounts for nonprofits?</h3>
                    <p class="faq-answer">Yes! We offer 25% off for registered nonprofit organizations. Contact our sales team to learn more.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of event planners who trust Peppu for their guest management</p>
            <div class="cta-buttons">
                <a href="/signup" class="btn btn-primary">Start Free Trial</a>
                <a href="/contact" class="btn btn-secondary">Talk to Sales</a>
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
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'PricingView',
    components: { NavBar },
    data() {
        return {
            billingCycle: 'monthly'
        };
    },
    methods: {
        toggleBilling() {
            this.billingCycle = this.billingCycle === 'monthly' ? 'annual' : 'monthly';
        }
    }
}
</script>

<style scoped>
:root {
    --primary-gold: hsl(180, 65%, 45%);
    --deep-gold: hsl(180, 70%, 35%);
    --cream: hsl(45, 30%, 96%);
    --text: hsl(240, 20%, 15%);
    --text-light: hsl(240, 10%, 45%);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, var(--primary-gold) 0%, var(--deep-gold) 100%);
    color: white;
    padding: 100px 20px 80px;
    text-align: center;
    position: relative;
    overflow: hidden;
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
    z-index: 0;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.page-title {
    font-size: 3em;
    font-weight: 800;
    margin-bottom: 20px;
    color: white;
    text-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.tagline {
    font-size: 1.3em;
    opacity: 0.95;
    font-weight: 300;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 1.1em;
    opacity: 0.85;
    margin-bottom: 40px;
}

/* Billing Toggle */
.billing-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 40px;
    font-size: 1.1em;
}

.billing-toggle span {
    opacity: 0.7;
    transition: all 0.3s ease;
    font-weight: 500;
}

.billing-toggle span.active {
    opacity: 1;
    font-weight: 600;
}

.toggle-switch {
    width: 60px;
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    border-radius: 50px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
}

.toggle-switch:hover {
    background: rgba(255, 255, 255, 0.3);
}

.toggle-slider {
    position: absolute;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: all 0.3s ease;
}

.toggle-slider.annual {
    left: 30px;
}

.save-badge {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.85em;
    margin-left: 8px;
    font-weight: 600;
}

/* Container */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 1;
}

.section-title {
    text-align: center;
    font-size: 2.8em;
    margin-bottom: 20px;
    background: linear-gradient(135deg, var(--primary-gold) 0%, var(--deep-gold) 100%);
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
}

/* Pricing Section */
.pricing-section {
    padding: 80px 20px;
    background: white;
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

.pricing-card {
    background: white;
    border-radius: 24px;
    padding: 40px 35px;
    border: 2px solid hsl(0, 0%, 90%);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: all 0.4s ease;
    position: relative;
}

.pricing-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    border-color: var(--primary-gold);
}

.pricing-card.popular {
    border-color: var(--primary-gold);
    border-width: 3px;
    box-shadow: 0 20px 60px rgba(0, 180, 180, 0.2);
    transform: scale(1.05);
}

.pricing-card.popular:hover {
    transform: scale(1.05) translateY(-10px);
}

.popular-badge {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, var(--primary-gold) 0%, var(--deep-gold) 100%);
    color: white;
    padding: 8px 24px;
    border-radius: 50px;
    font-size: 0.9em;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(0, 180, 180, 0.4);
}

.plan-header {
    margin-bottom: 25px;
}

.plan-name {
    font-size: 1.8em;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--text);
}

.plan-description {
    color: var(--text-light);
    font-size: 1.05em;
    line-height: 1.5;
}

.plan-price {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin-bottom: 10px;
}

.currency {
    font-size: 1.5em;
    color: var(--text-light);
    margin-right: 5px;
}

.amount {
    font-size: 3.5em;
    font-weight: 800;
    background: linear-gradient(135deg, var(--primary-gold) 0%, var(--deep-gold) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.amount.custom {
    font-size: 2.5em;
}

.period {
    font-size: 1.2em;
    color: var(--text-light);
    margin-left: 5px;
}

.billing-note {
    text-align: center;
    color: var(--text-light);
    font-size: 0.95em;
    margin-bottom: 30px;
    min-height: 20px;
}

.plan-features {
    list-style: none;
    margin-bottom: 35px;
}

.plan-features li {
    padding: 12px 0;
    color: var(--text);
    font-size: 1.05em;
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid hsl(0, 0%, 95%);
}

.plan-features li:last-child {
    border-bottom: none;
}

.check {
    color: var(--primary-gold);
    font-weight: bold;
    font-size: 1.2em;
    flex-shrink: 0;
}

.btn {
    width: 100%;
    padding: 16px 40px;
    border: none;
    border-radius: 50px;
    font-size: 1.1em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    text-align: center;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary-gold) 0%, var(--deep-gold) 100%);
    color: white;
    box-shadow: 0 10px 30px rgba(0, 180, 180, 0.3);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 180, 180, 0.4);
}

.btn-secondary {
    background: white;
    color: var(--primary-gold);
    border: 2px solid var(--primary-gold);
}

.btn-secondary:hover {
    background: var(--cream);
    transform: translateY(-3px);
}

/* Comparison Table */
.comparison-section {
    padding: 80px 20px;
    background: var(--cream);
}

.comparison-table-wrapper {
    overflow-x: auto;
    margin-top: 40px;
}

.comparison-table {
    width: 100%;
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.comparison-table thead {
    background: linear-gradient(135deg, var(--primary-gold) 0%, var(--deep-gold) 100%);
    color: white;
}

.comparison-table th {
    padding: 20px;
    font-size: 1.1em;
    font-weight: 600;
    text-align: center;
}

.comparison-table th.feature-column {
    text-align: left;
}

.comparison-table td {
    padding: 18px 20px;
    text-align: center;
    border-bottom: 1px solid hsl(0, 0%, 95%);
    font-size: 1.05em;
}

.comparison-table td.feature-name {
    text-align: left;
    font-weight: 500;
    color: var(--text);
}

.comparison-table tr:hover {
    background: var(--cream)
}

.popular-column {
    background: #e1c979;
    font-weight: 600;
}

/* FAQ Section */
.faq-section {
    padding: 80px 20px;
    background: white;
}

.faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.faq-item {
    background: hsl(240, 20%, 99%);
    padding: 30px;
    border-radius: 20px;
    border-left: 4px solid var(--primary-gold);
    transition: all 0.3s ease;
}

.faq-item:hover {
    background: hsl(280, 70%, 98%);
    transform: translateX(5px);
}

.faq-question {
    font-size: 1.2em;
    margin-bottom: 12px;
    color: var(--text);
}

.faq-answer {
    color: var(--text-light);
    font-size: 1.05em;
    line-height: 1.6;
}

/* CTA Section */
.cta-section {
    padding: 100px 20px;
    background: linear-gradient(135deg, var(--primary-gold) 0%, var(--deep-gold) 100%);
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
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.3;
    z-index: 0;
}

.cta-section .container {
    position: relative;
    z-index: 1;
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

.cta-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

.cta-section .btn-primary {
    background: white;
    color: var(--primary-gold);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.cta-section .btn-primary:hover {
    background: hsl(0, 0%, 98%);
}

.cta-section .btn-secondary {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 2px solid white;
    backdrop-filter: blur(10px);
}

.cta-section .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.25);
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

/* Responsive */
@media (max-width: 768px) {
    .page-title {
        font-size: 2em;
    }

    .tagline {
        font-size: 1.1em;
    }

    .section-title {
        font-size: 2em;
    }

    .pricing-grid {
        grid-template-columns: 1fr;
    }

    .pricing-card.popular {
        transform: scale(1);
    }

    .pricing-card.popular:hover {
        transform: scale(1) translateY(-10px);
    }

    .comparison-table {
        font-size: 0.9em;
    }

    .comparison-table th,
    .comparison-table td {
        padding: 12px 10px;
    }

    .billing-toggle {
        font-size: 1em;
    }

    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }

    .btn {
        width: 100%;
        max-width: 300px;
    }
}
</style>