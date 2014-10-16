var customer_index = -1;

var  customers = [
			{
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
				"DOB":"16/08/1980",

				"properties" : [
						{
							"AlreadyOwn" : "N",
							"isExisting" : "E",
							"propAddress" : "Casa Nearshore, Shore 19, Sidi Maârouf, Casablanca",
							"propType" : "villa",
							"rooms" : ">4",
							"usage" : "rent",
							"liveableArea" : "210",
							"builtArea" : "250",
							"isEvaluated" : "Y",
							"evaluationSum" : "430,000"
						},
						{
							"AlreadyOwn" : "N",
							"isExisting" : "E",
							"propAddress" : "maarif , Casablanca",
							"propType" : "villa",
							"rooms" : ">4",
							"usage" : "rent",
							"liveableArea" : "210",
							"builtArea" : "250",
							"isEvaluated" : "Y",
							"evaluationSum" : "430,000"
						}

				]

			},
			{
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
				"DOB":"16/08/1990",
				"properties" : [
						{
							"AlreadyOwn" : "N",
							"isExisting" : "E",
							"propAddress" : "bd anfa ",
							"propType" : "villa",
							"rooms" : ">4",
							"usage" : "rent",
							"liveableArea" : "210",
							"builtArea" : "250",
							"isEvaluated" : "Y",
							"evaluationSum" : "430,000"
						},
						{
							"AlreadyOwn" : "N",
							"isExisting" : "E",
							"propAddress" : "bd mohamed V",
							"propType" : "villa",
							"rooms" : ">4",
							"usage" : "rent",
							"liveableArea" : "210",
							"builtArea" : "250",
							"isEvaluated" : "Y",
							"evaluationSum" : "430,000"
						} ]
			} 
];
	

function wlCommonInit () {
	/*
	 * Use of WL.Client.connect() API before any connectivity to a Worklight Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	
	$.mobile.linkBindingEnabled = true;
	$.mobile.ajaxEnabled = true;
	
	loadPage ("pages/splash-view.html");
	
	/* Navigation drawer menu */
	$(function () {
		$("nav#menu").mmenu ({
			dragOpen: true,
		    position: 'right',
		    direction: 'left'
		});
	});
	
	$("#homeAction").on ("click", function () {
		loadPage ("pages/customer-entry-view.html");
	});
	
	$("#notificationsAction").on ("click", function () {
		loadPage ("pages/notifications-list-view.html");
	});
	
	$("#mortgageAction").on ("click", function () {
		loadPage ("pages/mortgage-simulator-view.html");
	});
	
	$(".menu-profile").on ("click", function () {
		loadPage ("pages/employee-profile-view.html");
	});
}

function loadPage (url) {
	$("#pageContent").load(url, function () {
        $(this).enhanceWithin(); /* apply styles */
    });
} 

function  getUsers (){
	return  customers	;	
}