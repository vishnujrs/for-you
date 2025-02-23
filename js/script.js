document.addEventListener('DOMContentLoaded', () => {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const step4 = document.getElementById('step4');
    const step5 = document.getElementById('step5');

    // Create sparkles
    function createSparkles() {
        const sparklesContainer = document.querySelector('.sparkles');
        for (let i = 0; i < 50; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkle.style.animationDelay = `${Math.random() * 2}s`;
            sparklesContainer.appendChild(sparkle);
        }
    }

    // Step 1 to Step 2
    step1.querySelector('.next-btn').addEventListener('click', () => {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
    });

    // Step 2 to Step 3
    step2.querySelector('.next-btn').addEventListener('click', () => {
        step2.classList.add('hidden');
        step3.classList.remove('hidden');
        createSparkles();
        startColorChange();
        playBirthdayMusic();
    });

    // Step 3 to Step 4
    step3.querySelector('.celebrate-btn').addEventListener('click', () => {
        createConfetti();
        step3.classList.add('hidden');
        step4.classList.remove('hidden');
    });

    // Step 4: Cake interaction
    const cake = document.querySelector('.cake');
    const flame = document.querySelector('.flame');
    const surpriseBtn = document.getElementById('surpriseBtn');

    // Candle interaction
    flame.addEventListener('mouseover', () => {
        flame.classList.add('extinguish');
        
        // Play blowing sound
        const blowSound = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3');
        blowSound.play();
        
        // Show the surprise button after candle is blown
        setTimeout(() => {
            surpriseBtn.style.display = 'block';
            surpriseBtn.classList.remove('hidden');
        }, 1000);
    });

    // Surprise button click handler
    surpriseBtn.addEventListener('click', () => {
        step4.classList.add('hidden');
        step5.classList.remove('hidden');
        
        // Create celebration effect
        for(let i = 0; i < 50; i++) {
            setTimeout(createHeart, i * 100);
        }
        
        // Play celebration music
        playBirthdayMusic();
    });

    // Update the cake click handler to not immediately go to step 5
    cake.addEventListener('click', () => {
        cake.classList.add('cut');
        // Remove the automatic transition to step 5
        // Now it will wait for the candle to be blown out
    });

    // Add hover effect to cake
    cake.addEventListener('mouseover', () => {
        document.body.style.cursor = 'pointer';
    });

    cake.addEventListener('mouseout', () => {
        document.body.style.cursor = 'default';
    });

    // Play birthday music when reaching the final card
    function playBirthdayMusic() {
        const birthdayAudio = new Audio('https://www2.cs.uic.edu/~i101/SoundFiles/HappyBirthday.wav');
        birthdayAudio.play();
    }

    // Create floating hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }

    // Start creating hearts when reaching the final card
    setInterval(createHeart, 300);

    // Add color-changing background
    function startColorChange() {
        const colors = [
            '#ff69b4', // Pink
            '#ff1493', // Deep Pink
            '#9400d3', // Purple
            '#4169e1', // Royal Blue
            '#ff6b6b'  // Light Red
        ];
        let colorIndex = 0;

        setInterval(() => {
            document.body.style.background = `linear-gradient(135deg, ${colors[colorIndex]}, ${colors[(colorIndex + 1) % colors.length]})`;
            colorIndex = (colorIndex + 1) % colors.length;
        }, 2000);
    }

    // Add more celebration effects
    function createConfetti() {
        const colors = ['#ff69b4', '#ff1493', '#9400d3', '#4169e1', '#ff6b6b'];
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDelay = `${Math.random() * 3}s`;
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }
    }

    // Add confetti styles to CSS
    const style = document.createElement('style');
    style.textContent = `
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            animation: confettiFall 3s linear infinite;
        }

        @keyframes confettiFall {
            0% { transform: translateY(-100vh) rotate(0deg); }
            100% { transform: translateY(100vh) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}); 