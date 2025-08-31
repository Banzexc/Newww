// Birthday Website Generator
document.addEventListener('DOMContentLoaded', function() {
    // Add submit button to form
    const form = document.querySelector('form');
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Buat Website Birthday! 🎉';
    submitBtn.id = 'generateBtn';
    form.appendChild(submitBtn);

    // Theme configurations
    const themes = {
        'sky night': {
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #000428 100%)',
            colors: {
                primary: '#ffd700',
                secondary: '#87ceeb',
                text: '#ffffff',
                accent: '#ff6b6b'
            },
            particles: '⭐✨🌙',
            bgImage: 'radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 2px, transparent 2px), radial-gradient(circle at 80% 20%, rgba(135, 206, 235, 0.1) 2px, transparent 2px)'
        },
        'pinky': {
            background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
            colors: {
                primary: '#ff69b4',
                secondary: '#ffb6c1',
                text: '#8b008b',
                accent: '#ff1493'
            },
            particles: '🌸💖🦄',
            bgImage: 'radial-gradient(circle at 25% 75%, rgba(255, 105, 180, 0.1) 2px, transparent 2px), radial-gradient(circle at 75% 25%, rgba(255, 182, 193, 0.1) 2px, transparent 2px)'
        },
        'ocean': {
            background: 'linear-gradient(135deg, #667db6 0%, #0082c8 50%, #667db6 100%)',
            colors: {
                primary: '#00bfff',
                secondary: '#87ceeb',
                text: '#ffffff',
                accent: '#1e90ff'
            },
            particles: '🌊🐠🐚',
            bgImage: 'radial-gradient(circle at 30% 70%, rgba(0, 191, 255, 0.1) 2px, transparent 2px), radial-gradient(circle at 70% 30%, rgba(135, 206, 235, 0.1) 2px, transparent 2px)'
        },
        'emoji': {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            colors: {
                primary: '#ffd700',
                secondary: '#ff69b4',
                text: '#ffffff',
                accent: '#00ff7f'
            },
            particles: '🎉🎈🎊',
            bgImage: 'radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 2px, transparent 2px), radial-gradient(circle at 80% 20%, rgba(255, 105, 180, 0.1) 2px, transparent 2px)'
        }
    };

    // Birthday messages
    const birthdayMessages = [
        "Selamat ulang tahun! Semoga semua impianmu terwujud! 🎉",
        "Happy Birthday! Semoga tahun ini penuh dengan kebahagiaan! 🎂",
        "Selamat bertambah usia! Semoga makin sukses dan bahagia! ✨",
        "Happy Birthday! Enjoy your special day! 🎈",
        "Selamat ulang tahun! Semoga panjang umur dan sehat selalu! 🌟"
    ];

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nama = document.getElementById('nama').value.trim();
        const tahun = document.getElementById('Tahun').value.trim();
        const selectElement = document.querySelector('select');
        const tema = selectElement.value;

        // Validation
        if (!nama) {
            alert('Masukan nama dulu dong! 😊');
            document.getElementById('nama').focus();
            return;
        }

        if (!tahun || isNaN(tahun) || tahun <= 0) {
            alert('Masukan tahun yang valid ya! 🎂');
            document.getElementById('Tahun').focus();
            return;
        }

        // Generate birthday page
        generateBirthdayPage(nama, tahun, tema);
    });

    function generateBirthdayPage(nama, tahun, tema) {
        const theme = themes[tema];
        const randomMessage = birthdayMessages[Math.floor(Math.random() * birthdayMessages.length)];
        
        // Create new birthday page content
        const birthdayHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Happy Birthday ${nama}!</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Arial', sans-serif;
                    background: ${theme.background};
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                    position: relative;
                    overflow: hidden;
                }

                body::before {
                    content: '';
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: ${theme.bgImage};
                    background-size: 100px 100px, 150px 150px;
                    animation: float 10s ease-in-out infinite;
                    pointer-events: none;
                    z-index: -1;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }

                .birthday-container {
                    text-align: center;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(20px);
                    border-radius: 30px;
                    padding: 50px;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    animation: zoomIn 1.5s ease-out;
                    max-width: 800px;
                    position: relative;
                }

                @keyframes zoomIn {
                    0% {
                        transform: scale(0.5);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                .birthday-title {
                    font-size: 3.5rem;
                    color: ${theme.colors.primary};
                    margin-bottom: 20px;
                    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
                    animation: glow 2s ease-in-out infinite alternate;
                    font-weight: bold;
                }

                @keyframes glow {
                    0% { text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px ${theme.colors.primary}; }
                    100% { text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5), 0 0 40px ${theme.colors.primary}; }
                }

                .name {
                    font-size: 4rem;
                    color: ${theme.colors.text};
                    margin: 30px 0;
                    text-shadow: 3px 3px 15px rgba(0, 0, 0, 0.4);
                    animation: bounce 3s ease-in-out infinite;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                }

                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }

                .age {
                    font-size: 6rem;
                    color: ${theme.colors.accent};
                    margin: 20px 0;
                    text-shadow: 3px 3px 15px rgba(0, 0, 0, 0.4);
                    animation: pulse 2s ease-in-out infinite;
                    font-weight: bold;
                }

                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }

                .message {
                    font-size: 1.5rem;
                    color: ${theme.colors.text};
                    margin: 30px 0;
                    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
                    line-height: 1.6;
                }

                .particles {
                    position: absolute;
                    font-size: 2rem;
                    animation: fall 6s linear infinite;
                    pointer-events: none;
                }

                @keyframes fall {
                    0% {
                        transform: translateY(-100vh) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }

                .back-btn {
                    background: ${theme.colors.primary};
                    color: ${theme.colors.text};
                    border: none;
                    padding: 15px 30px;
                    border-radius: 25px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    margin-top: 30px;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: inline-block;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                }

                .back-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                    filter: brightness(1.1);
                }

                @media (max-width: 768px) {
                    .birthday-title { font-size: 2.5rem; }
                    .name { font-size: 3rem; }
                    .age { font-size: 4rem; }
                    .message { font-size: 1.2rem; }
                    .birthday-container { padding: 30px; }
                }
            </style>
        </head>
        <body>
            <div class="birthday-container">
                <h1 class="birthday-title">🎊 HAPPY BIRTHDAY 🎊</h1>
                <div class="name">${nama}</div>
                <div class="age">${tahun} TAHUN</div>
                <p class="message">${randomMessage}</p>
                <button class="back-btn" onclick="history.back()">← Kembali ke Generator</button>
            </div>

            <script>
                // Create falling particles animation
                function createParticle() {
                    const particles = '${theme.particles}'.split('');
                    const particle = document.createElement('div');
                    particle.className = 'particles';
                    particle.textContent = particles[Math.floor(Math.random() * particles.length)];
                    particle.style.left = Math.random() * 100 + 'vw';
                    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                    particle.style.animationDelay = Math.random() * 2 + 's';
                    document.body.appendChild(particle);

                    // Remove particle after animation
                    setTimeout(() => {
                        if (particle.parentNode) {
                            particle.parentNode.removeChild(particle);
                        }
                    }, 8000);
                }

                // Create particles continuously
                setInterval(createParticle, 300);

                // Add click celebration effect
                document.addEventListener('click', function(e) {
                    createCelebration(e.clientX, e.clientY);
                });

                function createCelebration(x, y) {
                    const celebration = document.createElement('div');
                    celebration.textContent = '🎉';
                    celebration.style.position = 'fixed';
                    celebration.style.left = x + 'px';
                    celebration.style.top = y + 'px';
                    celebration.style.fontSize = '2rem';
                    celebration.style.pointerEvents = 'none';
                    celebration.style.zIndex = '1000';
                    celebration.style.animation = 'celebrationPop 1s ease-out forwards';
                    document.body.appendChild(celebration);

                    setTimeout(() => {
                        if (celebration.parentNode) {
                            celebration.parentNode.removeChild(celebration);
                        }
                    }, 1000);
                }

                // Add celebration pop animation
                const style = document.createElement('style');
                style.textContent = \`
                    @keyframes celebrationPop {
                        0% {
                            transform: scale(0) rotate(0deg);
                            opacity: 1;
                        }
                        50% {
                            transform: scale(1.5) rotate(180deg);
                            opacity: 1;
                        }
                        100% {
                            transform: scale(0) rotate(360deg);
                            opacity: 0;
                        }
                    }
                \`;
                document.head.appendChild(style);

                // Age milestone messages
                const age = ${tahun};
                let milestoneMessage = '';
                
                if (age <= 12) {
                    milestoneMessage = 'Selamat ya adik! Semoga jadi anak yang baik! 🧸';
                } else if (age <= 17) {
                    milestoneMessage = 'Masa remaja yang menyenangkan! Keep shining! ✨';
                } else if (age <= 25) {
                    milestoneMessage = 'Young adult vibes! Semoga sukses di masa depan! 🚀';
                } else if (age <= 40) {
                    milestoneMessage = 'Prime time! Semoga karir dan keluarga makin cemerlang! 💼';
                } else if (age <= 60) {
                    milestoneMessage = 'Wisdom years! Pengalaman hidup yang berharga! 🌟';
                } else {
                    milestoneMessage = 'Golden years! Semoga sehat dan bahagia selalu! 👑';
                }

                // Add milestone message after 3 seconds
                setTimeout(() => {
                    const milestoneDiv = document.createElement('div');
                    milestoneDiv.className = 'message';
                    milestoneDiv.textContent = milestoneMessage;
                    milestoneDiv.style.animation = 'slideInFromRight 1s ease-out';
                    milestoneDiv.style.marginTop = '20px';
                    milestoneDiv.style.fontSize = '1.2rem';
                    milestoneDiv.style.fontStyle = 'italic';
                    
                    const container = document.querySelector('.birthday-container');
                    const backBtn = document.querySelector('.back-btn');
                    container.insertBefore(milestoneDiv, backBtn);
                }, 3000);

                // Add slide in animation
                const slideStyle = document.createElement('style');
                slideStyle.textContent = \`
                    @keyframes slideInFromRight {
                        0% {
                            transform: translateX(100px);
                            opacity: 0;
                        }
                        100% {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }
                \`;
                document.head.appendChild(slideStyle);
            </script>
        </body>
        </html>
        `;

        // Open birthday page in new tab/window
        const newWindow = window.open('', '_blank');
        newWindow.document.write(birthdayHTML);
        newWindow.document.close();
    }

    // Add some interactive effects to the main form
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add floating animation to form elements
    const formElements = document.querySelectorAll('#main input, #main select');
    formElements.forEach((element, index) => {
        element.style.animation = `fadeInUp 0.8s ease-out ${index * 0.2}s both`;
    });

    // Add fadeInUp animation
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        @keyframes fadeInUp {
            0% {
                transform: translateY(20px);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        #generateBtn {
            animation: fadeInUp 0.8s ease-out 0.8s both, pulse 2s ease-in-out infinite 2s;
        }
    `;
    document.head.appendChild(animationStyle);

    // Add theme preview on select change
    const selectElement = document.querySelector('select');
    selectElement.addEventListener('change', function() {
        const selectedTheme = themes[this.value];
        
        // Create temporary preview
        const preview = document.createElement('div');
        preview.textContent = `Preview: ${this.value.toUpperCase()} Theme 🎨`;
        preview.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${selectedTheme.colors.primary};
            color: ${selectedTheme.colors.text};
            padding: 10px 20px;
            border-radius: 15px;
            font-weight: bold;
            animation: slideInFromRight 0.5s ease-out, fadeOut 0.5s ease-out 2s forwards;
            z-index: 1000;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        `;
        
        document.body.appendChild(preview);
        
        setTimeout(() => {
            if (preview.parentNode) {
                preview.parentNode.removeChild(preview);
            }
        }, 2500);
    });

    // Add fade out animation for preview
    const fadeStyle = document.createElement('style');
    fadeStyle.textContent = `
        @keyframes fadeOut {
            0% { opacity: 1; transform: translateX(0); }
            100% { opacity: 0; transform: translateX(20px); }
        }
        
        @keyframes slideInFromRight {
            0% { transform: translateX(100px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(fadeStyle);
});