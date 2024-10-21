import Input from './Input';
import useInput from '../hooks/useInput';

export default function Login() {
  const {
    value: emailValue,
    didEdit: didEmailEdit,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
  } = useInput('');

  const {
    value: passwordValue,
    didEdit: didPasswordEdit,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
  } = useInput('');

  const emailIsInvalid = didEmailEdit && !emailValue.includes('@');
  const passwordIsInvalid = didPasswordEdit && passwordValue.trim().length > 6;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('@@ Submitted');
    console.log('@@ email:', emailValue);
    console.log('@@ password:', passwordValue);

    const emailIsInvalid = emailValue === '';
    const passwordIsInvalid = passwordValue === '';

    if (emailIsInvalid || passwordIsInvalid) {
      console.log('@@@ Invalid credentials. something is missing.');
      emailIsInvalid && console.log('@@@ Please insert email data.');
      passwordIsInvalid && console.log('@@@ Please insert password data.');

      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={emailIsInvalid ? 'Please enter a valid email!' : undefined}
        />
      </div>

      <div className="control-row">
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={
            passwordIsInvalid ? 'Please enter a valid password!' : undefined
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
