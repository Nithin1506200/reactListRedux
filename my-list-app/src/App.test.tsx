import { render, screen } from "@testing-library/react";
import App from "./App";
import store from "./store/Redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
test("text", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  const text = screen.getByText(/Users/i);

  expect(text).toBeInTheDocument();
});
test("text2", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  const text = screen.getByText(/Userss/i);

  expect(text).toBeInTheDocument();
});
