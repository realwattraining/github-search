import React from 'react';
import './styles.scss'
import axios from 'axios';
import ItemList from '../../containers/ItemList'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items : [],
            error: false,
            search: "javascript",
            timeout: 0
        }
    }
    callApi (value){
        const url = 'https://api.github.com/search/repositories?q=' + value ;
        axios.get(url)
            .then((res) =>{
                this.setState({
                    items: res.data.items
                })
            })
            .catch((error) => {
                this.setState({
                    error: true
                })
            });
    }
    componentDidMount(){
        this.callApi (this.state.search);
    }

    handleChange(query) {
        var search = query.target.value;
        this.setState({
            search: query.target.value
        });
        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(()=>{
            this.callApi(this.state.search);
        } , 500);
        
    }

    renderItems() {
        if(!this.state.error){
            let result = this.state.items;
            return result.map((item) => (
            <ItemList key={item.url} item={item} />
            ));
        }
        
      }
    render(){
        return(
            <div>
                <div className='header'>Github Search: 
                    <div className='header-title'>
                    </div>
                    <div className="searchpanel">
                        <div className="searchwrap">
                            <div className="search">
                                <input type="text" placeholder="Search in Github"  onChange={event => this.handleChange(event)} value={this.state.search} ></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className="itemlist">
                        {this.renderItems()}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Header;