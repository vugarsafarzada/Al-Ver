import Content from './Content';

function Main(props){
    return (
        <div>
            <Content products={props.products} route={props.route} label="Ən yeni məhsullar"/>
        </div>
    )
}

export default Main;
