import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(__dirname, '../public/Ranjit_Kumar_Jaiswal_Resume.pdf');

// Create document
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 36, bottom: 36, left: 40, right: 40 },
  info: {
    Title: 'Ranjit Kumar Jaiswal - Resume',
    Author: 'Ranjit Kumar Jaiswal',
    Subject: 'Frontend Engineer & Software Testing Specialist'
  }
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Colors
const primary = '#0284c7';
const dark = '#0f172a';
const secondary = '#334155';
const muted = '#64748b';

// Header Name
doc.fillColor(dark).fontSize(22).font('Helvetica-Bold').text('RANJIT KUMAR JAISWAL', { align: 'center' });
doc.moveDown(0.2);

// Subtitle
doc.fillColor(primary).fontSize(12).font('Helvetica-Bold').text('Frontend Engineer & Software Testing / QA Specialist', { align: 'center' });
doc.moveDown(0.3);

// Contact Info Line
doc.fillColor(muted).fontSize(9).font('Helvetica')
  .text('Phone: +91 7004060528  |  Email: ranjitjaiswal321@gmail.com  |  GitHub: github.com/Ranjitjaiswal1  |  India', { align: 'center' });

doc.moveDown(0.5);
doc.strokeColor('#cbd5e1').lineWidth(0.75).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
doc.moveDown(0.5);

// Helper for section header
function addSectionHeader(title) {
  doc.moveDown(0.4);
  doc.fillColor(primary).fontSize(11).font('Helvetica-Bold').text(title.toUpperCase());
  doc.strokeColor('#e2e8f0').lineWidth(0.5).moveTo(40, doc.y + 2).lineTo(555, doc.y + 2).stroke();
  doc.moveDown(0.4);
}

// 1. Summary
addSectionHeader('Professional Summary');
doc.fillColor(secondary).fontSize(9).font('Helvetica').lineGap(2)
  .text('Results-driven Frontend Engineer and Software Quality Assurance Specialist with 3+ years of experience designing high-performance, accessible React user interfaces and architecting comprehensive automated test suites (Cypress, Playwright, Selenium, Jest, Postman). Proficient in C++, Python, JavaScript, and modern CI/CD test automation pipelines to deliver zero-defect software.');

// 2. Technical Skills
addSectionHeader('Technical Skills');
const skills = [
  { cat: 'Languages & Core:', list: 'C++, Python, JavaScript (ES6+), TypeScript, HTML5, CSS3, Data Structures & OOP' },
  { cat: 'Frontend Frameworks:', list: 'React.js, Next.js, Redux Toolkit, Tailwind CSS, Framer Motion, Responsive UI' },
  { cat: 'QA & Test Automation:', list: 'Cypress, Playwright, Selenium WebDriver, Jest, PyTest, REST API Testing (Postman)' },
  { cat: 'Methodologies & Tools:', list: 'Git & GitHub, Jira, TestRail, CI/CD GitHub Actions, Agile / Scrum, SDLC & STLC' }
];

skills.forEach(s => {
  doc.fillColor(dark).fontSize(8.5).font('Helvetica-Bold').text(s.cat + ' ', { continued: true });
  doc.fillColor(secondary).font('Helvetica').text(s.list);
  doc.moveDown(0.15);
});

// 3. Work Experience
addSectionHeader('Work Experience');

// Job 1
doc.fillColor(dark).fontSize(10).font('Helvetica-Bold').text('InnovateTech Solutions', { continued: true });
doc.fillColor(muted).fontSize(8.5).font('Helvetica').text('  —  India (Remote)', { continued: true });
doc.fillColor(primary).font('Helvetica-Bold').text('  |  2023 - Present', { align: 'right' });

doc.fillColor(primary).fontSize(9).font('Helvetica-Bold').text('Frontend Engineer & QA Automation Lead');
doc.fillColor(secondary).fontSize(8.5).font('Helvetica').lineGap(1.5);
doc.text('• Architected responsive, high-traffic client portals in React.js & Tailwind CSS with 99%+ cross-device accessibility.');
doc.text('• Built end-to-end automated test suites with Cypress and Playwright, reducing regression test cycles by 65%.');
doc.text('• Integrated GitHub Actions CI/CD pipelines to trigger automated unit, integration, and smoke tests on every pull request.');
doc.text('• Collaborated across engineering and product teams to triage defects in Jira and ensure 99.8% production test pass rate.');
doc.moveDown(0.3);

// Job 2
doc.fillColor(dark).fontSize(10).font('Helvetica-Bold').text('Apex Digital Systems', { continued: true });
doc.fillColor(muted).fontSize(8.5).font('Helvetica').text('  —  India', { continued: true });
doc.fillColor(primary).font('Helvetica-Bold').text('  |  2021 - 2023', { align: 'right' });

doc.fillColor(primary).fontSize(9).font('Helvetica-Bold').text('Frontend Developer & Software Tester');
doc.fillColor(secondary).fontSize(8.5).font('Helvetica').lineGap(1.5);
doc.text('• Engineered modular, interactive UI components using React, JavaScript (ES6+), and CSS3.');
doc.text('• Executed functional, exploratory, and regression testing with 300+ detailed test cases documented in TestRail.');
doc.text('• Validated 45+ backend REST APIs with Postman, automated assertion scripts, and Newman CLI integration.');
doc.moveDown(0.3);

// 4. Featured Projects
addSectionHeader('Key Projects');

// Project 1
doc.fillColor(dark).fontSize(9.5).font('Helvetica-Bold').text('OmniStore // Modern React E-Commerce + Automated E2E Suite', { continued: true });
doc.fillColor(muted).fontSize(8).font('Helvetica').text('  (React, Tailwind, Redux, Cypress, Jest)', { align: 'right' });
doc.fillColor(secondary).fontSize(8.5).font('Helvetica')
  .text('Built responsive full-featured store UI backed by complete Cypress E2E regression tests for checkout, cart, and authentication.');
doc.moveDown(0.2);

// Project 2
doc.fillColor(dark).fontSize(9.5).font('Helvetica-Bold').text('QualityOps // Real-Time QA Metrics & Bug Triage Dashboard', { continued: true });
doc.fillColor(muted).fontSize(8).font('Helvetica').text('  (React, TypeScript, Playwright, Postman)', { align: 'right' });
doc.fillColor(secondary).fontSize(8.5).font('Helvetica')
  .text('Engineered central telemetry dashboard visualizing automated CI test pass rates, API latency, and defect triage status.');
doc.moveDown(0.2);

// Project 3
doc.fillColor(dark).fontSize(9.5).font('Helvetica-Bold').text('FinPulse // Banking Dashboard & API Test Matrix', { continued: true });
doc.fillColor(muted).fontSize(8).font('Helvetica').text('  (React, Postman, REST APIs, Tailwind CSS)', { align: 'right' });
doc.fillColor(secondary).fontSize(8.5).font('Helvetica')
  .text('Financial analytics platform with live transaction feeds, responsive tables, and automated Postman test collections validating 45+ REST endpoints.');
doc.moveDown(0.3);

// 5. Education
addSectionHeader('Education');
doc.fillColor(dark).fontSize(9.5).font('Helvetica-Bold').text('Bachelor of Technology (B.Tech) in Computer Science & Engineering', { continued: true });
doc.fillColor(primary).fontSize(8.5).font('Helvetica-Bold').text('  |  2019 - 2023', { align: 'right' });
doc.fillColor(secondary).fontSize(8.5).font('Helvetica').text('State Technological University  —  Graduated with First Class Honors');
doc.moveDown(0.3);

// 6. Certifications
addSectionHeader('Certifications');
doc.fillColor(secondary).fontSize(8.5).font('Helvetica')
  .text('• Meta Certified Frontend Developer (React, JavaScript & Advanced UI) — Coursera / Meta')
  .text('• Automated Software Testing & QA Mastery (Selenium WebDriver, Cypress) — Test Automation University')
  .text('• API Test Automation Student Expert — Postman Academy')
  .text('• C++ & Object-Oriented Software Design — Coding Ninjas');

doc.end();

writeStream.on('finish', () => {
  console.log('✅ Successfully generated professional Resume PDF at: ' + outputPath);
});
