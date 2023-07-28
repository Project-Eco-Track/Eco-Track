export const iconAnim = {
  open: {
    opacity: 1,
    x: 0,
    rotate: "0deg",
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 80,
      damping: 9,
    },
  },
  closed: {
    opacity: 0.5,
    x: "-100%",
    rotate: "180deg",
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 50,
      damping: 10,
    },
  },
};
