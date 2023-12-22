import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+$/, "Cannot have numeric values ")
    .min(2, "Name too short")
    .max(16, "Name too long ")
    .required("Required field"),

  SurName: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+$/, "Cannot have numeric values ")
    .min(2, "Sur Name too short")
    .max(16, "Sur Name too long ")
    .required("Required field"),
  Age: Yup.string()
    .matches(/^(1[89]|[2-9]\d)$/, "Your age is not suitable")
    .min(1, "Age too short")
    .max(3, "Age too long ")
    .required("Required field"),
  Address: Yup.string()
    .min(5, "Address too short")
    .max(30, "Address too long ")
    .required("Required field"),
  phone: Yup.string()
    .matches(/^\+?[0-9]+(?:[\s\-]?[0-9]+)*$/, "Must only be numbers")
    .min(7, "Address too short")
    .max(13, "Address too long ")
    .required("Required field"),
});

export default validationSchema;
