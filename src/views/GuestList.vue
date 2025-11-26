<template>
    <div id="app" class="container-main">
        <div class="card">
            <div class="card-header">
                <h1 class="card-title">📋 Guest List Manager</h1>
            </div>
            <div class="card-body">

                <!-- Import Section -->
                <div class="btn-group-import mb-4">
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            + Import Guest List
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" @click="openSingleModal">Add Single Guest</a></li>
                            <li><a class="dropdown-item" @click="openMultipleModal">Add Multiple Guests</a></li>
                        </ul>
                    </div>
                </div>

                <!-- Success Alert -->
                <div v-if="successMessage" class="alert alert-info alert-dismissible fade show" role="alert">
                    {{ successMessage }}
                    <button type="button" class="btn-close" @click="successMessage = ''" aria-label="Close"></button>
                </div>

                <!-- Guest Table -->
                <div v-if="guests.length" class="table-container">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th style="width:3%">#</th>
                                <th style="width:35%">Name</th>
                                <th style="width:22%">Email</th>
                                <th style="width:20%">Number</th>
                                <th style="width:20%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(guest, index) in guests" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ guest.name }}</td>
                                <td>{{ guest.email }}</td>
                                <td>{{ guest.number }}</td>
                                <td>
                                    <button class="btn-delete" @click="deleteGuest(index)">Delete</button>
                                    <button class="btn-invite" @click="deleteGuest(index)">Invite</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Empty State -->
                <div v-else class="empty-state">
                    <div class="empty-state-icon">👥</div>
                    <p>No guests added yet. Click "Import Guest List" to get started!</p>
                </div>

            </div>
        </div>

        <!-- Single Guest Modal -->
        <div class="modal fade" id="singleGuestModal" tabindex="-1" ref="singleModal" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Single Guest</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Name *</label>
                            <input v-model="singleGuest.name" type="text" class="form-control"
                                placeholder="Enter guest name">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email *</label>
                            <input v-model="singleGuest.email" type="email" class="form-control"
                                placeholder="Enter guest email">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Phone Number *</label>
                            <input v-model="singleGuest.number" type="tel" class="form-control"
                                placeholder="Enter guest phone">
                        </div>
                        <div class="d-flex gap-2">
                            <button type="button" class="btn btn-success flex-grow-1" @click="addSingleGuest">Add
                                Guest</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Multiple Guests Modal -->
        <div class="modal fade" id="multipleGuestsModal" tabindex="-1" ref="multipleModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Multiple Guests</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="text-muted mb-3">Enter guest details in CSV format (Name, Email, Phone Number). One guest
                            per line.</p>
                        <div class="mb-3">
                            <label class="form-label">Guest List (CSV Format) *</label>
                            <textarea v-model="multipleGuestsText" class="form-control" rows="8"
                                placeholder="John Doe,john@example.com,1234567890&#10;Jane Smith,jane@example.com,0987654321"></textarea>
                            <small class="text-muted">Format: Name, Email, Phone Number</small>
                        </div>
                        <div class="d-flex gap-2">
                            <button type="button" class="btn btn-success flex-grow-1" @click="addMultipleGuests">Add
                                Guests</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
const { ref } = 'vue'; // <-- onMounted added
export default {
    name: 'guest',
    data() {
        return {
            guests: [],
            successMessage: '',
            singleGuest: { name: '', email: '', number: '' },
            multipleGuestsText: '',
            singleModal: null,
            multipleModal: null,

            // Bootstrap modal instances
            singleModalInstance: null,
            multipleModalInstance: null
        }
    },
    methods: {
        openSingleModal() {
            this.singleGuest = { name: '', email: '', number: '' };
            this.singleModalInstance.show();
        },
        openMultipleModal() {
            // this.multipleGuestsText = '';
            if (this.multipleModalInstance) this.multipleModalInstance.show();
        },
        addSingleGuest() {
            const { name, email, number } = this.singleGuest;
            if (!name || !email || !number) {
                alert('Please fill in all fields');
                return;
            }
            this.guests.push({ name, email, number });
            if (this.singleModalInstance) this.singleModalInstance.hide();
            this.showSuccess(1);
        },
        addMultipleGuests() {
            const lines = this.multipleGuestsText.trim().split('\n').filter(l => l.trim());
            let added = 0;
            lines.forEach(line => {
                const parts = line.split(',').map(p => p.trim());
                if (parts.length === 3 && parts[0] && parts[1] && parts[2]) {
                    this.guests.push({ name: parts[0], email: parts[1], number: parts[2] });
                    added++;
                }
            });
            if (added > 0) {
                if (this.multipleModalInstance) this.multipleModalInstance.hide();
                this.showSuccess(added);
            } else {
                alert('No valid guests found. Please check the format.');
            }
        },
        deleteGuest(index) {
            if (confirm('Are you sure you want to delete this guest?')) {
                this.guests.splice(index, 1);
            }
        },
        showSuccess(count) {
            this.successMessage = `✓ Successfully added ${count} guest(s)`;
            setTimeout(() => this.successMessage = '', 4000);
        },

    },
    mounted() {
    const singleModalEl = document.getElementById('singleGuestModal');
    const multipleModalEl = document.getElementById('multipleGuestsModal');

    if (singleModalEl) {
        this.singleModalInstance = new bootstrap.Modal(singleModalEl);
    }

    if (multipleModalEl) {
        this.multipleModalInstance = new bootstrap.Modal(multipleModalEl);
    }
},

}
</script>

<style scoped>
.container-main {
    max-width: 1200px;
    margin: 0 auto;
}

.card {
    border: none;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    overflow: hidden;
}

.card-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 25px;
    border: none;
}

.card-title {
    margin: 0;
    font-size: 28px;
    font-weight: 600;
}

.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.dropdown-menu {
    border-radius: 8px;
    border: none;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.dropdown-item:hover {
    background-color: #f8f9fa;
    color: #667eea;
}

.form-control:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

.table thead {
    background-color: #f8f9fa;
    border-bottom: 2px solid #e0e0e0;
}

.table th {
    color: #667eea;
    font-weight: 600;
}

.btn-delete {
    background-color: #ff6b6b;
    border: none;
    color: white;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
}

.btn-delete:hover {
    background-color: #ff5252;
    transform: scale(1.05);
}

.btn-invite {
    background-color: #764ba2;
    border: none;
    color: white;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    margin: 2px
}

.empty-state {
    text-align: center;
    padding: 40px 20px;
    color: #999;
}

.empty-state-icon {
    font-size: 48px;
    margin-bottom: 15px;
    opacity: 0.5;
}

.btn-success {
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    border: none;
}

.btn-success:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(17, 153, 142, 0.4);
}
</style>