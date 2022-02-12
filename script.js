let carArr=[
	{
		model:"ferrari1",
		number:"jh01-1234",
		capacity: 4,
		rent: 500
	},
	{
		model:"ferrari2",
		number:"jh01-1234",
		capacity: 4,
		rent: 500
	},
	{
		model:"ferrari3",
		number:"jh01-1234",
		capacity: 4,
		rent: 500
	},
	{
		model:"ferrari3",
		number:"jh01-1234",
		capacity: 4,
		rent: 500
	},
	{
		model:"ferrari4",
		number:"jh01-1234",
		capacity: 4,
		rent: 500
	},
	{
		model:"ferrari5",
		number:"jh01-1234",
		capacity: 4,
		rent: 500
	},
	{
		model:"ferrari6",
		number:"jh01-1234",
		capacity: 4,
		rent: 500
	},
	{
		model:"ferrari7",
		number:"jh01-1234",
		capacity: 4,
		rent: 500
	},
]

function addCar(ele){
  const list = document.getElementById("cardList");
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();	
  today = yyyy + '-' + mm + '-' + dd;
  let variable = '' + 
		'<div class="p-3 card">' + 
		'	<div class="d-flex">'+
		'    <div class="d-flex flex-column">' + 
		`        <h5 class="card-title">${ele.model}</h5>` + 
		`        <p class="card-text mb-0 mt-2">vehicle no. : ${ele.number}</p>` + 
		`        <p class="card-text mb-0 mt-2">rent/day : ${ele.rent}</p>` + 
		`        <p class="card-text mb-0 mt-2">capacity : ${ele.capacity}</p>` +
		'				 <p class="mb-0 mt-2">'+
		'		 				<label for="days">Book for </label>' + 
		'		 				<select  name="days" id="days" class="fitWidth rounded">' + 
		`		 				  ${[...Array(10)].map((_, i) => `<option value=${i+1}>${i+1}</option>`)}` + 
		'		 				</select>' +
		'						<span> days</span>'+ 
		'				 </p>'+
		'        <p class="mb-0 mt-2">'+
		'        		<label for="start-date">Start date:</label>'+
		`				<input type="date" id="start-date" name="start-date" value=${today} class="rounded-pill border px-2 fitWidth">`+
		'        </p>'+
		'    </div>' + 
		'    <div class="d-flex flex-column">' + 
		'        <img src="assets/image/car.png" class="car-img"/>' + 
		'        <a href="pages/login/login.html" class="sub-btn"><button class="btn btn-success sub-btn">Book now</button></a>' + 
		'    </div>' +
		'	</div>'+
		'</div>';

	list.innerHTML += variable;
}

carArr.map((ele)=> addCar(ele))