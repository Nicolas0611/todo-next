"use client";

import { FormBuilder } from "@/components/FormBuilder/form-builder-class";
import { useState } from "react";

const BuilderPage = () => {
  const [check, setCheck] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ check });
  };

  const formBuilder = new FormBuilder([])
    .checkbox({
      label: "test",
      checked: check,
      name: "test-checkbox",
      onChange: setCheck,
    })
    .checkbox({
      label: "test",
      checked: check,
      name: "test-checkbox",
      onChange: setCheck,
    })
    .build();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formBuilder}
      <button
        type="submit"
        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default BuilderPage;
