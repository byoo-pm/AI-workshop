/**
 * AI Survey - NCE Product Marketing
 * Handles form submission to Google Sheets
 */

// ============================================
// CONFIGURATION
// ============================================
// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyMC8K4vVmjXf-LAFsJ3OuPaEjNPuEOl7l41hzkIhYlcYSs9H2PdROb-P15zrFvtXTJ/exec';

// ============================================
// FORM SUBMISSION
// ============================================
document.getElementById('aiSurvey').addEventListener('submit', async function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const form = this;

    // Get form data
    const formData = {
        timestamp: new Date().toISOString(),
        name: document.getElementById('name').value,
        pain_point: document.getElementById('q1').value,
        value_creation: document.getElementById('q2').value,
        personal_interests: document.getElementById('q3').value || 'Not provided',
        food_preferences: document.getElementById('q4').value || 'Not provided'
    };

    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.querySelector('.btn-text').textContent = 'Submitting';

    try {
        // Check if Google Script URL is configured
        if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
            // Demo mode - just show success
            console.log('Demo Mode - Form Data:', formData);
            await new Promise(resolve => setTimeout(resolve, 1500));
        } else {
            // Production mode - send to Google Sheets
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
        }

        // Show success
        showThankYouScreen();

    } catch (error) {
        console.error('Submission error:', error);
        alert('There was an error submitting your response. Please try again.');
        submitBtn.classList.remove('loading');
        submitBtn.querySelector('.btn-text').textContent = 'Submit My Answers';
    }
});

// ============================================
// THANK YOU SCREEN
// ============================================
function showThankYouScreen() {
    const surveyForm = document.getElementById('surveyForm');
    const thankYouScreen = document.getElementById('thankYouScreen');

    // Fade out form
    surveyForm.style.opacity = '0';
    surveyForm.style.transform = 'translateY(-20px)';
    surveyForm.style.transition = 'all 0.4s ease';

    setTimeout(() => {
        surveyForm.style.display = 'none';
        thankYouScreen.classList.add('active');

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
}

// ============================================
// TEXTAREA AUTO-RESIZE
// ============================================
document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 300) + 'px';
    });
});

// ============================================
// PARTICLE ANIMATION (Subtle floating dots)
// ============================================
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(0, 80, 160, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        container.appendChild(particle);
    }

    // Add float animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0.5; }
            25% { transform: translateY(-20px) translateX(10px); opacity: 1; }
            50% { transform: translateY(-10px) translateX(-10px); opacity: 0.7; }
            75% { transform: translateY(-30px) translateX(5px); opacity: 0.9; }
        }
    `;
    document.head.appendChild(style);
}

// Initialize particles on load
document.addEventListener('DOMContentLoaded', createParticles);
