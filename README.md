# ProTrain - 2-Page Athlete Training Website

A high-converting, mobile-responsive 2-page website for ProTrain athlete speed training programs.

## Project Structure

```
2page_athelete/
├── index.html          # Landing page (Home)
├── booking.html       # Opt-in/Booking page with GHL-compliant form
├── privacy.html       # Privacy Policy page
├── terms.html         # Terms & Conditions page
├── styles.css         # Main stylesheet
├── script.js          # JavaScript for form validation & interactions
└── README.md         # This file
```

## Features

### Page 1 (Landing Page - index.html)
- ✅ Engaging hero section with strong value proposition
- ✅ Program highlights (Force Development, Mechanics, Power, Progression)
- ✅ Problem/solution framework
- ✅ Testimonials/trust elements
- ✅ Multiple conversion-optimized CTAs linking to booking page
- ✅ 90-day guarantee section
- ✅ Mobile-responsive design

### Page 2 (Booking Page - booking.html)
- ✅ GoHighLevel-compliant opt-in form structure
- ✅ A2P/10DLC SMS consent checkbox (TCPA compliant)
- ✅ Privacy Policy & Terms & Conditions links
- ✅ Phone number formatting and validation
- ✅ Local phone verification support
- ✅ Form validation with error handling
- ✅ Trust elements (security, guarantee, limited spots)

## Technical Features

- **Mobile-Responsive**: Fully responsive design using CSS Grid and Flexbox
- **Fast-Loading**: Optimized CSS, minimal JavaScript, web font optimization
- **SEO Basics**: Meta tags, semantic HTML, proper heading structure
- **Accessibility**: ARIA labels, keyboard navigation, focus states, reduced motion support
- **Modern Design**: Clean, conversion-optimized UI with smooth animations
- **Form Validation**: Client-side validation with phone number formatting

## GoHighLevel Integration

The booking page includes a placeholder section for GoHighLevel form embed:

```html
<div id="ghl-form-container" class="ghl-form-wrapper">
    <!-- Replace with your GHL form embed code -->
</div>
```

**To integrate your GoHighLevel form:**
1. Get your form embed code from GoHighLevel
2. Replace the placeholder div content with your GHL embed code
3. The form will automatically inherit the page styling

**Note:** The custom form below the GHL placeholder can be used as a fallback or removed once GHL form is integrated.

## TCPA/SMS Compliance

The booking form includes:
- ✅ Explicit SMS consent checkbox with clear language
- ✅ TCPA compliance notice
- ✅ A2P/10DLC compliant messaging
- ✅ Opt-out instructions (STOP, HELP)

## Setup Instructions

1. **Local Development:**
   - Open `index.html` in a web browser
   - Or use a local server: `python -m http.server 8000` (then visit `http://localhost:8000`)

2. **Deployment:**
   - Upload all files to your web hosting
   - Ensure `index.html` is set as the default page
   - Update Privacy Policy and Terms & Conditions content (currently templates)

3. **GoHighLevel Integration:**
   - Add your GHL form embed code to `booking.html`
   - Test form submission flow
   - Configure webhooks/API if needed

4. **Customization:**
   - Update colors in `styles.css` (CSS variables in `:root`)
   - Modify content in HTML files
   - Adjust form fields in `booking.html` as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Minimal dependencies (only Google Fonts)
- Optimized CSS (no frameworks)
- Lightweight JavaScript
- Fast page load times

## Legal Notes

⚠️ **Important:** The Privacy Policy and Terms & Conditions pages are templates. Please:
- Consult with a legal professional
- Ensure compliance with GDPR, CCPA, TCPA, and other applicable laws
- Customize content based on your specific business practices

## Domain Suggestions

As requested, here are domain suggestions including "protrain":
- protrainfranchise.com
- protrainelite.com
- getprotrain.com
- protrainathletes.com
- protrainperformance.com

Check availability on Namecheap, GoDaddy, or your preferred registrar.

## Support

For questions or issues, please contact the development team.

---

**Built with:** HTML5, CSS3, Vanilla JavaScript  
**Design:** Conversion-optimized, mobile-first  
**Compliance:** TCPA, A2P/10DLC ready
