import { Card, Image, Text, Badge, Button, Group, Indicator } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Preview from './Preview';

interface ProjectCardProps {
  title: string;
  info: string;
  image: string;
  live: boolean;
  tech: string;
  link: string;
  github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card  onClick={open} shadow="lg" padding="sm" radius="lg" withBorder className="Card">
        <Card.Section>
          <Image
            src={props.image}
            height={200}
            alt={props.title}
            className="Project_Image"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500} className="cardTitle">
            {props.title}
            {props.live ? (
              <Badge
                variant="outline"
                color="red"
                rightSection={
                  <Indicator
                    color="red"
                    position="middle-center"
                    size={7}
                    processing
                  />
                }
              >
                Live
              </Badge>
            ) : (
              <Badge variant="outline" color="green">
                Coming Soon
              </Badge>
            )}
          </Text>
        </Group>

        <Text lineClamp={4} size="sm" c="gray">
          {props.info}
        </Text>

        <Button onClick={open} className="cardButton" fullWidth mt="md" radius="md">
          Preview
        </Button>
      </Card>

      <Preview opened={opened} close={close} title = {props.title} info = {props.info} image = {props.image} live = {props.live} tech = {props.tech} link = {props.link} github = {props.github} />
    </>
  );
};

export default ProjectCard;
