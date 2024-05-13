import React, { Component } from 'react';
import ArticleList from './ArticleList';
import { Container, Header, Loader, Message } from "semantic-ui-react";
import axios from 'axios';

class AgriNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles() {
    const apiKey = 'be31f7b5ec6b4e639b98ffd658c65d6b';
    const url = `https://newsapi.org/v2/everything?q=agriculture&language=en&sortBy=publishedAt&apiKey=${apiKey}`;
    // Make HTTP request with Axios
    axios
      .get(url)
      .then(res => {
        const articles = res.data.articles;
        // Set state with result
        console.log(articles);
        this.setState({ articles: articles, loading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true, loading: false });
      });
  }

  render() {
    const { articles, loading, error } = this.state;

    return (
      <Container>
        <Header as="h2" style={{ textAlign: "center", margin: 20, fontSize: 30, color: "brown" }}>
          Agriculture Related Recent Activities across the Globe
        </Header>
        {loading && <Loader active inline='centered' />}
        {error && <Message negative>
          <Message.Header>Error</Message.Header>
          <p>Could not fetch any articles. Please try again.</p>
        </Message>}
        {!loading && !error && articles.length > 0 ?
          <ArticleList articles={articles} /> :
          null
        }
      </Container>
    );
  }
}

export default AgriNews;
