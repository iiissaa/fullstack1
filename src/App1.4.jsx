const App = () => {
	const course = 'Half Stack application development'
	const parts = [
		{
		  name: 'Fundamentals of React',
		  exercises: 10
		},
		{
		  name: 'Using props to pass data',
		  exercises: 7
		},
		{
		  name: 'State of a component',
		  exercises: 14
		}
	]

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	)
};

const Header = (props) => {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	)
};

const Content = (props) => {
  const kiva = props.parts.map(function(okei) {
		return (
				<p> {okei.name}: {okei.exercises}</p>
		)
	})
	
	return kiva
};

  
  const Total = (props) => {
    
    var ok=0
    
    const lists = props.parts.map(function(okei) {
     
        

        ok = ok + okei.exercises
      })
    
        return (
            <p> {ok} </p>
        );
        };

    export default App
