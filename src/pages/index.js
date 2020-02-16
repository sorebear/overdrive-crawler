import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

class Index extends Component {

  componentDidMount() {
    this.fetchOverdrive();
  }

  async fetchOverdrive() {
    const res = await axios.get('/.netlify/functions/overdrive');
    console.log(res);
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    );
  }
}

export default Index;
