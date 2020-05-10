import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../buildingBlocks/buttons";
import Text from "../buildingBlocks/typography";

export default {
  title: "Button",
  component: Button,
};

export const ButtonText1 = () => (
  <Button bright onClick={action("clicked")}>
    <Text black normal>
      Hello Button
    </Text>
  </Button>
);

export const ButtonText2 = () => (
  <Button primary onClick={action("clicked")}>
    <Text black normal>
      Hello Button
    </Text>
  </Button>
);

export const ButtonText3 = () => (
  <Button border onClick={action("clicked")}>
    <Text black normal>
      Hello Button
    </Text>
  </Button>
);
