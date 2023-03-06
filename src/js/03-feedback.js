import throttle from 'lodash.throttle';

const STORAGE_KEY_FEEDBACK = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.input.addEventListener('input', throttle(getFormValues, 1000));
refs.textarea.addEventListener('input', throttle(getFormValues, 1000));
refs.form.addEventListener('submit', onFormSubmit);

function getFormValues() {
  const formElem = {
    email: refs.input.value,
    message: refs.textarea.value,
  };

  storageUpdate(formElem);
}

function storageUpdate(obj) {
  localStorage.setItem(STORAGE_KEY_FEEDBACK, JSON.stringify(obj));
}

const savedStorageValues = JSON.parse(
  localStorage.getItem(STORAGE_KEY_FEEDBACK)
);

if (savedStorageValues) {
  refs.input.value = savedStorageValues.email;
  refs.textarea.value = savedStorageValues.message;
}

function onFormSubmit(e) {
  e.preventDefault();

  if (refs.input.value === '' || refs.textarea.value === '') {
    return alert('You should fill all fields');
  }

  logFormValues();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY_FEEDBACK);
}

function logFormValues() {
  const fieldValues = {
    email: refs.input.value,
    message: refs.textarea.value,
  };

  console.log(fieldValues);
}
