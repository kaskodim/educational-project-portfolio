import React from 'react';
import styled, {css} from "styled-components";
import {SectionTitle} from "../../../../coponents/SectionTitle";
import contactImage from './../../../images/contact-image.png'
import {Container} from "../../../../coponents/Container";
import {ReactComponent as PaperPlane} from "../../../images/icon/iconPaperPlane.svg";

export const Contacts = () => {
    return (
        <SContacts>
            <Container>
                <SectionTitle>Contact me</SectionTitle>


                <FormWrapper>

                    <Image src={contactImage} alt="contact"/>
                    <SForm>
                        <FieldWrapper>
                            <Input type='email' placeholder='Enter email address'/>
                            <TextArea placeholder='Enter message...'/>
                        </FieldWrapper>

                        <Button type="submit">

                            <span>Send Message</span>
                            <PaperPlane/>
                        </Button>
                    </SForm>

                </FormWrapper>
            </Container>


        </SContacts>
    );
};


const SContacts = styled.section`
    margin-bottom: 70px;
`

const Image = styled.img`
    height: 412px;
`

const FormWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`

const SForm = styled.form`
    display: block;
    min-width: 312px;
    gap: 30px;
    width: 100%;
    margin: 30px 0 30px 65px;


`

const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;


`

const fieldStyles = css`
    padding: 12px 18px 12px 18px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
    0 2px 1px 0 rgba(0, 0, 0, 0.12),
    0 1px 1px 0 rgba(0, 0, 0, 0.14);
    font-family: 'Be Vietnam Pro', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
`

const Input = styled.input`
    height: 54px;
    ${fieldStyles}
`

const TextArea = styled.textarea`
    margin: 40px 0;
    outline: 1px solid rgba(0, 0, 0, 0.12);
    height: 158px;
    resize: none;
    ${fieldStyles}
`

const Button = styled.button`
    height: 50px;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 12px 24px 12px 24px;
    background: #343D68;
    color: white;
    margin: 0 auto;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;

`