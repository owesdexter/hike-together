import React from "react";
import { Form } from "react-bootstrap";
import { HandleChangeType } from "@/types";

type TProps<T> = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  defaultValue?: T;
  errors?: string | null;
  className?: string;
  onChange: (attr: HandleChangeType<string>) => void;
  attr?: any;
};

export function Input<T>({
  name,
  label,
  type,
  placeholder,
  defaultValue,
  errors,
  className,
  onChange,
  attr,
}: TProps<T>) {
  const { Group, Label, Control, Text } = Form;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ name, value });
  };

  return (
    <Group className={className} controlId="account">
      <Label>{label}</Label>
      <Control
        name={name}
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        {...attr}
      />
      {errors && <Control.Feedback type="invalid">{errors}</Control.Feedback>}
    </Group>
  );
}
