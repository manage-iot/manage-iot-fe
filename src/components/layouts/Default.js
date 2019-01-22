import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

class DefaultLayout extends React.Component {

  render(props) {
    return (
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}


export default DefaultLayout;