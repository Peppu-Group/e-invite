<template>
    <div>
        <NavBar :showAvatar="true"/>

        <!-- Main Content -->
        <div class="container">
            <!-- Page Header -->
            <div class="page-header">
                <h1 class="page-title">Welcome back, {{ userName }}!</h1>
                <p class="page-subtitle">Manage your events and track their performance</p>
            </div>

            <!-- Create Event CTA -->
            <div class="cta-section">
                <div class="cta-content">
                    <h2>🎉 Ready to create something amazing?</h2>
                    <p>Start planning your next unforgettable event in just a few clicks</p>
                </div>
                <button class="btn-create" @click="createNewEvent">+ Create New Event</button>
            </div>

            <!-- Events Section -->
            <div class="section-header">
                <h2 class="section-title">Your Events</h2>
                <div class="filter-tabs">
                    <button class="filter-tab" :class="{ active: activeFilter === 'all' }" @click="activeFilter = 'all'">All
                        Events</button>
                    <button class="filter-tab" :class="{ active: activeFilter === 'published' }"
                        @click="activeFilter = 'upcoming'">Published</button>
                    <button class="filter-tab" :class="{ active: activeFilter === 'draft' }"
                        @click="activeFilter = 'draft'">Drafts</button>
                    <button class="filter-tab" :class="{ active: activeFilter === 'past' }"
                        @click="activeFilter = 'past'">Past</button>
                </div>
            </div>

            <!-- Events Grid -->
            <div class="events-grid" v-if="filteredEvents.length > 0">
                <div class="event-card" v-for="event in filteredEvents" :key="event.id"
                    @click="openEvent(event.id, event.status)">
                    <div class="event-content">
                        <div class="event-header">
                            <div>
                                <h3 class="event-title">{{ event.title }}</h3>
                            </div>
                            <span class="event-status" :class="'status-' + event.status">
                                {{ event.status }}
                            </span>
                        </div>
                        <div class="event-date">
                            <span>📅</span>
                            <span>{{ event.date }}</span>
                        </div>
                        <div class="event-stats">
                            <div class="stat">
                                <div class="stat-value">{{ event.attendees }}</div>
                                <div class="stat-label">Attendees</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">{{ event.views }}</div>
                                <div class="stat-label">Views</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">{{ event.responses }}</div>
                                <div class="stat-label">Responses</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Empty State -->
            <div class="empty-state" v-else>
                <div class="empty-icon">📭</div>
                <h3 class="empty-title">No events found</h3>
                <p class="empty-text">Try adjusting your filters or create a new event to get started</p>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
    name: 'Dashboard',
    data() {
        return {
            userName: 'Sarah',
            userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
            mobileMenuOpen: false,
            activeFilter: 'all',
            events: []
        };
    },
    components: {NavBar},
    computed: {
        filteredEvents() {
            if (this.activeFilter === 'all') {
                return this.events;
            }
            return this.events.filter(event => event.status === this.activeFilter);
        }
    },
    mounted() {
        this.events = JSON.parse(localStorage.getItem('eventList'));
    },
    methods: {
        createNewEvent() {
            alert('Create new event clicked! This would open the event creation flow.');
        },
        openEvent(eventId, eventStatus) {
            // if event is draft, open up event.html. else, open the preview page for the evnt.
            if (eventStatus == 'draft') {
                this.$router.push({ path: `/event/${eventId}` });
            } else {
                alert(`This should take you to the preview page of event ${eventId}.`);
            }
        }
    }
}
</script>

<style scoped>

/* Main Content */
.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px;
}

.page-header {
    margin-bottom: 40px;
}

.page-title {
    font-size: 36px;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 8px;
}

.page-subtitle {
    font-size: 16px;
    color: #718096;
}

/* Create Event CTA */
.cta-section {
    background: linear-gradient(135deg, var(--primary-gold) 0%, var(--deep-gold) 100%);
    border-radius: 16px;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    color: white;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.cta-content h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 8px;
}

.cta-content p {
    font-size: 16px;
    opacity: 0.9;
}

.btn-create {
    background: white;
    color: var(--primary-gold);
    padding: 14px 32px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.btn-create:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Events Grid */
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}

.section-title {
    font-size: 24px;
    font-weight: 600;
    color: #1a202c;
}

.filter-tabs {
    display: flex;
    gap: 8px;
}

.filter-tab {
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background: white;
    color: #4a5568;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
}

.filter-tab:hover {
    border-color: #cbd5e0;
}

.filter-tab.active {
    background: var(--primary-gold);
    color: white;
    border-color: var(--primary-gold);
}

.events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
}

.event-card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid #e2e8f0;
    transition: all 0.3s;
    cursor: pointer;
}

.event-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    border-color: #cbd5e0;
}

.event-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    background: linear-gradient(135deg, var(--primary-gold) 0%, var(--deep-gold) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 48px;
}

.event-content {
    padding: 24px;
}

.event-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 12px;
}

.event-title {
    font-size: 20px;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 4px;
}

.event-status {
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
}

.status-published {
    background: #d1fae5;
    color: #065f46;
}

.status-draft {
    background: #fef3c7;
    color: #92400e;
}

.status-upcoming {
    background: #dbeafe;
    color: #1e40af;
}

.event-date {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #718096;
    font-size: 14px;
    margin-bottom: 12px;
}

.event-stats {
    display: flex;
    gap: 20px;
    padding-top: 16px;
    border-top: 1px solid #f7fafc;
}

.stat {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.stat-value {
    font-size: 20px;
    font-weight: 700;
    color: #1a202c;
}

.stat-label {
    font-size: 12px;
    color: #718096;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.empty-state {
    text-align: center;
    padding: 80px 20px;
}

.empty-icon {
    font-size: 64px;
    margin-bottom: 16px;
    opacity: 0.5;
}

.empty-title {
    font-size: 24px;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 8px;
}

.empty-text {
    font-size: 16px;
    color: #718096;
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

    .container {
        padding: 20px;
    }

    .page-title {
        font-size: 28px;
    }

    .cta-section {
        flex-direction: column;
        text-align: center;
        gap: 24px;
        padding: 30px 24px;
    }

    .cta-content h2 {
        font-size: 24px;
    }

    .cta-content p {
        font-size: 15px;
    }

    .section-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }

    .filter-tabs {
        width: 100%;
        overflow-x: auto;
        padding-bottom: 8px;
    }

    .filter-tab {
        white-space: nowrap;
    }

    .events-grid {
        grid-template-columns: 1fr;
    }

    .event-image {
        height: 180px;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 24px;
    }

    .cta-section {
        padding: 24px 20px;
    }

    .cta-content h2 {
        font-size: 20px;
    }

    .btn-create {
        padding: 12px 24px;
        font-size: 15px;
    }

    .event-content {
        padding: 20px;
    }

    .event-title {
        font-size: 18px;
    }
}
</style>