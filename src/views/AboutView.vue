<template>
    <!-- Navbar -->
    <NavBar :showAvatar="false"/>
    
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1 class="page-title">About Peppu E-Invite</h1>
            <p class="tagline">Transforming Event Management, One Invitation at a Time</p>
        </div>
    </section>

    <!-- Story Section -->
    <section class="story-section">
        <div class="container">
            <h2 class="section-title">Our Story</h2>
            <p class="section-subtitle">Born from the chaos of event planning, built for perfection</p>
            
            <div class="story-content">
                <p class="story-text">
                    Peppu E-Invite was created by event planners who experienced firsthand the frustration of managing guest lists through scattered spreadsheets, endless email chains, and last-minute chaos. We knew there had to be a better way.
                </p>
                <p class="story-text">
                    In 2023, we set out to build the solution we wished existed—a platform that brings together RSVP tracking, guest communication, check-in management, and seating arrangements in one beautiful, intuitive interface. Today, we're proud to help thousands of event planners create seamless, stress-free experiences.
                </p>
            </div>
        </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
        <div class="container">
            <div class="mission-grid">
                <div class="mission-card">
                    <div class="mission-icon">🎯</div>
                    <h3>Our Mission</h3>
                    <p>To empower event planners with tools that transform chaos into seamless experiences, making every event memorable for all the right reasons.</p>
                </div>
                
                <div class="mission-card">
                    <div class="mission-icon">💡</div>
                    <h3>Our Vision</h3>
                    <p>A world where event planning is effortless, where technology handles the logistics so you can focus on creating magical moments.</p>
                </div>
                
                <div class="mission-card">
                    <div class="mission-icon">❤️</div>
                    <h3>Our Values</h3>
                    <p>Simplicity, reliability, and empathy. We build with event planners in mind, listening to your needs and continuously improving.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
        <div class="container">
            <h2 class="section-title">Meet the Team</h2>
            <p class="section-subtitle">Passionate professionals dedicated to your success</p>
            
            <div class="team-grid">
                <div class="team-card">
                    <div class="team-avatar">👨‍💼</div>
                    <h3>David Chen</h3>
                    <p class="team-role">Founder & CEO</p>
                    <p class="team-bio">Former event planner with 10+ years of experience. Built Peppu to solve his own event management challenges.</p>
                </div>
                
                <div class="team-card">
                    <div class="team-avatar">👩‍💻</div>
                    <h3>Sarah Johnson</h3>
                    <p class="team-role">Head of Product</p>
                    <p class="team-bio">UX designer turned product leader. Obsessed with creating intuitive experiences that delight users.</p>
                </div>
                
                <div class="team-card">
                    <div class="team-avatar">👨‍🔧</div>
                    <h3>Michael Rodriguez</h3>
                    <p class="team-role">Lead Engineer</p>
                    <p class="team-bio">Full-stack wizard who ensures Peppu runs smoothly for thousands of events every day.</p>
                </div>
                
                <div class="team-card">
                    <div class="team-avatar">👩‍🎨</div>
                    <h3>Emily Park</h3>
                    <p class="team-role">Customer Success</p>
                    <p class="team-bio">Your advocate and guide. Dedicated to making sure every planner succeeds with Peppu.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
        <div class="container">
            <h2 class="section-title">Our Impact</h2>
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
                <div class="stat-card">
                    <div class="stat-number">24/7</div>
                    <div class="stat-label">Support Available</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
        <div class="container">
            <h2 class="section-title">What Drives Us</h2>
            <p class="section-subtitle">The principles that guide everything we do</p>
            
            <div class="values-list">
                <div class="value-item">
                    <div class="value-check">✓</div>
                    <div>
                        <h4>User-First Design</h4>
                        <p>Every feature is built with your needs in mind. We listen, iterate, and improve based on real planner feedback.</p>
                    </div>
                </div>
                
                <div class="value-item">
                    <div class="value-check">✓</div>
                    <div>
                        <h4>Reliability You Can Trust</h4>
                        <p>Your events are important. We maintain 99.9% uptime and ensure your data is always secure and accessible.</p>
                    </div>
                </div>
                
                <div class="value-item">
                    <div class="value-check">✓</div>
                    <div>
                        <h4>Continuous Innovation</h4>
                        <p>We never stop improving. New features, better performance, and smarter tools are always in development.</p>
                    </div>
                </div>
                
                <div class="value-item">
                    <div class="value-check">✓</div>
                    <div>
                        <h4>Transparent Communication</h4>
                        <p>No hidden fees, no surprises. We believe in honest, clear communication with our users.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <h2>Ready to Experience the Difference?</h2>
            <p>Join the community of event planners who trust Peppu for their most important events</p>
            <div class="cta-buttons">
                <a href="/dashboard" class="btn btn-primary">Start Your Free Trial</a>
                <a href="#" class="btn btn-secondary">Contact Our Team</a>
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
    name: 'AboutView',
    components: { NavBar }
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
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

/* Story Section */
.story-section {
    padding: 80px 20px;
    background: white;
}

.story-content {
    max-width: 800px;
    margin: 0 auto;
}

.story-text {
    font-size: 1.15em;
    line-height: 1.8;
    color: var(--text);
    margin-bottom: 25px;
    text-align: center;
}

/* Mission Section */
.mission-section {
    padding: 80px 20px;
    background: var(--cream);
}

.mission-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.mission-card {
    background: white;
    border-radius: 24px;
    padding: 40px 30px;
    text-align: center;
    transition: all 0.4s ease;
    border: 2px solid hsl(0, 0%, 92%);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.mission-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    border-color: var(--primary-gold);
}

.mission-icon {
    font-size: 3.5em;
    margin-bottom: 20px;
}

.mission-card h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
    color: var(--text);
}

.mission-card p {
    color: var(--text-light);
    font-size: 1.05em;
    line-height: 1.7;
}

/* Team Section */
.team-section {
    padding: 80px 20px;
    background: white;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.team-card {
    background: white;
    border-radius: 24px;
    padding: 40px 30px;
    text-align: center;
    transition: all 0.3s ease;
    border: 2px solid hsl(0, 0%, 92%);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.team-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    border-color: var(--primary-gold);
}

.team-avatar {
    width: 100px;
    height: 100px;
    margin: 0 auto 20px;
    background: linear-gradient(135deg, var(--primary-gold) 0%, var(--deep-gold) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3em;
    box-shadow: 0 10px 30px rgba(0, 180, 180, 0.25);
}

.team-card h3 {
    font-size: 1.4em;
    margin-bottom: 8px;
    color: var(--text);
}

.team-role {
    color: var(--primary-gold);
    font-weight: 600;
    margin-bottom: 15px;
    font-size: 1.05em;
}

.team-bio {
    color: var(--text-light);
    font-size: 1em;
    line-height: 1.6;
}

/* Stats Section */
.stats-section {
    padding: 80px 20px;
    background: linear-gradient(135deg, var(--cream) 0%, var(--cream) 100%);
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
    z-index: 0;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
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
    transition: all 0.4s ease;
}

.stat-card:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.25);
}

.stat-number {
    font-size: 3em;
    font-weight: 800;
    background: linear-gradient(135deg, var(--primary-gold) 0%, var(--deep-gold) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 10px;
}

.stat-label {
    font-size: 1.1em;
    color: var(--text-light);
    font-weight: 500;
}

/* Values Section */
.values-section {
    padding: 80px 20px;
    background: white;
}

.values-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 50px;
}

.value-item {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    padding: 25px;
    background: hsl(240, 20%, 99%);
    border-radius: 15px;
    border-left: 4px solid var(--primary-gold);
    transition: all 0.3s ease;
}

.value-item:hover {
    background: hsl(280, 70%, 98%);
    transform: translateX(5px);
}

.value-check {
    font-size: 1.8em;
    color: var(--primary-gold);
    flex-shrink: 0;
}

.value-item h4 {
    font-size: 1.2em;
    margin-bottom: 8px;
    color: var(--text);
}

.value-item p {
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
    color: var(--primary-gold);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 1;
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

    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }

    .btn {
        width: 100%;
        max-width: 300px;
    }

    .story-text {
        font-size: 1.05em;
    }
}
</style>