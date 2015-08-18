var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;

var SolutionView = React.createClass({
  mixins: [Navigation],

  getInitialState: function(){
    return {data:null}
  },

  componentDidMount: function() {
    var question = this.props.questions[this.props.params.qNumber - 1];
    var data = {
      "qNumber": question.qNumber,
    }
    $.ajax({
        url: window.location.origin + '/getSolutions',
        contentType:"application/json",
        dataType: 'json',
        type: 'POST',
        data: JSON.stringify(data),
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
  },


  returnToMenu: function() {
    this.props.goToQuestionMenu();
  },

  render: function() {
    var question = this.props.questions[this.props.params.qNumber - 1];
    // var solutions = this.state.data.map(function(solution) {
    //   return (
    //     <tr>
    //       <td><p>{solution.user}</p></td>
    //       <td><p>{solution.solution}</p></td>
    //       <td><p>Points:{solution.votes}</p></td>
    //     </tr>
    //   )
    // });
    if (this.state.data) {
      var solution = '';
      for(var i = 0 ; i < this.state.data.questionSolved.length;i++) {
        if (this.state.data.questionSolved[i].qNumber === question.qNumber) {
          solution = this.state.data.questionSolved[i].solution;
        }
      } 
      return (
        <div className="question-solve">
          <div className="row">

            <div className="col-sm-10">
              <h2>{question.title} <span className="points">Points: {question.points}</span></h2>
              <p>{question.description}</p>
            </div>
            <div className="col-sm-2">
              <Link to="default" className="btn btn-primary back">Back</Link>
            </div>

            <div className="col-sm-12">
              <h4>Your Solution:</h4>
              <p>{solution}</p>
              <h4>Other solutions:</h4>
              <table className="questionContainer table table-hover">
                <tbody>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    } else {
      return (<div>loading</div>)
    }
  }
});

module.exports = SolutionView;
