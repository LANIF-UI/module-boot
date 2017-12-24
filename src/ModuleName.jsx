import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ModuleName extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
  };

  render() {
    const { className } = this.props;
    return (
      <div className={className}>module</div>
    );
  }
}
