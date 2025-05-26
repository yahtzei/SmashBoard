export default {
  directives: {
    clickOutside: {
      inserted(el, binding) {
        const handler = (e) => {
          let clickedOutside = e.target !== el && !el.contains(e.target);

          if (el.nodeName === 'DIALOG' && e.target.nodeName === 'DIALOG') {
            clickedOutside = true;
          }

          if (clickedOutside && typeof binding.value === 'function') {
            binding.value(e);
          }
        };
        el.__clickOutsideHandler__ = handler;
        document.addEventListener('mousedown', handler);
      },
      unbind(el) {
        document.removeEventListener('mousedown', el.__clickOutsideHandler__);
        delete el.__clickOutsideHandler__;
      }
    }
  }
};
