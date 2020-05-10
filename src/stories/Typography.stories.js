import React from "react";
import { withA11y } from "@storybook/addon-a11y";
// import { action } from "@storybook/addon-actions";
import Text from "../buildingBlocks/typography";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Typography",
  component: Text,
  decorator: [withA11y, withKnobs],
};

export const Typography = () => (
  <div>
    <Text green bold>
      This is a green bold text
    </Text>
    <br />
    <Text darkbackground white bold>
      This is a white bold text
    </Text>
    <br />
    <Text black bold>
      This is a black bold text
    </Text>
    <br />
    <Text yellow bold>
      This is a yellow bold text
    </Text>
    <br />
    <Text green normal>
      This is a green noraml text
    </Text>
    <br />
    <Text darkbackground yellow normal>
      This is a yellow normal text
    </Text>
    <br />
    <Text black normal>
      This is a black noraml text
    </Text>
    <br />
    <Text darkbackground white normal>
      This is a white normal text
    </Text>
    <br />
  </div>
);
