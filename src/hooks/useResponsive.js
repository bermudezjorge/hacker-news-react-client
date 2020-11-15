export default function useResponsive() {
  return window.matchMedia("(max-width: 640px)").matches;
}
