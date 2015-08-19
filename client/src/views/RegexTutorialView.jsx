var React = require('react'); 

var Router = require('react-router');

var TutorialView = React.createClass({ 
  render: function(){ 
    return (
      <div id='page-content-wrapper'>
        <div className='container-fluid'>
        <h2>Cheatsheet</h2>
          <table className="table table-condensed">
            <tr className='info'><th colSpan="2">Character classes</th></tr>
            <tr><td>.</td><td>any character except newline</td></tr>
            <tr><td>\w  \d  \s</td><td>word, digit, whitespace</td></tr>
            <tr><td>\W  \D  \S</td><td>not word, digit, whitespace</td></tr>
            <tr><td>[abc]</td><td>any of a, b, or c</td></tr>
            <tr><td>[^abc]</td><td>not a, b, or c</td></tr>
            <tr><td>[a-g]</td><td>character between a & g</td></tr>

            <tr className='info'><th colSpan="2">Anchors</th></tr>
            <tr><td>^abc$</td><td>start / end of the string</td></tr>
            <tr><td>\b</td><td>word boundary</td></tr>

            <tr className='info'><th colSpan="2">Escaped characters</th></tr>
            <tr><td>\.  \*  \\</td><td>escaped special characters</td></tr>
            <tr><td>\t  \n  \r</td><td>tab, linefeed, carriage return</td></tr>
            <tr><td>\u00A9</td><td>unicode escaped &copy;</td></tr>

            <tr className='info'><th colSpan="2">Groups & Lookaround</th></tr>
            <tr><td>(abc)</td><td>capture group</td></tr>
            <tr><td>\1</td><td>backreference to group #1</td></tr>
            <tr><td>(?:abc)</td><td>non-capturing group</td></tr>
            <tr><td>(?=abc)</td><td>positive lookahead</td></tr>
            <tr><td>(?!abc)</td><td>negative lookahead</td></tr>

            <tr className='info'><th colSpan="2">Quantifiers & Alternation</th></tr>
            <tr><td>a*  a+  a?</td><td>0 or more, 1 or more, 0 or 1</td></tr>
            <tr><td>{'a{5} a{2, }'}</td><td>exactly five, two or more</td></tr>
            <tr><td>a{1,3}</td><td>between one & three</td></tr>
            <tr><td>{'a+? a{2,}?'}</td><td>match as few as possible</td></tr>
            <tr><td>ab|cd</td><td>match ab or cd</td></tr>

          </table>

        </div> 
      </div>
      )
  }
});

module.exports = TutorialView;