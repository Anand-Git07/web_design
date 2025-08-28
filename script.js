 
    document.getElementById('year').textContent = new Date().getFullYear();

    
    const form = document.getElementById('contactForm');
    const success = document.getElementById('success');

    function show(el, on) { el.style.display = on ? 'block' : 'none'; }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      success.style.display = 'none';

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const subject = document.getElementById('subject');
      const message = document.getElementById('message');

      let valid = true;

      if (!name.value || name.value.trim().length < 2) { show(document.getElementById('err-name'), true); valid = false; } else { show(document.getElementById('err-name'), false); }

      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value);
      if (!emailOk) { show(document.getElementById('err-email'), true); valid = false; } else { show(document.getElementById('err-email'), false); }

      if (!subject.value || subject.value.trim().length < 3) { show(document.getElementById('err-subject'), true); valid = false; } else { show(document.getElementById('err-subject'), false); }

      if (!message.value || message.value.trim().length < 10) { show(document.getElementById('err-message'), true); valid = false; } else { show(document.getElementById('err-message'), false); }

      if (valid) {
        success.style.display = 'block';
        form.reset();
      }
    });