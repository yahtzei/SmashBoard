export default {
  directives: {
    clickOutside: {
      inserted: (el, binding) => {
        document.addEventListener("mousedown", (e) => {
          const clickedOutside = e.target !== el && !el.contains(e.target);
          if (clickedOutside && typeof binding.value === 'function') {
            binding.value(e);
          }
        });
      }
    }
  }
}