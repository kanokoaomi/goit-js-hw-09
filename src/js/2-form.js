const feedbackForm = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: '',
};

const fillFields = filledFields => {
  for (const key in filledFields) {
    // console.log(key, ':', filledFields[key]);
    feedbackForm.elements[key].value = filledFields;
    console.log(fillFields[key]);
  }
};

fillFields(JSON.parse(localStorage.getItem('feedback-form-state')));

const formChangeListener = event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value;
  } else {
    formData.message = event.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

feedbackForm.addEventListener('input', formChangeListener);

// =========== returning answers in fields ===========

const btn = document.querySelector('.feedback-form button');

const btnSubmitListener = event => {
  event.preventDefault();
  const filledFields = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  }
  feedbackForm.reset();
};
// localStorage.removeItem('feedback-form-state');

feedbackForm.addEventListener('submit', btnSubmitListener);
