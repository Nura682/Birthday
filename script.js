
// Create floating hearts background
function createHeart() {
  const heartsContainer = document.getElementById('heartsContainer');
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = ['❤️', '💖', '💝', '❣️', '💕'][Math.floor(Math.random() * 5)];
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
  heart.style.animationDelay = Math.random() * 2 + 's';
  heartsContainer.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 10000);
}

// Create hearts continuously
setInterval(createHeart, 500);

// Initial hearts
for (let i = 0; i < 10; i++) {
  setTimeout(createHeart, i * 300);
}

// Handle forgiveness button
const forgiveBtn = document.getElementById('forgiveBtn');
const forgivenessSection = document.getElementById('forgivenessSection');
const birthdaySection = document.getElementById('birthdaySection');

forgiveBtn.addEventListener('click', () => {
  // Add click animation
  forgiveBtn.style.transform = 'scale(0.95)';
  
  setTimeout(() => {
    forgivenessSection.style.opacity = '0';
    forgivenessSection.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
      forgivenessSection.classList.add('hidden');
      birthdaySection.classList.remove('hidden');
      
      // Trigger confetti effect
      createConfetti();
    }, 500);
  }, 200);
});

// Confetti effect
function createConfetti() {
  const colors = ['#ff0000', '#cc0000', '#ff3333', '#990000', '#ff6666', '#660000'];
  const confettiCount = 100;
  
  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.top = '-10px';
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '9999';
      confetti.style.opacity = '1';
      
      document.body.appendChild(confetti);
      
      const fallDuration = Math.random() * 3 + 2;
      const fallDistance = window.innerHeight + 20;
      const drift = (Math.random() - 0.5) * 200;
      
      confetti.animate([
        { 
          transform: `translate(0, 0) rotate(0deg)`,
          opacity: 1
        },
        { 
          transform: `translate(${drift}px, ${fallDistance}px) rotate(${Math.random() * 720}deg)`,
          opacity: 0
        }
      ], {
        duration: fallDuration * 1000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      });
      
      setTimeout(() => {
        confetti.remove();
      }, fallDuration * 1000);
    }, i * 30);
  }
}

// Add sparkle effect on mouse move
document.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.9) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.opacity = '1';
    
    document.body.appendChild(sparkle);
    
    sparkle.animate([
      { 
        transform: 'translate(-50%, -50%) scale(0)',
        opacity: 1
      },
      { 
        transform: 'translate(-50%, -100px) scale(1)',
        opacity: 0
      }
    ], {
      duration: 1000,
      easing: 'ease-out'
    });
    
    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  }
});

// Optimized: Simple 3D heart using CSS only - no DOM generation needed
