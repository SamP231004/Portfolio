// import React from 'react';
import { Modal, Tooltip } from '@mantine/core';
import { Document, Page, pdfjs } from 'react-pdf';
import { ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';
// import { Tooltip } from '@mantine/core';

const Resume = (props: any) => {
    return (
        <div id="Resume">
            <Modal.Root opened={props.opened} onClose={props.close} size={600} bg="#0a192f">
                <Modal.Overlay />
                <Modal.Content className="PreviewContainer ResumeContainer" >
                    <Modal.Header className="PreviewHeader">
                        <Modal.Title className="PreviewTitle ResumeImg">Resume
                            <Tooltip label="Download" className='ToolTip' position='right'>
                            <ActionIcon className='DownloadIcon' component='a' href='Resume.pdf' download="Samarth Patel" variant="outline">
                                <img  color='#64ffda' src="Images_Used/download.png" alt="" />
                            </ActionIcon>
                            </Tooltip>
                        </Modal.Title>
                        <Modal.CloseButton />
                    </Modal.Header>
                    <div className="DocumentContainer">
                        <Document file="Resume.pdf" className="FullWidthDocument">
                            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} className="FullWidthPage"/>
                        </Document>
                    </div>
                </Modal.Content>
            </Modal.Root>
        </div>
    );
};

export default Resume;
