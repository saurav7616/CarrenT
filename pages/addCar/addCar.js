const carDetails=[
	{
		model: "vehicle1",
		number:"jh01-1234",
		rent: 500,
		capacity: 4,
	},
	{
		model: "vehicle2",
		number:"jh01-1234",
		rent: 500,
		capacity: 4,
	},
	{
		model: "vehicle3",
		number:"jh01-1234",
		rent: 500,
		capacity: 4,
	},
	{
		model: "vehicle4",
		number:"jh01-1234",
		rent: 500,
		capacity: 4,
	},
	{
		model: "vehicle5",
		number:"jh01-1234",
		rent: 500,
		capacity: 4,
	},
	{
		model: "vehicle6",
		number:"jh01-1234",
		rent: 500,
		capacity: 4,
	},
	{
		model: "vehicle7",
		number:"jh01-1234",
		rent: 500,
		capacity: 4,
	},
	{
		model: "vehicle8",
		number:"jh01-1234",
		rent: 500,
		capacity: 4,
	},
	{
		model: "vehicle9",
		number:"jh01-1234",
		rent: 500,
		capacity: 4,
	},
	{
		model: "vehicle10",
		number:"jh01-1234",
		rent: 500,
		capacity: 4,
	},
	{
		model: "vehicle11",
		number:"jh01-1234",
		rent: 500,
		capacity: 4,
	},
	{
		model: "vehicle12",
		number:"jh01-1234",
		rent: 500,
		capacity: 4,
	},
	{
		model: "vehicle13",
		number:"jh01-1234",
		rent: 500,
		capacity: 4,
	},
]

function carList(ele){
	const myCars= document.getElementById("carList");
  let card = '' + 
  	'<div class="card m-3">' + 
  	'    <div class="card-body">' + 
		'				<div class="d-flex">'+
  	'        <div class="d-flex flex-column" style="padding-right:1.5rem;">' + 
  	`            <h5 class="card-title mb-1">${ele.model}</h5>` + 
  	`            <p class="card-text mb-1">${ele.number}</p>` + 
  	`            <p class="card-text mb-1">rent/day : ${ele.rent}</p>` + 
  	`            <p class="card-text mb-1">capacity : ${ele.capacity}</p>` + 
  	'        </div>' + 
  	'        <div class="d-flex flex-column-reverse">' + 
  	'            <i class="fas fa-trash mb-1"></i>' + 
  	'            <i class="fas fa-edit mb-1"></i>' + 
  	'        </div>' + 
		'				</div>'+
  	'    </div>' + 
  	'</div>';
	myCars.innerHTML += card;
}

function addCar(){}

carDetails.map((ele)=> carList(ele));