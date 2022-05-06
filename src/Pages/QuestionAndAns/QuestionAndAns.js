import React from 'react';
import './QuestionAndAns.css';
import questionImg from '../../images/questionans.gif';
import { Accordion, } from 'react-bootstrap'
import usePageTitle from '../../hooks/usePageTitle';





const QuestionAndAns = () => {
    return (
        <div className='mt-5 pt-5'>
            {
                usePageTitle('Blogs')
            }
            <div className="container">
                <h2 className='text-center py-2 '> <span style={{ color: 'red', fontWeight: 'bold' }}>Q</span>uestions and <span style={{ color: '#82cd00', fontWeight: 'bold' }}>A</span>nswers</h2>
                <div className="row d-flex align-items-center py-3">
                    <div className="col-lg-6 col-md-6 col-11 d-block m-auto">
                        <div className="accorddion" >
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>1. What is the Difference between javascript and nodejs ?</Accordion.Header>
                                    <Accordion.Body>
                                        <b>JavaScript</b> is a programming language. It running in any web browser with proper browser engine. <b>Nodejs</b> is an enterpreter and environment for javascript with some specific usefull libraries which JavaScript programming can use separately. Mainly use for any client side  activity for web application , like possiable auttribute validation or refreshing the page in a spacific interval or provide some dynamic  changes in web page without the page refresh. Nodejs is mainly use for accessing or performing any non- blocking operation of any peration system, like create or executing shell script or accessing  any hardware specific information  or running any backend job.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>2. When should you use nodejs and when should you use mongodb?</Accordion.Header>
                                    <Accordion.Body>
                                        There are many web servers built with <b>Nodejs</b> that will then use <b>MongoDB</b> for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node. js.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>3. What is the Differences between SQL and NOSQL databases?</Accordion.Header>
                                    <Accordion.Body>
                                        <b> SQL </b> databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive.A <b> NoSQL </b> database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>4. What is the purpose of jwt and how does it work?</Accordion.Header>
                                    <Accordion.Body>
                                    JSON Web Token or <b>JWT</b> is an open standard used to share security information between two parties a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.The application or client requests authorization to the authorization server.When the authorization is granted, the authorization server returns an access token to the application.The application uses the access token to access a protected resource (like an API).
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-11 d-block m-auto order-first order-md-last">
                        <div className="question-img-frame">
                            <img src={questionImg} className="img-fluid d-block m-auto w-100 mb-3" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionAndAns;
