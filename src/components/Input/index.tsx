import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import NumberInput from "./NumberInput";
import ColorInput from "./ColorInput";

export type InputSize = "small" | "medium" | "large";

export default {
  Text: TextInput,
  Password: PasswordInput,
  Number: NumberInput,
  Color: ColorInput,
};
