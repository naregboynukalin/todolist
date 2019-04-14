import React from 'react';

export class Todolist extends React.Component{
    constructor(){
        super();
        this.remove = this.remove.bind(this);
        this.done = this.done.bind(this);
        this.changeList = this.changeList.bind(this);
        this.state = {activeList:'All'};
    }

    
    remove(e){
        this.props.remove(e.target.parentNode.id);
    }


     
    done(e){
        this.props.done(e.target.parentNode.id);
    }

    
    changeList(e){
        var listChanger = document.getElementById('listChanger');
        var li = listChanger.querySelectorAll('li');
        for (let i=0; i<li.length; i++){
            li[i].classList.remove('active');
        }
        var activeLi = e.target.parentNode;
        activeLi.classList.add('active');
        this.setState({activeList : activeLi.innerText});
    }

    render(){
        let items_left = 0;
        const items = this.props.myTasks.map((elem,i) =>{
            let task_id = 'task_'+i;
            if (
                this.state.activeList==='All' ||
                (this.state.activeList==='Active' && elem.status==='passive') ||
                (this.state.activeList==='Completed' && elem.status==='active')
            ){
                if (elem.status==='passive'){items_left++;}
                return(
                    <li key={i} id={task_id} className={elem.status}>
                        <span className="id">{i+1}</span>
                        <span className="title">{elem.text}</span>
                        <span className="type" onClick={this.done} />
                        <span className="delete" onClick={this.remove}></span>
                    </li>

                )
            }
        });
    return(
        <div>
            <div className="todo-list type1">
                <ul>
                    {items}
                </ul>
            </div>
            <div className="todo-filter type1">
                <div className="left">
                    <span><b>{items_left}</b> items left</span>
                </div>
                <div className="right" id="listChanger">
                    <ul>
                        <li className="active" onClick={this.changeList}><span>All</span></li>
                        <li><span onClick={this.changeList}>Active</span></li>
                        <li><span onClick={this.changeList}>Completed</span></li>
                    </ul>
                </div>
            </div>
        </div>
        );
}
}