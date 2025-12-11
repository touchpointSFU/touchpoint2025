import React, { Fragment } from "react";
import SCHEDULE from "@/data/schedule";
import { getPageColorSchemeProps } from "@/utils/getPageColorSchemeProps";
import { useDocumentTitle } from "usehooks-ts";
import Footer from "@/components/Footer";

export const getServerSideProps = getPageColorSchemeProps("real-blue");

export const Schedule = () => {
  return (
    <Fragment>
      <div className="px-body pt-nav-height min-h-screen pb-24">
        <div
          className="grid text-big-sans gap-x-4 gap-y-[1em] mt-[1em]"
          style={{
            gridTemplateColumns: "1fr 5fr",
          }}
        >
          {SCHEDULE.map((item, index) => (
            <Fragment key={index}>
              <div className="font-light">{item.time}</div>
              <div>
                {item.type === "event" && (
                  <span className="font-light">{item.event}</span>
                )}
                {item.type === "talk" && (
                  <>
                    <span className="font-bold">{item.event}</span>
                    <span className="font-light">, {item.affiliation}</span>
                  </>
                )}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      <Footer quote="This is, finally, a time to come together, and celebrate, as a community." />
    </Fragment>
  );
};

export default Schedule;
