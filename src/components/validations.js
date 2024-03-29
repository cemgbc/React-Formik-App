
import * as yup from "yup";
 const validations =yup.object().shape( {
 email:yup
 .string()
 .email("Geçerli bir email giriniz.")
 .required("Zorunlu Alan."),
 password:yup
 .string()
 .min(5,"Parolaniz en az 5 karakter olmalidir.")
 .required("Zorunlu Alan"),
 passwordConfirm: yup
 .string()
 .oneOf([yup.ref("password")],"Parolalar uyuşmuyor")
 .required("Zorunlu Alan"),
});
export default validations;