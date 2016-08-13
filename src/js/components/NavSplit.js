// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import Box from 'grommet/components/Box';

class NavSidebar extends Component {
  render () {
    const { logo, navMenu, onClose, title } = this.props;
    return (
      <Sidebar colorIndex="neutral-1" fixed={true}>
        <Header size="large" justify="between" pad={{horizontal: 'medium'}}>
          <Title onClick={onClose} a11yTitle="Close Menu">
            {logo}
            <span>{title}</span>
          </Title>
          <Button icon={<CloseIcon />} onClick={onClose}
            a11yTitle="Close Menu" />
        </Header>
        {navMenu}
      </Sidebar>
    );
  }
}

NavSidebar.propTypes = {
  logo: PropTypes.node,
  name: PropTypes.string,
  navMenu: PropTypes.node,
  onClose: PropTypes.func
};

class Main extends Component {
  render () {
    const { headerMenu, heading, logo, navActive, onOpenNavSidebar,
      search } = this.props;
    let title;
    if (navActive) {
      title = (
        <Title>
          <span>{heading}</span>
        </Title>
      );
    } else {
      title = (
        <Title onClick={onOpenNavSidebar} a11yTitle="Open Menu">
          {logo}
          <span>{heading}</span>
        </Title>
      );
    }
    return (
      <Box>
        <Header size="large" justify="between" pad={{horizontal: 'medium'}}>
          {title}
          {search}
          {headerMenu}
        </Header>
        {this.props.children}
      </Box>
    );
  }
}

Main.propTypes = {
  headerMenu: PropTypes.node,
  heading: PropTypes.string,
  logo: PropTypes.node,
  navActive: PropTypes.bool,
  onOpenNavSidebar: PropTypes.func,
  search: PropTypes.node
};

export default class NavSplit extends Component {

  constructor () {
    super();
    this.state = { navActive: true, responsive: 'multiple' };
  }

  render () {
    const { headerMenu, heading, logo, navMenu, search, title } = this.props;
    const { navActive, responsive } = this.state;

    let navSidebar;
    if (navActive) {
      navSidebar = (
        <NavSidebar logo={logo} navMenu={navMenu} title={title}
          onClose={() => this.setState({ navActive: false })} />
      );
    }
    const priority = (navActive && 'single' === responsive ? 'left' : 'right');

    return (
      <Split priority={priority} flex="right"
        onResponsive={(mode => this.setState({ responsive: mode }))}>
        {navSidebar}
        <Main logo={logo} heading={heading} headerMenu={headerMenu}
          search={search} navActive={navActive}
          onOpenNavSidebar={() => this.setState({ navActive: true })}>
          {this.props.children}
        </Main>
      </Split>
    );
  }
};

NavSplit.propTypes = {
  headerMenu: PropTypes.node,
  heading: PropTypes.string,
  logo: PropTypes.node,
  navMenu: PropTypes.node,
  search: PropTypes.node,
  title: PropTypes.string
};
