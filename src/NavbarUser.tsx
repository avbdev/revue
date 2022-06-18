import React from "react";
import { ChevronRight, ChevronLeft } from "tabler-icons-react";
import { UnstyledButton, Group, Avatar, Text, Box, useMantineTheme } from "@mantine/core";
import { sampleData } from "./templates/ResumeOne/data";

export function NavbarUser() {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
      }}
    >
      <UnstyledButton
        sx={{
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        }}
      >
        <Group>
          <Avatar src="" radius="xl" />
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {sampleData.currentUser.preferredName}
            </Text>
            <Text color="dimmed" size="xs">
              {sampleData.currentUser.userEmail}
            </Text>
          </Box>

          {theme.dir === "ltr" ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Group>
      </UnstyledButton>
    </Box>
  );
}