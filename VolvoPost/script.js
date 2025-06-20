function initModelPage(data) {
  const swatches = document.querySelectorAll('.color-swatch');
  const colorName = document.getElementById('color-name');
  swatches.forEach(btn => {
    btn.style.backgroundColor = btn.dataset.color;
    btn.addEventListener('click', () => {
      swatches.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      colorName.textContent = btn.dataset.name;
      const img = document.querySelector('.model-card img');
      if (btn.dataset.image && img) {
        img.src = btn.dataset.image;
      }
    });
  });

  const trimSelect = document.getElementById('trim-select');
  const trimDetails = document.getElementById('trim-details');
  if (trimSelect && trimDetails && data.trims) {
    const updateTrim = () => {
      const t = trimSelect.value;
      trimDetails.textContent = data.trims[t] || '';
    };
    trimSelect.addEventListener('change', updateTrim);
    updateTrim();
  }
}

