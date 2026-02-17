// Phone Number Formatting (US Format)
function formatPhoneNumber(input) {
    // Remove all non-digit characters
    let phoneNumber = input.value.replace(/\D/g, '');
    
    // Limit to 10 digits
    if (phoneNumber.length > 10) {
        phoneNumber = phoneNumber.slice(0, 10);
    }
    
    // Format as (XXX) XXX-XXXX
    if (phoneNumber.length >= 6) {
        phoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    } else if (phoneNumber.length >= 3) {
        phoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else if (phoneNumber.length > 0) {
        phoneNumber = `(${phoneNumber}`;
    }
    
    input.value = phoneNumber;
}

// Phone Number Validation
function validatePhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 10;
}

// Initialize phone formatting when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    
    if (phoneInput) {
        // Format on input
        phoneInput.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
        
        // Format on paste
        phoneInput.addEventListener('paste', function(e) {
            setTimeout(() => {
                formatPhoneNumber(this);
            }, 10);
        });
        
        // Validate on blur
        phoneInput.addEventListener('blur', function() {
            if (this.value && !validatePhoneNumber(this.value)) {
                this.setCustomValidity('Please enter a valid 10-digit phone number');
                this.reportValidity();
            } else {
                this.setCustomValidity('');
            }
        });
    }
    
    // Form Submission Handler
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate all required fields
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Validate phone number
            if (phoneInput && phoneInput.value) {
                if (!validatePhoneNumber(phoneInput.value)) {
                    isValid = false;
                    phoneInput.setCustomValidity('Please enter a valid 10-digit phone number');
                    phoneInput.reportValidity();
                }
            }
            
            // Validate checkboxes
            const smsConsent = document.getElementById('smsConsent');
            const privacyConsent = document.getElementById('privacyConsent');
            
            if (smsConsent && !smsConsent.checked) {
                isValid = false;
                smsConsent.setCustomValidity('SMS consent is required');
                smsConsent.reportValidity();
            }
            
            if (privacyConsent && !privacyConsent.checked) {
                isValid = false;
                privacyConsent.setCustomValidity('Privacy policy consent is required');
                privacyConsent.reportValidity();
            }
            
            if (isValid) {
                // Show success message
                showFormSuccess();
                
                // Here you would typically submit to your backend or GoHighLevel
                // For now, we'll just show a success message
                console.log('Form data:', new FormData(this));
                
                // If you have a GoHighLevel form embed, it will handle submission
                // Otherwise, you can submit to your backend API here
                
                // Example: Submit to backend
                // submitToBackend(new FormData(this));
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Add loading state to buttons
    const submitButtons = document.querySelectorAll('.btn-submit, .btn-primary[type="submit"]');
    submitButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.type === 'submit') {
                this.style.opacity = '0.7';
                this.style.cursor = 'wait';
            }
        });
    });
});

// Show form success message
function showFormSuccess() {
    const form = document.getElementById('booking-form');
    if (!form) return;
    
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.innerHTML = `
        <div style="background-color: #10b981; color: white; padding: 1.5rem; border-radius: 8px; text-align: center; margin-top: 1rem;">
            <h3 style="margin-bottom: 0.5rem;">✓ Application Submitted Successfully!</h3>
            <p>We'll be in touch shortly to verify your information and confirm your spot.</p>
        </div>
    `;
    
    form.parentNode.insertBefore(successMessage, form.nextSibling);
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Reset form after 3 seconds (optional)
    setTimeout(() => {
        form.reset();
    }, 3000);
}

// Example function to submit to backend (replace with your actual endpoint)
function submitToBackend(formData) {
    // Example using Fetch API
    /*
    fetch('https://your-api-endpoint.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        showFormSuccess();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your application. Please try again.');
    });
    */
}

// Add error styling for invalid fields
const style = document.createElement('style');
style.textContent = `
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: var(--error-color);
        background-color: #fef2f2;
    }
    
    .form-success {
        animation: fadeIn 0.5s ease-in;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
