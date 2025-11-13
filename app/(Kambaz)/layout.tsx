"use client";
import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import Session from "./Account/Session";


//this component is the template that sets up your app's global state and its visual structure, 
//ensuring every page looks consistent and is connected to the Redux data store.

export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Provider store={store}>
      <Session>
        {/*This sets up the basic visual structure, often using Flexbox (className="d-flex") to create two main columns. */}
        <div id="wd-kambaz">
          <div className="d-flex">
            <div>
              {/*It renders a reusable navigation bar or sidebar that appears on every page (like a menu). */}
              <KambazNavigation />
            </div>

            {/* Main Content Area */}
            <div className="wd-main-content-offset p-3 flex-fill">
              {children}
            </div>
          </div>
        </div>
      </Session>
    </Provider>

  );
}
