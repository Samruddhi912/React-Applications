import PropTypes from "prop-types";
function List2(props){
    const category=props.category;
    const itemlist=props.items;
    //itemlist.sort((a,b)=>b.name.localeCompare(a.name));
    itemlist.sort((a,b)=>a.calories-b.calories)
    const list=itemlist.map(item=><li>{item.name}:&nbsp;<b>{item.calories}</b></li>)

    return(
        <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{list}</ol>
        </>);

}
List2.propTypes={

    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,name:PropTypes.string,calories:PropTypes.number})),
}
List2.defaultProps={
    category:"Category",
    items:[],
}

export default List2