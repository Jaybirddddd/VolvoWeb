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

  const trimButtons = document.querySelectorAll('.trim-button');
  const trimDetails = document.getElementById('trim-details');
  let selectedTrim = null;
  if (trimButtons.length && trimDetails) {
    const updateTrim = (trim) => {
      selectedTrim = trim;
      if (data.trims) {
        trimDetails.textContent = data.trims[trim] || '';
      }
      const img = document.querySelector('.model-card img');
      if (!selectedColorImage && data.trimImages && data.trimImages[trim] && img) {
        img.src = data.trimImages[trim];
      }
    };
    trimButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        trimButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        updateTrim(btn.dataset.trim);
      });
    });
    // initialize with first button
    const first = trimButtons[0];
    if (first) {
      first.classList.add('selected');
      updateTrim(first.dataset.trim);
    }
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

