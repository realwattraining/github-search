import React from 'react';
import './styles.scss'

const ItemList = ({item}) => (
    <li key = {item.id}>
        <div className="item-img">
                <a className="waves-effect" href="#">
                    <img className="grow" src= {item.owner.avatar_url}></img>
                </a>
                <a className={"item-name "+ item.language}>
                    <span>{item.full_name}</span>(
                    <span>{item.language}</span>)                    
                </a>
                <div className="item-button-panel">
                    <a className="waves-effect counter" href="#">
                        <i className="fap fap-star">
                            <span>{item.stargazers_count}</span>
                        </i>
                    </a>
                    <a className="waves-effect counter" href="#">
                        <i className="fap fap-watch">
                            <span>{item.watchers_count}</span>
                        </i>
                    </a>
                    <a className="waves-effect counter" href="#">
                        <i className="fap fap-fork">
                            <span>{item.forks_count}</span>
                        </i>
                    </a>
                </div>
            </div>
        <div className={"item-description " + item.language}>{item.description}</div>
    </li>
);

export default ItemList;