# Frontend - Azure Cloud Resume

This is the frontend portion of the Azure Cloud Resume Challenge. It uses HTML, CSS, and JavaScript to create a personal resume website hosted on Azure.

## Structure

- `index.html` - Main resume page
- `css/` - Styling files including:
  - `default.css` - Base styles
  - `layout.css` - Main layout styles
  - `media-queries.css` - Responsive design
- `js/` - JavaScript files including:
  - `main.js` - Counter functionality
  - `init.js` - Page initialization

## Local Development

1. Clone the repository
2. Open `index.html` in your browser to view locally
3. Make changes to HTML/CSS/JS files as needed
4. Test changes locally before deploying

## Deployment

The site is deployed to Azure Static Web Apps through GitHub Actions. The workflow file is located in [.github/workflows/frontend.main.yml](../.github/workflows/frontend.main.yml).

## Features

- Responsive design
- Visit counter using Azure Functions backend
- Social media links
- Sections for:
  - About
  - Experience
  - Certifications

## Resources

- Based on the [Cloud Guru Azure Resume Challenge](https://github.com/madebygps/cgc-azure-resume)
- Uses [CeeVee template](https://www.styleshout.com/free-templates/ceevee/)
