function initModelPage(data) {
  const swatches = document.querySelectorAll('.color-swatch');
  const colorName = document.getElementById('color-name');
  const colorOptions = document.querySelector('.color-options');
  const wheelImg = document.querySelector('.wheel-image');
  const trimButtons = document.querySelectorAll('.trim-button');
  const trimDetails = document.getElementById('trim-details');
  const modelImg = document.querySelector('.model-card img');

  let selectedTrim = null;
  let selectedColor = null;

  function updateImage() {
    if (!modelImg) return;

    if (selectedTrim && selectedColor && data.trimColorImages[selectedTrim]?.[selectedColor]) {
      modelImg.src = data.trimColorImages[selectedTrim][selectedColor];
    } else if (selectedTrim && data.trimImages?.[selectedTrim]) {
      modelImg.src = data.trimImages[selectedTrim];
    } else if (selectedTrim && data.trimColorImages[selectedTrim]) {
      const colors = Object.keys(data.trimColorImages[selectedTrim]);
      if (colors.length > 0) {
        modelImg.src = data.trimColorImages[selectedTrim][colors[0]];
      }
    }
  }

  function updateTrim(trim) {
    selectedTrim = trim;
    selectedColor = null;

    swatches.forEach(sw => sw.classList.remove('selected'));
    colorName.textContent = '';

    if (trimDetails) {
      trimDetails.textContent = data.trims[trim] || '';
    }

    updateImage();

    if (colorOptions) {
      colorOptions.classList.remove('disabled');
    }
  }

  function updateColor(color, colorLabel, element) {
    selectedColor = color;
    colorName.textContent = colorLabel;

    swatches.forEach(sw => sw.classList.remove('selected'));
    element.classList.add('selected');

    updateImage();
  }

  trimButtons.forEach(button => {
    button.addEventListener('click', () => {
      trimButtons.forEach(b => b.classList.remove('selected'));
      button.classList.add('selected');
      updateTrim(button.dataset.trim);
    });
  });

  swatches.forEach(btn => {
    btn.style.backgroundColor = btn.dataset.color;
    btn.addEventListener('click', function() {
      if (!selectedTrim) return;
      updateColor(btn.dataset.color, btn.dataset.name, btn);
    });
  });
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
