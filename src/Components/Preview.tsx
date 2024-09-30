import { Modal, Image, Center, Group, Text, Badge, Indicator, Button } from "@mantine/core"
// impo

const Preview = (props: any) => {
    return (
        <Modal.Root opened={props.opened} onClose={props.close} size="70%" bg="#0a192f">
            <Modal.Overlay  />
            <Modal.Content className="PreviewContainer">
                <Modal.Header className="PreviewHeader">
                    <Modal.Title className="PreviewTitle">{props.title} {props.live ? (
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
                    )}</Modal.Title>
                    <Modal.CloseButton />
                </Modal.Header>
                <Image
                    src={props.image}
                    height={300}
                    fit="contain"
                    className="PreviewImage"
                />
                <Group className="PreviewTech">
                    {props.tech.map((tech:string, index:number) => index < 3 && <Badge key={index} size="lg" variant="light" color="#64ffda">{tech}</Badge>)}
                </Group>
                <Modal.Body className="PreviewBody">{props.info}</Modal.Body>
                <Group className="PreviewButtonContainer">
                    {/* Conditionally render buttons based on project.live */}
                    {props.live && (
                        <>
                        <a href={props.github} target="_blank">
                            <Button className="PreviewButton">View Code</Button>
                        </a>
                        <a href={props.link} target="_blank">
                            <Button className="PreviewButton">Live Link</Button>
                        </a>
                        </>
                    )}
                </Group>
            </Modal.Content>
        </Modal.Root>
    )
}
export default Preview