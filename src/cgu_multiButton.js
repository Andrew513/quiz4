// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
// import AlarmIcon from '@material-ui/icons/Alarm';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

// const changeText =(event) =>{
//     console.log(event.target)
//     event.target.innerText = event.target.innerText+"clicked"
// }
// const MultiButton=(num)=>{
//  var output=[];
//  for(let i=1;i<num+1;++i)
//     output.push(<button onClick={changeText}>The {i} Button</button>)
//     return output;
// }


const MultiButton=(event)=>{
    var output=[];
       output.push(<button onClick>I'm 18</button>)
       output.push(<button onClick>I'm not 18</button>)
       return output;
   }

   
export default MultiButton;