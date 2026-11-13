/* =====================
   Friends Activity panel
   Opens / closes the right sidebar
   ===================== */
const friendsButton = document.querySelector('[data-toggle="friends"]');
const friendsPanel = document.getElementById("friends-panel");
const appShell = document.querySelector(".app");

if (friendsButton && friendsPanel && appShell) {
  const setOpen = (isOpen) => {
    friendsPanel.hidden = !isOpen;
    appShell.classList.toggle("app--friends", isOpen);
    friendsButton.setAttribute("aria-expanded", String(isOpen));
  };

  friendsButton.addEventListener("click", () => setOpen(friendsPanel.hidden));
  friendsPanel
    .querySelector('[data-close="friends"]')
    .addEventListener("click", () => setOpen(false));
}
