import Link from "next/link";
import React from "react";

const DemoOnePage = async () => {
  return (
    <React.Fragment>
      <main>
        <h3>Demo One Page</h3>
        <Link href={"/"}>Go To Home</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          laborum cum quidem incidunt earum quibusdam corrupti itaque aliquid,
          at nulla accusamus, aperiam consequuntur delectus labore! Obcaecati
          accusamus pariatur est error debitis fugit reprehenderit officia!
        </p>
      </main>
    </React.Fragment>
  );
};

export default DemoOnePage;
