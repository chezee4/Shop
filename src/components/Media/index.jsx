import React from "react";
import { Message, Messages, IconProduct } from "./styles";
import { BsInstagram, BsTelegram, BsFacebook, BsTwitter } from "react-icons/bs";
const Media = () => {
  return (
    <Messages>
      <Message>
        <IconProduct>
          <BsInstagram />
        </IconProduct>
      </Message>
      <Message>
        <IconProduct>
          <BsFacebook />
        </IconProduct>
      </Message>
      <Message>
        <IconProduct>
          <BsTelegram />
        </IconProduct>
      </Message>
      <Message>
        <IconProduct>
          <BsTwitter />
        </IconProduct>
      </Message>
    </Messages>
  );
};

export default Media;
