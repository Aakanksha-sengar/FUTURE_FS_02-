const form = document.getElementById("leadForm");
const leadsList = document.getElementById("leadsList");

// Add Lead
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value
  };

  await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  form.reset();
  loadLeads();
});

// Load Leads
async function loadLeads() {
  const res = await fetch("/api/lead");
  const leads = await res.json();

  leadsList.innerHTML = "";

  leads.forEach(l => {
    leadsList.innerHTML += `
      <div class="lead-card">
        <h4>${l.name}</h4>
        <p>${l.email}</p>
        <p>${l.phone || ""}</p>
        <p>${l.message || ""}</p>
      </div>
    `;
  });
}

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Initial Load
loadLeads();s