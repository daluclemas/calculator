const btnNumber = Array.from(document.querySelectorAll('.btn-number'));

const btnOperation = Array.from(document.querySelectorAll('.btn-operation'));

const clearBtn = document.querySelector('.btn-clear');

const clearAll = document.querySelector('.btn-all-clear');

const prev = document.querySelector('.previous-output');

const current = document.querySelector('.current-output');

const equals = document.querySelector('.btn-equals');

const toggleBtn = document.querySelector('.toggle');




let currentValue = '';
let previousValue = '';
let operation = undefined;
let compute ;

// current.innerText = currentValue;
// prev.innerText = previousValue;


const clear = () =>{
    
	currentValue = '';
	previousValue = '';
	
	current.innerText = 0;
	prev.innerText = previousValue;

}



const display = (num) =>{


	if(num.innerText==='.' && currentValue.includes('.'))return;

	currentValue = currentValue.toString() + num.innerText.toString();

	current.innerText = currentValue;

}


const operate = (operator) =>{

	if(currentValue === '') return;

	operation = operator.innerText;
	// previousValue = currentValue.toString() + operation;

	previousValue = currentValue.toString();
	prev.innerText = previousValue + operation;
	currentValue = '';
	current.innerText = currentValue;

}


btnNumber.forEach((item)=>{
	item.addEventListener('click', (e)=>{
		display(e.target);

	})
});


btnOperation.forEach((item)=>{
	item.addEventListener('click', (e)=>{

		operate(e.target);
		

	})
});


clearAll.addEventListener('click', ()=>{
	clear()
});


equals.addEventListener('click', ()=>{

	const prevValue = Number(previousValue);
	const currentVal = Number(currentValue);

	

	if(isNaN(prevValue) || isNaN(currentVal) )return;

	switch(operation){
		case '+':
			compute = (prevValue  + currentVal).toPrecision(4);
			break;

		case '-':
			compute = (prevValue * 10 - currentVal *10) / 10;
			break;

		case '*':
			compute = (prevValue  * currentVal).toPrecision(4);
			break;

		case '/':
			compute = (prevValue  / currentVal).toPrecision(4);
			break;

		default:
			return;

	}

	prev.innerText = `${previousValue.toString()}${operation}${currentValue.toString()}` ;

	currentValue = parseFloat(compute).toPrecision();

	current.innerText = currentValue;



});

clearBtn.addEventListener('click',()=>{
	
	 currentValue = currentValue.slice(0,-1);

	 current.innerText = currentValue;

	 if(currentValue === ''){
		
			currentValue = prev.innerText;
			previousValue = '';
			prev.innerText = previousValue;
			current.innerText = currentValue;

	 }

	 
	 if(currentValue.length === 0){
		currentValue = '0';
		current.innerText = currentValue;
		return;
	}

	


});


// dark mode

toggleBtn.addEventListener('click',(e)=>{

	e.target.classList.toggle('active');

	document.querySelector('.spread').classList.toggle('active');

	document.querySelector('.toggleBtn').classList.toggle('active');

	document.querySelector('.calculator-container').classList.toggle('active');

	document.querySelector('.output-container').classList.toggle('active');

	document.querySelectorAll('.btn').forEach(item=>{
		item.classList.toggle('active');
	});

	document.querySelector('.btn-equals').classList.toggle('active');

	document.querySelector('.btn-clear').classList.toggle('active');

	document.querySelector('.btn-all-clear').classList.toggle('active');
	

});