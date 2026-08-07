export const scrollToSection = (e, id) => {
  if (e) {
    e.preventDefault();
  }
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -70; // Account for fixed navbar height
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
