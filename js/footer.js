const footer = document.createElement('footer');
footer.className = "bg-indigo-950 text-center text-sm text-white py-6 mt-12";
footer.innerHTML = `
    <p>Acesse meu</p>
    <a class="text-blue-500" target="_blank" href="https://github.com/TheEddu">GitHub</a>
    <br>
    <a class="text-blue-500" target="_blank" href="https://www.linkedin.com/in/eduardo-s-b39896205/">Linkedin</a>
    <br>
    <a class="text-blue-500" target="_blank" href="https://tryhackme.com/p/TheEddu">TryHackMe</a>
    <p>&copy; 2025 Meu Portfólio. Todos os direitos reservados.</p>
`;
document.body.appendChild(footer);