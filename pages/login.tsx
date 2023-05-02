import { useMemo } from "react";
import { Button, Form } from "react-bootstrap";
import { LINE_AUTH_ID } from "@/config/line";

const randomAlphaNumeric = () => {
  const RANDOM_STRING_LENGTH = 7;
  let s = "";
  Array.from({ length: RANDOM_STRING_LENGTH }).some(() => {
    s += Math.random().toString(36).slice(2);
    return s.length >= RANDOM_STRING_LENGTH;
  });
  return s.slice(0, RANDOM_STRING_LENGTH);
};

export default function Login() {
  const randomString = useMemo(() => randomAlphaNumeric(), []);
  const handleLINELogin = () => {
    window.location.replace(
      `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${LINE_AUTH_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&state=${randomString}&scope=profile`
    );
    // console.log(`LINELogin ${randomAlphaNumeric()}`);
  };

  const handleEmailLogin = (e: any) => {
    e.preventDefault();
    console.log(`handleEmailLogin`, e);
  };

  return (
    <>
      <Form onSubmit={handleEmailLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <Button variant="primary" onClick={handleLINELogin}>
        LINE
      </Button>
      <Button variant="outline" onClick={handleEmailLogin}>
        Register
      </Button>
    </>
  );
}
