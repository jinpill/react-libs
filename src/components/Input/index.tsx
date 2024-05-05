import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import NumberInput from "./NumberInput";

export type InputSize = "small" | "medium" | "large";

export default {
  Text: TextInput,
  Password: PasswordInput,
  Number: NumberInput,
};
