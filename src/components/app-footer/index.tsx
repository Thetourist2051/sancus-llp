import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

type Props = {};

const AppFooterComponent: React.FC<Props> = ({}) => {
  return (
    <>
      <section className={`py-md-4 py-3 gradient footer-section`} id="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12 p-0">
              <div className="d-flex justify-content-md-start justify-content-center align-items-center">
                <h6 className="m-0 text-mutedd mb-md-0 mb-3">
                  © 2025 Sancus LLP. All rights reserved
                </h6>
              </div>
            </div>
            <div className="col-md-6 col-12 p-0">
              <div className="d-flex justify-content-md-end justify-content-center align-items-center social-icons">
                <div className="social-icon">
                    <Icon icon={"mdi:facebook"} height={28} width={28}></Icon>
                </div>
                <div className="social-icon">
                    <Icon icon={"mdi:linkedin"} height={28} width={28}></Icon>
                </div>
                <div className="social-icon">
                    <Icon icon={"prime:twitter"} height={28} width={28}></Icon>
                </div>
                <div className="social-icon">
                    <Icon icon={"mdi:instagram"} height={28} width={28}></Icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppFooterComponent;
