import { useState } from 'react';

const useForm = (callback, initialFormFields = {}) => {
  const [values, setValues] = useState(initialFormFields);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = event => {
    event.persist();
    setValues(FormValues => ({
      ...FormValues,
      [event.target.name]: event.target.value
    }));
  };

  return { handleChange, handleSubmit, values };
};

export default useForm;
