import React from "react";

export interface IUseForm {
  value: string;
  error: string | null;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  validate: () => boolean;
}

interface ValidationInterface {
  pattern: RegExp;
  message: string;
}

const useForm = (
  required: boolean,
  validatation?: ValidationInterface[]
): IUseForm => {
  const [value, setValue] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);

  function validateAtEachChangeIfThereIsAnError() {
    if (error) validate();
  }

  React.useEffect(validateAtEachChangeIfThereIsAnError, [
    value,
    validateAtEachChangeIfThereIsAnError,
  ]);

  function validate() {
    if (required) {
      setError("this field can not be empty");
      return value.length !== 0;
    }
    if (validatation) {
      validatation.forEach((rule) => {
        const regex = rule.pattern;
        if (!regex.test(value)) {
          setError(rule.message);
          return false;
        }
      });
    }
    return true;
  }

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setValue(target.value);
  }

  return { value, error, onChange, validate: () => validate() };
};

export default useForm;
