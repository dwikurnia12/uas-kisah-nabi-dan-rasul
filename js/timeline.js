document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.timeline-filter-bar .filter-btn');
  const timelineItems = document.querySelectorAll('.timeline-item');
  const searchInput = document.getElementById('searchTimeline');

  let currentEra = 'semua';
  let searchQuery = '';

  // Filter click handler
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentEra = btn.getAttribute('data-era');
      applyFilterAndSearch();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchQuery = searchInput.value.toLowerCase().trim();
      applyFilterAndSearch();
    });
  }

  function applyFilterAndSearch() {
    timelineItems.forEach(item => {
      const era = item.getAttribute('data-era');
      const textContent = item.textContent.toLowerCase();
      
      const matchesEra = (currentEra === 'semua' || era === currentEra);
      const matchesSearch = textContent.includes(searchQuery);

      if (matchesEra && matchesSearch) {
        item.classList.remove('hidden');
        item.classList.add('active');
      } else {
        item.classList.add('hidden');
      }
    });
  }
});
