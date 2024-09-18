// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  switch(license){
    case 'MIT':
      licenseBadge = '![Static Badge](https://img.shields.io/badge/License-MIT-blue)';
      break;

    case 'ISC':
      licenseBadge = '![Static Badge](https://img.shields.io/badge/License-ISC-blue)';
      break;

      case 'Apachev2.0':
      licenseBadge = '![Static Badge](https://img.shields.io/badge/License-Apachev2.0-blue)'; 
      break;

      case 'GPLv3':
      licenseBadge = '![Static Badge](https://img.shields.io/badge/License-GPLv3-blue)';
      break;
    default:
      licenseBadge = '';
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
export {renderLicenseBadge, renderLicenseLink, renderLicenseSection};
