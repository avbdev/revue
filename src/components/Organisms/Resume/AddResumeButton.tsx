import { Button, Card } from "@mantine/core";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Plus } from "tabler-icons-react";

export const AddResumeButton: FC = () => {
  // const theme = useMantineTheme();
  // const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <>
      <Card
        shadow="sm"
        p="lg"
        style={{ maxWidth: 500, width: 200, height: 200, display: "flex", flexDirection: "column" }}
      >
        <Link to={"/resume/new"} style={{ textDecoration: "none" }}>
          <Card.Section
            style={{ justifyContent: "center", alignItems: "center", paddingTop: 35, display: "flex", flex: 3 }}
          >
            {/* <Image
          src=""
          height={160}
          alt="Norway"
        /> */}
            <Plus size={48} color="#fff" />
          </Card.Section>

          {/* <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group> */}

          {/* <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text> */}
          <Card.Section style={{ justifyContent: "center", display: "flex", flex: 1, padding: 20 }}>
            <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
              New Resume
            </Button>
          </Card.Section>
        </Link>
      </Card>
    </>
  );
};
