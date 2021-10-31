import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faqs = () => {
    return (
        <>
            <h2>Vacation Travel FAQ</h2>
            <Accordion className='container'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>WHY SHOULD I USE A TRAVEL AGENT TO BOOK A VACATION?</Accordion.Header>
                    <Accordion.Body>
                        A travel agent takes all of the headache out of planning a trip and handles virtually all aspects of your travel, at absolutely no cost to you. The combined experience of the team and the feedback from our thousands of travelers provides an invaluable resource to the traveler planning an important trip.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> CAN YOU WORK WITHIN A CERTAIN BUDGET?</Accordion.Header>
                    <Accordion.Body>
                        Yes, we work within any and all realistic budgets, and an honest sharing of ideas and goals helps us immensely when making recommendations and suggested edits to travel plans.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> DOES IT COST MONEY TO GET A QUOTE?</Accordion.Header>
                    <Accordion.Body>
                        No, there is no fee for our vacation planning services as the travel vendors involved recognize our value and compensate us from the gross amount paid (what you would have paid even without our assistance). For those complicated international itineraries that require custom crafting and significant involvement.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>










        </>
    );
};

export default Faqs;