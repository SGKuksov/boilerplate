import { createError, hideAllError, checkInputs, getFormData } from '@/components/form/form.utils';

function Form() {
  let _isFormValid = null;

  function reset(form) {
    const inputs = Array.from(form.querySelectorAll('input, select, textarea'));
    hideAllError(inputs);
  }

  function validate(form) {
    if (!form) return;
    reset(form);

    const inputs = Array.from(form.querySelectorAll('input, select, textarea'));
    _isFormValid = checkInputs(inputs);
  }

  function documentFocusHandler(e) {
    const { target } = e;

    if (!target) return;
    const form = target.closest('[data-form]');
    validate(form);
  }

  function documentBlurHandler(e) {
    const { target } = e;

    if (!target) return;
    const form = target.closest('[data-form]');
    validate(form);
  }

  function documentInputHandler(e) {
    const { target } = e;

    if (!target) return;
    const form = target.closest('[data-form]');
    validate(form);
  }

  function documentChangeHandler(e) {
    const { target } = e;

    if (!target) return;
    const form = target.closest('[data-form]');
    validate(form);
  }

  function documentSubmitHandler(e) {
    e.preventDefault();

    const form = e.target.closest('[data-form]');
    validate(form);

    if (_isFormValid) {
      console.log('Submit');
      // form.submit();
    }
  }

  function init() {
    const forms = Array.from(document.forms);
    forms.forEach(form => {
      const inputs = Array.from(form.querySelectorAll('[required]'));

      inputs.forEach(input => {
        // eslint-disable-next-line no-param-reassign
        input.dataset.required = true;
        // eslint-disable-next-line no-param-reassign
        input.required = false;

        // TODO Менять атрибут type у полей по словарю
        // email -> text
        // datetime -> text

        if (input.type === 'email') {
          // eslint-disable-next-line no-param-reassign
          input.type = 'text';
        }
      });
    });

    document.addEventListener('focus', documentFocusHandler);
    document.addEventListener('blur', documentBlurHandler);
    document.addEventListener('input', documentInputHandler);
    document.addEventListener('change', documentChangeHandler);
    document.addEventListener('submit', documentSubmitHandler);
  }

  function destroy() {
    const forms = Array.from(document.forms);
    forms.forEach(form => {
      const inputs = Array.from(form.querySelectorAll('[data-required]'));

      inputs.forEach(input => {
        // eslint-disable-next-line no-param-reassign
        input.required = true;
      });
    });

    document.addEventListener('focus', documentFocusHandler);
    document.addEventListener('blur', documentBlurHandler);
    document.addEventListener('input', documentInputHandler);
    document.addEventListener('change', documentChangeHandler);
    document.addEventListener('submit', documentSubmitHandler);
  }

  return {
    init,
    destroy,
    isFormValid: _isFormValid,
    validate,
    reset,
    getFormData,
    createError
  };
}

export { Form };
