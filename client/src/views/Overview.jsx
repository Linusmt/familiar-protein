var React = require('react');

var Router = require('react-router');
var Link = Router.Link;

var OverView = React.createClass({
  render: function() {
    var questions = this.props.questions.map(function(question) {
      return (
        <tr key={question.qNumber} className="question">
          <td><b>{question.title}</b></td>
          <td><p>{question.description}</p></td>
          <td><Link to="question" params={{qNumber:question.qNumber}} className="btn btn-primary">Solve</Link></td>
        </tr>
      )
    });

    return (
      <div id='page-content-wrapper'>
        <div className='container-fluid'>
          <h2>Regex Puzzles</h2>
          <table className="questionContainer table table-hover">
            <tbody>
              {questions}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

module.exports = OverView;