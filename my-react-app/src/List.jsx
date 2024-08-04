import PropTypes from 'prop-types';

function List(props){
     
    const category = props.category;
    const itemList = props.items;
   
    const listItems= itemList.map(itemList => <li key={itemList.id}>{itemList.name}: &nbsp;
        <b>{itemList.calories}</b> </li>);
         
    
    return(
    <>
    <h3 className="m-2 text-xl font-bold text-center border-2 bg-teal-500">{category}</h3>
    <ol className="m-2 text-lg text-center hover:bg-zinc-300 cursor-pointer">
  {listItems}
</ol>
    </>
    );
}
List.prototype ={
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                            name: PropTypes.string,
                            calories: PropTypes.number
    }))
}
List.defaultProps ={
    category : "category",
    items : []
}
export default List;