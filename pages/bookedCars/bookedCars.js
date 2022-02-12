let bookedCarList=[
	{
		model:'vehicle1',
		number:'jh01-1234',
		days: 3,
		start_date: '12-02-2022',
		cname: 'user1',
		cemail: 'abc@gmail.com'
	},
	{
		model:'vehicle2',
		number:'jh01-1234',
		days: 3,
		start_date: '12-02-2022',
		cname: 'user1',
		cemail: 'abc@gmail.com'
	},
	{
		model:'vehicle3',
		number:'jh01-1234',
		days: 3,
		start_date: '12-02-2022',
		cname: 'user1',
		cemail: 'abc@gmail.com'
	},
	{
		model:'vehicle4',
		number:'jh01-1234',
		days: 3,
		start_date: '12-02-2022',
		cname: 'user1',
		cemail: 'abc@gmail.com'
	},
	{
		model:'vehicle5',
		number:'jh01-1234',
		days: 3,
		start_date: '12-02-2022',
		cname: 'user1',
		cemail: 'abc@gmail.com'
	},
	{
		model:'vehicle6',
		number:'jh01-1234',
		days: 3,
		start_date: '12-02-2022',
		cname: 'user1',
		cemail: 'abc@gmail.com'
	},
	{
		model:'vehicle7',
		number:'jh01-1234',
		days: 3,
		start_date: '12-02-2022',
		cname: 'user1',
		cemail: 'abc@gmail.com'
	},
	{
		model:'vehicle8',
		number:'jh01-1234',
		days: 3,
		start_date: '12-02-2022',
		cname: 'user1',
		cemail: 'abc@gmail.com'
	},
	{
		model:'vehicle9',
		number:'jh01-1234',
		days: 3,
		start_date: '12-02-2022',
		cname: 'user1',
		cemail: 'abc@gmail.com'
	},
	{
		model:'vehicle10',
		number:'jh01-1234',
		days: 3,
		start_date: '12-02-2022',
		cname: 'user1',
		cemail: 'abc@gmail.com'
	},
	{
		model:'vehicle11',
		number:'jh01-1234',
		days: 3,
		start_date: '12-02-2022',
		cname: 'user1',
		cemail: 'abc@gmail.com'
	}
]

function addBookedCar(ele){
	const carList = document.getElementById("carList");
	var car = '' + 
		'<div class="card m-3">' + 
		'  <div class="card-body">' + 
		`  	<h5 class="card-title">${ele.model}</h5>` + 
		'  	<div class="d-flex justify-content-between">' + 
		'  		<div class="d-flex flex-column align-items-start">' + 
		`  			<p class="mb-1">${ele.number}</p>` + 
		`  			<p class="mb-1">booked for ${ele.days} days</p>` + 
		`  			<p class="mb-1">from : ${ele.start_date}</p>` + 
		'  		</div>' + 
		'  		<div class="d-flex flex-column align-items-end">' + 
		`  			<p class="mb-1">customer details:</p>` + 
		`  			<p class="mb-1">${ele.cname}</p>` + 
		`  			<p class="mb-1">${ele.cemail}</p>` + 
		'  		</div>' + 
		'  	</div>' + 
		'  </div>' + 
		'</div>';
	carList.innerHTML += car;
}

bookedCarList.map((ele) => addBookedCar(ele))