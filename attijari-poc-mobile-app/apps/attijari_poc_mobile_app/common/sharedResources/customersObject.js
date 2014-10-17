var customers = [ {
	"id" : 0,
	"Title" : "Mr",
	"First_name" : "Rachid",
	"Last_name" : "Mahmoudi",
	"Nationality" : "Morrocan",
	"Email" : "az@gmail.com",
	"Mobile" : "(212)-6757657 676545",
	"Monthly_income" : "60000",
	"personal_loans" : "Yes",
	"MP_personal_loans" : "3000",
	"car_loans" : "Yes",
	"MP_car_loans" : "2000",
	"existing_mortgages" : "Yes",
	"MP_existing_mortgages" : "4000",
	"Existing_debit_card" : "Yes",
	"Existing_credit_card" : "No",
	"startDate" : "16/08/1980",

	"properties" : [ {
		"AlreadyOwn" : "New",
		"isExisting" : "Existing",
		"propAddress" : "Casa Nearshore, Shore 19, Sidi Maârouf, Casablanca",
		"propType" : "villa",
		"rooms" : ">4",
		"usage" : "rent",
		"liveableArea" : "210",
		"builtArea" : "250",
		"isEvaluated" : "Yes",
		"evaluationSum" : "430,000"
	}, {
		"AlreadyOwn" : "New",
		"isExisting" : "Existing",
		"propAddress" : "maarif , Casablanca",
		"propType" : "villa",
		"rooms" : ">4",
		"usage" : "rent",
		"liveableArea" : "210",
		"builtArea" : "250",
		"isEvaluated" : "Yes",
		"evaluationSum" : "430,000"
	}

	]

}, {
	"id" : 1,
	"Title" : "Mr",
	"First_name" : "houcine",
	"Last_name" : "maazouz",
	"Nationality" : "Morrocan",
	"Email" : "az@gmail.com",
	"Mobile" : "(212)-6757657 676545",
	"Monthly_income" : "60000",
	"personal_loans" : "Yes",
	"MP_personal_loans" : "3000",
	"car_loans" : "Yes",
	"MP_car_loans" : "2000",
	"existing_mortgages" : "Yes",
	"MP_existing_mortgages" : "4000",
	"Existing_debit_card" : "Yes",
	"Existing_credit_card" : "No",
	"startDate" : "16/08/1990",
	"properties" : [ {
		"AlreadyOwn" : "New",
		"isExisting" : "Existing",
		"propAddress" : "bd anfa ",
		"propType" : "villa",
		"rooms" : ">4",
		"usage" : "rent",
		"liveableArea" : "210",
		"builtArea" : "250",
		"isEvaluated" : "Yes",
		"evaluationSum" : "430,000"
	}, {
		"AlreadyOwn" : "New",
		"isExisting" : "Existing",
		"propAddress" : "bd mohamed V",
		"propType" : "villa",
		"rooms" : ">4",
		"usage" : "rent",
		"liveableArea" : "210",
		"builtArea" : "250",
		"isEvaluated" : "Yes",
		"evaluationSum" : "430,000"
	} ]
} ];

var property = {};
var customer = {};

function getCustomer(){
	return customer;
}

function getProperty() {
	return property;
}

function getCustomers() {
	return customers;
}