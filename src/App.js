import React, { Component } from 'react';
import {Todolist} from './todolist';
import {TodoForm} from './todoForm';



class App extends Component {
    constructor(){
        super();
        this.state={myTasks:[
           {text:"İlk görev",status:"passive"},
           {text:"Kitap oku",status:"passive"},
           {text:"Ders çalış",status:"passive"},
           {text:"Kodlama",status:"passive"}
        ]};
        this.addTask=this.addTask.bind(this);
        this.done=this.done.bind(this);
        this.remove=this.remove.bind(this);
    }
    
    addTask(val){
        let updatedList = this.state.myTasks;
        updatedList.push({text:val,status:"passive"});
        this.setState({myTasks: updatedList});
       
     
    }
    done(task_id){
        task_id=task_id.replace('task_','');
        let updatedList =this.state.myTasks;
        let newStatus='active';
        let currentStatus=updatedList[task_id].status;
        if(currentStatus==='active'){
            newStatus='passive';
        }
        updatedList[task_id].status=newStatus;
        this.setState=({myTasks: updatedList});
        
    }
    remove(task_id){
        task_id=task_id.replace('task_','');
        let updatedList =this.state.myTasks;
        updatedList.splice(task_id,1);
        this.setState({myTasks: updatedList});
    }
    render() {
       
        return (

          <div className="content">
           
            <TodoForm addTask={this.addTask} />
            <Todolist myTasks= {this.state.myTasks} done={this.done} remove={this.remove} />
                
            </div>
                 );
    }
} 
export default App;
