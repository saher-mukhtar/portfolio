// Small JS for form handling and small interactions
document.getElementById("year").textContent = new Date().getFullYear();

function openMail() {
  window.location.href = "mailto:sahermukhtar7@gmail.com";
}

function submitContact(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    showStatus("Please fill all fields.");
    return;
  }

  // Simple mailto fallback (works instantly without server)
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );
  const mailto = `mailto:sahermukhtar7@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailto;

  showStatus("Opening email client…", true);
}

function showStatus(text, ok) {
  const el = document.getElementById("formStatus");
  el.textContent = text;
  el.style.color = ok ? "lightgreen" : "#ffb4b4";
  setTimeout(() => {
    el.textContent = "";
  }, 6000);
}
