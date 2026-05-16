import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { describe, it, expect } from "vitest";

import { BrowserRouter } from "react-router-dom";

import Login from "../Login";


describe("Login Page", () => {
  it("Should render login page correctly", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );

    const loginText = screen.getByText("Welcome Back!");

    expect(loginText).toBeInTheDocument();
  });


  it("Should update email input value", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );

    const emailInput = screen.getByPlaceholderText("Email");

    fireEvent.change(emailInput, {
      target: {
        value: "test@gmail.com",
      },
    });

    expect(emailInput.value).toBe("test@gmail.com");
  });
});
