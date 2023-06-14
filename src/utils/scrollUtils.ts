export const scrollToSection = (sectionId: string) => {
  const target = document.querySelector(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};