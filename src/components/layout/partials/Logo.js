import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h3 className="m-0">
        <Link to="/">
          Fatima<span className="text-color-primary">ZZ</span>.
        </Link>
      </h3>
    </div>
  );
}

export default Logo;
