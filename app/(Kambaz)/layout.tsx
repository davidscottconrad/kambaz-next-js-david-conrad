"use client";
import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import Session from "./Account/session";

export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Provider store={store}>
      <Session>
        <div id="wd-kambaz">


          <div className="d-flex">
            <div>
              <KambazNavigation />
            </div>

            <div className="flex-fill ps-2 ms-2">
              {children}
            </div>
          </div>

        </div>
      </Session>
    </Provider >
  );
}
