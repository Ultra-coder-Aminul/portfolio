document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const headerTitle = document.getElementById('header-title');
    const readMoreBtn = document.getElementById('read-more');
    const fullBio = document.getElementById('full-bio');
    const skillsContainer = document.getElementById('skills-container');
    const projectsContainer = document.getElementById('projects-container');

    // Initialize Lucide icons
    lucide.createIcons();

    // Skills data
    const skills = ['React', 'Node.js', 'TypeScript', 'GraphQL', 'AWS', 'Docker'];

    // Projects data
    const projects = [
        { name: 'E-commerce Platform', description: 'Built with React and Node.js', link: '#' },
        { name: 'AI-powered Chatbot', description: 'Using OpenAI API and React', link: '#' },
        { name: 'Data Visualization Dashboard', description: 'With D3.js and React', link: '#' },
    ];

    // Populate skills
    skills.forEach(skill => {
        const skillBadge = document.createElement('span');
        skillBadge.className = 'skill-badge';
        skillBadge.textContent = skill;
        skillsContainer.appendChild(skillBadge);
    });

    // Populate projects
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="project-link">View Project <i data-lucide="external-link"></i></a>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Re-initialize Lucide icons for dynamically added content
    lucide.createIcons();

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'white';
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            headerTitle.style.color = 'var(--text-color)';
            document.querySelectorAll('header nav a').forEach(link => {
                link.style.color = 'var(--text-color)';
            });
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
            headerTitle.style.color = 'white';
            document.querySelectorAll('header nav a').forEach(link => {
                link.style.color = 'white';
            });
        }
    });

    // Read more button
    readMoreBtn.addEventListener('click', () => {
        fullBio.classList.toggle('hidden');
        const chevronIcon = readMoreBtn.querySelector('i');
        if (fullBio.classList.contains('hidden')) {
            readMoreBtn.querySelector('span').textContent = 'Read more ';
            chevronIcon.setAttribute('data-lucide', 'chevron-down');
        } else {
            readMoreBtn.querySelector('span').textContent = 'Read less ';
            chevronIcon.setAttribute('data-lucide', 'chevron-up');
        }
        lucide.createIcons();
    });
    
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});