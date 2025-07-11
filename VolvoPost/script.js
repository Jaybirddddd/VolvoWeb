function initModelPage(data) {
  const swatches = document.querySelectorAll('.color-swatch');
  const colorName = document.getElementById('color-name');
  const colorOptions = document.querySelector('.color-options');
  let selectedColor = null;
  let selectedColorImage = null;
  let selectedTrim = null;

  if (colorOptions) {
    colorOptions.classList.add('disabled');
  }

  swatches.forEach(btn => {
    btn.style.backgroundColor = btn.dataset.color;
    btn.addEventListener('click', () => {
      if (!selectedTrim) return; // require trim selection first
      swatches.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      colorName.textContent = btn.dataset.name;
      selectedColor = btn.dataset.color;
      selectedColorImage = btn.dataset.image;
      const img = document.querySelector('.model-card img');
      if (img) {
        if (data.trimColorImages && selectedTrim &&
            data.trimColorImages[selectedTrim] &&
            data.trimColorImages[selectedTrim][selectedColor]) {
          img.src = data.trimColorImages[selectedTrim][selectedColor];
        } else if (selectedColorImage) {
          img.src = selectedColorImage;
        }
      }
    });
  });

  const trimButtons = document.querySelectorAll('.trim-button');
  const trimDetails = document.getElementById('trim-details');
  if (trimButtons.length && trimDetails) {
    const updateTrim = (trim) => {
      selectedTrim = trim;
      selectedColor = null;
      selectedColorImage = null;
      swatches.forEach(b => b.classList.remove('selected'));
      colorName.textContent = '';
      if (data.trims) {
        trimDetails.textContent = data.trims[trim] || '';
      }
      const img = document.querySelector('.model-card img');
      if (img) {
        if (data.trimImages && data.trimImages[trim]) {
          img.src = data.trimImages[trim];
        }
      }
    };
    trimButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        trimButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        updateTrim(btn.dataset.trim);
        if (colorOptions) {
          colorOptions.classList.remove('disabled');
        }
      });
    });
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

