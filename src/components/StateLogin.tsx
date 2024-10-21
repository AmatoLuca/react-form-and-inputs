import { useState } from 'react';

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const amailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('@@ Submitted');
    console.log('@@ email:', enteredValues.email);
    console.log('@@ password:', enteredValues.password);

    const emailIsInvalid = enteredValues.email === '';
    const passwordIsInvalid = enteredValues.password === '';

    if (emailIsInvalid || passwordIsInvalid) {
      console.log('@@@ Invalid credentials. something is missing.');
      emailIsInvalid && console.log('@@@ Please insert email data.');
      passwordIsInvalid && console.log('@@@ Please insert password data.');

      return;
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    identifier: string
  ) => {
    setEnteredValues((prevEnteredValues) => {
      return {
        ...prevEnteredValues,
        [identifier]: event.target.value,
      };
    });

    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: false }));
  };

  const handleInputBlur = (identifier: string) => {
    setDidEdit((prevEdit) => {
      return {
        ...prevEdit,
        [identifier]: true,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredValues.email}
            onChange={(event) => handleInputChange(event, 'email')}
            onBlur={() => handleInputBlur('email')}
          />
          <div className="control-error">
            {amailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onChange={(event) => handleInputChange(event, 'password')}
            onBlur={() => handleInputBlur('password')}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
