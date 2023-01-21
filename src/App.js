import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux'
import { fetchData, incrementId, decrementId, clearData, setData, customId } from './ducks/dataSlice'

const mapStateToProps = (state) => ({
  objectId: state.data.objectId 
})

function App(props) {
  const dispatch = useDispatch()
  const data = useSelector(state => state.data)

  useEffect(()=> {
    dispatch(fetchData())
  }, [props.objectId, dispatch])

  const renderImg = () => {
    if(data.apiData.primaryImage) {
      return <img style={{'width': '100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>Not found!</p>
    }
  }


  console.log(data)
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(fetchData())}>Thunk!</button>
        <button onClick={() => dispatch(clearData())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
      </div>
      <div>
        {data.objectId}
        {renderImg()}
      </div>
    </div>
  );
}
export default connect(mapStateToProps) (App)