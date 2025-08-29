// Global variables
        let activeSection = 'dashboard';
        let charts = {};

        // Navigation
        function switchSection(section) {
            // Hide all sections
            document.querySelectorAll('.content-section').forEach(sec => {
                sec.classList.remove('active');
            });
            
            // Remove active class from nav items
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(section + '-section').classList.add('active');
            
            // Add active class to clicked nav item
            event.target.closest('.nav-item').classList.add('active');
            
            activeSection = section;
            
            // Initialize charts for the section if needed
            if (section === 'dashboard') {
                setTimeout(initDashboardCharts, 100);
            } else if (section === 'agents') {
                setTimeout(initAgentCharts, 100);
            } else if (section === 'history') {
                setTimeout(initHistoryCharts, 100);
            }
        }

        // Modal functions
        function openModal(modalId) {
            document.getElementById(modalId).classList.add('active');
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }

        // Toast notification
        function showToast(message, type = 'success') {
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toastMessage');
            
            toastMessage.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Initialize Dashboard Charts
        function initDashboardCharts() {
            // Daily Performance Chart
            const dailyCtx = document.getElementById('dailyChart');
            if (dailyCtx && !charts.daily) {
                charts.daily = new Chart(dailyCtx, {
                    type: 'line',
                    data: {
                        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
                        datasets: [{
                            label: 'Llamadas',
                            data: [156, 189, 178, 221, 198, 145, 167],
                            borderColor: '#3B82F6',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            tension: 0.4
                        }, {
                            label: 'Conversiones',
                            data: [28, 35, 32, 41, 38, 27, 31],
                            borderColor: '#10B981',
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            tension: 0.4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                labels: { color: 'white' }
                            }
                        },
                        scales: {
                            y: {
                                ticks: { color: 'white' },
                                grid: { color: 'rgba(255,255,255,0.1)' }
                            },
                            x: {
                                ticks: { color: 'white' },
                                grid: { color: 'rgba(255,255,255,0.1)' }
                            }
                        }
                    }
                });
            }

            // Comparison Chart
            const compCtx = document.getElementById('comparisonChart');
            if (compCtx && !charts.comparison) {
                charts.comparison = new Chart(compCtx, {
                    type: 'doughnut',
                    data: {
                        labels: ['IA - Eficiencia', 'IA - Costo', 'Humano - Eficiencia', 'Humano - Costo'],
                        datasets: [{
                            data: [85, 15, 60, 40],
                            backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444']
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                labels: { color: 'white' }
                            }
                        }
                    }
                });
            }
        }

        // Initialize Agent Charts
        function initAgentCharts() {
            const agentCtx = document.getElementById('agentPerformanceChart');
            if (agentCtx && !charts.agentPerformance) {
                charts.agentPerformance = new Chart(agentCtx, {
                    type: 'bar',
                    data: {
                        labels: ['Luis', 'Ana', 'Miguel'],
                        datasets: [{
                            label: 'Llamadas',
                            data: [47, 52, 31],
                            backgroundColor: '#3B82F6'
                        }, {
                            label: 'Conversiones',
                            data: [12, 18, 8],
                            backgroundColor: '#10B981'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                labels: { color: 'white' }
                            }
                        },
                        scales: {
                            y: {
                                ticks: { color: 'white' },
                                grid: { color: 'rgba(255,255,255,0.1)' }
                            },
                            x: {
                                ticks: { color: 'white' },
                                grid: { color: 'rgba(255,255,255,0.1)' }
                            }
                        }
                    }
                });
            }
        }

        // Initialize History Charts
        function initHistoryCharts() {
            const histCtx = document.getElementById('historicalChart');
            if (histCtx && !charts.historical) {
                charts.historical = new Chart(histCtx, {
                    type: 'line',
                    data: {
                        labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
                        datasets: [{
                            label: 'Tasa de Conversión (%)',
                            data: [18.2, 19.5, 21.3, 24.7],
                            borderColor: '#8B5CF6',
                            backgroundColor: 'rgba(139, 92, 246, 0.1)',
                            tension: 0.4
                        }, {
                            label: 'Satisfacción (/5)',
                            data: [4.2, 4.4, 4.5, 4.6],
                            borderColor: '#F59E0B',
                            backgroundColor: 'rgba(245, 158, 11, 0.1)',
                            tension: 0.4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                labels: { color: 'white' }
                            }
                        },
                        scales: {
                            y: {
                                ticks: { color: 'white' },
                                grid: { color: 'rgba(255,255,255,0.1)' }
                            },
                            x: {
                                ticks: { color: 'white' },
                                grid: { color: 'rgba(255,255,255,0.1)' }
                            }
                        }
                    }
                });
            }
        }

        // Real-time data simulation
        function updateMetrics() {
            const metrics = {
                activeCalls: document.getElementById('activeCalls'),
                leadsToday: document.getElementById('leadsToday'),
                conversionRate: document.getElementById('conversionRate'),
                estimatedRevenue: document.getElementById('estimatedRevenue')
            };

            // Simulate real-time updates
            setInterval(() => {
                if (metrics.activeCalls) {
                    const currentCalls = parseInt(metrics.activeCalls.textContent);
                    const variation = Math.floor(Math.random() * 6) - 3; // -3 to +3
                    const newValue = Math.max(0, currentCalls + variation);
                    metrics.activeCalls.textContent = newValue;
                }

                if (metrics.leadsToday) {
                    const currentLeads = parseInt(metrics.leadsToday.textContent);
                    if (Math.random() < 0.3) { // 30% chance to increment
                        metrics.leadsToday.textContent = currentLeads + 1;
                    }
                }
            }, 5000);
        }

        // File upload simulation
        function initFileUpload() {
            const dragZone = document.querySelector('.drag-zone');
            const fileInput = document.getElementById('fileInput');

            if (dragZone) {
                dragZone.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    dragZone.classList.add('dragover');
                });

                dragZone.addEventListener('dragleave', () => {
                    dragZone.classList.remove('dragover');
                });

                dragZone.addEventListener('drop', (e) => {
                    e.preventDefault();
                    dragZone.classList.remove('dragover');
                    
                    const files = e.dataTransfer.files;
                    if (files.length > 0) {
                        showToast(`${files.length} archivo(s) cargado(s) exitosamente`);
                        setTimeout(() => {
                            // Simulate adding new clients to table
                            addSampleClient();
                        }, 1000);
                    }
                });
            }

            if (fileInput) {
                fileInput.addEventListener('change', (e) => {
                    if (e.target.files.length > 0) {
                        showToast(`${e.target.files.length} archivo(s) seleccionado(s)`);
                        setTimeout(() => {
                            addSampleClient();
                        }, 1000);
                    }
                });
            }
        }

        // Add sample client to table
        function addSampleClient() {
            const tableBody = document.getElementById('clientsTableBody');
            if (tableBody) {
                const sampleClients = [
                    {
                        name: 'Pedro Jiménez',
                        company: 'StartupXYZ',
                        phone: '+57 315 123 4567',
                        email: 'pedro@startupxyz.com',
                        industry: 'Tecnología',
                        status: 'lead-warm'
                    },
                    {
                        name: 'Sofia Castro',
                        company: 'MedTech Solutions',
                        phone: '+57 304 987 6543',
                        email: 'sofia@medtech.com',
                        industry: 'Salud',
                        status: 'lead-hot'
                    }
                ];

                const randomClient = sampleClients[Math.floor(Math.random() * sampleClients.length)];
                const statusLabel = randomClient.status === 'lead-hot' ? 'Caliente' : 'Tibio';

                const newRow = document.createElement('div');
                newRow.className = 'table-row grid grid-cols-7 gap-4 items-center';
                newRow.innerHTML = `
                    <div class="font-medium">${randomClient.name}</div>
                    <div>${randomClient.company}</div>
                    <div>${randomClient.phone}</div>
                    <div class="text-blue-400">${randomClient.email}</div>
                    <div>${randomClient.industry}</div>
                    <div><span class="status-badge ${randomClient.status}">${statusLabel}</span></div>
                    <div class="flex gap-2">
                        <button class="text-blue-400 hover:text-blue-300"><i class="fas fa-edit"></i></button>
                        <button class="text-red-400 hover:text-red-300"><i class="fas fa-trash"></i></button>
                    </div>
                `;

                tableBody.appendChild(newRow);
                newRow.style.animation = 'slideIn 0.5s ease';
            }
        }

        // Form submissions
        document.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (e.target.closest('#newClientModal')) {
                showToast('Cliente creado exitosamente');
                closeModal('newClientModal');
                setTimeout(addSampleClient, 500);
            } else if (e.target.closest('#newAgentModal')) {
                showToast('Agente creado exitosamente');
                closeModal('newAgentModal');
            } else if (e.target.closest('#newUserModal')) {
                showToast('Usuario creado exitosamente');
                closeModal('newUserModal');
            }
        });

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            initDashboardCharts();
            updateMetrics();
            initFileUpload();
            
            // Close modals when clicking outside
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('modal')) {
                    e.target.classList.remove('active');
                }
            });
        });

        // Mobile menu toggle (for responsive)
        function toggleMobileMenu() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.toggle('open');
        }

        // Audio player simulation
        document.addEventListener('click', function(e) {
            if (e.target.closest('.play-btn')) {
                const btn = e.target.closest('.play-btn');
                const icon = btn.querySelector('i');
                
                if (icon.classList.contains('fa-play')) {
                    icon.classList.remove('fa-play');
                    icon.classList.add('fa-pause');
                    showToast('Reproduciendo audio de llamada');
                } else {
                    icon.classList.remove('fa-pause');
                    icon.classList.add('fa-play');
                    showToast('Audio pausado');
                }
            }
        });