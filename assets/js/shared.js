/**
 * ESL Toolkit - Shared JavaScript
 * Handles component loading, navigation, and common functionality
 */

(function() {
  'use strict';

  // Determine base path dynamically based on current page location
  function getBasePath() {
    const path = window.location.pathname;
    // Check if we're in a subdirectory (like /games/)
    if (path.includes('/games/')) {
      return '..';
    }
    // Check if we're at root or index
    return '.';
  }

  const basePath = getBasePath();

  // Load header component
  function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) return;

    fetch(`${basePath}/assets/components/header.html`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load header');
        return res.text();
      })
      .then(data => {
        headerPlaceholder.innerHTML = data;
        initializeHeader();
        updateNavigationLinks();
      })
      .catch(err => {
        console.error('Error loading header:', err);
        // Fallback: show a simple header
        headerPlaceholder.innerHTML = `
          <header class="site-header">
            <a href="${basePath}/index.html" class="site-title">ESL Toolkit</a>
          </header>
        `;
      });
  }

  // Load footer component
  function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;

    fetch(`${basePath}/assets/components/footer.html`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load footer');
        return res.text();
      })
      .then(data => {
        footerPlaceholder.innerHTML = data;
      })
      .catch(err => {
        console.error('Error loading footer:', err);
        // Fallback: show a simple footer
        footerPlaceholder.innerHTML = `
          <footer class="site-footer">
            <p>&copy; 2025 ESL Toolkit</p>
          </footer>
        `;
      });
  }

  // Initialize header functionality after it's loaded
  function initializeHeader() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
      // Toggle menu on button click
      menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);

        if (menu.hasAttribute('hidden')) {
          menu.removeAttribute('hidden');
        } else {
          menu.setAttribute('hidden', '');
        }
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
          menu.setAttribute('hidden', '');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });

      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.hasAttribute('hidden')) {
          menu.setAttribute('hidden', '');
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.focus();
        }
      });
    }
  }

  // Update navigation links with correct paths
  function updateNavigationLinks() {
    // Update home link
    const homeLink = document.querySelector('[data-home-link]');
    if (homeLink) {
      homeLink.href = `${basePath}/index.html`;
    }

    // Update game links
    const gameLinks = document.querySelectorAll('[data-game-link]');
    gameLinks.forEach(link => {
      const game = link.getAttribute('data-game-link');
      link.href = `${basePath}/games/${game}.html`;
    });

    // Highlight current page in navigation
    highlightCurrentPage();
  }

  // Highlight the current page in the navigation menu
  function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (currentPath.endsWith(linkPath) || currentPath.includes(link.getAttribute('data-game-link'))) {
        link.style.backgroundColor = 'var(--bg-tertiary)';
        link.style.color = 'var(--color-primary)';
        link.style.fontWeight = '600';
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    loadHeader();
    loadFooter();
  }
})();
