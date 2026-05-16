import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";

import { describe, it, expect } from "vitest";

import Courses from "../Courses";



describe("Courses Page", () => {
 

  it("Should render courses title", () => {
    render(<Courses />);

    const title = screen.getByText("BORCELLE ONLINE COURSES");

    expect(title).toBeInTheDocument();
  });

  

  it("Should render search input", () => {
    render(<Courses />);

    const searchInput = screen.getByPlaceholderText("Search courses...");

    expect(searchInput).toBeInTheDocument();
  });



  it("Should update search input value", () => {
    render(<Courses />);

    const searchInput = screen.getByPlaceholderText("Search courses...");

    fireEvent.change(searchInput, {
      target: {
        value: "Scrubs",
      },
    });

    expect(searchInput.value).toBe("Scrubs");
  });
});
