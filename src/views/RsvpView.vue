<template>
    <div id="app-rsvp">
        <div v-if="isLoading" class="loading-overlay">
            <div class="loading-content">
                <div class="loading-ring"></div>
                <h3>Loading Birthday RSVP...</h3>
                <p>Preparing something beautiful ✨</p>
            </div>
        </div>
        <div v-else class="invitation-card">
            <div v-if="person">
                <h1 class="couple-names"> {{ person.name }} </h1>

                <div class="decorative-line"></div>

                <p class="invitation-text">You are invited to Ebubedikeh's birthday</p>

                <p class="question">Will you be attending?</p>

                <button class="rsvp-button" @click="submitRSVP">
                    I will be there
                </button>
                <button class="non-rsvp-button" @click="submitNoRSVP">
                    No
                </button>

                <p class="under-text">Kindly note that you need to RSVP by 15th of October at the latest.</p>
            </div>
            <!-- Access Denied Screen -->
            <div v-else class="access-denied-container">
                <div class="denied-card">
                    <div class="denied-header">
                        <div class="denied-icon">🚫</div>
                        <h2>Access Restricted</h2>
                    </div>

                    <div class="denied-content">
                        <div class="denied-message">
                            <h3>We're Sorry</h3>
                            <p>Your name is not found in our Event guest registry.</p>
                            <p>This invitation is exclusive to our invited guests only.</p>
                        </div>

                        <div class="denied-decoration">
                            <div class="denied-ornament">❀</div>
                            <div class="denied-line"></div>
                            <div class="denied-ornament">❀</div>
                        </div>

                        <div class="contact-info">
                            <p><strong>Questions about your invitation?</strong></p>
                            <p>Please contact our wedding coordinator:</p>
                            <p class="contact-details">EventLord Events<br>+2348101111091</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import supabase from '../supabase'

export default {
    name: 'RsvpView',
    data() {
        return {
            isLoading: true,
            person: null,
            guestCount: '1'
        };
    },
    async created() {
        const { data, error } = await supabase
            .from('people')
            .select('*');

        if (error) {
            console.error('Error fetching crew:', error.message);
            return [];
        }

        const id = this.$route.params.id;
        this.person = data.find(p => p.id === id);
        this.guestCount = this.person.guest;
    },
    mounted() {
        // Simulate loading
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);

    },
    methods: {
        async submitRSVP() {
            // Update in Supabase
            const { data, error } = await supabase
                .from('people')
                .update({ 'guest': 1 })
                .eq('id', this.person.id)

            if (error) {
                Swal.fire('Error', `We could not update your list ${error}`, 'error')
                return;
            } else {
                Swal.fire(
                    'Thank you for your RSVP',
                    `We have you down for this event`,
                    'success'
                );
                // go to gift page.
                this.$router.push({ path: `/gift` });
            }
        },

        async submitNoRSVP() {
            // Update in Supabase
            const { data, error } = await supabase
                .from('people')
                .update({ 'guest': null })
                .eq('id', this.person.id)

            if (error) {
                Swal.fire('Error', `We could not update your list ${error}`, 'error')
                return;
            } else {
                Swal.fire(
                    'Thank you for letting us know',
                    `We look forward to having you in another event`,
                    'success'
                );
                // go to gift page.
                this.$router.push({ path: `/gift` });
            }
        }
    }
}
</script>

<style scoped>
#app-rsvp {
    font-family: 'Georgia', serif;
    background: linear-gradient(135deg, var(--cream) 0%, #f8f1dc 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.under-text {
    font-style: italic;
    font-size: 12px;
    margin-top: 10px;
}

.invitation-card {
    background: var(--white);
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(44, 44, 44, 0.15);
    padding: 60px 50px;
    max-width: 500px;
    width: 100%;
    text-align: center;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--primary-gold);
}

.invitation-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-gold), var(--deep-gold), var(--primary-gold));
}

.couple-names {
    font-size: 2.5rem;
    color: var(--charcoal);
    margin-bottom: 30px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 1.2;
}

.invitation-text {
    font-size: 1.2rem;
    color: var(--charcoal);
    margin-bottom: 40px;
    font-style: italic;
}

.question {
    font-size: 1.1rem;
    color: var(--charcoal);
    margin-bottom: 20px;
    font-weight: 500;
}

.guest-count-container {
    margin-bottom: 30px;
}

.guest-select {
    appearance: none;
    background: var(--white);
    border: 2px solid var(--primary-gold);
    border-radius: 8px;
    padding: 12px 40px 12px 20px;
    font-size: 1.1rem;
    color: var(--charcoal);
    cursor: pointer;
    position: relative;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23D4AF37' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 12px center;
    background-repeat: no-repeat;
    background-size: 16px;
    transition: all 0.3s ease;
}

.guest-select:hover {
    border-color: var(--deep-gold);
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
}

.guest-select:focus {
    outline: none;
    border-color: var(--deep-gold);
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

.rsvp-button {
    background: linear-gradient(135deg, var(--primary-gold), var(--deep-gold));
    color: var(--white);
    border: none;
    padding: 16px 40px;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
}

.non-rsvp-button {
    background: linear-gradient(135deg, var(--primary-color), var(--primary-color));
    color: var(--white);
    border: none;
    padding: 16px 40px;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-left: 10px;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
}

.rsvp-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
}

.rsvp-button:active {
    transform: translateY(0);
}

.decorative-line {
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary-gold), transparent);
    margin: 30px auto;
}

@media (max-width: 480px) {
    .invitation-card {
        padding: 40px 30px;
    }

    .couple-names {
        font-size: 2rem;
    }

    .invitation-text {
        font-size: 1.1rem;
    }
}
</style>