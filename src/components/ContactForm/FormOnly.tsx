import { Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { FormGroup, Span, ButtonContainer } from "./styles";

interface ValidationTypeProps {
  type: string;
}

interface FormOnlyProps {
  t: TFunction;
}

const FormOnly = ({ t }: FormOnlyProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <FormGroup autoComplete="off" onSubmit={handleSubmit}>
      <Col span={24}>
        <Input
          type="text"
          name="name"
          placeholder={t("Your Name")}
          value={values.name || ""}
          onChange={handleChange}
        />
        <ValidationType type="name" />
      </Col>
      <Col span={24}>
        <Input
          type="text"
          name="email"
          placeholder={t("Your Email")}
          value={values.email || ""}
          onChange={handleChange}
        />
        <ValidationType type="email" />
      </Col>
      <Col span={24}>
        <TextArea
          placeholder={t("Your Message")}
          value={values.message || ""}
          name="message"
          onChange={handleChange}
        />
        <ValidationType type="message" />
      </Col>
      <ButtonContainer>
        <Button name="submit">{t("Submit")}</Button>
      </ButtonContainer>
    </FormGroup>
  );
};

export default withTranslation()(FormOnly);
