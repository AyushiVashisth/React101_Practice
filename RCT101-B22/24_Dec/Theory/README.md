# Theory 

# what is the difference between Props and State?
Ans :-              Props
   1) Props are read-only.
   2) Props are immutable.
   3) Props allow you to pass data from one component to other components as an argument.
   4) props can be accessed by the child component.
   5) Props are used to communicate between components.
   6) Stateless component can have Props.
   7) Props make components reusable.
              State
   1) State changes can be asynchronous.
   2) State is mutable.
   3) State holds information about the components.
   4) State cannot be accessed by child components.
   5) States can be used for rendering dynamic changes with the component.
   6) Stateless components cannot have State.
   7) State cannot make components reusable


# Explain the useState API?
Ans :- After you call the service, you'll save the data with the useState Hook and display the results in your component. By the end of this step, you'll be able to call web APIs using the Fetch method and the useEffect Hook. You'll also be able to save and display the results.

Is useState a method?
useState is a Hook (function) that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

# Explain the how map, filter, reduce work?
Ans :- map(), filter() and reduce() work in the same way: They each accept a function and a sequence of elements and return the result of applying the received function to each element in the sequence.
       * Map()=> Maps provide visual information about the world in a simple way that help the reader locate where they are and where they want to go. It features the scaled-down view of an area in readable patterns, including cities, streets and highways, locations, elevation and distances between places.
       * Filter()=> the process in which solid particles in a liquid or gaseous fluid are removed by the use of a filter medium that permits the fluid to pass through but retains the solid particles.
       * Reduce()=> The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

Example:-

function MyArray() {

  Object.defineProperty(this, 'length', {   
  
    value:0,
    
    enumable:false,
    
    writable:true,
    
  });
  
}

MyArray.prototype.push = function(elem) {

  this[this.length] = elem;
  
  this.length++;
  
  return this.length;

}

MyArray.prototype.pop = function() {

  this.length--;
  
  var popElem= this[this.length]
  
  delete this[this.length];
  
  return popElem;
  
}

var arr=new MyArray();

arr.push(100);

arr.push(200);

arr.push(300);

arr.pop();

MyArray.prototype.map = function(cb){

  var result=new MyArray();
  
  for(let index in this){
  
      if(this.hasOwnProperty(index)){
      
          result.push(cb(this[index]));
          
      }
      
  }
  
  return result;
  
}

var res=arr.map(function(val){

  console.log(val);
  
  return val*val;
  
});

MyArray.prototype.filter = function(cb){

  var result=new MyArray();
  
  for(let i=0;i<this.length;i++){
  
      if(this.hasOwnProperty(i)){
      
        const val=this[i];
        
        if(cb(val,i)){
        
          result.push(val);
          
        }
        
      }
      
  }
  
  return result;
  
}

export default MyArray;

# Create your own map, filter, reducer methods and attach it to an array using prototype chain 

function MyArray() {

  Object.defineProperty(this, 'length', {   
  
    value:0,
    
    enumable:false,
    
    writable:true,
    
  });
  
}

MyArray.prototype.push = function(elem) {

  this[this.length] = elem;
  
  this.length++;
  
  return this.length;

}

MyArray.prototype.pop = function() {

  this.length--;
  
  var popElem= this[this.length]
  
  delete this[this.length];
  
  return popElem;
  
}

var arr=new MyArray();

arr.push(100);

arr.push(200);

arr.push(300);

arr.pop();

MyArray.prototype.map = function(cb){

  var result=new MyArray();
  
  for(let index in this){
  
      if(this.hasOwnProperty(index)){
      
          result.push(cb(this[index]));
          
      }
      
  }
  
  return result;
  
}

var res=arr.map(function(val){

  console.log(val);
  
  return val*val;
  
});

MyArray.prototype.filter = function(cb){

  var result=new MyArray();
  
  for(let i=0;i<this.length;i++){
  
      if(this.hasOwnProperty(i)){
      
        const val=this[i];
        
        if(cb(val,i)){
        
          result.push(val);
          
        }
        
      }
      
  }
  
  return result;
  
}

export default MyArray;
