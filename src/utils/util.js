export const upperCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const handleReload = () => {
  window.location.reload();
};
export const handleScroll = (linkId) => {
  const targetSection = document.getElementById(linkId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
};
