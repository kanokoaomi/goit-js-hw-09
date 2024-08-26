const feedbackForm = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: '',
};

// auto fill

const fillFields = filledFields => {
  for (const key in filledFields) {
    // console.log(key, ':', filledFields[key]);
    feedbackForm.elements[key].value = filledFields[key];
  }
};
fillFields(JSON.parse(localStorage.getItem('feedback-form-state')));

// input listener

const formChangeListener = event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  } else {
    formData.message = event.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
feedbackForm.addEventListener('input', formChangeListener);

// submit listener

const btn = document.querySelector('.feedback-form button');

const btnSubmitListener = event => {
  event.preventDefault();
  const filledFields = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  feedbackForm.reset();
  formData.email = '';
  formData.message = '';
};
feedbackForm.addEventListener('submit', btnSubmitListener);
