import React from "react";

const footer = () => {
  return (
    <div className="Flex flex-col gap-12 md:flex-row md:justify-between">
      <ul className="flex flex-row gap-6 text-gray-700">
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
      <div className="flex gap-2">
        <img src="./assests/Help Avatar.svg" alt="Help" />
        <div>
          <br />
          <p className="font-playfair font-thin">Have any questions?</p>
          <a href="#" className="font-lato font-medium">
            Talk to a specialist
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
