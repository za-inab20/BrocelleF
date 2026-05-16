import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";

import { describe, it, expect } from "vitest";

import Contact from "../Contact";



describe("Contact Page", () => {


  it("Should render contact page correctly", () => {
    render(<Contact />);

    const contactText = screen.getByText("Contact");

    expect(contactText).toBeInTheDocument();
  });



  it("Should update name input value", () => {
    render(<Contact />);

    const nameInput = screen.getByPlaceholderText("Enter your name");

    fireEvent.change(nameInput, {
      target: {
        value: "Zainab",
      },
    });

    expect(nameInput.value).toBe("Zainab");
  });



  it("Should update email input value", () => {
    render(<Contact />);

    const emailInput = screen.getByPlaceholderText("Enter your email");

    fireEvent.change(emailInput, {
      target: {
        value: "test@gmail.com",
      },
    });

    expect(emailInput.value).toBe("test@gmail.com");
  });
});
