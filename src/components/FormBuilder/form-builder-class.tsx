import { Fragment, ReactNode } from "react";
import { Checkbox, CheckboxProps } from "../Checkbox/checkbox-component";

export interface InputForm {
  component: ReactNode;
}

export class FormBuilder {
  constructor(private readonly components: ReactNode[]) {}

  checkbox(props: CheckboxProps): FormBuilder {
    const checkbox = <Checkbox {...props} />;
    this.components.push(checkbox);
    return this;
  }

  build(): ReactNode[] {
    return this.components.map((c, i) => <Fragment key={i}>{c}</Fragment>);
  }
}
