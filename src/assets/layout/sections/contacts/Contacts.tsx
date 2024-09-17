import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../../coponents/SectionTitle";
import contactImage from './../../../images/contact-image.png'


export const Contacts = () => {
    return (
        <SContacts>
            <SectionTitle>Contact me</SectionTitle>
            <FormWrapper>

                <img src={contactImage} alt="contact"/>
                <SForm>
                    <input type='email' placeholder='Enter email address'/>
                    <textarea placeholder='Enter message...'/>
                    <button type="submit">Send Message</button>
                </SForm>

            </FormWrapper>

        </SContacts>
    );
};


const SContacts = styled.section`
    background-color: aqua;

`

const FormWrapper = styled.div`
display: flex;
    justify-content: space-around;
`

const SForm = styled.form`
display: flex;
    flex-direction: column;
    min-width:312px;
    gap: 30px;
`
