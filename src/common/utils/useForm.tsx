import { useState } from "react";
import { notification } from "antd";
import emailjs from "@emailjs/browser";

interface IValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });
  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    // EmailJS configuration from environment variables
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    try {
      if (Object.values(errors).every((error) => error === "")) {
        // Check if EmailJS is configured
        if (!serviceId || !templateId || !publicKey) {
          notification["error"]({
            message: "Configuration Error",
            description:
              "Email service is not properly configured. Please contact the administrator.",
          });
          return;
        }

        // Send email using EmailJS
        const result = await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
            to_name: "Websure Software",
          },
          publicKey
        );

        if (result.status === 200) {
          event.target.reset();
          setFormState(() => ({
            values: { ...initialValues },
            errors: { ...initialValues },
          }));
          notification["success"]({
            message: "Success",
            description: "Your message has been sent successfully!",
          });
        } else {
          notification["error"]({
            message: "Error",
            description:
              "There was an error sending your message, please try again later.",
          });
        }
      }
    } catch (error) {
      notification["error"]({
        message: "Error",
        description: "Failed to submit form. Please try again later.",
      });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
