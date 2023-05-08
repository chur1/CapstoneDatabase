import { useState } from 'react';
import { useRouter } from 'next/router';
import { setToken } from '../lib/auth';
import { fetcher } from '../lib/api';
import {Input, Form} from '../styles/Register';

const Register = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
    age: '',
    description: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseData = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local/register`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: userData.email,
            password: userData.password,
            username: userData.username,
            name: userData.name,
            age: userData.age,
            description: userData.description,
          }),
          method: 'POST',
        }
      );
      console.log(responseData);
      setToken(responseData);
      router.redirect('/profile');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div>
      <Form>
        <form
          onSubmit={handleSubmit}
        >
          <Input>
            <h1>
              <span>
                Register
              </span>
            </h1>
            <div>
              <label>
                Username
              </label>
              <input
                type="text"
                name="username"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div>
              <label>
                Email
              </label>
              <input

                type="text"
                name="email"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div>
              <label>
                Password
              </label>
              <input

                type="text"
                name="password"
                className="md:p-2 form-input py-2 rounded mx-2"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
          </Input>
          <Input>
            <h1>
              <span>
                More Information
              </span>
            </h1>
            <div>
              <label>
                Name
              </label>
              <input
                type="text"
                name="name"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div>
              <label>
                Age
              </label>
              <input
                type="text"
                name="age"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div>
              <label htmlFor="description">
                Description
              </label>
              <input
                type="text"
                name="description"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
          </Input>
          <button
            type="submit"
          >
            Register
          </button>
        </form>
      </Form>
    </div>
  );
};

export default Register;
