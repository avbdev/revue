import { ActionIcon, Navbar } from "@mantine/core";
import { Menu2 } from "tabler-icons-react";
import { MainLinks } from "./MainLinks";
import { NavbarUser } from "./NavbarUser";

export const AppNavbar: React.FC = () => {
  return (
    <Navbar p="lg" width={{ base: 300 }}>
      {/* <Navbar.Section mt="xs">
        <AppBranding />
      </Navbar.Section> */}
      <Navbar.Section mt="xs">
        <ActionIcon variant="hover">
          <Menu2 size={16} />
        </ActionIcon>
      </Navbar.Section>
      <Navbar.Section grow mt="md">
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>
        <NavbarUser />
      </Navbar.Section>
    </Navbar>
  );
};
