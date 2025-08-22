import { ReactNode } from "react";
import {
  Checkbox as CheckboxComponent,
  CheckboxProps,
} from "./checkbox-component";

export class Checkbox {
  component: ReactNode;

  constructor(props: CheckboxProps) {
    this.component = <CheckboxComponent {...props} />;
  }
}
