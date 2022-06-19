import { ActionIcon, Box, Group, useMantineColorScheme } from "@mantine/core";
import { MoonStars, Sun } from "tabler-icons-react";
import { Logo } from "../Logo";

export const AppBranding: React.FC = () => {
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
      })}
    >
      <Logo colorScheme={"dark"} />
      <Group position="apart">
        {/* <ActionIcon variant="default" onClick={() => {}} size={30}> */}
        {/* {colorScheme === "dark" ? <Sun size={16} /> : <MoonStars size={16} />} */}
        {/* <MoonStars size={16} /> */}
        {/* </ActionIcon> */}
      </Group>
    </Box>
  );
};
