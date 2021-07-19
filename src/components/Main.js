import Content from './Content';

function Main(props){
    return (
        <div>
            <Content products={props.products} route={props.route}/>
        </div>
    )
}

export default Main;
