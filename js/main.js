const distros = [
    {
      name: "Ubuntu",
      description: "User-friendly and great for beginners.",
      link: "./pages/ubuntu.html",
      logo: "https://res.cloudinary.com/canonical/image/fetch/c_limit,f_auto,q_auto,fl_sanitize,w_340,h_84/https://assets.ubuntu.com/v1/2f32b5f5-Ubuntu-Pro-logo.svg",
    },
    {
      name: "Arch Linux",
      description: "Minimal and highly customizable.",
      link: "./pages/arch.html",
      logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Farchlinux.org%2Fstatic%2Flogos%2Farchlinux-logo-light-1200dpi.7ccd81fd52dc.png&f=1&nofb=1&ipt=042510cdde4c6876af23f374b05ac51d7d62ceaae93f9b662a4fbb00b2843756",
    },
    {
        name: "Mint",
        description: "User-friendly and great for beginners.",
        link: "./pages/mint.html",
        logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodix.com%2Flogo%2F430507.png&f=1&nofb=1&ipt=59fc067ad7a02e194666e1340dfd4007efd7c1d61fca34fc1f54ddc4e85163f6",
    },
    {
        name: "Rocky Linux",
        description: "An alternative for servers.",
        link: "./pages/rocky.html",
        logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flinuxiac.b-cdn.net%2Fwp-content%2Fuploads%2F2021%2F10%2Frocky-linux.png&f=1&nofb=1&ipt=012c8c8cb5c5ac562778709ccbe0aac7047354d2f48cec4d7d58e479f7a78d5a",
    },
    // mais distros aqui
  ];

  const container = document.getElementById("cards-container");

  distros.forEach((distro) => {
    const card = document.createElement("a");
    card.href = distro.link;
    card.className =
      "bg-blue-100 text-black shadow-lg rounded-xl p-8 hover:bg-blue-200 hover:shadow-2xl transition block text-center border border-blue-200";

    card.innerHTML = `
      <img src="${distro.logo}" alt="${distro.name} logo" class="h-16 mx-auto mb-6" />
      <h2 class="text-2xl font-bold mb-2">${distro.name}</h2>
      <p class="text-base">${distro.description}</p>
    `;

    container.appendChild(card);
  });
