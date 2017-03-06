var React = require('react');
var {Link} = require('react-router')
var Examples = () => {
  return (
    <div>
      <h1 className='text-center page-title'>Top Cities</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=San Francisco'>San Francisco, CA</Link>
        </li>
        <li>
          <Link to='/?location=Baltimore'>Baltimore, MD</Link>
        </li>
        <li>
          <Link to='/?location=Seoul'>Seoul</Link>
        </li>
        <li>
          <Link to='/?location=Taipei'>Taipei</Link>
        </li>
        <li>
          <Link to='/?location=Paris'>Paris</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples;
