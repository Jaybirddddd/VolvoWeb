function initModelPage(data) {
  const swatches = document.querySelectorAll('.color-swatch');
  const colorName = document.getElementById('color-name');
  let selectedColorImage = null;
  swatches.forEach(btn => {
    btn.style.backgroundColor = btn.dataset.color;
    btn.addEventListener('click', () => {
      swatches.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      colorName.textContent = btn.dataset.name;
      selectedColorImage = btn.dataset.image;
      const img = document.querySelector('.model-card img');
      if (selectedColorImage && img) {
        img.src = selectedColorImage;
      }
    });
  });

  const trimSelect = document.getElementById('trim-select');
  const trimDetails = document.getElementById('trim-details');
  if (trimSelect && trimDetails) {
    const updateTrim = () => {
      const t = trimSelect.value;
      if (data.trims) {
        trimDetails.textContent = data.trims[t] || '';
      }
      const img = document.querySelector('.model-card img');
      if (!selectedColorImage && data.trimImages && data.trimImages[t] && img) {
        img.src = data.trimImages[t];
      }
    };
    trimSelect.addEventListener('change', updateTrim);
    updateTrim();
  }
}

function askModelYear() {
  const year = prompt('Is your Volvo a 2025 or a 2026 model?');
  if (!year) return;
  document.querySelectorAll('.year-2025').forEach(el => {
    el.style.display = year === '2025' ? '' : 'none';
  });
  document.querySelectorAll('.year-2026').forEach(el => {
    el.style.display = year === '2026' ? '' : 'none';
  });
}

