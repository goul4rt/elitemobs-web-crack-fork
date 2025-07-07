import React from "react";
import { Menu, Flex } from "@mantine/core";
import { event as gaEvent } from "nextjs-google-analytics";
import { CgChevronDown } from "react-icons/cg";
import { VscJson } from "react-icons/vsc";
import { useModal } from "../../../store/useModal";
import { StyledToolElement } from "./styles";

export const EliteMobsMenu = () => {
  const setVisible = useModal(state => state.setVisible);

  return (
    <Menu shadow="md" withArrow>
      <Menu.Target>
        <StyledToolElement onClick={() => gaEvent("show_tools_menu")}>
          <Flex align="center" gap={3}>
            EliteMobs <CgChevronDown />
          </Flex>
        </StyledToolElement>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          fz={12}
          leftSection={<VscJson />}
          onClick={() => {
            setVisible("EliteMobsModal", true);
            gaEvent("open_elitemobs_modal");
          }}
        >
          Create Item
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
