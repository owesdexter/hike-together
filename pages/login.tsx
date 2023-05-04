import { useState, useMemo } from "react";
import { Button, Form } from "react-bootstrap";
import { LINE_AUTH_ID } from "@/config/line";
import { Input } from "@/components/form/input";
import { useTranslation } from "next-i18next";
import { HandleChangeType } from "@/types";
import { generateRandomAlphaNumeric } from "@/utils";
import Joi from "joi";

type TProps = {};

const initInputValues = {
  account: "",
  password: "",
};

export default function Login({}: TProps) {
  const [values, setValues] = useState({ initInputValues });
  const randomString = useMemo(() => generateRandomAlphaNumeric(), []);
  const { t } = useTranslation("common");

  const handleLINELogin = () => {
    window.location.replace(
      `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${LINE_AUTH_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&state=${randomString}&scope=profile`
    );
  };

  const schema = Joi.object({
    account: Joi.string()
      .required()
      .email({ tlds: { allow: false } }), // Fix Bug: https://github.com/hapijs/joi/issues/2390
    password: Joi.string()
      .required()
      .alphanum()
      .messages({ "any.required": "HIHI" }),
  });

  const getData = (e: any) => {
    console.log(e.target.value);
  };

  const handleChange = ({ name, value }: HandleChangeType<string>) => {
    const valid = schema.validate({ ...values, [name]: value });
    console.log(valid);
  };

  return (
    <>
      <Form>
        <Input
          name="account"
          label={t("__t_Email")}
          defaultValue=""
          type="email"
          placeholder="Enter mail"
          errors={t("Please enter account")}
          onChange={handleChange}
        />
        <Input
          name="password"
          label={t("__t_Password")}
          defaultValue=""
          type="password"
          placeholder="Password"
          errors={t("Please enter account")}
          onChange={handleChange}
        />
        <Button variant="outline" type="submit" onClick={getData}>
          Register
        </Button>
      </Form>
      <Button variant="primary" onClick={handleLINELogin}>
        LINE
      </Button>
    </>
  );
}
