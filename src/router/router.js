/* Modules */
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Layout from './Layout';
import styled from 'styled-components';
/* Containers */
import App from '../containers/App/App';
import DetailsPage from '../containers/DetailsPage/DetailsPage';
import Nav from './../components/Nav/Nav';

//TODO Adjust routes

const MyRouter = () => (
  <React.Fragment>
    <Layout>
      <Nav />
      <Container>
        <Route exact path="/" component={App} />
        <Route exact path="/details" component={DetailsPage} />
      </Container>
    </Layout>
  </React.Fragment>
);

const Container = styled.div`
  margin: 30px;
`;

export default withRouter(connect()(MyRouter));
