import { useState } from 'react';

function CreditCardForm() {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required.';
    if (!/^\d{16}$/.test(formData.cardNumber)) newErrors.cardNumber = 'Card number must be 16 digits.';
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry)) newErrors.expiry = 'Expiry must be MM/YY.';
    if (!/^\d{3,4}$/.test(formData.cvv)) newErrors.cvv = 'CVV must be 3 or 4 digits.';

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>⚠️ This is a fake form. Do not enter real credit card info.</p>

      <div>
        <label>Cardholder Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label>Card Number</label>
        <input
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          maxLength={16}
        />
        {errors.cardNumber && <p>{errors.cardNumber}</p>}
      </div>

      <div>
        <label>Expiry (MM/YY)</label>
        <input
          name="expiry"
          value={formData.expiry}
          onChange={handleChange}
          maxLength={5}
        />
        {errors.expiry && <p>{errors.expiry}</p>}
      </div>

      <div>
        <label>CVV</label>
        <input
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          maxLength={4}
        />
        {errors.cvv && <p>{errors.cvv}</p>}
      </div>

      <button type="submit">Submit (Fake)</button>

      {submitted && <p>Form submitted successfully (fake)</p>}
    </form>
  );
}

export default CreditCardForm;
