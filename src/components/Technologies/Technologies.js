import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { AiOutlineApi } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
    <Section id="tech">
        <SectionDivider />
        <br />
        <br />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I am currently learning many technologies in the web development world. Listed below are the technologies I am
            currently working on:
        </SectionText>
        <List>
            <ListItem>
                <DiReact size="3rem" />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experienced with <br />
                        React.js, Next.js, <br />
                        Tailwind, & Bootstrap
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size="3rem" />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experienced with <br />
                        Node, MongoDB, <br />& Firebase
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <AiOutlineApi size="3rem" />
                <ListContainer>
                    <ListTitle>APIs</ListTitle>
                    <ListParagraph>
                        Experienced with
                        <br />
                        API development <br />& utilization
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
