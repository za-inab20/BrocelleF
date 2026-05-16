import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";

import { describe, it, expect } from "vitest";

import { BrowserRouter } from "react-router-dom";

import Register from "../Register";

describe("Register Page", () => {
  it("Should render register page", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
    );

    const registerText = screen.getByText("Register Now!");

    expect(registerText).toBeInTheDocument();
  });

  it("Should update name input", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
    );

    const nameInput = screen.getByPlaceholderText("Name");

    fireEvent.change(nameInput, {
      target: {
        value: "Zainab",
      },
    });

    expect(nameInput.value).toBe("Zainab");
  });
});
